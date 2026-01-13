import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Contact = () => {
  const badges = [
    { name: "Equal Housing", image: "/Logo1.png" },
    { name: "MLS", image: "/Logo2.png" },
    { name: "REALTOR®", image: "/Logo3.png" },
    { name: "NAR", image: "/Logo4.png" }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            CALL OR VISIT
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-24 h-1 bg-accent mx-auto"
          ></motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-12">
          {/* Left Column: Form + Office Hours */}
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="p-8 shadow-xl">
                <h3 className="font-serif text-2xl font-semibold mb-6">
                  Send Message
                </h3>
                <form className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-2 block text-muted-foreground">Name</label>
                    <Input placeholder="" className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-muted-foreground">Email*</label>
                    <Input type="email" placeholder="" className="border-b border-t-0 border-x-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-accent" />
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block text-muted-foreground">Message</label>
                    <Textarea 
                      placeholder="" 
                      rows={4}
                      className="border-b border-t-0 border-x-0 rounded-none px-0 resize-none focus-visible:ring-0 focus-visible:border-accent"
                    />
                  </div>

                  <Button type="submit" className="rounded-full px-8">
                    SEND
                  </Button>
                  
                  <p className="text-xs text-muted-foreground mt-4">
                    This site is protected by reCAPTCHA and the Google{" "}
                    <a href="#" className="text-primary hover:underline">Privacy Policy</a> and{" "}
                    <a href="#" className="text-primary hover:underline">Terms of Service</a> apply.
                  </p>
                </form>
              </Card>
            </motion.div>

            {/* Office Hours Below Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="font-serif text-xl font-semibold mb-4">
                Office Hours
              </h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="flex justify-between">
                  <span className="font-medium">Open today</span>
                  <span>08:00 am – 07:00 pm</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Open daily</span>
                  <span>8:00 am - 7:00 pm</span>
                </p>
                <p className="text-sm mt-4">
                  Appointments outside office hours available upon request. Just call!
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Map + Contact Info */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d207066.72634840573!2d-116.23353695797727!3d36.194130692886096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8d1b1f3d8d8d1%3A0x5f5f5f5f5f5f5f5f!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1729612800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location - 3190 HW-160, Suite F, Pahrump, NV"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Info Below Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="font-serif text-xl font-semibold mb-4">
                    Marci Metzger - THE RIDGE REALTY GROUP
                  </h3>
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="flex items-start gap-2">
                      <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-accent" />
                      <span>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</span>
                    </p>
                    
                    <p className="flex items-center gap-2">
                      <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                      <a href="tel:2069196986" className="hover:text-accent transition-colors">
                        (206) 919-6986
                      </a>
                    </p>
                  </div>
                </div>

                <div>
                  <Button 
                    variant="default" 
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center gap-3 w-full"
                    asChild
                  >
                    <a href="https://wa.me/12069196986" target="_blank" rel="noopener noreferrer">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Message us on WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Logo Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-6 md:gap-8 max-w-xs md:max-w-none mx-auto">
            {badges.map((badge, index) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                className="w-24 h-24 bg-white rounded-lg flex items-center justify-center p-2 shadow-md mx-auto"
              >
                <img 
                  src={badge.image} 
                  alt={badge.name}
                  className="w-full h-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
