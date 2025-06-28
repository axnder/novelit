# KNEX Social App

Este é um projeto Frontend com React, TypeScript e Tailwind CSS, desenvolvido para a Knex Empresa Júnior de Computação. Simula uma rede social para gerenciar posts.

## Funcionalidades Principais

* **CRUD de Posts:** Criação, leitura, edição e exclusão de posts.
* **Gestão de Usuário:** Exibição de perfil e token em Cookies.
* **Estilização:** Design moderno com Tailwind CSS, incluindo degradê e fontes customizadas.
* **Validações:** Formulários com validação em tempo real (React Hook Form e Zod).
* **Feedback:** Mensagens de sucesso/erro para operações de API.

## Pré-requisitos

* **Node.js (LTS):** Inclui `npm`. Baixe e instale em [https://nodejs.org/](https://nodejs.org/).
    * **Importante:** Marque "Add to PATH" durante a instalação. **Reinicie seu PC**.
* **Git:** Baixe e instale em [https://git-scm.com/downloads/](https://git-scm.com/downloads/).
    * **Importante:** Selecione "Git from the command line and also from 3rd-party software". **Reinicie seu PC**.

## Configuração do Ambiente (Windows PowerShell)

Para erros como "não reconhecido como um comando interno", configure a política de execução:

1.  **Abra o PowerShell como Administrador**.
2.  Execute: `Set-ExecutionPolicy RemoteSigned`. Digite `S` e Enter.
3.  **Feche e reabra o terminal**.

## Como Rodar o Projeto

1.  **Clone o Repositório:**
    Abra seu terminal em uma pasta (ex: `C:\Projetos`).
    ```bash
    git clone [https://github.com/axnder/novelit.git](https://github.com/axnder/novelit.git)
    ```
    *O repositório está em [https://github.com/axnder/novelit.git](https://github.com/axnder/novelit.git).*

2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd novelit-app
    ```

3.  **Instale as Dependências:**
    ```bash
    npm install
    ```
    *Para erros de dependência (`ERESOLVE`), tente: `npm install --legacy-peer-deps`*.

4.  **Inicie a Aplicação:**
    ```bash
    npm run dev
    ```
    *O terminal mostrará a URL local: `http://localhost:5173/`*.

5.  **Acesse a Aplicação no Navegador:**
    * Abra seu navegador (Chrome/Firefox recomendado).
    * Abra uma aba anônima/privada (`Ctrl + Shift + N` ou `P`).
    * Digite: `http://localhost:5173/`.
   
## APIs Utilizadas

* **RandomUser API:** [https://randomuser.me/documentation](https://randomuser.me/documentation).
* **JSONPlaceholder API:** [https://jsonplaceholder.typicode.com/guide/](https://jsonplaceholder.typicode.com/guide/).

## Contato

Dúvidas? Consulte a documentação das APIs ou o edital.
