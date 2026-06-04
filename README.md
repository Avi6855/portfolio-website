# Premium 3D Animated Developer Portfolio

A stunning, highly-interactive, single-page developer portfolio designed for top-tier software engineers and Android developers. This portfolio is meticulously crafted to impress recruiters at leading tech companies with its premium aesthetic, smooth animations, and robust performance.

## 🚀 Live Demo
*(Add your live Vercel/Netlify link here)*

## ✨ Features

- **Immersive 3D UI & Animations:** Powered by Framer Motion, featuring smooth scroll reveal animations, dynamic hovers, and glassmorphic glowing effects.
- **Modern Tech Stack:** Built with React, TypeScript, and Vite for lightning-fast performance and type safety.
- **Fully Responsive Layout:** Flawless viewing experience across mobile devices, tablets, and large desktop screens.
- **Dynamic Projects Showcase:** Interactive project cards with integrated video demo support, thumbnails, and custom category filtering.
- **Vertical Experience Timeline:** A sleek, visually striking timeline showcasing professional experience with floating cards and highlighted key metrics.
- **Performance Optimized:** Lazy loading, asset optimization, and minimal bundle sizes for instant load times.
- **Custom Cursor:** A beautiful interactive custom cursor that adapts to clickable elements.

## 🛠️ Technology Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Scrolling:** react-scroll

## 📦 Local Development

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YourUsername/portfolio-website.git
   cd portfolio-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Customizing Content

All personal data, projects, skills, and achievements are centralized in a single file for easy customization.

Simply edit `src/data/content.ts` to update:
- Personal Details & Contact Info
- Social Media Links
- Resume Download Link
- Skills & Core Expertise
- Professional Experience Timeline
- Projects (Thumbnails, Videos, Summaries, Tech Stacks)
- Key Achievements

## 📹 Adding Project Demo Videos

To add real demo videos to your projects:
1. Place your `.mp4` video files inside the `public/videos/` directory.
2. In `src/data/content.ts`, update the `demoVideo` property of your project to point to your video file (e.g., `demoVideo: '/videos/my-demo.mp4'`).

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).
