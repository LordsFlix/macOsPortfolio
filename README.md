# 🍎 MacOS Portfolio

> A fully interactive, macOS-inspired portfolio website built with modern web technologies.

![MacOS Portfolio Banner](/public/images/pss.png)
_(Replace the above image path with a representative screenshot of your actual desktop view if available)_

## 🚀 Introduction

Welcome to my personal portfolio, reimagined as a **MacOS Desktop Environment**. This project showcases my skills, projects, and experience in a unique, interactive way. Users can open apps, drag windows, browse my "files," and even use a functional terminal, all within the browser.

It mimics the look and feel of macOS with smooth animations, a functional dock, and an intuitive window management system.

## 🛠️ Tech Stack

Built with the latest and greatest in the frontend ecosystem:

- **Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **State Management**: [Zustand](https://github.com/pmndrs/zustand)
- **Animations**: [GSAP](https://gsap.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & Custom SVG assets

## ✨ Features

- **🖥️ Interactive Desktop**: complete with a top bar and wallpaper.
- **⚓ Dynamic Dock**: Features magnification effects and bouncing animations on hover/click.
- **🪟 Window Management**:
  - **Draggable**: Move windows anywhere on the screen.
  - **Resizable**: Resize windows to your liking.
  - **Z-Indexing**: Active windows always come to the front.
  - **Minimize/Maximize/Close**: Fully functional Mac-style window controls.
- **📂 Functional Apps**:
  - **Finder (Portfolio)**: Browse my projects and "files" in a directory structure.
  - **Terminal (Skills)**: A command-line interface to explore my technical skills.
  - **Contact**: A clean interface to get in touch.
  - **Trash (Archive)**: See what's been discarded (or archived projects).
  - **About Me**: A quick look at who I am.
- **📱 Responsive Design**: Optimized for various screen sizes (best viewed on desktop for the full experience).

## 📦 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (Latest LTS recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/LordsFlix/macOsPortfolio.git
    cd macOsPortfolio
    ```

2.  **Install dependencies**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**

    ```bash
    npm run dev
    ```

4.  **Open in Browser**
    Visit `http://localhost:5173` (or the URL shown in your terminal).

## 📂 Project Structure

```text
src/
├── components/      # React components (Dock, Windows, Apps)
├── constants/       # Data for apps, menu items, and content
├── HOC/            # Higher-Order Components (e.g., WindowWrapper)
├── store/           # Zustand stores for state management
└── windows/         # Individual app window contents
```

## 🎨 Customization

The project is driven by configuration files, making it easy to update content without diving deep into component logic.

- **Personal Data**: Edit `src/constants/index.js` to update:
  - `navItems`: Top bar menu items.
  - `dockApps`: Apps appearing in the dock.
  - `techStack`, `socials`, `blogPosts`: Content for specific apps.
  - `locations`: File system structure for the Finder app.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/LordsFlix">Shaurya</a>
</p>
