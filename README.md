
# ⚡ Sorabh Kumar portfolio

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

<b>A modern, performance-focused full-stack portfolio built to impress recruiters with clean architecture, smooth animations, and production-ready code.</b>

[🚀 Live Demo](https://portfolio-phi-two-6zbdcisg0d.vercel.app/) •
[🐞 Report Bug](https://github.com/sorabh56/portfolio/issues)

</div>

---

## 📌 About This Project (Recruiter Overview)

**Sorabh.dev** is a personal portfolio website designed to demonstrate **real-world frontend engineering skills**, clean code practices, and an understanding of **modern web performance**.

This project is not a template dump. Every section is intentionally built to showcase:
- Component-driven architecture
- Scalable folder structure
- Animation performance optimization
- Strong UI/UX fundamentals
- Production-ready deployment workflow

Recruiters can evaluate **code quality, UI thinking, and technical depth** in one place.

---

## 🎯 Why This Portfolio Stands Out

✔ Built with **Next.js 14 App Router**  
✔ Fully written in **TypeScript** (type-safe codebase)  
✔ **Reusable & modular components**  
✔ Smooth animations without layout shifts  
✔ Optimized for **performance, SEO, and accessibility**  
✔ Clean Git history & deployable on Vercel  

This project reflects how I would structure and build a **real product**, not just a demo.

---

## 🎨 UI / UX Highlights

### 🖥️ Visual Design
- Futuristic **grid background** with subtle radial vignette
- Clean spacing, readable typography, and modern color palette
- Glassmorphism effects on navbar and cards

### 🧭 User Experience
- Clear navigation with visual hierarchy
- Smooth scroll-based storytelling
- No unnecessary visual clutter
- Mobile-responsive across all screen sizes

---

## 🚀 Advanced Animations & Interactions

### ✍️ Hero Typewriter Animation
- Custom sequential typing logic
- No layout shifts during animation
- Designed to highlight role identity clearly

### 🔁 Infinite Auto-Scroll Sections
- Skills & Projects implemented using CSS keyframes
- Seamless looping without performance cost

### 🎯 Scroll-Triggered Effects
- Elements animate only when entering viewport
- Improves perceived performance and user engagement

---

## 🧠 Technical Architecture

### ⚙️ Core Stack
- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

### 🧩 Component Philosophy
- Each UI section is a **self-contained component**
- Logic and UI are cleanly separated
- Easy to scale, refactor, or extend

---

## 📂 Project Structure (Scalable & Clean)

```bash
├── app/
│   ├── components/
│   │   ├── Hero.tsx           # Typing animation & intro
│   │   ├── ScrollLine.tsx     # Animated SVG scroll path
│   │   ├── Skills.tsx         # Infinite skills slider
│   │   ├── Projects.tsx       # Project showcase
│   │   ├── Background.tsx     # Grid background
│   │   └── Navbar.tsx         # Navigation
│   ├── layout.tsx             # Global layout & fonts
│   ├── page.tsx               # Main landing page
│   └── globals.css            # Global styles
├── public/                    # Static assets
└── tailwind.config.ts         # Theme & design tokens
````

This structure mirrors **industry-standard frontend projects**.

---

## 🛠️ Installation & Local Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/sorabh56/portfolio.git
cd portfolio
```

### 2️⃣ Install Dependencies

```bash
npm install
# or
yarn install
```

### 3️⃣ Run Development Server

```bash
npm run dev
```

Open **[http://localhost:3000](http://localhost:3000)** in your browser.

---

## ⚙️ Customization Guide

### ⏱️ Typing Animation Speed

Modify in `app/components/Hero.tsx`:

```ts
const SPEED = {
  TYPING: 100,
  DELETING: 30,
  PAUSE: 2000
};
```

### 🧩 Add / Update Projects

Edit project data inside:

```ts
app/components/Projects.tsx
```

### 🎨 Theme Customization

* Global colors → `tailwind.config.ts`
* SVG gradients → `ScrollLine.tsx`

---

## 🚀 Deployment (Production Ready)

This project is optimized for **Vercel**.

Deployment steps:

1. Push code to GitHub
2. Import repository into Vercel
3. Click **Deploy**

✔ Automatic builds
✔ Edge-optimized
✔ Zero configuration required

---

## 👨‍💻 About the Developer

**Sorabh Kumar**
B.Tech (CSE) | Frontend / Full-Stack Developer

I focus on building:

* Clean, maintainable code
* User-centric interfaces
* Scalable frontend architectures

This portfolio reflects my **coding style, problem-solving approach, and UI sensibility**.

---

## 📬 Contact Information

* 📧 Email: **[sorabhsinghrajput4@gmail.com](mailto:sorabhsinghrajput4@gmail.com)**
* 💼 LinkedIn: [https://linkedin.com/in/sorabh-kumar](https://linkedin.com/in/sorabh-kumar)
* 🐙 GitHub: [https://github.com/sorabh56](https://github.com/sorabh56)

---

## 📄 License

This project is open-source and available under the **MIT License**.

---

<div align="center">
<i>Built with ❤️ and ☕ using Next.js & TypeScript</i>
</div>
```
