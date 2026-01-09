import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-foreground blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-foreground blur-3xl" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '50px 50px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-foreground/20 mb-6">
            <span className="text-sm font-medium">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Every brand has a story. 
            <br />
            <span className="italic">Let’s make yours unforgettable.</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Join hands with XHORD to build a brand that speaks, inspires, and scales beyond expectations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    required
                    className="bg-secondary border-2 border-foreground/10 focus:border-foreground transition-colors h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="bg-secondary border-2 border-foreground/10 focus:border-foreground transition-colors h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="company" className="text-sm font-medium">Company (Optional)</label>
                <Input
                  id="company"
                  placeholder="Your Company"
                  className="bg-secondary border-2 border-foreground/10 focus:border-foreground transition-colors h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your project..."
                  required
                  rows={6}
                  className="bg-secondary border-2 border-foreground/10 focus:border-foreground transition-colors resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                size="lg"
                className="w-full bg-foreground text-background hover:bg-foreground/90 h-14 text-lg font-semibold group"
              >
                {isSubmitting ? 'Sending...' : 'Let’s Create'}
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-secondary border-2 border-foreground/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:xhordofficial@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                      xhordofficial@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Phone</div>
                    <a href="tel:+91 6282-064608" className="text-muted-foreground hover:text-foreground transition-colors">
                      +91 7034-942438
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-foreground text-background rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Location</div>
                    <p className="text-muted-foreground">
                      V 1281 , 60/44,3rd floor,JC Chambers, Panampilly nagar, Ernakulam,682036.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="bg-foreground text-background rounded-3xl p-8">
              <p className="text-lg font-medium mb-4">Join 100+ brands who trust XHORD</p>
              <div className="flex flex-wrap gap-4">
                {['Brand A', 'Brand B', 'Brand C', 'Brand D'].map((brand, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-background/10 rounded-lg text-sm font-medium"
                  >
                    {brand}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
