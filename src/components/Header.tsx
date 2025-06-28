import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md border-b border-gray-200">
      <div className="text-4xl font-extrabold font-montserrat text-novelit-blue">
        novel.it
      </div>
      <nav>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a
              href="#"
              className="hover:text-novelit-blue transition-colors duration-200"
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-novelit-blue transition-colors duration-200"
            >
              Amigos
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-novelit-blue transition-colors duration-200"
            >
              Notificações
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-novelit-blue transition-colors duration-200"
            >
              Perfil
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
