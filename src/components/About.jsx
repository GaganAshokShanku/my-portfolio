import profile from '../assets/WhatsApp Image 2026-05-07 at 11.46.03 AM.jpeg';
import React from 'react';
import { Code, Palette, Lightbulb, Target } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Python', category: 'Programming' },
    { name: 'C Programming', category: 'Programming' },
    { name: 'AI & Machine Learning', category: 'Technology' },
    { name: 'Problem Solving', category: 'Core' },
    { name: 'Design Thinking', category: 'Creative' },
    { name: 'System Design', category: 'Technology' },
    { name: 'Game Development', category: 'Learning' },
    { name: 'Presentation & Project Design', category: 'Creative' },
    { name: 'Circuit Designing (Tinkercad)', category: 'Hardware' },
    { name: 'Basic Web/App Development', category: 'Development' },
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering (Semester 2)',
      institution: 'MIT Vishwaprayaga University',
      year: '2024 - Present',
      current: true,
    },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 mb-4 text-xs uppercase tracking-[0.35em] font-semibold text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-900 rounded-full shadow-sm">
            About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Who I am and what I build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            A B.Tech CSE student with a passion for AI, startup thinking, and practical product development.
            I blend creative design, technical execution, and business insight to build technology that
            solves real problems.
          </p>
        </div>

        <div className="grid gap-12 xl:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-[0_24px_80px_-48px_rgba(15,23,42,0.35)] overflow-hidden">
              <div className="relative h-[420px] overflow-hidden">
                <img src={profile} alt="Gagan Ashok Shanku" className="w-full h-full object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-slate-950/90 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Gagan Ashok Shanku</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Business-focused AI enthusiast studying at MIT Vishwaprayaga University. I build AI-enabled
                  systems, sustainability solutions, and user-friendly digital products that align with
                  social impact and startup growth.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">Goal</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Build business-ready technology products</p>
                  </div>
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 p-4">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400 mb-2">Approach</p>
                    <p className="font-semibold text-slate-900 dark:text-white">Combine AI, design, and practical execution</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">Skills & Interests</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center justify-center rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">Experience</h3>
              <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Passionate about delivering AI-based applications, e-waste management systems, and
                  citizen-focused digital platforms. I enjoy translating ideas into working solutions and
                  documenting each step for clarity and improvement.
                </p>
                <p>
                  I actively explore sustainable development goals, participate in practical projects, and
                  build presentations, reports, and technical documentation to make every project more
                  impactful.
                </p>
                <p>
                  My focus is on combining technology with business growth ideas, while learning new skills
                  and exploring startup-ready implementations.
                </p>
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-5">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <div className="rounded-3xl bg-slate-50 dark:bg-slate-950 p-5 border border-slate-200 dark:border-slate-800">
                    <h4 className="text-lg font-semibold text-slate-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-slate-600 dark:text-slate-400">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500">{edu.year}</p>
                    {edu.current && (
                      <span className="inline-flex mt-3 items-center rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white dark:bg-white dark:text-slate-900">
                        Current Student
                      </span>
                    )}
                    <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Course Code: AS1201</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
