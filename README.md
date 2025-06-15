# 🌐 BattleDex - Accessibility Project 

<div align="left">

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Google Gemini](https://img.shields.io/badge/google%20gemini-8E75B2?style=for-the-badge&logo=google%20gemini&logoColor=white)
![i18next](https://img.shields.io/badge/i18next-%23000000.svg?style=for-the-badge&logo=i18next&logoColor=%23ffffff)
![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)

</div>

## 📝 About the Project 

**BattleDex** is a **Front-End** project developed as an evaluative activity for the **Systems Analysis and Development** course at **SENAI**, started on May 27, 2025, with a presentation scheduled for June 16, 2025. The main goal is to create an accessible website, prioritizing the inclusion of people with disabilities. During development, I used the **i18next** library to implement support for multiple languages, including Portuguese, English, Spanish, French, Japanese, and Chinese (Mandarin). This was my first project hosted with **React** on the **Vercel** platform, providing valuable insights into accessibility and web application deployment. 🚀

## 🎮 BattleDex 

**BattleDex** is a website aimed at beginners, veterans, and enthusiasts of the **Pokémon** franchise, one of the most iconic and popular in the world, launched in 1997. The platform explores the Pokémon universe, offering information about capturing, battling, and interacting with the game's creatures, delivering an accessible and engaging experience for all audiences. 🌟

## 🛠️ Technologies used
- **Languages**: HTML, CSS, JavaScript
- **Frameworks & Libraries**: React, Tailwindcss, I8next, Framer-Motion
- **Other tools**: Gemini API, Vlibras, Google Fonts, UserWay, SpeechSynthesis
---
## 🗂️ Project Structure
The BattleDex project, developed with React + Vite, generates several files. To keep everything organized, the structure was divided as follows:

### 📁 Folders
- `/src`: Contains the main source code of the project.
  - `locales`: Stores the translation files used by the **i18next** library, including configurations for supported languages (Portuguese, English, Spanish, French, Japanese, and Chinese - Mandarin). Each language has JSON files with translations for the interface text.
  - `components`: Contains reusable React components, such as buttons, Pokémon cards, navigation bars, modals, and other interface elements, designed with accessibility in mind (support for screen readers and keyboard navigation).
  - `assets`: Includes static files, such as Pokémon images, icons, logos, custom fonts, and other visual resources used on the site.
  - `battledex`: Contains files specific to the core **BattleDex** module, including pages and logic related to displaying Pokémon information (creature details, battle mechanics, and capture), organized for maintainability and scalability.

### 📄 Files
- `index.html`: Main file that serves as the entry point of the React application.
- `.env`: Stores environment variables such as API keys and configuration secrets.
- `vite.config.ts`: Configuration file for Vite, responsible for project build settings, plugins, and server behavior.

---

## 📋 Requirements
To install and run BattleDex on your device or set up the development environment, you need the following requirements:

- [**Visual Studio Code**](https://code.visualstudio.com/): Recommended code editor for working with HTML, CSS, and JavaScript.
- [**Node.js**](https://nodejs.org/): Required to use `npm`, the package manager. LTS version is recommended.
---

## 📦 Installation Mode

### 🌐 Web Application
BattleDex is a web application hosted on Vercel. To access it, visit the official link:

<a href="https://battledex-orcin.vercel.app/">Access the BattleDex</a>

---

## 👨‍💻 Project Development
If you want to work on BattlDex development, follow the instructions below to set up and run the environment locally.

1. Download the project from GitHub
2. Open in Visual Studio Code with the project folder already installed
3. **Start the local server:** In Visual Studio Code, open the terminal (shortcut Ctrl + Shift + P, type "Terminal" and select "New Terminal" or click "Terminal" in the top menu) and run the command below to view the project in the browser:
   ```bash
   npm run dev
   ```
4. **Troubleshooting (optional):** If the project doesn't work, install the necessary dependencies with the following command:
   ```bash
   npm install
   ```
---

## 👤 Authors
- João Pedro Dala Dea Mello
- Gabriel Marcelo Lopes da Fonseca  