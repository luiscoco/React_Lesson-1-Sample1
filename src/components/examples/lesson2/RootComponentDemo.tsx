// This demonstrates a ROOT COMPONENT FILE
// In a typical React app, this would be App.tsx or App.js
// It contains all components in one file - fine for small examples

// Profile component - defined in the same file
function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-md"
    />
  );
}

// Gallery component - uses Profile internally
function Gallery() {
  return (
    <section className="p-4 bg-card rounded-lg border border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">Amazing Scientists</h2>
      <div className="flex gap-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
}

// Root component - the main entry point
const RootComponentDemo = () => {
  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Both <code className="px-1 py-0.5 bg-muted rounded text-primary">Profile</code> and{" "}
        <code className="px-1 py-0.5 bg-muted rounded text-primary">Gallery</code> are defined in the same file.
      </p>
      <Gallery />
      <p className="text-xs text-muted-foreground italic">
        ⚠️ This is fine for short examples, but as the app grows, you'll want to split them into separate files.
      </p>
    </div>
  );
};

export default RootComponentDemo;
