import { useState, useEffect } from "react";
import logo from "@/assets/MarciLogo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [showNavigation, setShowNavigation] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#neighborhoods", label: "Community Photos" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // Close menu after clicking
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset || window.scrollY;
      
      // Show navigation after scrolling past hero
      if (currentScrollY > 100) {
        setShowNavigation(true);
      } else {
        setShowNavigation(false);
        setIsMobileMenuOpen(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]);

  if (!showNavigation) return null;

  return (
    <motion.header 
      initial={false}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 right-0 z-[9999] bg-white border-b shadow-md"
    >
      <div className="w-full px-4 py-3 md:py-4">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity" onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}>
            <img 
              src={logo}
              alt="Marci Metzger Homes" 
              className="h-10 md:h-14 lg:h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation - Inline with header */}
          {showNavigation && (
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="text-primary font-serif font-semibold text-base tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          )}

          {/* Hamburger Menu Button - Mobile Only */}
          {showNavigation && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-primary hover:text-accent transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && showNavigation && (
            <div className="md:hidden overflow-hidden border-t mt-3 pt-3">
              <div className="flex flex-col space-y-3 pb-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-primary font-serif font-bold text-lg tracking-wide hover:text-accent transition-colors duration-300 cursor-pointer py-2 border-b border-gray-200 last:border-0"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
