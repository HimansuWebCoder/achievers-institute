# 💄 Silisalon – Makeup Beauty Salon (Frontend Freelance Project)

A modern, responsive, and elegant beauty salon website built with the latest frontend technologies. This project showcases my attention to detail, UI/UX design sense, and frontend engineering skills using **React**, **Tailwind CSS v4**, **Lucide Icons**, and **MUI Components**.

---

## 🚀 Tech Stack

- **Frontend Framework**: [React](https://react.dev/) (with [Vite](https://vitejs.dev/))
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide-react](https://lucide.dev/)
- **UI Components**: [Material UI (MUI)](https://mui.com/)
- **Animations**: CSS transitions & Tailwind utility classes
- **SVGs**: Inline SVGs used for better performance

---

## 🚀 Live Demo

<a href="https://www.silisalon.com/" target="_blank" rel="noopener noreferrer">Live Preview</a>


---

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/yourusername/silisalon.git
cd silisalon

# Install dependencies
npm install

# Start development server
npm run dev
```

## ✨ Features

* Smooth scrolling navigation (navmenu scrolls perfectly to section, not below the sticky header)

* Clean layout and balanced spacing (perfect padding, margins, and sizing)

* Responsive design for all screen sizes

* Fast-loading performance with inline optimized SVGs

* Clean, polished UI by removing unnecessary decorative images and clutter

* Modular, reusable React components


## 🧩 Challenges Faced

- Navbar scroll offset: Clicking nav links used to land slightly below the actual section due to sticky header. Fixed using: scroll-mt-<value>

```
<section id="services" className="scroll-mt-28">...</section>
```

- Spacing and layout: Balancing padding, margin, and whitespace was tricky. Used Tailwind’s spacing scale carefully to maintain visual styles.

## 🖼️ Performance

- Replaced large image backgrounds with SVGs or removed unnecessary visual clutter for a smoother and faster experience.

## 🧼 Clean UI

- Iterated multiple times to remove redundant sections and simplify structure. Focused on clean component hierarchy and UI polish.


## 📁 Folder Structure

```
silisalon/
├── public/
│   └── images/            # Static images and icons
│
├── src/
│   ├── assets/            # Fonts, global styles, logos, etc.
│   ├── components/        # All reusable React components (Navbar, Hero, Services, etc.)
│   ├── App.css            # App-level styles (if used with Tailwind overrides)
│   ├── App.jsx            # Main App component
│   ├── index.css          # Global styles (Tailwind directives, resets, etc.)
│   └── main.jsx           # Entry point for React
│
├── index.html             # Base HTML file
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration

```

## 👩‍💻 Author

Your Name – @HimansuWebCoder

## 🧠 Why I Built This

This project was developed as a freelance assignment for a beauty salon client. It helped me sharpen my frontend workflow, master layout and spacing techniques, and deliver a clean, performance-optimized user interface. The project reflects my ability to translate real-world client needs into a polished, responsive React application.


## ✅ What’s Next?

* Add form validation and email integration with EmailJS or Formspree

* Animate section reveals using Framer Motion

* Add SVG more powerfull effect with animation and transitions


## 🙌 Open to Feedback

If you notice any issues, UX improvements, or suggestions — feel free to open an issue or connect with me directly. I'm always looking to improve and would love to hear your thoughts! 

