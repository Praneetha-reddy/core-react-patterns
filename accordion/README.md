# React Accordion App

A simple React Accordion application demonstrating core React patterns and concepts, inspired by Jonas Schmedtmann's Udemy course.

---

## Concepts Learnt

- **Component Architecture:** Building reusable and composable components (`Accordion`, `AccordionItem`).
- **State Management:** Using `useState` to manage open/close state and lifting state up.
- **Props & Children:** Passing data and event handlers via props, using `children` for flexible content.
- **Conditional Rendering:** Showing/hiding content based on state.

---

## Basic Features

- Expand/collapse sections to view details.
- Only one section open at a time (classic accordion behavior).
- Curriculum data rendered dynamically from a JS array.
- Clean, readable UI with clear separation of concerns.

---

## Build & Run Process

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start development server:**
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
3. **Build for production:**
   ```bash
   npm run build
   ```
   Output will be in the `build/` folder.

---

## Credits

This project is based on concepts and patterns taught in [Jonas Schmedtmann's React course on Udemy](https://www.udemy.com/course/the-complete-javascript-course/). Huge thanks to Jonas for his clear explanations and practical approach to React!
