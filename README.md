# React 19.2 - Lesson 2 Playground

An interactive playground application for learning **Importing and Exporting Components** in React 19.2. This project demonstrates the concepts from Lesson 2 of the React tutorial series.

![React Playground](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

<img width="870" height="267" alt="image" src="https://github.com/user-attachments/assets/9820f0b6-245f-4d82-938f-4f267dba1448" />

<img width="904" height="579" alt="image" src="https://github.com/user-attachments/assets/284a531f-50f0-47aa-9699-26483e89bd50" />

<img width="820" height="438" alt="image" src="https://github.com/user-attachments/assets/1cd8e554-c093-4392-b3d9-20851d86caa7" />

<img width="882" height="725" alt="image" src="https://github.com/user-attachments/assets/d1054ec2-0a85-4520-a803-2b94876ac205" />

<img width="868" height="815" alt="image" src="https://github.com/user-attachments/assets/6e77c28b-1adf-4f11-b746-b9768fa4c980" />

<img width="812" height="302" alt="image" src="https://github.com/user-attachments/assets/d3b5400c-c5c9-4351-9efa-ffa7994e19f3" />

<img width="881" height="687" alt="image" src="https://github.com/user-attachments/assets/946c4800-183f-4d34-80fb-cfda519ba460" />

<img width="834" height="762" alt="image" src="https://github.com/user-attachments/assets/d5c829dc-12ff-4924-a689-2ae607a6ec5a" />

<img width="811" height="72" alt="image" src="https://github.com/user-attachments/assets/9c270d01-052d-4105-a269-1a505f4fc356" />

<img width="876" height="528" alt="image" src="https://github.com/user-attachments/assets/b39f29fa-468b-48e8-8236-ad9e526daa5c" />

<img width="809" height="747" alt="image" src="https://github.com/user-attachments/assets/73bf4e51-db72-44e1-8406-469084cf8860" />

<img width="872" height="344" alt="image" src="https://github.com/user-attachments/assets/2f3247a7-2f67-4327-b914-1b7d628ce658" />

## 🎯 What You'll Learn

- The root component file and its purpose
- How to export and import components
- Default exports vs. named exports
- Exporting multiple components from the same file
- Splitting components into multiple files for better organization

## ✨ Features

- **📖 Interactive Lessons**: Step-by-step sections explaining import/export concepts
- **🔴 Live Examples**: Real-time component previews demonstrating each concept
- **💻 Code Snippets**: Syntax-highlighted code blocks with line numbers
- **📊 Comparison Tables**: Side-by-side comparison of export syntaxes
- **✅ Key Points**: Visual indicators for best practices and common mistakes
- **📚 Recap Section**: Summary of all key concepts covered

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or bun

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd react-lesson-2-playground

# Install dependencies
npm install
# or
yarn install
# or
bun install
```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
# or
bun dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to see the application.

### Building for Production

```bash
npm run build
# or
yarn build
# or
bun run build
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── examples/
│   │   └── lesson2/
│   │       ├── ProfileDefault.tsx    # Default export example
│   │       ├── ProfileNamed.tsx      # Named exports example
│   │       ├── GalleryWithProfile.tsx # Mixed exports example
│   │       ├── RootComponentDemo.tsx  # Root component demo
│   │       └── SplitFilesDemo.tsx    # File splitting demo
│   ├── ui/                           # Shadcn UI components
│   ├── CodeBlock.tsx         # Syntax-highlighted code display
│   ├── ImportExportTable.tsx # Export syntax comparison table
│   ├── KeyPoint.tsx          # Highlighted tips and warnings
│   ├── LessonSection.tsx     # Section wrapper with numbering
│   ├── LiveExample.tsx       # Live preview container
│   └── RecapCard.tsx         # Lesson summary component
├── pages/
│   ├── Index.tsx             # Main lesson page
│   └── NotFound.tsx          # 404 page
├── index.css                 # Global styles and design tokens
└── main.tsx                  # Application entry point
```

---

## 📄 File Explanations

### Core Application Files

| File | Purpose |
|------|---------|
| `src/main.tsx` | **Entry point** - Renders the React app to the DOM |
| `src/App.tsx` | **Root component** - Contains React Router and providers |
| `src/index.css` | **Design system** - CSS custom properties for theming |
| `tailwind.config.ts` | **Tailwind configuration** - Custom colors, fonts, animations |
| `vite.config.ts` | **Build configuration** - Vite settings with path aliases |

### Lesson 2 Example Components

| File | Purpose |
|------|---------|
| `ProfileDefault.tsx` | Demonstrates **default export** - one main export per file |
| `ProfileNamed.tsx` | Demonstrates **named exports** - multiple exports from one file (`Profile`, `ProfileCard`, `ProfileBadge`) |
| `GalleryWithProfile.tsx` | Demonstrates **mixed exports** - combining default and named exports |
| `RootComponentDemo.tsx` | Shows components living together in the **root component file** |
| `SplitFilesDemo.tsx` | Visualizes the recommended **file structure** for organizing components |

### UI Components

| File | Purpose |
|------|---------|
| `CodeBlock.tsx` | Displays code snippets with syntax highlighting and line numbers |
| `ImportExportTable.tsx` | Comparison table showing export/import syntax differences |
| `LessonSection.tsx` | Section wrapper with numbered badge and title |
| `KeyPoint.tsx` | Highlighted tips with correct/incorrect/info variants |
| `LiveExample.tsx` | Container with "Live Preview" header and pulsing indicator |
| `RecapCard.tsx` | Summary card with checkmarked list items |

---

## 📚 Lesson Topics

### 1. The Root Component File
Understanding the main entry point (App.js/App.tsx) where components can coexist.

```tsx
// Both Profile and Gallery in the same file
function Profile() {
  return <img src="..." alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
    </section>
  );
}
```

### 2. Exporting and Importing a Component
How to make components available to other files using export/import.

```tsx
// Gallery.js
export default function Gallery() { /* ... */ }

