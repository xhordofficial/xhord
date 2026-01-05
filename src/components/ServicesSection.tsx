import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Brain,
  Code,
  Smartphone,
  Laptop,
  TrendingUp,
  FileText,
  Scale,
  Megaphone,
  Sparkles,
  Palette,
} from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    description: 'We make technology think smarter for your business. From process automation to predictive analytics, our AI-driven solutions transform data into meaningful growth opportunities.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'We build websites that look stunning and perform flawlessly. Each site is optimised for SEO, designed for conversion, and crafted to reflect your brand’s true identity.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Smartphone,
    title: 'App Development',
    description: 'We turn your vision into intuitive mobile experiences. Our native and cross-platform app solutions are built for speed, functionality, and a seamless user journey',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Laptop,
    title: 'Software Development',
    description: 'We build intelligent software solutions tailored to your goals. Every system we create is designed to simplify workflows, automate processes, and scale your business efficiently.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Visibility is good - but influence is better. We use data-driven digital marketing strategies to target the right audience, increase conversions, and build long-term brand impact.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: FileText,
    title: 'Content Creation',
    description: 'We create content that connects, converts, and captivates. From visuals to copywriting, every piece is designed to tell your story, boost engagement, and strengthen your online presence.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Scale,
    title: 'Legal Assistance',
    description: 'We help your brand grow - the right way. Our legal experts ensure your business stays protected with strategic documentation, brand protection, and compliance solutions.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Megaphone,
    title: 'Ad Creation',
    description: 'We design ads that stop the scroll and spark engagement. From digital campaigns to video ads, every concept is built to capture attention, drive action, and make your brand impossible to ignore.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Palette,
    title: 'Branding',
    description: 'Your brand is more than just a logo - it’s your identity. We create cohesive visual and verbal identities that speak clearly, consistently, and creatively across every touchpoint.',
    position: 'col-span-1 row-span-1',
  },
  {
    icon: Sparkles,
    title: 'Brand Story',
    description: 'Every memorable brand starts with a story worth telling. We craft meaningful narratives that define your voice, build emotional connections, and inspire people to remember and trust your brand.',
    position: 'col-span-1 row-span-1',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-background relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-foreground blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-foreground blur-3xl" />
      </div>

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)',
        backgroundSize: '100px 100px',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-foreground/20 mb-6">
            <span className="text-sm font-medium">WHAT WE DO</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            Where Strategy 
            <br />
            <span className="italic">Meets </span>Innovation
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From storytelling to software, XHORD offers end-to-end digital and creative solutions that help brands grow, connect, and lead with confidence.
          </p>
        </motion.div>

        {/* Services grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative bg-card border-2 border-foreground/10 rounded-3xl p-8 hover:border-foreground/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${service.position}`}
              style={{
                transform: index % 3 === 1 ? 'translateY(20px)' : 'translateY(0)',
              }}
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

              {/* Icon container */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full group-hover:bg-foreground/20 transition-all duration-500" />
                <div className="relative w-16 h-16 bg-foreground text-background rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 group-hover:translate-x-1 transition-transform duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Decorative corner accent */}
              <div className="absolute bottom-0 right-0 w-24 h-24 border-r-4 border-b-4 border-foreground/10 rounded-br-3xl group-hover:border-foreground/30 transition-colors duration-500" />

              {/* Hover arrow */}
              <div className="absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 0L8.59 1.41L16.17 9H0v2h16.17l-7.58 7.59L10 20l10-10L10 0z" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <p className="text-xl mb-8">Can't find what you're looking for?</p>
          <button className="px-8 py-4 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform duration-300 hover:shadow-2xl">
            Let's Talk About Your Needs
          </button>
        </motion.div>
      </div>
    </section>
  );
}
