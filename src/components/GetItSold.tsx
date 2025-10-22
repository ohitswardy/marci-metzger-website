import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const GetItSold = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            GET IT SOLD
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-16">
          {/* Top Residential Sales */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/GetItSold1.png"
                    alt="Modern luxury home interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                    Top Residential Sales Last 5 Years
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                    We helped nearly <span className="text-primary font-semibold">90 clients in 2021</span>, and closed{" "}
                    <span className="text-primary font-semibold">28.5 million in sales!</span>{" "}
                    Our team works hard everyday to grow and learn, so that we may continue to excel in our market. 
                    Our clients deserve our best, & we want to make sure our best is better every year.
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Don't Just List It */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <CardContent className="p-8 md:p-12 flex flex-col justify-center order-2 md:order-1">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                    Don't Just List it...
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                    Get it <span className="text-primary font-semibold">SOLD!</span> We exhaust every avenue to ensure our listings are at the fingertips 
                    of every possible buyer, getting you top dollar for{" "}
                    <span className="text-primary font-semibold">your home</span>.
                  </p>
                </CardContent>
                <div className="relative h-64 md:h-auto order-1 md:order-2">
                  <img
                    src="/GetItSold2.png"
                    alt="Luxury home exterior with pool"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Guide to Buyers */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="overflow-hidden border-none shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/GetItSold3.png"
                    alt="Guide to Buyers"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-6 text-center md:text-left">
                    Guide to Buyers
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-center md:text-left">
                    Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!
                  </p>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GetItSold;
