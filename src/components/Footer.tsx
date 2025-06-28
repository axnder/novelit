import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-4 text-center mt-8 text-sm">
      <p>
        &copy; {new Date().getFullYear()} Novel.it Social Platform. Todos os
        direitos reservados.
      </p>
      <p className="mt-1">Desenvolvido pela KNEX e Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;
