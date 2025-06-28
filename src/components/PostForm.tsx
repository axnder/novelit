import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import type { Post, PostFormData } from '../types/post';

interface PostFormProps {
  onSubmit: (data: PostFormData) => void;
  currentPost?: Post | null;
  onCancel: () => void;
}

const postSchema = z.object({
  title: z
    .string()
    .min(5, 'O título deve ter no mínimo 5 caracteres.')
    .max(100, 'O título deve ter no máximo 100 caracteres.'),
  body: z
    .string()
    .min(10, 'O corpo do post deve ter no mínimo 10 caracteres.')
    .max(500, 'O corpo do post deve ter no máximo 500 caracteres.'),
});

const PostForm: React.FC<PostFormProps> = ({
  onSubmit,
  currentPost,
  onCancel,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostFormData>({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      body: '',
    },
  });

  useEffect(() => {
    if (currentPost) {
      reset({
        title: currentPost.title,
        body: currentPost.body,
      });
    } else {
      reset({
        title: '',
        body: '',
      });
    }
  }, [currentPost, reset]);

  const handleFormSubmit = (data: PostFormData) => {
    onSubmit(data);
    reset();
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg mb-6 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        {currentPost ? 'Editar Post' : 'Criar Novo Post'}
      </h2>
      <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Título
          </label>
          <input
            id="title"
            {...register('title')}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-novelit-blue focus:border-novelit-blue outline-none"
            placeholder="Digite o título do seu post..."
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="body"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Corpo do Post
          </label>
          <textarea
            id="body"
            {...register('body')}
            rows={6}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-3 focus:ring-novelit-blue focus:border-novelit-blue outline-none resize-y"
            placeholder="O que você está pensando hoje?"
          ></textarea>
          {errors.body && (
            <p className="text-red-500 text-sm mt-1">{errors.body.message}</p>
          )}
        </div>
        <div className="flex justify-end space-x-2">
          {currentPost && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-400 hover:bg-gray-500 text-white px-5 py-2 rounded-lg transition duration-200 text-sm font-medium"
            >
              Cancelar
            </button>
          )}
          <button
            type="submit"
            className="bg-novelit-blue hover:bg-blue-800 text-white px-5 py-2 rounded-lg transition duration-200 text-sm font-medium"
          >
            {currentPost ? 'Salvar Edição' : 'Publicar Post'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm;
