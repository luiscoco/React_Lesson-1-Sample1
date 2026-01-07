interface CodeBlockProps {
  code: string;
  title?: string;
  showLineNumbers?: boolean;
}

const CodeBlock = ({ code, title, showLineNumbers = true }: CodeBlockProps) => {
  const lines = code.trim().split('\n');

  const highlightSyntax = (line: string) => {
    // Escape HTML first
    const escaped = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    // Then apply syntax highlighting
    return escaped
      .replace(/\b(function|return|export|default|const|let|import|from)\b/g, '<span class="text-code-keyword font-semibold">$1</span>')
      .replace(/(&lt;\/?\w+)/g, '<span class="text-code-tag">$1</span>')
      .replace(/(\/&gt;|&gt;)/g, '<span class="text-code-tag">$1</span>')
      .replace(/("[^"]*")/g, '<span class="text-code-string">$1</span>')
      .replace(/(\{|\}|\(|\))/g, '<span class="text-muted-foreground">$1</span>');
  };

  return (
    <div className="rounded-lg overflow-hidden bg-code-bg border border-border shadow-md animate-scale-in">
      {title && (
        <div className="px-4 py-2 bg-secondary border-b border-border flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <span className="font-mono text-sm text-muted-foreground ml-2">{title}</span>
        </div>
      )}
      <div className="overflow-x-auto">
        <pre className="p-4 font-mono text-sm leading-relaxed">
          {lines.map((line, index) => (
            <div key={index} className="flex">
              {showLineNumbers && (
                <span className="select-none text-muted-foreground/50 w-8 flex-shrink-0 text-right pr-4">
                  {index + 1}
                </span>
              )}
              <code
                className="text-code-text"
                dangerouslySetInnerHTML={{ __html: highlightSyntax(line) }}
              />
            </div>
          ))}
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
