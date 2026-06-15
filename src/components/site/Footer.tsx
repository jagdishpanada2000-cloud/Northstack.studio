export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-white" />
          <span className="font-semibold tracking-tight">WebsCraft</span>
        </div>

        <div className="text-xs text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} WebsCraft
        </div>
      </div>
    </footer>
  );
}
