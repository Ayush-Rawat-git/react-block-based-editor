# 🧱 React Block Editor

A structured block-based document editing system built with React.

Instead of storing note content as a single large string, each document is composed of independent editable blocks. This project focuses on scalable state modeling, immutable nested updates, and keyboard-driven editing behavior.

---

## 📑 Table of Contents

* [Overview](#overview)
* [Problem Statement](#problem-statement)
* [Features](#features)
* [Technical Implementation](#technical-implementation)
* [Tools & Technologies](#tools--technologies)
* [How to Run This Project](#how-to-run-this-project)
* [Future Enhancements](#future-enhancements)
* [Author & Contact](#author--contact)

---

## Overview

This project implements a block-based document editor inspired by structured editing systems.

Each note is composed of independent blocks, allowing dynamic insertion, deletion, and scalable content modeling while maintaining predictable React rendering.

---

## Problem Statement

Traditional note applications rely on textarea-based content storage. This approach:

* Treats the entire document as a single string
* Makes block-level operations difficult
* Limits scalability for advanced editor features

This project aims to:

* Represent content as independent blocks
* Support dynamic block insertion and deletion
* Maintain stable identity management
* Preserve immutable state updates
* Persist user data using local storage

---


### Design Principles

* Immutable nested state updates using `map`
* Stable identity management with `crypto.randomUUID()`
* Separation of data modeling and UI rendering
* Keyboard-driven interaction logic
* Lazy state initialization from localStorage

---

## Features

* Create new notes
* Delete notes
* Persist notes using localStorage
* Sidebar-based note selection
* Block-based content model
* Press **Enter** to create a new block
* Press **Backspace on empty block** to delete and merge
* Automatic focus management between blocks
* Controlled block components

---

## Technical Implementation

Key React concepts demonstrated:

* Lazy initialization of state from localStorage
* Deep immutable state updates
* Stable keys for dynamic lists
* Controlled input components
* `useEffect`-based focus management
* Keyboard event handling for block operations

The project avoids direct state mutation to ensure predictable rendering and scalability.

---

## Tools & Technologies

* React (Functional Components + Hooks)
* Tailwind CSS
* Vite
* Local Storage API

---

## How to Run This Project

Clone the repository:

```bash
git clone <your-repo-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

---

## Future Enhancements

* Multiple block types (heading, code, todo)
* Slash command interface
* Drag-and-drop block reordering
* Backend persistence
* Undo / redo functionality

---

## Author & Contact

Ayush Rawat
GitHub: [https://github.com/Ayush-Rawat-git](https://github.com/Ayush-Rawat-git)
LinkedIn: [https://www.linkedin.com/in/ayush-rawat-683a313ab/](https://www.linkedin.com/in/ayush-rawat-683a313ab/)


