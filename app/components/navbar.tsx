import { Link } from "lucide-react";
import React from "react";
import { TypographySmall } from "./typography";
import { ModeToggle } from "./theme-toggle";

type NavItem = {
  label: string;
  url: string;
};

interface NavbarProps {
  brandName: string;
}

const navLinks: NavItem[] = [
  { label: "Home", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "About", url: "/about" },
];

const Navbar: React.FC<NavbarProps> = ({ brandName }) => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-background text-foreground shadow-md">
      {/* Brand / Logo Section */}
      <div className="flex-1">
        <Link
          href="/"
          className="text-sm font-bold tracking-tight text-foreground hover:text-foreground/90 transition-colors"
        >
          {brandName}
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center gap-16 m-0 p-0 list-none">
        {navLinks.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-foreground hover:text-foreground/90 transition-colors duration-300"
            >
              <TypographySmall>{link.label}</TypographySmall>
            </a>
          </li>
        ))}
      </ul>

      {/* Theme Toggle */}
      <div className="flex-1 flex justify-end">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
