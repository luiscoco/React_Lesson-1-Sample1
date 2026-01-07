# React 19.2 Lesson 1 Playground

An interactive educational playground demonstrating the fundamentals of React - **Describing the UI and Creating Your First React Component**.

![React Playground](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

---

## 📚 Table of Contents

- [Features](#-features)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Lesson Topics Covered](#-lesson-topics-covered)
- [Code Examples](#-code-examples)
- [Technologies Used](#-technologies-used)

---

## ✨ Features

- **Interactive Code Examples** - View syntax-highlighted code blocks with line numbers
- **Live Component Previews** - See actual React components rendered in real-time
- **Key Points Visualization** - Correct ✅ and incorrect ❌ patterns clearly displayed
- **Responsive Design** - Works on desktop and mobile devices
- **Beautiful UI** - Modern gradient design with smooth animations
- **Educational Structure** - Content organized into 5 clear sections

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, or bun package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd react-lesson-1-playground
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── examples/                  # Live example components from the lesson
│   │   ├── Gallery.tsx            # Demonstrates component composition
│   │   ├── MyFirstComponent.tsx   # First React component example
│   │   ├── Profile.tsx            # Simple image component
│   │   └── TableOfContents.tsx    # Reusable component demo
│   ├── ui/                        # Shadcn UI components (buttons, cards, etc.)
│   ├── CodeBlock.tsx              # Syntax-highlighted code display
│   ├── KeyPoint.tsx               # Correct/incorrect pattern indicators
│   ├── LessonSection.tsx          # Section container with numbering
│   ├── LiveExample.tsx            # Live preview wrapper
│   └── RecapCard.tsx              # Summary checklist component
├── hooks/                         # Custom React hooks
├── lib/                           # Utility functions
├── pages/
│   ├── Index.tsx                  # Main lesson page
│   └── NotFound.tsx               # 404 page
├── App.tsx                        # Root component with routing
├── index.css                      # Design system (CSS variables)
└── main.tsx                       # Application entry point
```

---

## 📄 File Explanations

### Core Application Files

| File | Purpose |
|------|---------|
| `src/main.tsx` | **Entry point** - Renders the React app to the DOM using `createRoot` |
| `src/App.tsx` | **Root component** - Contains React Router configuration, QueryClient provider, and global UI providers (Toaster, Tooltip) |
| `src/index.css` | **Design system** - Defines all CSS custom properties for colors, shadows, gradients, and theming |
| `tailwind.config.ts` | **Tailwind configuration** - Extends Tailwind with custom colors, fonts, animations, and design tokens |
| `vite.config.ts` | **Build configuration** - Vite bundler settings with path aliases and plugins |

### Page Components

| File | Purpose |
|------|---------|
| `src/pages/Index.tsx` | **Main lesson page** - Renders all 5 lesson sections with code examples, live previews, and the recap card |
| `src/pages/NotFound.tsx` | **404 page** - Displayed when navigating to non-existent routes |

### UI Components

| File | Purpose |
|------|---------|
| `src/components/CodeBlock.tsx` | Displays code snippets with syntax highlighting, line numbers, and a filename header with colored dots |
| `src/components/LessonSection.tsx` | Wraps each lesson topic with a numbered badge and title, includes staggered fade-in animation |
| `src/components/KeyPoint.tsx` | Shows tips/rules with three variants: `correct` (green), `incorrect` (red), `info` (blue) |
| `src/components/LiveExample.tsx` | Container with a gradient header showing "Live Preview" with a pulsing indicator |
| `src/components/RecapCard.tsx` | Summary card displaying checkmarked list items with slide-in animations |

### Example Components (from the Lesson)

| File | Purpose |
|------|---------|
| `src/components/examples/MyFirstComponent.tsx` | **Section 1 example** - Demonstrates a basic React component returning JSX with an article, heading, and ordered list |
| `src/components/examples/Profile.tsx` | **Section 3 example** - Shows a simple component rendering a single image element with styling |
| `src/components/examples/Gallery.tsx` | **Section 4 example** - Demonstrates component composition by importing and using `Profile` three times |
| `src/components/examples/TableOfContents.tsx` | **Section 2 example** - Shows the reusable component pattern with `TableOfContents` used twice in `Page` |

### Utility Files

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | Contains the `cn()` utility function for merging Tailwind classes |
| `src/hooks/use-mobile.tsx` | Custom hook for detecting mobile viewport |
| `src/hooks/use-toast.ts` | Toast notification hook from Shadcn |

---

## 📖 Lesson Topics Covered

### Section 1: Understanding React and the UI
React is a JavaScript library for building user interfaces from reusable components. Shows the comparison between regular HTML and React component syntax.

### Section 2: Components as UI Building Blocks
Create custom tags (like `<TableOfContents />`) that can be reused throughout your application multiple times.

### Section 3: Defining a Component
A React component is a JavaScript function that returns JSX markup. Key rules: capital letter names, return JSX, wrap multi-line JSX in parentheses.

### Section 4: Using Components
Nest components inside other components to build complex UIs. React distinguishes lowercase (HTML) from Uppercase (components).

### Section 5: Nesting and Organizing Components
Best practices: define components at the top level, never nest component definitions inside other components.

---

## 💻 Code Examples

### Creating Your First Component

```tsx
// src/components/examples/MyFirstComponent.tsx
export default function MyFirstComponent() {
  return (
    <article className="space-y-3">
      <h1 className="text-xl font-bold text-foreground">My First Component</h1>
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
}
```

### Simple Image Component

```tsx
// src/components/examples/Profile.tsx
export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-md"
    />
  );
}
```

### Component Composition

```tsx
// src/components/examples/Gallery.tsx
import Profile from "./Profile";

export default function Gallery() {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold text-foreground">Amazing Scientists</h1>
      <div className="flex gap-4 flex-wrap">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}
```

### Reusable Component Pattern

```tsx
// src/components/examples/TableOfContents.tsx
function TableOfContents() {
  return (
    <article className="p-4 bg-secondary rounded-lg border border-border">
      <h2 className="text-lg font-semibold text-foreground mb-2">Table of Contents</h2>
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
}

export default function Page() {
  return (
    <div className="space-y-4">
      <TableOfContents />
      <TableOfContents />
    </div>
  );
}
```

### Code Display Component

```tsx
// src/components/CodeBlock.tsx
interface CodeBlockProps {
  code: string;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, title, showLineNumbers = true }: CodeBlockProps) => {
  const lines = code.trim().split('\n');

  const highlightSyntax = (line: string) => {
    return line
      .replace(/(function|return|export|default|const|let|import|from)/g, 
        '<span class="text-code-keyword font-semibold">$1</span>')
      .replace(/("[^"]*")/g, '<span class="text-code-string">$1</span>');
  };

  return (
    <div className="rounded-lg overflow-hidden bg-code-bg border border-border shadow-md">
      {title && (
        <div className="px-4 py-2 bg-secondary border-b border-border">
          <span className="font-mono text-sm text-muted-foreground">{title}</span>
        </div>
      )}
      <pre className="p-4 font-mono text-sm leading-relaxed">
        {lines.map((line, index) => (
          <div key={index} className="flex">
            {showLineNumbers && (
              <span className="select-none text-muted-foreground/50 w-8">{index + 1}</span>
            )}
            <code dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }} />
          </div>
        ))}
      </pre>
    </div>
  );
};

export default CodeBlock;
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
| **TanStack Query** | 5.x | Data fetching and caching |

---

## 🎨 Design System

The app uses CSS custom properties for consistent theming. Key design tokens:

```css
:root {
  /* Primary Colors */
  --primary: 199 89% 48%;          /* Cyan blue - main brand color */
  --accent: 173 80% 40%;           /* Teal - accent color */
  
  /* Code Syntax Highlighting */
  --code-bg: 220 14% 96%;          /* Code block background */
  --code-keyword: 199 89% 48%;     /* Keywords (function, return, etc.) */
  --code-string: 142 71% 45%;      /* String values */
  --code-component: 280 65% 60%;   /* Component names */
  --code-tag: 25 95% 53%;          /* JSX tags */
  
  /* Effects */
  --gradient-hero: linear-gradient(135deg, hsl(199 89% 48%), hsl(173 80% 40%));
  --shadow-glow: 0 0 30px hsl(199 89% 48% / 0.2);
}
```

---

## 📝 Key Concepts Recap

- ✅ React is a JavaScript library for building user interfaces
- ✅ The UI is made up of components, which are reusable building blocks
- ✅ A React component is a JavaScript function that returns JSX markup
- ✅ Component names must always start with a capital letter
- ✅ You can reuse components anywhere in your app
- ✅ Components can be nested inside others, forming a tree structure
- ✅ Define all components at the top level — never inside another component

---

## 👤 Author

**Luis Coco Enríquez**

---

## 📄 License

This project is open source and available for educational purposes.
