# 📰 Remix Articles Viewer

A clean, dynamic web application built with **Remix** and **TypeScript**, created to solve **Challenge 1: Dynamic Article Viewer**.

This project displays a list of tech articles and allows users to view full content on a separate detail page. All data is loaded **server-side** using Remix's loader functions.

---

## 🚀 Tech Stack

- ⚛️ [Remix](https://remix.run/) (with Vite)
- 🔷 TypeScript
- 💨 Tailwind CSS
- 📦 Node.js (for local development)

---

## 🎯 Challenge Overview

This project fulfills all the requirements of **Challenge 1: Dynamic Article Viewer**:

### ✅ Features Implemented

- **List View:** `/articles`
  - Server-side data loading of all articles
  - Displays title, author, and summary
  - Clean and responsive styling
  - Clickable titles link to detailed view

- **Detail View:** `/articles/:articleId`
  - Displays full article content
  - Server-resolved data for each article ID
  - Handles "not found" states gracefully with a styled 404 page and automatic redirect

---

## 🛠️ Getting Started

# 🧬 Clone the repository
git clone git@github.com:AlexEMartin/articles-viewer.git

# 📂 Navigate into the project directory
cd articles-viewer

# 📥 Install all necessary dependencies
npm install

# 🚀 Start the development server
npm run dev

👉 http://localhost:5173/ (PORT)