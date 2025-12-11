import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import AboutSection from "@/components/about-section";
import FeaturesSection from "@/components/features-section";
import AppointmentSection from "@/components/appointment-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import { ScrollAnimator } from "@/components/scroll-animator";
import BlogSection from "@/components/blog-section";
import TestimonialsSection from "@/components/testimonials-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />

        <ScrollAnimator>
          <ServicesSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <AboutSection />
        </ScrollAnimator>
        
        <ScrollAnimator>
          <FeaturesSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <TestimonialsSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <BlogSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <FaqSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <AppointmentSection />
        </ScrollAnimator>

        <ScrollAnimator>
          <ContactSection />
        </ScrollAnimator>
      </main>
      <Footer />
    </div>
  );
}
