import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentProfile from "@/components/AgentProfile";
import GetItSold from "@/components/GetItSold";
import Services from "@/components/Services";
import PropertySearch from "@/components/PropertySearch";
import Neighborhoods from "@/components/Neighborhoods";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import FloatingChatButton from "@/components/FloatingChatButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ScrollReveal direction="up">
          <AgentProfile />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <GetItSold />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <PropertySearch />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Neighborhoods />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Services />
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.1}>
          <Contact />
        </ScrollReveal>
      </main>
      <ScrollReveal direction="fade" delay={0.2}>
        <Footer />
      </ScrollReveal>
      <FloatingChatButton />
    </div>
  );
};

export default Index;
