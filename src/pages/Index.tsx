import LessonSection from "@/components/LessonSection";
import CodeBlock from "@/components/CodeBlock";
import KeyPoint from "@/components/KeyPoint";
import LiveExample from "@/components/LiveExample";
import RecapCard from "@/components/RecapCard";
import ImportExportTable from "@/components/ImportExportTable";
import RootComponentDemo from "@/components/examples/lesson2/RootComponentDemo";
import ProfileDefault from "@/components/examples/lesson2/ProfileDefault";
import { Profile, ProfileCard, ProfileBadge } from "@/components/examples/lesson2/ProfileNamed";
import Gallery, { SectionTitle } from "@/components/examples/lesson2/GalleryWithProfile";
import SplitFilesDemo from "@/components/examples/lesson2/SplitFilesDemo";

const Index = () => {
  const importExportData = [
    {
      syntax: "Default",
      exportStatement: "export default function Gallery() { }",
      importStatement: "import Gallery from './Gallery.js'",
    },
    {
      syntax: "Named",
      exportStatement: "export function Profile() { }",
      importStatement: "import { Profile } from './Gallery.js'",
    },
    {
      syntax: "Mixed",
      exportStatement: "export default Gallery; export { Profile }",
      importStatement: "import Gallery, { Profile } from './Gallery.js'",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero py-16 px-6 shadow-glow">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-background/10 backdrop-blur rounded-full text-primary-foreground text-sm mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
            </span>
            React 19.2 Tutorial
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 animate-slide-in">
            Lesson 2: Importing and Exporting Components
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
            Learn how to organize your React components across multiple files using imports and exports
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Section 1: Root Component File */}
        <LessonSection number={1} title="The Root Component File">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              In a typical React app, components start in a root file (like <code className="px-2 py-1 bg-muted rounded text-primary">App.js</code> or <code className="px-2 py-1 bg-muted rounded text-primary">App.tsx</code>). 
              Both <code className="px-2 py-1 bg-muted rounded text-primary">Profile</code> and <code className="px-2 py-1 bg-muted rounded text-primary">Gallery</code> can live in the same file.
            </p>

            <CodeBlock
              title="App.js (Root Component)"
              code={`function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`}
            />

            <LiveExample title="Root Component Demo">
              <RootComponentDemo />
            </LiveExample>

            <KeyPoint type="info">
              This pattern is fine for short examples, but as your app grows, you'll want to split components into separate files for better organization and maintainability.
            </KeyPoint>
          </div>
        </LessonSection>

        {/* Section 2: Exporting and Importing */}
        <LessonSection number={2} title="Exporting and Importing a Component">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              To use a component from another file, you need to <strong>export</strong> it from the source file and <strong>import</strong> it in the destination file.
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <CodeBlock
                title="Gallery.js"
                code={`export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
    </section>
  );
}`}
              />
              <CodeBlock
                title="App.js"
                code={`import Gallery from './Gallery.js';

export default function App() {
  return <Gallery />;
}`}
              />
            </div>

            <LiveExample title="Default Export Import">
              <div className="flex items-center gap-4">
                <ProfileDefault />
                <div>
                  <p className="text-sm font-medium text-foreground">Katherine Johnson</p>
                  <p className="text-xs text-muted-foreground">Imported using default export</p>
                </div>
              </div>
            </LiveExample>

            <KeyPoint type="correct">
              <code className="px-1 bg-muted rounded">export default</code> makes a component the main export of its file. You can import it with any name you want.
            </KeyPoint>
          </div>
        </LessonSection>

        {/* Section 3: Default vs Named Exports */}
        <LessonSection number={3} title="Default vs. Named Exports">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              JavaScript offers two main ways to export values: <strong>default exports</strong> and <strong>named exports</strong>.
            </p>

            <ImportExportTable data={importExportData} />

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Default Export</h3>
                <CodeBlock
                  title="Gallery.js"
                  code={`export default function Gallery() {
  // ...
}`}
                  showLineNumbers={false}
                />
                <CodeBlock
                  title="Importing"
                  code={`import Gallery from './Gallery.js';
// OR with any name:
import MyGallery from './Gallery.js';`}
                  showLineNumbers={false}
                />
                <KeyPoint type="info">
                  Only <strong>one</strong> default export per file. Can be imported with any name.
                </KeyPoint>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Named Export</h3>
                <CodeBlock
                  title="Gallery.js"
                  code={`export function Profile() {
  // ...
}`}
                  showLineNumbers={false}
                />
                <CodeBlock
                  title="Importing"
                  code={`import { Profile } from './Gallery.js';
// Must use exact name (or alias):
import { Profile as UserProfile } from './Gallery.js';`}
                  showLineNumbers={false}
                />
                <KeyPoint type="info">
                  <strong>Multiple</strong> named exports per file. Must import with exact name (or use alias).
                </KeyPoint>
              </div>
            </div>

            <LiveExample title="Named Exports in Action">
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">Three named exports from the same file:</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="text-center">
                    <Profile />
                    <p className="text-xs text-muted-foreground mt-2">Profile</p>
                  </div>
                  <ProfileCard />
                  <ProfileBadge />
                </div>
              </div>
            </LiveExample>
          </div>
        </LessonSection>

        {/* Section 4: Multiple Exports from Same File */}
        <LessonSection number={4} title="Exporting Multiple Components from the Same File">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              You can mix default and named exports in a single file. This is useful when you have a main component with helper components.
            </p>

            <CodeBlock
              title="Gallery.js"
              code={`// Named export
export function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

// Named export
export function SectionTitle({ children }) {
  return <h2 className="title">{children}</h2>;
}

// Default export (main component)
export default function Gallery() {
  return (
    <section>
      <SectionTitle>Amazing scientists</SectionTitle>
      <Profile />
    </section>
  );
}`}
            />

            <CodeBlock
              title="App.js (Importing mixed exports)"
              code={`// Import default AND named exports together
import Gallery, { Profile, SectionTitle } from './Gallery.js';

export default function App() {
  return (
    <div>
      <Gallery />
      <SectionTitle>Featured</SectionTitle>
      <Profile />
    </div>
  );
}`}
            />

            <LiveExample title="Mixed Exports Demo">
              <div className="space-y-4">
                <div className="p-3 bg-muted/30 rounded-lg">
                  <SectionTitle>Custom Section Title (Named Export)</SectionTitle>
                  <p className="text-sm text-muted-foreground">Used independently from the default export</p>
                </div>
                <Gallery />
              </div>
            </LiveExample>

            <KeyPoint type="correct">
              Mixing exports lets you expose helper components while keeping a clear main component as the default.
            </KeyPoint>
          </div>
        </LessonSection>

        {/* Section 5: Splitting into Multiple Files */}
        <LessonSection number={5} title="Splitting Components into Multiple Files">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              For larger projects, it's best practice to keep each component in its own file. This makes your codebase easier to navigate and maintain.
            </p>

            <div className="grid md:grid-cols-3 gap-4">
              <CodeBlock
                title="Profile.js"
                code={`export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/..."
      alt="Katherine Johnson"
    />
  );
}`}
              />
              <CodeBlock
                title="Gallery.js"
                code={`import Profile from './Profile.js';

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`}
              />
              <CodeBlock
                title="App.js"
                code={`import Gallery from './Gallery.js';

export default function App() {
  return (
    <Gallery />
  );
}`}
              />
            </div>

            <LiveExample title="Split Files Demo">
              <SplitFilesDemo />
            </LiveExample>

            <div className="grid md:grid-cols-2 gap-4">
              <KeyPoint type="correct">
                <strong>One component per file</strong> makes code easier to find and reduces merge conflicts in team projects.
              </KeyPoint>
              <KeyPoint type="correct">
                <strong>Clear import paths</strong> show component dependencies at a glance.
              </KeyPoint>
            </div>

            <KeyPoint type="incorrect">
              Avoid putting too many components in a single file — it becomes hard to navigate and maintain as the app grows.
            </KeyPoint>
          </div>
        </LessonSection>

        {/* Recap */}
        <section className="py-12 animate-fade-in">
          <RecapCard
            items={[
              "The root component file (App.js) is the main entry point of your React application",
              "Use 'export default' for the main component of a file — only one allowed per file",
              "Use named exports ('export function') when you need multiple exports from one file",
              "Import default exports without curly braces: import Gallery from './Gallery'",
              "Import named exports with curly braces: import { Profile } from './Gallery'",
              "You can mix default and named exports: import Gallery, { Profile } from './Gallery'",
              "Split components into separate files for better organization and maintainability",
            ]}
          />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/30 border-t border-border py-8 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            React 19.2 Tutorial — Lesson 2: Importing and Exporting Components
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            By Luis Coco Enríquez
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
