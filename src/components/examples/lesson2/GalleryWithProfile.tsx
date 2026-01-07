// This file demonstrates MIXED EXPORTS
// One default export + multiple named exports in the same file
// When importing: import Gallery, { Profile, SectionTitle } from './GalleryWithProfile'

// Named export
export const Profile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-20 h-20 rounded-full object-cover border-2 border-primary shadow-md"
    />
  );
};

// Named export
export const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-xl font-semibold text-foreground mb-4">{children}</h2>
  );
};

// Default export - the main component of this file
const Gallery = () => {
  return (
    <section className="p-4 bg-card rounded-lg border border-border">
      <SectionTitle>Amazing Scientists</SectionTitle>
      <div className="flex gap-4">
        <Profile />
        <Profile />
        <Profile />
      </div>
    </section>
  );
};

export default Gallery;
