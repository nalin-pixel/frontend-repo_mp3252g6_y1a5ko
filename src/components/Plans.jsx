import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const tabs = [
  { key: 'vps', label: 'VPS' },
  { key: 'game', label: 'Game Hosting' },
  { key: 'dedicated', label: 'Dedicated' },
];

const plansData = {
  vps: [
    { name: 'VPS-1', cpu: '2 vCPU', ram: '4 GB', storage: '60 GB NVMe', location: 'Frankfurt', price: '$6.99/mo' },
    { name: 'VPS-2', cpu: '4 vCPU', ram: '8 GB', storage: '120 GB NVMe', location: 'New York', price: '$12.99/mo' },
    { name: 'VPS-3', cpu: '8 vCPU', ram: '16 GB', storage: '240 GB NVMe', location: 'Singapore', price: '$24.99/mo' },
  ],
  game: [
    { name: 'Starter', cpu: 'High Clock 2 vCPU', ram: '6 GB', storage: 'NVMe 40 GB', location: 'Dallas', price: '$9.99/mo' },
    { name: 'Pro', cpu: 'High Clock 4 vCPU', ram: '10 GB', storage: 'NVMe 80 GB', location: 'London', price: '$17.99/mo' },
    { name: 'Elite', cpu: 'High Clock 8 vCPU', ram: '16 GB', storage: 'NVMe 160 GB', location: 'Tokyo', price: '$34.99/mo' },
  ],
  dedicated: [
    { name: 'XM-32', cpu: 'Ryzen 5 5600X', ram: '32 GB', storage: '1 TB NVMe', location: 'Amsterdam', price: '$89/mo' },
    { name: 'XM-64', cpu: 'Ryzen 7 5800X', ram: '64 GB', storage: '2 TB NVMe', location: 'Helsinki', price: '$129/mo' },
    { name: 'EPYC', cpu: 'AMD EPYC 7302P', ram: '128 GB', storage: '2x1 TB NVMe', location: 'Paris', price: '$199/mo' },
  ],
};

const Card = ({ plan }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/[0.03] p-6 shadow-xl backdrop-blur-xl"
  >
    <div className="mb-4 flex items-center justify-between">
      <h3 className="text-lg font-semibold tracking-tight">{plan.name}</h3>
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/80">{plan.location}</span>
    </div>
    <ul className="space-y-2 text-sm text-white/70">
      <li>CPU: <span className="text-white/90">{plan.cpu}</span></li>
      <li>RAM: <span className="text-white/90">{plan.ram}</span></li>
      <li>Storage: <span className="text-white/90">{plan.storage}</span></li>
    </ul>
    <div className="mt-5 flex items-end justify-between">
      <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">{plan.price}</div>
      <a href="#contact" className="relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-transform group-hover:scale-[1.02]">
        <span className="relative z-10">Order Now</span>
        <span className="pointer-events-none absolute inset-0 bg-white/10 opacity-0 transition-opacity group-hover:opacity-100" />
      </a>
    </div>
  </motion.div>
);

const Plans = () => {
  const [active, setActive] = useState('vps');

  return (
    <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Plans & Pricing</h2>
        <p className="mt-3 text-white/70">Choose from lightning-fast VPS, battle-ready game hosting, or powerhouse dedicated servers.</p>
      </div>

      <div className="mx-auto mb-8 flex w-full max-w-xl items-center justify-center rounded-xl border border-white/10 bg-white/5 p-1 text-sm backdrop-blur">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`relative mx-1 inline-flex flex-1 items-center justify-center rounded-lg px-4 py-2 transition ${
              active === t.key ? 'bg-gradient-to-r from-blue-500/80 to-violet-500/80 text-white' : 'text-white/70 hover:bg-white/10'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {plansData[active].map((p) => (
            <Card key={p.name} plan={p} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Plans;
