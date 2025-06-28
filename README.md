# novel.it

Este projeto é um teste técnico desenvolvido para a Knex Empresa Júnior de Computação, focado em demonstrar conhecimentos em desenvolvimento Frontend com React, TypeScript e Tailwind CSS. A aplicação simula uma plataforma de rede social onde um usuário "logado" pode gerenciar posts.

## Avaliação

Este projeto aborda a implementação de formulários, tratamento de dados de APIs externas, validações em tempo real e boas práticas de programação.

## Funcionalidades Implementadas

* **CRUD de Posts:**
    * **Criação (CREATE):** Formulário dedicado para criar novos posts.
    * **Leitura (READ):** Exibição de posts obtidos da API JSONPlaceholder.
    * **Atualização (UPDATE):** Edição de posts existentes através do formulário.
    * **Exclusão (DELETE):** Remoção de posts da lista.
* **Gestão de Usuário:**
    * Exibição de informações de um usuário "logado" (Nome completo, Foto de perfil, Email, Telefone, Idade, Localização) obtidas da API RandomUser.
    * Geração e armazenamento de um token SHA256 do usuário em Cookies para simular persistência (o usuário é atualizado a cada reload, conforme o requisito da API RandomUser).
* **Estilização:**
    * Design moderno e coeso, utilizando Tailwind CSS.
    * Header com logo "Novel.it" customizado (cor e fonte).
    * Fundo da tela com degradê personalizado.
* **Validações:**
    * Validação de formulários em tempo real com feedback visual claro (usando React Hook Form e Zod).
* **Feedback ao Usuário:**
    * Confirmação de envios e operações de CRUD com mensagens (toasts).
    * Tratamento de estados de carregamento e erros nas requisições de API.
* **Código Limpo:**
    * Uso de TypeScript para tipagem de dados.
    * Componentização adequada.
    * Configuração de ESLint e Prettier para padrões de código e formatação.

## Pré-requisitos

Certifique-se de que você possui o seguinte software instalado em seu computador:

* **Node.js (versão LTS recomendada):** Inclui o `npm` (Node Package Manager).
    * Baixe e instale em [https://nodejs.org/](https://nodejs.org/).
    * **Importante:** Durante a instalação, selecione a opção "Add to PATH".
    * Após a instalação, **reinicie seu computador**.
* **Git:** Para clonar o repositório.
    * Baixe e instale em [https://git-scm.com/downloads](https://git-scm.com/downloads/).
    * **Importante:** Durante a instalação, selecione a opção "Git from the command line and also from 3rd-party software" no passo "Adjusting your PATH environment". Se o Git não for reconhecido, você pode precisar adicioná-lo ao PATH manualmente ([`C:\Program Files\Git\cmd` e `C:\Program Files\Git\bin`](https://git-scm.com/downloads)). Após qualquer ajuste no PATH, **reinicie seu computador**.

## Configuração do Ambiente (Windows PowerShell)

Se você estiver usando Windows e encontrar o erro "não reconhecido como um comando interno" para `npm` ou `npx` (após a instalação do Node.js), ou `git` (após a instalação do Git), siga estes passos:

1.  **Abra o PowerShell como Administrador:**
    * Clique com o botão direito do mouse no botão "Iniciar" do Windows.
    * Selecione "Windows PowerShell (Admin)" ou "Terminal (Admin)".
2.  **Defina a Política de Execução:**
    * No PowerShell de Administrador, execute:
        ```powershell
        Set-ExecutionPolicy RemoteSigned
        ```
    * Digite `S` (Sim) e pressione Enter.
3.  **Feche e reabra qualquer terminal** após esta alteração.

## Como Rodar o Projeto

Siga estas instruções para clonar o repositório, instalar as dependências e iniciar a aplicação.

1.  **Clone o Repositório:**
    Abra seu terminal (Prompt de Comando, PowerShell ou Terminal do VS Code) em uma pasta de sua escolha (ex: `C:\Projetos`).
    ```bash
    git clone [https://github.com/axnder/novelit.git](https://github.com/axnder/novelit.git)
    ```
    *O repositório é público e pode ser acessado em
