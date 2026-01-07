function TableOfContents() {
  return (
    <article className="p-4 bg-secondary rounded-lg border border-border">
      <h2 className="text-lg font-semibold text-foreground mb-2">Table of Contents</h2>
      <ol className="list-decimal list-inside space-y-1 text-muted-foreground text-sm">
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
      </ol>
    </article>
  );
}

export default function Page() {
  return (
    <div className="space-y-4">
      <TableOfContents />
      <TableOfContents />
    </div>
  );
}
