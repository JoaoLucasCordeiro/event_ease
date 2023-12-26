# EventEase - plataforma de eventos 🗓

## Introdução 👾
Projeto EventEase, plataforma de gestão de eventos full-stack feito em Next JS que busca levar ao usuário facilidade e praticidade tanto para criar e fazer a gestão de entradas em um determinado evento quanto facilidade na compra ou garantir sua participação em algum evento.

## Tecnologias utilizadas 👨‍💻
- Node.js
- Next.js
- TypeScript
- TailwindCSS
- Stripe
- Zod
- React Hook Form
- Shadcn
- uploadthing

## Features do projeto 🦉

🚩 Autenticação (CRUD) com Clerk: Gerenciamento de usuários por meio do Clerk, garantindo uma autenticação segura e eficiente.

🚩 Criar Eventos: Os usuários podem criar facilmente novos eventos, fornecendo detalhes essenciais como título, data, localização e informações adicionais.
Ler Eventos: Acesso fácil a uma visão detalhada de todos os eventos, permitindo que os usuários explorem especificidades do evento, incluindo descrições, horários e informações relacionadas.

🚩 Atualizar Eventos: Capacitando os usuários a modificar dinamicamente os detalhes do evento, garantindo que as informações do evento permaneçam precisas e atualizadas.
Excluir Eventos: Um processo direto para remover eventos do sistema, dando aos administradores a capacidade de gerenciar e organizar a plataforma de forma eficaz.

🚩 Eventos (CRUD): Funcionalidade abrangente para criar, ler, atualizar e excluir eventos, proporcionando aos usuários total controle sobre o gerenciamento de eventos.
 Eventos Relacionados: Conecta inteligentemente eventos relacionados e os exibe na página de detalhes do evento, tornando-a mais envolvente para os usuários.

🚩 Eventos Organizados: Organização eficiente de eventos, garantindo uma exibição estruturada e amigável ao usuário, ou seja, mostrando eventos criados pelo usuário no perfil do usuário.

🚩 Pesquisa e Filtro: Capacitação dos usuários com um sistema robusto de pesquisa e filtro, permitindo que eles encontrem facilmente os eventos que correspondem às suas preferências.

🚩 Nova Categoria: Categorização dinâmica permite a adição contínua de novas categorias de eventos, mantendo sua plataforma adaptável.

🚩 Checkout e Pagamento com Stripe: Transações de pagamento suaves e seguras usando o Stripe, aprimorando a experiência do usuário durante o processo de checkout.

🚩 Pedidos de Eventos: Sistema abrangente de gerenciamento de pedidos, fornecendo uma visão clara de todas as transações relacionadas a eventos.

🚩 Pesquisa de Pedidos: Funcionalidade rápida e eficiente de pesquisa para pedidos, facilitando o rastreamento e gerenciamento.

# Rodando o projeto em sua máquina 🚀

Siga essas etapas para configurar o projeto localmente em sua máquina.

Pré-requisitos

Certifique-se de ter os seguintes itens instalados em sua máquina:


````
Git
Node.js
npm (Gerenciador de Pacotes do Node)
````

Clonando o Repositório

````
git clone https://github.com/seu-nome-de-usuário/seu-projeto.git
cd seu-projeto
````

Instalação

Instale as dependências do projeto usando o npm:

````
npm install
````

Configuração de Variáveis de Ambiente

Crie um novo arquivo chamado .env na raiz do seu projeto e adicione o seguinte conteúdo:

````
#NEXT
NEXT_PUBLIC_SERVER_URL=

#CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_CLERK_WEBHOOK_SECRET=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

#MONGODB
MONGODB_URI=

#UPLOADTHING
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=

#STRIPE
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
````

Substitua os valores em branco pelos seus dados reais.

Executando o Projeto

````
npm run dev
````
