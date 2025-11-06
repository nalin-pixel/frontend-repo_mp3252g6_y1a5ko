import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Zap, HardDrive, Gauge, Cpu, Globe } from 'lucide-react';

const features = [
  { icon: Shield, title: 'DDoS Protection', desc: 'Enterprise-grade mitigation with real-time traffic scrubbing.' },
  { icon: Zap, title: '99.99% Uptime', desc: 'Redundant network and power with self-healing orchestration.' },
  { icon: HardDrive, title: 'NVMe Storage', desc: 'Blazing-fast NVMe for extreme I/O performance.' },
  { icon: Gauge, title: 'Low Latency', desc: 'Global PoPs and premium peering for lower ping everywhere.' },
  { icon: Cpu, title: 'High-Clock CPUs', desc: 'Latest-gen Ryzen/EPYC optimized for gaming and workloads.' },
  { icon: Globe, title: 'Global Locations', desc: 'Deploy across EU, US, and APAC for optimal reach.' },
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.5 } }),
};

const Features = () => {
  return (
    <section id="features" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Engineered For Performance</h2>
        <p className="mt-3 text-white/70">Modern infrastructure, premium network, and intelligent automation for teams that demand more.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            custom={i}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={itemVariants}
            className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl backdrop-blur-xl"
          >
            <div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 p-3 text-blue-300">
              <f.icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-white/70">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;
