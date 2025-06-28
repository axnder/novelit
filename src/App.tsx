import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import sha256 from "crypto-js/sha256";
import { toast, Toaster } from "react-hot-toast";

import Header from "./components/Header";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";
import PostCard from "./components/PostCard";
import PostForm from "./components/PostForm";

import type { User, RandomUserApiResponse } from "./types/user";
import type { Post, PostFormData } from "./types/post";

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const fetchUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get<RandomUserApiResponse>(
        "https://randomuser.me/api/?nat=br"
      );
      const user = response.data.results[0];
      setCurrentUser(user);

      const token = sha256(user.login.uuid).toString();
      Cookies.set("userAuthToken", token, {
        expires: 7,
        secure: true,
        sameSite: "Lax",
      });
      toast.success("Perfil do usuário atualizado!");
    } catch (err) {
      console.error("Erro ao buscar usuário:", err);
      setError("Erro ao carregar perfil do usuário.");
      toast.error("Erro ao carregar perfil do usuário.");
    } finally {
      setLoading(false);
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get<Post[]>(
        "https://jsonplaceholder.typicode.com/posts?_limit=15"
      ); // Aumentei o limite
      setPosts(response.data);
      toast.success("Posts carregados!");
    } catch (err) {
      console.error("Erro ao buscar posts:", err);
      setError("Erro ao carregar posts.");
      toast.error("Erro ao carregar posts.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchPosts();
  }, []);

  const handleCreateOrUpdatePost = async (formData: PostFormData) => {
    try {
      setLoading(true);
      if (editingPost) {
        const response = await axios.put<Post>(
          `https://jsonplaceholder.typicode.com/posts/${editingPost.id}`,
          {
            id: editingPost.id,
            userId: editingPost.userId,
            title: formData.title,
            body: formData.body,
          }
        );
        setPosts(
          posts.map((p) => (p.id === editingPost.id ? response.data : p))
        );
        setEditingPost(null);
        toast.success("Post atualizado com sucesso!");
      } else {
        const response = await axios.post<Post>(
          "https://jsonplaceholder.typicode.com/posts",
          {
            title: formData.title,
            body: formData.body,
            userId: 1,
          }
        );
        setPosts([response.data, ...posts]);
        toast.success("Post criado com sucesso!");
      }
    } catch (err) {
      console.error("Erro ao salvar post:", err);
      setError("Erro ao salvar post.");
      toast.error("Erro ao salvar post.");
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: number) => {
    if (window.confirm("Tem certeza que deseja excluir este post?")) {
      try {
        setLoading(true);
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setPosts(posts.filter((post) => post.id !== id));
        toast.success("Post excluído com sucesso!");
      } catch (err) {
        console.error("Erro ao excluir post:", err);
        setError("Erro ao excluir post.");
        toast.error("Erro ao excluir post.");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleEditClick = (post: Post) => {
    setEditingPost(post);
  };

  const handleCancelEdit = () => {
    setEditingPost(null);
  };

  if (loading && !currentUser && posts.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-novelit-blue to-white text-gray-800">
        <p className="text-xl text-gray-700">Carregando dados...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-100 text-red-700">
        <p className="text-xl">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-novelit-blue to-white flex flex-col font-sans">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            {currentUser && <UserProfile user={currentUser} />}
          </div>

          <div className="md:col-span-2">
            <PostForm
              onSubmit={handleCreateOrUpdatePost}
              currentPost={editingPost}
              onCancel={handleCancelEdit}
            />

            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-2 border-gray-300 pb-2">
              Posts Recentes
            </h2>
            {posts.length > 0 && currentUser ? (
              posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  currentUser={currentUser}
                  onEdit={handleEditClick}
                  onDelete={handleDeletePost}
                />
              ))
            ) : (
              <p className="text-gray-600 text-center py-8">
                Nenhum post disponível. Crie um novo!
              </p>
            )}
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
