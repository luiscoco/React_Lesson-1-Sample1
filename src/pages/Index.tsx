import CodeBlock from "@/components/CodeBlock";
import LessonSection from "@/components/LessonSection";
import KeyPoint from "@/components/KeyPoint";
import LiveExample from "@/components/LiveExample";
import RecapCard from "@/components/RecapCard";
import MyFirstComponent from "@/components/examples/MyFirstComponent";
import Profile from "@/components/examples/Profile";
import Gallery from "@/components/examples/Gallery";
import Page from "@/components/examples/TableOfContents";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="bg-gradient-hero text-primary-foreground py-16 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary-foreground/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-foreground animate-pulse" />
            React 19.2 Playground
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: "100ms" }}>
            Lesson 1
          </h1>
          <p className="text-xl opacity-90 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Describing the UI and Creating Your First React Component
          </p>
          <p className="mt-4 text-sm opacity-75 animate-fade-in" style={{ animationDelay: "300ms" }}>
            by Luis Coco Enríquez
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container max-w-4xl mx-auto px-6 py-12">
        
        {/* Section 1: Understanding React */}
        <LessonSection number={1} title="Understanding React and the UI">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              React is a JavaScript library for building user interfaces — everything that users see and interact with.
              A UI is built from smaller parts: buttons, text, images, and layouts. React lets you group these parts 
              into <strong className="text-foreground">components</strong> that can be reused.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">Regular HTML:</h4>
                <CodeBlock
                  title="index.html"
                  code={`<article>
  <h1>My First Component</h1>
  <ol>
    <li>Components: UI Building Blocks</li>
    <li>Defining a Component</li>
    <li>Using a Component</li>
  </ol>
</article>`}
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">React Component:</h4>
                <CodeBlock
                  title="MyFirstComponent.tsx"
                  code={`export default function MyFirstComponent() {
  return (
    <article>
      <h1>My First Component</h1>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
}`}
                />
              </div>
            </div>

            <LiveExample title="MyFirstComponent">
              <MyFirstComponent />
            </LiveExample>
          </div>
        </LessonSection>

        {/* Section 2: Components as Building Blocks */}
        <LessonSection number={2} title="Components: UI Building Blocks">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              React lets you create your own custom tags, just like HTML provides built-in tags. 
              You can then reuse those custom tags as many times as you want.
            </p>

            <CodeBlock
              title="TableOfContents.tsx"
              code={`function TableOfContents() {
  return (
    <article>
      <h2>Table of Contents</h2>
      <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
}

function Page() {
  return (
    <div>
      <TableOfContents />
      <TableOfContents />
    </div>
  );
}`}
            />

            <LiveExample title="Reusable TableOfContents">
              <Page />
            </LiveExample>
          </div>
        </LessonSection>

        {/* Section 3: Defining a Component */}
        <LessonSection number={3} title="Defining a Component">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              A React component is a JavaScript function that returns UI markup. 
              This markup uses JSX, a syntax that looks like HTML but runs inside JavaScript.
            </p>

            <CodeBlock
              title="Profile.tsx"
              code={`export default function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}`}
            />

            <LiveExample title="Profile Component">
              <Profile />
            </LiveExample>

            <h4 className="text-lg font-medium text-foreground mt-8 mb-4">Key Points:</h4>
            <div className="space-y-3">
              <KeyPoint type="info">The function name must start with a capital letter.</KeyPoint>
              <KeyPoint type="info">The component must return JSX.</KeyPoint>
              <KeyPoint type="info">JSX must be wrapped in parentheses if it spans multiple lines.</KeyPoint>
            </div>

            <div className="grid gap-4 md:grid-cols-2 mt-6">
              <div>
                <KeyPoint type="correct">
                  <div className="font-mono text-xs">
                    return (<br />
                    &nbsp;&nbsp;&lt;div&gt;&lt;p&gt;Hello!&lt;/p&gt;&lt;/div&gt;<br />
                    );
                  </div>
                </KeyPoint>
              </div>
              <div>
                <KeyPoint type="incorrect">
                  <div className="font-mono text-xs">
                    return<br />
                    &nbsp;&nbsp;&lt;div&gt;Hello!&lt;/div&gt;;<br />
                    <span className="text-destructive">(missing parentheses)</span>
                  </div>
                </KeyPoint>
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Section 4: Using Components */}
        <LessonSection number={4} title="Using Components">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Once a component is defined, you can use it inside another component.
              React distinguishes between HTML elements and React components by their case.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <KeyPoint type="info">
                <strong>lowercase names</strong> like <code className="px-1 py-0.5 bg-code-bg rounded font-mono text-xs">section</code> → HTML elements
              </KeyPoint>
              <KeyPoint type="info">
                <strong>Uppercase names</strong> like <code className="px-1 py-0.5 bg-code-bg rounded font-mono text-xs">Profile</code> → React components
              </KeyPoint>
            </div>

            <CodeBlock
              title="Gallery.tsx"
              code={`import Profile from "./Profile";

export default function Gallery() {
  return (
    <section>
      <h1>Amazing Scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}`}
            />

            <LiveExample title="Gallery with Multiple Profiles">
              <Gallery />
            </LiveExample>
          </div>
        </LessonSection>

        {/* Section 5: Nesting and Organizing */}
        <LessonSection number={5} title="Nesting and Organizing Components">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed">
              Best practice: define all components at the top level, not inside another component.
              You can keep multiple small components in the same file.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">❌ Avoid this pattern:</h4>
                <CodeBlock
                  title="Gallery.tsx"
                  showLineNumbers={false}
                  code={`export default function Gallery() {
  function Profile() { /* ... */ }
  // ❌ Nested definition
  return <Profile />;
}`}
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-muted-foreground mb-3">✅ Correct pattern:</h4>
                <CodeBlock
                  title="Gallery.tsx"
                  showLineNumbers={false}
                  code={`function Profile() { /* ... */ }

export default function Gallery() {
  return <Profile />;
}`}
                />
              </div>
            </div>
          </div>
        </LessonSection>

        {/* Recap */}
        <section className="py-12">
          <RecapCard
            items={[
              "React is a JavaScript library for building user interfaces.",
              "The UI is made up of components, which are reusable building blocks.",
              "A React component is a JavaScript function that returns JSX markup, which looks like HTML.",
              "Component names always start with a capital letter.",
              "You can reuse components anywhere in your app.",
              "Components can be nested inside others, forming a tree structure.",
              "Define all components at the top level — never inside another component.",
            ]}
          />
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center text-sm text-muted-foreground">
        <p>React 19.2 Lesson 1 Playground • Built with ❤️ for learning</p>
      </footer>
    </div>
  );
};

export default Index;
