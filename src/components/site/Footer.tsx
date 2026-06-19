export function Footer() {
  return (
    <footer className="dark-section border-t border-border">
      <div className="mx-auto max-w-7xl px-8 pb-8 pt-16 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-md bg-white" />
          <span className="font-semibold tracking-tight">WebsCraft</span>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 text-xs text-[color:var(--muted-foreground)]">
          <a href="mailto:hello@webscraft.in" className="hover:text-primary transition-colors">
            hello@webscraft.in
          </a>
          <a
            href="https://instagram.com/webscraft.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Instagram
          </a>
          <a href="/privacy" className="hover:text-primary transition-colors">
            Privacy
          </a>
          <a href="/terms" className="hover:text-primary transition-colors">
            Terms
          </a>
        </div>

        <div className="text-xs text-[color:var(--muted-foreground)]">
          © {new Date().getFullYear()} WebsCraft
        </div>
      </div>
    </footer>
  );
}
