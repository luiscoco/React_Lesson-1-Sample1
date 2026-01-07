// This file demonstrates a DEFAULT EXPORT
// You can only have ONE default export per file
// When importing: import Profile from './ProfileDefault'

const Profile = () => {
  return (
    <img
      src="https://i.imgur.com/MK3eW3As.jpg"
      alt="Katherine Johnson"
      className="w-24 h-24 rounded-full object-cover border-2 border-primary shadow-md"
    />
  );
};

// Default export - only one allowed per file
export default Profile;
