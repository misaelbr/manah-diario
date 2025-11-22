# 🎴 Excuse Boss - Gerador de Desculpas Criativas

Um gerador de desculpas ridículas e criativas para faltar ao trabalho! Combine três categorias diferentes para criar mais de **8.000 combinações únicas** de desculpas absurdas.

![Excuse Boss](./public/excuse.png)

## 🚀 Demo

Acesse a aplicação em produção: **[https://excuse.misael.dev.br](https://excuse.misael.dev.br)**

## ✨ Funcionalidades

- 🎴 **Interface de Cards Animados**: Três pilhas de cartas com efeito de flip 3D e animações de saída
- 🎲 **8.000+ Combinações**: 20 opções em cada categoria (Razão Principal, Nível de Gravidade, Contexto Adicional)
- 🔄 **Sistema de Ciclagem**: Impede repetições até que todas as opções sejam usadas
- 💬 **Compartilhamento WhatsApp**: Botão integrado para compartilhar sua desculpa criativa
- 📱 **PWA**: Aplicação Progressive Web App instalável
- 🎨 **Design Vibrante**: Paleta de cores divertida com gradientes roxo, rosa e azul
- 🌟 **Totalmente Responsivo**: Otimizado para desktop e dispositivos móveis
- ⚡ **Performance**: Construído com Next.js 14 e otimizado para velocidade
- 🔍 **SEO Otimizado**: Meta tags, Open Graph, Twitter Cards e dados estruturados JSON-LD

## 🛠️ Tecnologias

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Radix UI](https://www.radix-ui.com/)** - Componentes acessíveis (via shadcn/ui)
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones
- **React Hooks** - Gerenciamento de estado
- **CSS Animations** - Animações personalizadas de flip e trajetórias

## 📦 Instalação

### Pré-requisitos

- Node.js 18+ instalado
- pnpm (ou npm/yarn)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/misaelbr/excuse.git
cd excuse
```

2. Instale as dependências:

```bash
pnpm install
```

3. Execute o servidor de desenvolvimento:

```bash
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no navegador

## 🏗️ Estrutura do Projeto

```
excuse/
├── public/
│   ├── excuse.png              # Imagem de preview/screenshot
│   ├── manifest.json            # PWA manifest
│   ├── browserconfig.xml        # Configuração Windows tiles
│   └── [favicons]               # Ícones multi-plataforma
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Layout raiz com metadata
│   │   ├── page.tsx             # Página principal
│   │   ├── sitemap.ts           # Gerador de sitemap
│   │   ├── robots.ts            # Configuração robots.txt
│   │   └── globals.css          # Estilos globais + animações
│   ├── components/
│   │   ├── excuse-card.tsx      # Componente de card com animações
│   │   ├── whatsapp-share.tsx   # Botão de compartilhamento
│   │   ├── structured-data.tsx  # Dados estruturados SEO
│   │   ├── theme-provider.tsx   # Provider de tema
│   │   └── ui/                  # Componentes shadcn/ui
│   ├── lib/
│   │   └── utils.ts             # Utilitários
│   └── api/
│       └── generate.ts          # (Placeholder) API de geração
├── components.json              # Configuração shadcn/ui
├── tailwind.config.ts           # Configuração Tailwind
├── tsconfig.json                # Configuração TypeScript
└── package.json
```

## 🎯 Como Funciona

1. **Selecione suas desculpas**: Clique em cada pilha de cartas para revelar uma opção aleatória
2. **Veja a animação**: Cada carta tem um efeito de flip 3D ao ser revelada
3. **Descarte e escolha outra**: Clique novamente para descartar a carta com animação de saída
4. **Monte sua desculpa completa**: Combine as três categorias para criar sua desculpa perfeita
5. **Compartilhe**: Use o botão do WhatsApp para enviar sua desculpa criativa

## 🌐 SEO e Compartilhamento Social

O projeto inclui otimizações completas de SEO:

- ✅ Meta tags otimizadas (título, descrição, palavras-chave)
- ✅ Open Graph para Facebook e LinkedIn
- ✅ Twitter Cards para visualizações ricas
- ✅ Dados estruturados JSON-LD (WebApplication schema)
- ✅ Sitemap.xml automático
- ✅ Robots.txt configurado
- ✅ Favicon multi-plataforma (iOS, Android, Windows)
- ✅ PWA Manifest para instalação

## 🎨 Paleta de Cores

- **Primária**: Purple (`#a855f7`) - Roxo vibrante
- **Secundária**: Pink (`#ec4899`) - Rosa energético
- **Terciária**: Blue (`#3b82f6`) - Azul profundo
- **Background**: Gradient radial roxo/rosa/azul

## 📝 Scripts Disponíveis

```bash
pnpm dev          # Servidor de desenvolvimento
pnpm build        # Build de produção
pnpm start        # Iniciar servidor de produção
pnpm lint         # Verificar código com ESLint
```

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer fork do projeto
2. Criar uma branch de feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'feat: adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abrir um Pull Request

## 📄 Licença

Este projeto é open source e está disponível sob a [Licença MIT](LICENSE).

## 👤 Autor

**Misael**

- Website: [https://excuse.misael.dev.br](https://excuse.misael.dev.br)
- GitHub: [@misaelbr](https://github.com/misaelbr)

---

<div align="center">
  Feito com ❤️ e muito humor absurdo
</div>
