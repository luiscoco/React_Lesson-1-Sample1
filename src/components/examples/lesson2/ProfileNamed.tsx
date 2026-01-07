// This file demonstrates NAMED EXPORTS
// You can have MULTIPLE named exports per file
// When importing: import { Profile, ProfileCard } from './ProfileNamed'

// Named export #1
export const Profile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-md"
    />
  );
};

// Named export #2
export const ProfileCard = () => {
  return (
    <div className="p-4 bg-card rounded-lg border border-border shadow-sm">
      <Profile />
      <p className="mt-2 text-sm text-muted-foreground">Katherine Johnson</p>
    </div>
  );
};

// Named export #3
export const ProfileBadge = () => {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full">
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
        className="w-6 h-6 rounded-full object-cover"
      />
      <span className="text-xs font-medium text-primary">K. Johnson</span>
    </div>
  );
};
