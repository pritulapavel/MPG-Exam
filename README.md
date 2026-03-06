# 🚀 MPG Examination Project

This is a Mentoring UI web project built using **HTML** and **SCSS**.
The project is designed for team collaboration using Git.

**Team Members:** Mariam Tchelidze, Pavle Pritula, Giorgi Kravchenko

---

## 🛠 Technologies Used

| Technology | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| HTML       | Structure of the web pages                                    |
| SCSS       | Style management, better organization, and reusable variables |
| Git        | Version control and team collaboration                        |

---


## 🎨 Design

The design for this project is available on Figma: [Open Design in Figma]([https://www.figma.com/design/K0iHmiSiMJuKxr5duOKvIC/CareerPath-Mentoring-task?node-id=1-323&t=35CZZs2a1AoqnHdG-0](https://www.figma.com/design/jrlUWJdbxTc2bKd5dpRa5r/10X-markup-exam-project---Spotify?node-id=3-2&t=a62aCfDedWMpgRI0-1))

---

## ⚡ Quick Start

### 1️⃣ Clone the Project

```bash
git clone https://github.com/pritulapavel/MPG-Exam.git
cd JustTrinity-Template
```

### 2️⃣ Create a New Branch

All new features should be developed in a **new branch**, not directly on `main`:

```bash
git checkout -b feature/your-feature-name (For example: header, navigation or another feature)
```

### 3️⃣ Save Changes (Commit)

```bash
git add .
git commit -m "Description: what has changed"
```

### 4️⃣ Push Your Branch

```bash
git push origin feature/your-feature-name
```

### 5️⃣ Pull Request (PR)

1. Open a Pull Request on GitHub against `main`
2. Team members will review the code
3. After approval, the branch will be merged into `main` ✅

### 6️⃣ Update Project

To get the latest changes from the main branch:

```bash
git checkout main
git pull origin main
```

---

## 🎨 SCSS Tips

* Use **mixins** and **variables** to avoid repeating code
* Create **separate files** for different components and then import them into `styles.scss`
* Always use Mobile first then check that styles are responsive across different screen sizes (Tablet, PC)

---

## ⚠️ Git Team Guidelines

* Never make changes directly on the `main` branch
* Regularly **pull** updates from other team members
* Write detailed commit messages describing what changed
* Branch names should be clear: `feature/comment`, `feature/navigation`

---

## 💡 Pro Tip

> “Code is like humor. When you have to explain it, it’s bad.” – Keep your code functional but understandable for the team.

---


NEW README FILE CONTENT BELOW ↓


---


# Spotify UI Layout Clone

A modern, responsive **Spotify-inspired user interface layout** built with **HTML, SCSS, and vanilla JavaScript**. This project focuses on clean architecture, scalable styling, and responsive UI patterns commonly used in professional front‑end development.

---

# Preview

Add a screenshot or GIF of the project here.
 
```
/assets/preview.png
```

---

# Live Demo

If deployed, add a link here.

```
•LINK_HERE_AFTER_FINISH•
```

---

# Features

• Fully responsive layout

• Sidebar, header and music player layout

• Grid and flexbox based UI architecture

• Interactive UI components

• Dynamic UI effects using JavaScript

• SCSS architecture using partials

• Modern CSS practices

• Clean semantic HTML

---

# Tech Stack

| Technology  | Purpose                            |
| ----------- | ---------------------------------- |
| HTML5       | Semantic structure                 |
| SCSS (Sass) | Scalable styling architecture      |
| JavaScript  | UI interaction and dynamic styling |
| CSS Grid    | Page layout                        |
| Flexbox     | Component layout                   |

---

# Project Structure

```
project
│
├─ assets
│   ├─ img
│   │   ├─ covers
│   │   └─ icons
│   │
│   └─ styles
│       ├─ abstracts
│       │   ├─ _variables.scss
│       │   └─ _mixins.scss
│       │   └─ ...
│       │
│       ├─ base
│       │   └─ _reset.scss
│       │   └─ ...
│       │
│       ├─ components
│       │   ├─ _card.scss
│       │   └─ _buttons.scss
│       │   └─ ...
│       │
│       ├─ layout
│       │   ├─ _header.scss
│       │   ├─ _sidebar.scss
│       │   └─ _main.scss
│       │   └─ ...
│       │
│       └─ styles.scss
│
│
├─ index.html
└─ README.md
```

---

# SCSS Architecture

The styling system follows a modular **SCSS architecture** inspired by the **7‑1 pattern**.

### abstracts

Contains project variables and mixins.

```
_variables.scss
_mixins.scss
```

### base

Global styles such as reset, typography and base rules.

### components

Reusable UI components.

Examples:

• cards

• buttons

• player controls

### layout

Major layout sections.

Examples:

• header

• sidebar

• main content

---

# Responsive Design

The layout adapts across multiple breakpoints using SCSS mixins.

Example:

```
@include tablet {
  // tablet styles
}

@include laptop {
  // desktop styles
}
```

Mobile‑first strategy is used throughout the project.

---

# JavaScript Functionality

JavaScript is used for lightweight UI enhancements.

Examples include:

• Dynamic styling

• Image‑based color extraction

• UI state toggling

Example snippet:

```
document.querySelectorAll('.stack').forEach((card) => {
  const img = card.querySelector('.card-image').src;
  card.style.setProperty('--img-stack', `url(${img})`);
});
```

This allows cards to dynamically reuse their cover image in CSS effects.

---

# CSS Techniques Used

The project demonstrates several advanced CSS techniques:

• CSS custom properties

• pseudo‑elements

• responsive grid layout

• flexbox alignment patterns

• dynamic hover effects

• CSS animations

• reusable utility mixins

---

# Example Component

### Card Stack Effect

A visual stack effect is created using pseudo‑elements.

```
.card.stack::before
.card.stack::after
```

These layers simulate stacked album covers while keeping the main image interactive.

---

# Development Setup

Clone the repository:

```
git clone https://github.com/pritulapavel/MPG-Exam.git
```

Open the project folder:

```
cd project-name
```

Compile SCSS if needed using your preferred tool (Sass CLI, Vite, etc).

---

# Best Practices Used

• semantic HTML

• scalable SCSS architecture

• reusable mixins

• component‑based styling

• responsive layout strategy

• clean and maintainable code

---

# Future Improvements

Potential improvements for the project:

• add real audio player functionality

• integrate Spotify API

• implement theme switching

• add playlist management

• add animations for player interactions

---

# Authors

Developed by:

**Mariam Tchelidze** **Giorgi Kravchenko** **Pavle Pritula**

---

# License

This project is created for **educational and portfolio purposes**.

---

# Acknowledgements

Design inspiration comes from the Spotify interface.

This project is not affiliated with Spotify.
