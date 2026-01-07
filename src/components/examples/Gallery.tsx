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
