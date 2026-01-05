import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Lightbulb, Hammer, TrendingUp } from 'lucide-react';

const phases = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Start Smart',
    subtitle: 'Strategy & Discovery',
    description: 'Every powerful brand begins with a smart foundation. At XHORD, we dive deep into your business, audience, and goals to uncover insights that shape strategic decisions. Through research, analysis, and creative direction, we set the tone for sustainable success.',
    features: ['Brand Audit', 'Market Research', 'Competitive Analysis', 'Strategic Planning'],
  },
  {
    number: '02',
    icon: Hammer,
    title: 'Build the Story',
    subtitle: 'Creation & Development',
    description: 'This is where ideas transform into experiences. Our creative and technical teams work together to bring your brand vision to life-from stunning visuals and content to scalable digital solutions like websites, apps, and AI-powered tools.',
    features: ['Creative Development', 'Content Production', 'Technical Build', 'Quality Assurance'],
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'Grow with Strategy',
    subtitle: 'Launch & Optimization',
    description: 'We launch your brand with precision and continuously optimise for performance. Through data-driven insights and smart marketing strategies, we ensure your brand evolves, engages, and grows stronger over time.',
    features: ['Strategic Launch', 'Performance Tracking', 'Continuous Optimization', 'Scaling Support'],
  },
];

export default function ApproachSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-32 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full border-2 border-foreground/5" />
        <div className="absolute bottom-40 right-40 w-48 h-48 bg-foreground/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full border border-foreground/20 mb-6">
            <span className="text-sm font-medium">OUR APPROACH</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
             How We Turn Stories 
            <br />
            <span className="italic">Into Success</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
             Every great brand begins with a story. Our process combines strategy, design, and technology to craft brands that people remember and trust.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-transparent via-foreground/20 to-transparent -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Card */}
                <div className="relative bg-background border-2 border-foreground/10 rounded-3xl p-8 hover:border-foreground/30 transition-all duration-500 hover:shadow-2xl group">
                  {/* Number badge */}
                  <div className="absolute -top-6 left-8 w-12 h-12 bg-foreground text-background rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                    {phase.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-foreground/10 blur-xl rounded-full" />
                      <div className="relative w-20 h-20 bg-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                        <phase.icon className="w-10 h-10" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-3xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 font-medium">{phase.subtitle}</p>
                  <p className="text-base leading-relaxed mb-6">{phase.description}</p>

                  {/* Features */}
                  <div className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-foreground rounded-full" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-foreground/10 rounded-tr-3xl" />
                </div>

                {/* Arrow connector (desktop only) */}
                {index < phases.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 -translate-y-1/2 z-20">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-foreground/30">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="inline-block bg-foreground text-background px-8 py-6 rounded-2xl">
            <p className="text-xl font-medium">
              Ready to shape your brand’s next chapter? Let’s create something extraordinary together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
