// This demonstrates the RECOMMENDED structure: splitting components into separate files
// In a real project, each of these would be in its own file

// Simulating: Profile.tsx
const ProfileFromFile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-20 h-20 rounded-full object-cover border-2 border-accent shadow-md"
    />
  );
};

// Simulating: Gallery.tsx - imports Profile from './Profile'
const GalleryFromFile = () => {
  return (
    <section className="p-4 bg-card rounded-lg border border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">Amazing Scientists</h2>
      <div className="flex gap-4">
        <ProfileFromFile />
        <ProfileFromFile />
        <ProfileFromFile />
      </div>
    </section>
  );
};

// File structure visualization
const FileStructure = () => {
  return (
    <div className="font-mono text-sm bg-muted/50 p-4 rounded-lg border border-border">
      <div className="text-muted-foreground">src/</div>
      <div className="pl-4">
        <div className="text-muted-foreground">├── components/</div>
        <div className="pl-4">
          <div className="text-primary">├── Profile.tsx</div>
          <div className="text-primary">├── Gallery.tsx</div>
        </div>
        <div className="text-accent">└── App.tsx</div>
      </div>
    </div>
  );
};

const SplitFilesDemo = () => {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium text-foreground mb-2">📁 Recommended File Structure:</h3>
        <FileStructure />
      </div>
      <div>
        <h3 className="text-sm font-medium text-foreground mb-2">✨ Result:</h3>
        <GalleryFromFile />
      </div>
      <p className="text-xs text-muted-foreground">
        Each component in its own file makes the codebase easier to maintain and navigate.
      </p>
    </div>
  );
};

export default SplitFilesDemo;
