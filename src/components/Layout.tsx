import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const signupPath = "/register";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <nav className="container flex items-center justify-between py-6">
          <Link to="/" className="font-display text-2xl tracking-tight" aria-label="Medorbis AI home">
            Medorbis AI
          </Link>
          <div className="flex items-center gap-3">
            <NavLink to="/#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </NavLink>
            <NavLink to="/#video" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Intro
            </NavLink>
            <NavLink to="/login" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Login
            </NavLink>
            <Button asChild>
              <Link to={signupPath} aria-label="Sign up to Medorbis AI">Sign Up</Link>
            </Button>
          </div>
        </nav>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t mt-12">
        <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-muted-foreground">© {new Date().getFullYear()} Medorbis AI. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <NavLink to="/privacy-policy" className="text-muted-foreground hover:text-foreground">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms" className="text-muted-foreground hover:text-foreground">
              Terms
            </NavLink>
            <NavLink to="/refund-policy" className="text-muted-foreground hover:text-foreground">
              Refund Policy
            </NavLink>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
