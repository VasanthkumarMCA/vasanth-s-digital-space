import { Linkedin, Github, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/in/your-profile", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/your-profile", label: "GitHub" },
  { icon: Instagram, href: "https://instagram.com/your-profile", label: "Instagram" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-foreground">
          VK<span className="text-accent">.</span>
        </span>
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground icon-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Vasanthakumar R. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
