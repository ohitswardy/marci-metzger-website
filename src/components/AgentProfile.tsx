import agentProfile from "@/assets/agent-profile.jpg";
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const AgentProfile = () => {
  return (
    <section id="about" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-6"
          >
            MARCI METZGER
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <img 
              src={agentProfile} 
              alt="Marci Metzger - Professional Realtor" 
              className="w-48 h-48 rounded-full mx-auto object-cover border-4 border-accent shadow-2xl"
            />
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl font-semibold mb-2 uppercase tracking-wider"
          >
            The Ridge Realty Group | Realtor®
          </motion.h3>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a href="tel:702-555-0123" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Phone className="w-5 h-5" />
              <span className="text-lg">(206) 919-6886</span>
            </a>
            <span className="hidden sm:inline">|</span>
            <a href="mailto:marci@metzgergroup.com" className="flex items-center gap-2 hover:text-accent transition-colors">
              <Mail className="w-5 h-5" />
              <span>marci@metzgerhomes.com</span>
            </a>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg leading-relaxed max-w-2xl mx-auto mb-8"
          >
            With over 15 years of experience in the Pahrump real estate market, I'm dedicated to 
            helping you find your dream home. Whether you're buying, selling, or investing, 
            I provide expert guidance every step of the way.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button variant="secondary" size="lg">
              Schedule a Consultation
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentProfile;
