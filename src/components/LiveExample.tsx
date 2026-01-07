import { ReactNode } from "react";

interface LiveExampleProps {
  title: string;
  children: ReactNode;
}

const LiveExample = ({ title, children }: LiveExampleProps) => {
  return (
    <div className="rounded-lg overflow-hidden border border-border bg-card shadow-md animate-scale-in">
      <div className="px-4 py-2 bg-gradient-hero text-primary-foreground text-sm font-medium flex items-center gap-2">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-foreground opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-foreground"></span>
        </span>
        Live Preview: {title}
      </div>
      <div className="p-6 bg-card">
        {children}
      </div>
    </div>
  );
};

export default LiveExample;
