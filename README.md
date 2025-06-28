# My Portfolio

A modern, responsive developer portfolio built with React and Vite. This project showcases my skills, projects, and contact information with a clean UI, smooth animations, and interactive features.

## 🚀 Features

- **Animated Hero Section**: Typewriter effect for name and rotating descriptions, with a downloadable resume button.
- **Responsive Navigation**: Sticky navbar with smooth scroll and a mobile-friendly hamburger menu.
- **Skills Showcase**: Interactive skill cards with animated progress bars and categorized technical/soft skills.
- **Projects Carousel**: Slick slider to browse featured projects, each with tech stack, responsibilities, and live/demo links.
- **Contact Section**: EmailJS-powered contact form with validation (Formik & Yup), toast notifications, and social/contact cards.
- **Modern UI/UX**: Custom CSS, gradients, and subtle animations using Framer Motion and AOS.
- **Mobile Friendly**: Fully responsive layout for all devices.
- **Reusable Components**: Modular React components for easy maintenance and scalability.

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite, JavaScript (ES2020+)
- **Styling**: Custom CSS, Tailwind CSS (recommended extension)
- **Animation**: Framer Motion, AOS
- **Forms & Validation**: Formik, Yup
- **Email**: EmailJS
- **Notifications**: React Toastify
- **Carousel**: React Slick, Slick Carousel
- **Other**: React Scroll, Figma (design), Postman (API testing)

## 📁 Folder Structure

```
├── public/                # Static assets (images, icons, resume, etc.)
├── src/
│   ├── componets/         # All React components
│   │   ├── Hero/
│   │   ├── Skills/
│   │   ├── MyProjects/
│   │   ├── ContactMe/
│   │   ├── Footer/
│   │   └── mobileNavbar/
│   ├── utils/             # Data for skills, projects, experience
│   ├── App.jsx, App.css   # Main app entry
│   └── main.jsx           # ReactDOM render
├── .vscode/               # VSCode settings (Tailwind recommended)
├── .eslintrc.cjs          # ESLint config
├── package.json           # Project metadata & scripts
└── vite.config.js         # Vite config
```

## ⚡ Getting Started

1. **Clone the repository**
   ```bash
   git clone <repo-url>
   cd My-Portfolio
   ```
2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```
3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   The app will be available at `http://localhost:3000`.

4. **Build for production**
   ```bash
   npm run build
   ```

## 🔧 Configuration

- **EmailJS**: Update your EmailJS service ID, template ID, and user/public key in `src/componets/ContactMe/ContactForm/ContactForm.jsx`.
- **Assets**: Place your images, icons, and resume PDF in the `public/` folder.

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

> Designed & developed by Piyush Kumar. Connect with me on [GitHub](https://github.com/piyush-bagoria018) and [LinkedIn](https://www.linkedin.com/in/piyush-kumar-a8ab38350/).
