# ⚡ Sorabh Kumar| Modern Full-Stack Portfolio

<div align="center">

  ![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
  ![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

  <p align="center">
    <b>An immersive, high-performance portfolio website featuring sequential typing animations, interactive scroll paths, and a futuristic grid design.</b>
  </p>

  [**View Live Demo**](https://portfolio-phi-two-6zbdcisg0d.vercel.app/) • [**Report Bug**](https://github.com/sorabh56/portfolio/issues)

</div>

---

## 🎨 Project Preview

> **Note:** Upload a screenshot of your website to the `public` folder named `preview.png` to see it here.
> 
> ![App Screenshot](/public/preview.png)

This portfolio is not just a collection of projects; it's a demonstration of modern web engineering. It utilizes **Next.js 14 App Router** for performance and **Framer Motion** for butter-smooth interactions.

## ✨ Key Features

### 🖥️ Immersive UI/UX
- **Futuristic Grid Background:** A custom CSS grid pattern with a radial mask (vignette) to focus attention on the content.
- **Interactive Scroll Line:** An SVG path that draws itself and changes colors (Purple → Cyan → Green) as the user scrolls down.
- **Glassmorphism:** Modern frosted glass effects on navigation and cards.

### 🚀 Advanced Animations
- **Sequential Typewriter Hero:** A custom logic hook that types "Full-stack" (Left-to-Right) first, then types "Developer" (Left-to-Right but Right-aligned) without layout shifts.
- **Infinite Loop Slider:** Projects and Skills sections feature a seamless infinite scroll animation using CSS keyframes.
- **Scroll-Triggered Reveals:** Elements fade in and slide up as they enter the viewport.

### ⚡ Performance & Stack
- **Framework:** Next.js 14 (Server Components & App Router)
- **Styling:** Tailwind CSS (Utility-first architecture)
- **Type Safety:** 100% TypeScript coverage
- **Icons:** Lucide React (Lightweight SVG icons)

## 📂 Project Structure

A clean and organized folder structure for scalability.

```bash
├── app/
│   ├── components/      # 🧩 Modular Components
│   │   ├── Hero.tsx       # Animated Typing Intro
│   │   ├── ScrollLine.tsx # The Growing Wavy Line
│   │   ├── Skills.tsx     # Infinite Logo Slider
│   │   ├── Projects.tsx   # Horizontal Project Cards
│   │   ├── Background.tsx # Fixed Grid Pattern
│   │   ├── About.tsx      # About Me Section
│   │   ├── WorkExperience.tsx # Experience Timeline
│   │   └── Footer.tsx     # Footer with Contact Info
│   ├── layout.tsx       # Root Layout & Fonts
│   ├── page.tsx         # Main Landing Page assembly
│   └── globals.css      # Global Styles & Animations
├── public/              # 🖼️ Static Assets (Images)
└── tailwind.config.ts   # 🎨 Tailwind Configuration
🛠️ Installation & Setup
Want to run this locally? Follow these steps:

Clone the repository

Bash

git clone [https://github.com/sorabh56/portfolio.git](https://github.com/sorabh56/portfolio.git)
cd portfolio
Install dependencies

Bash

npm install
# or
yarn install
Run the development server

Bash

npm run dev
Access the app Open http://localhost:3000 in your browser.

⚙️ Configuration & Customization
You can easily tweak the animations and content:

Animation Speed: Go to app/components/Hero.tsx and modify the SPEED object:

TypeScript

const SPEED = {
  TYPING: 100,    // Speed of typing (Lower is faster)
  DELETING: 30,   // Speed of erasing
  PAUSE: 2000     // Wait time before deleting
};
Update Projects: Modify the PROJECTS array in app/components/Projects.tsx.

Theme Colors: Adjust the tailwind.config.ts or app/components/ScrollLine.tsx for gradient changes.

🚀 Deployment
The project is optimized for Vercel.

Push your changes to GitHub.

Connect your repository to Vercel.

Click Deploy. Vercel will handle the build process automatically.

🤝 Contact
Sorabh Kumar

📧 Email: sorabhsinghrajput4@gmail.com

💼 LinkedIn: linkedin.com/in/sorabh-kumar

🐙 GitHub: github.com/sorabh56

<div align="center"> <i>Built with ❤️ and ☕ by Sorabh using Next.js</i> </div>
