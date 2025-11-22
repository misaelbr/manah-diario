# Manah Diário 📖✨

**Manah Diário** é uma aplicação web interativa que simula uma "Caixinha de Promessas" virtual. O projeto oferece uma experiência visual imersiva e moderna para o sorteio diário de versículos bíblicos, permitindo que os usuários recebam uma palavra de conforto e esperança e a compartilhem facilmente com amigos e familiares.

![Manah Diário Preview](/public/card.png)

## 🚀 Funcionalidades

-   **Caixinha de Promessas 3D**: Uma representação visual interativa de uma caixinha de promessas, com animações fluidas e perspectiva 3D.
-   **Sorteio Aleatório**: Seleção randômica de versículos baseada na Bíblia King James Atualizada (KJA).
-   **Design Moderno**: Interface limpa, tema escuro (Dark Mode) e tipografia elegante, inspirada em designs futuristas.
-   **Compartilhamento Inteligente**:
    -   Integração direta com WhatsApp.
    -   Geração dinâmica de imagens (Open Graph) para pré-visualização rica em redes sociais.
    -   Links profundos (Deep Linking) que levam o usuário diretamente para o versículo compartilhado.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais recentes do ecossistema React:

-   **[Next.js 16](https://nextjs.org/)**: Framework React para produção, utilizando App Router e Server Components.
-   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca poderosa para animações complexas, utilizada para criar o efeito de retirada dos cards, o flip 3D e a interatividade da caixinha.
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
-   **[Next/OG](https://vercel.com/docs/functions/edge-functions/og-image-generation)**: Geração de imagens dinâmicas no servidor para compartilhamento social.

## 🎲 Como Funciona o Sorteio

O coração da aplicação reside na lógica de seleção dos versículos:

1.  **Base de Dados**: O projeto utiliza um arquivo JSON (`src/KJA.json`) contendo a estrutura completa da Bíblia (Livros, Capítulos e Versículos) na versão King James Atualizada.
2.  **Algoritmo de Seleção**:
    -   Ao clicar na caixinha, o sistema seleciona aleatoriamente um **Livro** da lista.
    -   Dentro desse livro, um **Capítulo** é sorteado.
    -   Por fim, um **Versículo** específico é escolhido dentro do capítulo.
3.  **Exibição**: O versículo é renderizado em um "card" virtual com cores variadas (tons pastéis e vibrantes) para tornar a experiência visualmente agradável.

## 📦 Instalação e Execução

Para rodar o projeto localmente:

1.  Clone o repositório:
    ```bash
    git clone https://github.com/misaelbr/manah-diario.git
    ```

2.  Instale as dependências:
    ```bash
    pnpm install
    # ou
    npm install
    ```

3.  Execute o servidor de desenvolvimento:
    ```bash
    pnpm dev
    # ou
    npm run dev
    ```

4.  Abra [http://localhost:3000](http://localhost:3000) no seu navegador.

## 📱 Compartilhamento e SEO

O projeto foi otimizado para SEO e compartilhamento social:

-   **Meta Tags Dinâmicas**: Cada versículo compartilhado gera meta tags específicas.
-   **OG Image Generation**: Uma rota de API (`/api/og`) cria imagens em tempo real contendo o texto do versículo e a referência bíblica, garantindo que o link compartilhado no WhatsApp, Twitter ou Facebook tenha uma aparência profissional e atraente.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir ou utilizar como base para seus próprios projetos.

---

Feito com ❤️ por [Misael](https://github.com/misaelbr)
