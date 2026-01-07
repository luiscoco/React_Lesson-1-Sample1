import { ReactNode } from "react";

interface LessonSectionProps {
  number: number;
  title: string;
  children: ReactNode;
}

const LessonSection = ({ number, title, children }: LessonSectionProps) => {
  return (
    <section className="py-12 border-b border-border last:border-b-0 animate-fade-in" style={{ animationDelay: `${number * 100}ms` }}>
      <div className="flex items-center gap-4 mb-6">
        <div className="w-10 h-10 rounded-full bg-gradient-hero flex items-center justify-center text-primary-foreground font-semibold shadow-glow">
          {number}
        </div>
        <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
      </div>
      <div className="pl-14">
        {children}
      </div>
    </section>
  );
};

export default LessonSection;
