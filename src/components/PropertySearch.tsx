import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Search } from "lucide-react";
import { motion } from "framer-motion";

const PropertySearch = () => {
  return (
    <section className="relative py-32 bg-secondary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="/FindYourDreamHomeBG.png" 
          alt="Dream Home Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-5xl md:text-6xl font-bold text-white mb-2 tracking-wider">
              FIND YOUR DREAM HOME
            </h2>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 shadow-2xl bg-white/95 backdrop-blur-sm">
              <h3 className="font-serif text-2xl text-primary mb-6">Search Listings</h3>
              
              <div className="space-y-4">
                {/* First Row - Location, Type, Sort By */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Location</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pahrump">Pahrump</SelectItem>
                        <SelectItem value="las-vegas">Las Vegas</SelectItem>
                        <SelectItem value="henderson">Henderson</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="house">House</SelectItem>
                        <SelectItem value="condo">Condo</SelectItem>
                        <SelectItem value="land">Land</SelectItem>
                        <SelectItem value="commercial">Commercial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Sort By</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="newest">Newest</SelectItem>
                        <SelectItem value="price-low">Price: Low to High</SelectItem>
                        <SelectItem value="price-high">Price: High to Low</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Second Row - Bedrooms, Baths, Min Price, Max Price */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Bedrooms</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Number</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                        <SelectItem value="4">4+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Baths</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Any Number" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="any">Any Number</SelectItem>
                        <SelectItem value="1">1+</SelectItem>
                        <SelectItem value="2">2+</SelectItem>
                        <SelectItem value="3">3+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Min Price</label>
                    <Input type="text" placeholder="" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Max Price</label>
                    <Input type="text" placeholder="" />
                  </div>
                </div>

                {/* Search Button */}
                <div className="pt-2">
                  <Button className="w-full md:w-auto px-12" size="lg">
                    SEARCH NOW
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PropertySearch;
