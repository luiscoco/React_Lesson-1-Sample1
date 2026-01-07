import { Check, X } from "lucide-react";

interface KeyPointProps {
  type: "correct" | "incorrect" | "info";
  children: React.ReactNode;
}

const KeyPoint = ({ type, children }: KeyPointProps) => {
  const styles = {
    correct: "bg-accent/10 border-accent text-foreground",
    incorrect: "bg-destructive/10 border-destructive text-foreground",
    info: "bg-primary/10 border-primary text-foreground",
  };

  const icons = {
    correct: <Check className="w-5 h-5 text-accent" />,
    incorrect: <X className="w-5 h-5 text-destructive" />,
    info: <div className="w-2 h-2 rounded-full bg-primary" />,
  };

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border-l-4 ${styles[type]} animate-slide-in`}>
      <div className="flex-shrink-0 mt-0.5">{icons[type]}</div>
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  );
};

export default KeyPoint;
