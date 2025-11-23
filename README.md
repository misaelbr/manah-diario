# Manah Diário 📖✨

**Manah Diário** é uma aplicação web interativa que simula uma "Caixinha de Promessas" virtual. O projeto oferece uma experiência visual imersiva e moderna para o sorteio diário de versículos bíblicos, permitindo que os usuários recebam uma palavra de conforto e esperança e a compartilhem facilmente com amigos e familiares.

![Manah Diário Preview](/public/card.png)

## 🚀 Funcionalidades

-   **Caixinha de Promessas 3D**: Uma representação visual interativa de uma caixinha de promessas, com animações fluidas e perspectiva 3D.
-   **Curadoria de Promessas**: Seleção de versículos especialmente curados para trazer conforto e esperança, baseados na Bíblia King James Atualizada (KJA).
-   **Design Moderno e Imersivo**:
    -   Interface limpa com tema escuro (Dark Mode).
    -   Fundo animado com grid e partículas flutuantes.
    -   Tipografia elegante ("Playpen Sans") para melhor legibilidade.
-   **Compartilhamento Avançado**:
    -   **Instagram & Stories**: Exportação do card como imagem (PNG) otimizada para redes sociais (formato quadrado, sem bordas arredondadas).
    -   **WhatsApp**: Compartilhamento direto com link e texto formatado.
    -   **Nativo (Mobile)**: Integração com a API de compartilhamento nativo do dispositivo (`navigator.share`).
    -   **Ajuste Inteligente**: Redimensionamento automático da fonte na imagem gerada para evitar cortes em versículos longos.

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais recentes do ecossistema React:

-   **[Next.js 16](https://nextjs.org/)**: Framework React para produção, utilizando App Router e Server Components.
-   **[React 19](https://react.dev/)**: Biblioteca JavaScript para construção de interfaces de usuário.
-   **[Framer Motion](https://www.framer.com/motion/)**: Biblioteca poderosa para animações complexas (cards, flip 3D, partículas).
-   **[Tailwind CSS](https://tailwindcss.com/)**: Framework CSS utilitário para estilização rápida e responsiva.
-   **[html2canvas](https://html2canvas.hertzen.com/)**: Conversão de elementos DOM em imagens para download/compartilhamento.
-   **[Lucide React](https://lucide.dev/)**: Biblioteca de ícones leve e consistente.
-   **[Google Analytics](https://analytics.google.com/)**: Monitoramento de engajamento (downloads e compartilhamentos).

## 🎲 Como Funciona

O sistema utiliza uma abordagem híbrida para entregar a melhor experiência:

1.  **Índice Curado**: O projeto utiliza um arquivo (`src/promessas.json`) contendo uma lista selecionada de referências bíblicas (ex: "Salmos 23:1").
2.  **Base de Texto**: O texto completo dos versículos é recuperado de um banco de dados JSON (`src/KJA.json`) da versão King James Atualizada.
3.  **Renderização**:
    -   Ao clicar na caixinha, uma promessa é sorteada da lista curada.
    -   O sistema suporta versículos únicos e intervalos (ex: "Versículos 4-5").
    -   O card é gerado com cores dinâmicas e preparado para exportação visual.

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
