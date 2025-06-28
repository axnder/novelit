import React from 'react';
import type { Post } from '../types/post';
import type { User } from '../types/user';

interface PostCardProps {
  post: Post;
  currentUser: User;
  onEdit: (post: Post) => void;
  onDelete: (id: number) => void;
}

const PostCard: React.FC<PostCardProps> = ({
  post,
  currentUser,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-5 border border-gray-200">
      <div className="flex items-center mb-4">
        <img
          src={currentUser.picture.thumbnail}
          alt="Avatar do Post"
          className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-gray-300"
        />
        <div>
          <p className="font-semibold text-gray-800 text-lg">
            {currentUser.name.first} {currentUser.name.last}
          </p>
          <p className="text-sm text-gray-500">
            {currentUser.location.city}, {currentUser.location.country}
          </p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
        {post.title}
      </h3>
      <p className="text-gray-700 mb-4 text-base leading-relaxed">
        {post.body}
      </p>
      <div className="flex justify-end space-x-2">
        <button
          onClick={() => onEdit(post)}
          className="bg-novelit-blue hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition duration-200 text-sm font-medium"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(post.id)}
          className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-200 text-sm font-medium"
        >
          Excluir
        </button>
      </div>
    </div>
  );
};

export default PostCard;
