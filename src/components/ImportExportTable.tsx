interface ImportExportTableProps {
  data: {
    syntax: string;
    exportStatement: string;
    importStatement: string;
  }[];
}

const ImportExportTable = ({ data }: ImportExportTableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gradient-hero text-primary-foreground">
            <th className="px-4 py-3 text-left font-medium">Syntax</th>
            <th className="px-4 py-3 text-left font-medium">Export Statement</th>
            <th className="px-4 py-3 text-left font-medium">Import Statement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr 
              key={index} 
              className="border-t border-border bg-card hover:bg-muted/50 transition-colors"
            >
              <td className="px-4 py-3 font-medium text-foreground">{row.syntax}</td>
              <td className="px-4 py-3">
                <code className="text-xs bg-muted px-2 py-1 rounded text-primary font-mono">
                  {row.exportStatement}
                </code>
              </td>
              <td className="px-4 py-3">
                <code className="text-xs bg-muted px-2 py-1 rounded text-accent font-mono">
                  {row.importStatement}
                </code>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ImportExportTable;
