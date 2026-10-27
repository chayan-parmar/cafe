# ☕ Brew & Bloom — Artisan Coffee & Bakery

A modern, responsive specialty coffee shop and bakery web application built with **React** and **Vite**. Features an interactive menu, signature tasting experiences, live counter ordering drawer with slip generator, table reservations, and rich storytelling aesthetics.

---

## ✨ Features

- **Editorial Aesthetics**: Tailored warm earthy palette (espresso, terracotta, warm cream, sage) with modern serif and sans typography.
- **Interactive Menu**: Category filtering, real-time item search, and detailed flavor notes.
- **Counter Order Tray**: Slide-out drawer with quantity management and receipt/order slip preview.
- **Table Reservation Form**: Reservation request form with seat area selection and instant feedback.
- **Signature Experiences**: Hand-crafted tasting flights, slow pour-over bar, and fresh viennoiserie bakery section.
- **Vercel-Ready**: Pre-configured with `vercel.json` for seamless deployment.

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- `npm` or `yarn` / `pnpm`

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chayan-parmar/cafe.git
   cd cafe
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel

### Option 1: Via Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and log in.
2. Click **"Add New..."** > **"Project"**.
3. Import your GitHub repository: `chayan-parmar/cafe`.
4. Vercel will automatically detect **Vite**:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
5. Click **"Deploy"**.

### Option 2: Via Vercel CLI

```bash
npm install -g vercel
vercel
```

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Bundler & Dev Server**: [Vite 8](https://vite.dev/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/)
