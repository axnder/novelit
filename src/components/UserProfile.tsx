import React from 'react';
import type { User } from '../types/user';

interface UserProfileProps {
  user: User;
}

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg mb-6 flex flex-col items-center border border-gray-200">
      <img
        src={user.picture.large}
        alt="Foto de Perfil"
        className="w-40 h-40 rounded-full object-cover mb-6 border-4 border-novelit-blue shadow-md"
      />
      <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
        {user.name.first} {user.name.last}
      </h2>
      <p className="text-gray-600 mb-1 text-center text-md">
        Email: {user.email}
      </p>
      <p className="text-gray-600 mb-1 text-center text-md">
        Telefone: {user.phone}
      </p>
      <p className="text-gray-600 mb-1 text-center text-md">
        Idade: {user.dob.age} anos
      </p>
      <p className="text-gray-600 text-center text-md">
        Localização: {user.location.city}, {user.location.state},{' '}
        {user.location.country}
      </p>
      {}
      <button className="mt-6 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-6 rounded-lg transition duration-200">
        Editar Perfil
      </button>
    </div>
  );
};

export default UserProfile;
