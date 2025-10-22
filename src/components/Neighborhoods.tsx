import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Neighborhoods = () => {
  const neighborhoods = [
    "/neighborhood1.jpg",
    "/neighborhood2.jpg",
    "/neighborhood3.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % neighborhoods.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="neighborhoods" className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            COMMUNITY PHOTOS
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-24 h-1 bg-accent mx-auto mb-6"
          ></motion.div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto"
          >
            Explore the beautiful communities and luxury developments throughout Pahrump
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-lg overflow-hidden shadow-2xl group"
          >
            <div className="relative w-full h-[500px]">
              {neighborhoods.map((image, index) => (
                <img 
                  key={image}
                  src={image} 
                  alt={`Pahrump Neighborhood ${index + 1}`} 
                  className={`absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent flex items-end">
              <div className="p-8 w-full">
                <h3 className="font-serif text-3xl font-bold mb-2">
                  Mountain Falls Community
                </h3>
                <p className="text-lg mb-4">
                  Luxury resort-style living with championship golf course and resort amenities
                </p>
                <Button variant="secondary">
                  Explore Community
                </Button>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-4 mt-6">
            {neighborhoods.map((image, index) => (
              <motion.div 
                key={image}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                className="h-32 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => setCurrentImageIndex(index)}
              >
                <img 
                  src={image} 
                  alt={`Neighborhood ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Neighborhoods;
