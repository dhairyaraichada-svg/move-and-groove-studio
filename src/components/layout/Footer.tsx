import { Link } from "react-router-dom";
import { Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Dance Classes", path: "/classes" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const danceStyles = [
    "Classical Dance",
    "Semi-Classical",
    "Bollywood",
    "Hip-Hop",
    "Contemporary",
    "Freestyle",
    "Dance Fitness",
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="text-3xl font-display font-bold gradient-text">
                V can Dance
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Where passion meets discipline and fun. Join us to discover the
              dancer within you through our diverse range of dance styles.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-primary/20 transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-secondary/20 transition-colors group"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5 text-muted-foreground group-hover:text-secondary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dance Styles */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Dance Styles
            </h4>
            <ul className="space-y-3">
              {danceStyles.map((style) => (
                <li key={style}>
                  <Link
                    to="/classes"
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {style}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 text-foreground">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Dance Studio Address,
                  <br />
                  City, State - PIN
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+919876543210"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@vcandance.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@vcandance.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} V can Dance. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Dance is for everyone 💃
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
