import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const stats = [
    { icon: Target, label: 'Strategic Focus', value: '100%' },
    { icon: Lightbulb, label: 'Creative Solutions', value: '∞' },
    { icon: Rocket, label: 'Growth Rate', value: '300%' },
    { icon: Users, label: 'Team Experts', value: '50+' },
  ];

  return (
    <section ref={ref} className="relative py-32 bg-foreground text-background overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full border-4 border-background" />
        <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-background" />
      </div>

      {/* Diagonal texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-2 rounded-full border border-background/30 mb-6"
            >
              <span className="text-sm font-medium">WHO WE ARE</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Your partner in
              <br />
              <span className="italic">brand evolution</span>
            </h2>

            <p className="text-xl text-background/80 mb-6 leading-relaxed">
              At XHORD, every brand is seen as a story waiting to be told. We blend creativity with advanced technology to shape brands that connect emotionally and perform strategically.
            </p>

            <p className="text-lg text-background/70 leading-relaxed">
              Through website development, app development, and impactful branding, we give businesses a digital identity that stands strong. Our team uses AI solutions, social media management, and data-driven digital marketing to create growth that’s measurable and meaningful.
            </p>
          </motion.div>

          {/* Right: Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group relative bg-background/5 backdrop-blur-sm border border-background/20 rounded-2xl p-6 hover:bg-background/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                <stat.icon className="w-10 h-10 mb-4 group-hover:scale-110 transition-transform" />
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-background/70">{stat.label}</div>
                
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-background/20 rounded-tr-2xl" />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom feature highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <div className="inline-block relative">
            <div className="absolute -inset-4 bg-background/5 blur-2xl rounded-full" />
            <p className="relative text-2xl md:text-3xl font-medium">
              {/* "We transform <span className="font-bold">businesses</span> into{' '}
              <span className="font-bold italic">brands</span>, and brands into{' '}
              <span className="font-bold">movements</span>." */}
              "At XHORD, trends aren’t followed — they’re created."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