// App.js
import Gallery from './Gallery.js';
```

### 3. Default vs. Named Exports

| Syntax | Export Statement | Import Statement |
|--------|------------------|------------------|
| Default | `export default function Gallery() { }` | `import Gallery from './Gallery.js'` |
| Named | `export function Profile() { }` | `import { Profile } from './Gallery.js'` |
| Mixed | `export default Gallery; export { Profile }` | `import Gallery, { Profile } from './Gallery.js'` |

### 4. Multiple Exports from Same File

```tsx
// Gallery.js
export function Profile() { /* ... */ }
export function SectionTitle() { /* ... */ }
export default function Gallery() { /* ... */ }

// App.js - Import default AND named exports
import Gallery, { Profile, SectionTitle } from './Gallery.js';
```

### 5. Splitting Components into Multiple Files

Best practices for organizing larger codebases:

```
src/
├── components/
│   ├── Profile.tsx      # export default Profile
│   ├── Gallery.tsx      # import Profile from './Profile'
│   └── App.tsx          # import Gallery from './Gallery'
```

---

## 🧩 Code Examples

### ProfileDefault.tsx (Default Export)

```tsx
const Profile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-24 h-24 rounded-full object-cover"
    />
  );
};

// Default export - only one allowed per file
export default Profile;
```

### ProfileNamed.tsx (Named Exports)

```tsx
// Named export #1
export const Profile = () => {
  return <img src="..." alt="Katherine Johnson" />;
};

// Named export #2
export const ProfileCard = () => {
  return (
    <div>
      <Profile />
      <p>Katherine Johnson</p>
    </div>
  );
};

// Named export #3
export const ProfileBadge = () => {
  return <span>K. Johnson</span>;
};
```

### GalleryWithProfile.tsx (Mixed Exports)

```tsx
// Named export
export const Profile = () => <img src="..." />;

// Named export
export const SectionTitle = ({ children }) => <h2>{children}</h2>;

// Default export (main component)
const Gallery = () => (
  <section>
    <SectionTitle>Amazing Scientists</SectionTitle>
    <Profile />
  </section>
);

export default Gallery;
```

### ImportExportTable.tsx

```tsx
interface ImportExportTableProps {
  data: {
    syntax: string;
    exportStatement: string;
    importStatement: string;
  }[];
}

const ImportExportTable = ({ data }: ImportExportTableProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Syntax</th>
          <th>Export Statement</th>
          <th>Import Statement</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.syntax}</td>
            <td><code>{row.exportStatement}</code></td>
            <td><code>{row.importStatement}</code></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
```

---

## 🎨 Design System

The application uses CSS custom properties for consistent theming:

```css
:root {
  /* Primary Colors */
  --primary: 199 89% 48%;          /* Cyan blue - main brand color */
  --accent: 173 80% 40%;           /* Teal - accent color */
  
  /* Code Syntax Highlighting */
  --code-bg: 220 14% 96%;          /* Code block background */
  --code-keyword: 199 89% 48%;     /* Keywords (function, return, etc.) */
  --code-string: 142 71% 45%;      /* String values */
  
  /* Effects */
  --gradient-hero: linear-gradient(135deg, hsl(199 89% 48%), hsl(173 80% 40%));
  --shadow-glow: 0 0 30px hsl(199 89% 48% / 0.2);
}
```

---

## 🛠 Technologies Used

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | UI library for building components |
| **TypeScript** | 5.x | Type safety and better developer experience |
| **Vite** | 5.x | Fast build tool and development server |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework |
| **React Router** | 6.x | Client-side routing |
| **Lucide React** | 0.462 | Beautiful icon library |
| **Shadcn/ui** | - | Pre-built accessible UI components |

---

## 📝 Key Concepts Summary

| Concept | Syntax | Use Case |
|---------|--------|----------|
| Default Export | `export default Component` | Main component of a file |
| Named Export | `export { Component }` | Multiple exports per file |
| Default Import | `import Component from './file'` | Any name works |
| Named Import | `import { Component } from './file'` | Exact name required |
| Mixed Import | `import Default, { Named }` | Combine both types |

---

## 📖 Recap

- ✅ The root component file (App.js) is the main entry point of your React application
- ✅ Use `export default` for the main component of a file — only one allowed per file
- ✅ Use named exports (`export function`) when you need multiple exports from one file
- ✅ Import default exports without curly braces: `import Gallery from './Gallery'`
- ✅ Import named exports with curly braces: `import { Profile } from './Gallery'`
- ✅ You can mix default and named exports: `import Gallery, { Profile } from './Gallery'`
- ✅ Split components into separate files for better organization and maintainability

---

## 👤 Author

**Luis Coco Enríquez**

---

## 📄 License

This project is open source and available for educational purposes.

---

**React Version**: 19.2  
**Lesson**: 2 - Importing and Exporting Components
