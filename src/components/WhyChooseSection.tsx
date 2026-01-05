import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Check, Zap, Shield, Heart, Award, Users } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'Lightning-Fast Delivery',
    description: 'Innovation waits for no one. We deliver powerful results at record speed — ensuring your brand stays ahead of the curve without ever compromising quality.',
  },
  {
    icon: Shield,
    title: 'Enterprise-Grade Security',
    description: 'Your trust is our top priority. Every project, platform, and data asset is secured with industry-grade protection, keeping your brand safe and compliant.',
  },
  {
    icon: Heart,
    title: 'Emotional Storytelling',
    description: 'We don’t just create campaigns, we create connections. Our storytelling sparks emotion, builds loyalty, and turns audiences into advocates.',
  },
  {
    icon: Award,
    title: 'Award-Winning Team',
    description: 'Behind every success story is a team that knows how to win. Our industry experts bring years of proven experience and creative mastery to every project.',
  },
  {
    icon: Users,
    title: 'Collaborative Partnership',
    description: "We believe in co-creation. With XHORD, you don’t just get a service provider; you gain a strategic partner dedicated to scaling your vision.",
  },
  {
    icon: Check,
    title: 'Results-Driven Approach',
    description: 'Every move we make is backed by data, insight, and intent. We focus on what matters most — measurable growth and impactful outcomes.',
  },
];

export default function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-foreground text-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-background rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-background rounded-full blur-3xl" />
      </div>

      {/* Diagonal lines pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)',
      }} />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-background/30 mb-6">
            <span className="text-sm font-medium">WHY XHORD</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            What Makes 
            <br />
            <span className="italic">XHORD Unstoppable</span>
          </h2>
          <p className="text-xl text-background/80 max-w-2xl mx-auto">
            We don’t just build brands - we build movements powered by innovation, creativity, and measurable impact.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-background/5 backdrop-blur-sm border border-background/20 rounded-2xl p-8 hover:bg-background/10 hover:border-background/40 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="relative inline-block">
                  <div className="absolute inset-0 bg-background/20 blur-xl rounded-full" />
                  <div className="relative w-14 h-14 bg-background text-foreground rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    <benefit.icon className="w-7 h-7" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-background/70 leading-relaxed">{benefit.description}</p>

              {/* Checkmark */}
              <div className="absolute top-6 right-6 w-6 h-6 bg-background text-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Check className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="relative bg-background/5 backdrop-blur-sm border-2 border-background/20 rounded-3xl p-12">
            {/* Quote marks */}
            <div className="absolute top-8 left-8 text-6xl text-background/20 font-serif">"</div>
            
            <p className="text-2xl md:text-3xl font-medium mb-8 relative z-10 leading-relaxed">
              XHORD didn't just deliver a project—they transformed our entire brand identity. 
              Their strategic approach and creative execution exceeded every expectation.
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-16 bg-background/20 rounded-full" />
              <div className="text-left">
                <div className="font-bold text-lg">Sarah Johnson</div>
                <div className="text-background/70 text-sm">CEO, TechVision Inc.</div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-background/20 rounded-br-3xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
