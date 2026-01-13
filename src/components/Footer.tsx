import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center md:text-left"
              >
                <p className="font-serif text-2xl font-bold mb-2">MARCI METZGER</p>
                <p className="text-sm text-primary-foreground/80">
                  © 2026 Marci Metzger Homes. All rights reserved.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
