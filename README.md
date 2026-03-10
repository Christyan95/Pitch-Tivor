# TIVOR — Arquitetura Financeira para o Agronegócio 🌾📊

![Next.js](https://img.shields.io/badge/Next.js-15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este projeto é um **Pitch Deck Interativo** em formato de Landing Page Premium, desenvolvido para a **TIVOR** (uma empresa do Grupo JEE). Ele apresenta uma solução robusta de inteligência, tecnologia e governança financeira projetada especificamente para os líderes do agronegócio brasileiro.

## 🚀 Arquitetura e Tech Stack

O projeto foi migrado de uma estrutura estática para uma arquitetura moderna utilizando **Next.js 15 (App Router)**, focando em performance, manutenibilidade e experiência do usuário (UX) de alto nível.

### Core Technologies:
- **Framework:** Next.js 15 com React 19.
- **Styling:** Tailwind CSS v4 (Design System customizado).
- **Animations:** Framer Motion para micro-interações e transições de slides.
- **Icons:** Lucide React para iconografia vetorial limpa.
- **Typography:** Integração com Google Fonts (Montserrat e Inter).

---

## ✨ Funcionalidades Avançadas

### 📐 Layout SplitPanel (50/50)
Implementação de um componente exclusivo `<SplitPanel />` que garante que as imagens ocupem exatamente **50% da largura da tela (50vw)** em desktops. 
- **Transição Suave:** Gradientes de 120px que suavizam o encontro entre o conteúdo e a imagem.
- **Parallax Zoom:** Efeito de escala nas imagens ao entrar no viewport.
- **Fallback Decorativo:** Sistema de orbes de luz e mesh gradients caso imagens externas falhem.

### 🌓 Header Adaptativo & Inteligente
O cabeçalho detecta em tempo real o tema do slide atual (Light ou Dark) através de listeners de scroll e Intersection Observers:
- **Logo Dinâmico:** O badge "Grupo JEE" adapta cor e bordas para garantir legibilidade máxima.
- **Contraste Automático:** Elementos de navegação e indicadores de progresso mudam de tonalidade conforme o fundo.

### 🏎️ Performance & Clean Code
- **SRP (Single Responsibility Principle):** Cada seção do pitch é um componente isolado em `src/components/sections/`.
- **Data Driven:** Textos e métricas (como na seção de Especialização) são extraídos de constantes, facilitando atualizações.
- **Zero Placeholders:** Todas as imagens são selecionadas profissionalmente via Unsplash para o contexto de Agro-Tech.

---

## 📂 Estrutura do Projeto

```text
├── src/
│   ├── app/
│   │   ├── globals.css         # Variáveis nativas (Tailwind 4), temas e utilitários
│   │   ├── layout.tsx          # SEO, Fontes e estrutura base
│   │   └── page.tsx            # Orquestrador principal do Pitch
│   ├── components/
│   │   ├── sections/           # Slides: Hero, MacroScenario, Expertise, etc.
│   │   ├── AnimatedText.tsx    # Helpers de animação RevealUp/RevealLeft
│   │   ├── SplitPanel.tsx      # Componente core de layout 50/50
│   │   ├── Header.tsx          # Nav dinâmica com detecção de tema
│   │   └── PitchContainer.tsx  # Engine de scroll horizontal e progresso
└── public/                 # Assets estáticos (Logos)
```

## 💻 Como Rodar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/SeuUsuario/pitch-tivor.git
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o modo de desenvolvimento:
   ```bash
   npm run dev
   ```
4. Acesse `http://localhost:3000`.

## ☁️ Deployment

Otimizado para deploy automático na **Vercel** ou **Netlify**. Basta conectar o repositório e as plataformas identificarão as configurações do Next.js automaticamente para build de produção.

---
*Finanças, Tecnologia e Governança unidas. O futuro chegou para o Agronegócio.*
