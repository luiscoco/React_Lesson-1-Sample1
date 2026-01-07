import { Check } from "lucide-react";

interface RecapCardProps {
  items: string[];
}

const RecapCard = ({ items }: RecapCardProps) => {
  return (
    <div className="bg-gradient-card rounded-xl p-6 border border-border shadow-lg">
      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
        <span className="text-2xl">📚</span> Recap
      </h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li 
            key={index} 
            className="flex items-start gap-3 animate-slide-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Check className="w-3 h-3 text-accent" />
            </div>
            <span className="text-sm text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecapCard;
