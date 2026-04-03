# AI Agency — Premium Full-Stack AI Platform

Welcome to the **AI Agency** website, a high-end, cinematic, and interactive digital experience designed for a forward-thinking artificial intelligence agency. This project combines cutting-edge frontend technologies with sophisticated visual design to create a "wow" factor from the very first frame.

## ✨ Key Features

- **Cinematic 3D Hero Section**: An interactive 3D wave simulation built with Three.js and custom GLSL shaders, responding to mouse movement and scroll.
- **Premium Dark Aesthetic**: A curated "Elite Dark" theme using Zinc and Emerald color palettes with modern glassmorphism effects.
- **Performance Optimized**:
  - **Zero-Jank Smooth Scrolling**: Synchronized Lenis with GSAP's high-performance ticker for buttery 60fps scrolling.
  - **Hydration & FCP Optimization**: Strategy for unblocking the main thread via code splitting and optimized font loading using `display: swap`.
  - **GPU-Accelerated Animations**: Transitions and stagger effects offloaded to the GPU for maximum smoothness.
- **Interactive Components**:
  - **3D Tilt Map**: Dynamic location mapping with hover-based expansion.
  - **Animated Avatar Stacks**: Smooth entrance and interactive social proof elements.
  - **Live Counter Metrics**: Numeric stats that smoothly count up as they enter the viewport.
- **Responsive & Modern Navigation**: A sleek, minimalist floating dock that adapts to user scroll behavior.

## 🛠️ Technology Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, Server/Client Components)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger, Ticker) & [motion/react](https://github.com/motiondivision/motion) (formerly Framer Motion)
- **3D Rendering**: [Three.js](https://threejs.org/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typeface**: Inter & Space Grotesk (Google Fonts)

## 🚀 Getting Started

First, ensure you have [Node.js](https://nodejs.org/) installed.

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

```text
src/
├── app/            # Next.js App Router (Pages, Layouts, CSS)
├── components/     # Reusable UI & Layout Components
│   ├── ui/         # Atomic UI elements (Buttons, Cards, Inputs)
│   └── layout/     # Structural components (Dock, Footer, Scroll)
├── lib/            # Utility functions & shared logic
```

## 🏗️ Deployment

The project is ready to be deployed on [Vercel](https://vercel.com/) with zero configuration. Simply push your changes to your repository and connect it to Vercel.

---

*Built with passion by Antigravity.*
