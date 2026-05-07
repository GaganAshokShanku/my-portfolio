import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Student. Builder. Future Business Leader.';
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        setIsTypingComplete(true);
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center px-6">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-4rem] h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
        <div className="absolute left-14 bottom-10 h-48 w-48 rounded-full bg-emerald-400/15 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <p className="inline-flex items-center justify-center px-4 py-2 mb-6 text-xs uppercase tracking-[0.35em] font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full">
            MIT CSE · AI · Business
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight animate-fade-in">
            Gagan Ashok Shanku
          </h1>
          <div className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-semibold font-mono">
            {text}
            <span className={`inline-block w-0.5 h-6 bg-slate-900 dark:bg-white ml-2 ${isTypingComplete ? 'animate-pulse' : ''}`}></span>
          </div>
        </div>

        <p className="text-base md:text-lg text-slate-700 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed sm:text-center">
          A business-focused B.Tech CSE student at MIT Vishwaprayaga University, building AI-enabled
          products and practical tech solutions that connect innovation with real impact.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 justify-center mb-10">
          <span className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white px-5 py-3 text-sm font-semibold shadow-lg shadow-slate-900/5 dark:bg-white dark:text-slate-900">
            B.Tech CSE Student
          </span>
          <span className="inline-flex items-center justify-center rounded-full bg-slate-100 text-slate-900 px-5 py-3 text-sm font-semibold shadow-lg shadow-slate-900/5 dark:bg-slate-800 dark:text-slate-200">
            Business-ready Builder
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-slate-900 text-white rounded-full shadow-lg shadow-slate-900/20 hover:bg-slate-800 transition-all duration-300"
          >
            View My Work
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-slate-900 text-slate-900 rounded-full bg-white hover:bg-slate-900 hover:text-white transition-all duration-300 dark:border-white dark:bg-slate-950 dark:text-white dark:hover:bg-white dark:hover:text-slate-900"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8 text-slate-600 dark:text-slate-300" />
      </button>
    </section>
  );
};

export default Hero;
