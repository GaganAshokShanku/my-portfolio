import React from 'react';
import { Award, BookOpen, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'Delivery Problem',
      provider: 'UC San Diego (Coursera)',
      date: 'Apr 30, 2026',
      icon: Award,
    },
    {
      title: 'Number Theory and Cryptography',
      provider: 'UC San Diego (Coursera)',
      date: 'Apr 30, 2026',
      icon: ShieldCheck,
    },
    {
      title: 'Combinatorics and Probability',
      provider: 'UC San Diego (Coursera)',
      date: 'Apr 30, 2026',
      icon: BookOpen,
    },
    {
      title: 'Introduction to Programming with MATLAB',
      provider: 'Vanderbilt University (Coursera)',
      date: 'Dec 15, 2025',
      icon: Award,
    },
  ];

  return (
    <section id="certificates" className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-500 mb-4">Certificate showcase</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">Certificates</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Verified Coursera certificates demonstrating practical skills in programming, cryptography,
            probability, and engineering-focused problem solving.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certificates.map((certificate, index) => {
            const Icon = certificate.icon;
            return (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-lg shadow-slate-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white dark:bg-cyan-500 dark:text-slate-950 mb-6 mx-auto">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3 text-center">
                  {certificate.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 text-center">
                  {certificate.provider}
                </p>
                <p className="mt-5 text-xs uppercase tracking-[0.3em] text-slate-400 dark:text-slate-500 text-center">
                  {certificate.date}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
