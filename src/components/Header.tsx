import { useState, useEffect } from "react";
import logo from "@/assets/MarciLogo.png";

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header at the very top (hero section)
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b shadow-sm transition-transform duration-300 ${
      isVisible ? "translate-y-0" : "-translate-y-full"
    }`}>
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center">
          {/* Centered Logo */}
          <a href="#home" className="flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo}
              alt="Marci Metzger Homes" 
              className="h-16 md:h-20 w-auto"
            />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
