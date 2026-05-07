import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

import greenQuest from '../assets/projects/WhatsApp Image 2026-05-07 at 12.10.33 PM (1).jpeg';
import aceProject from '../assets/projects/WhatsApp Image 2026-05-07 at 12.10.33 PM.jpeg';
import aiForAll from '../assets/projects/WhatsApp Image 2026-05-07 at 12.11.28 PM.jpeg';

const Projects = () => {
  const projects = [
    {
      title: 'Citizen Rewards App',
      description:
        'A smart mobile application that rewards citizens for completing eco-friendly and community-based activities such as recycling, public transport usage, and tree plantation.',
      tech: ['Mobile UX', 'Sustainability', 'Reward Systems'],
      status: 'Featured',
      image: greenQuest,
    },
    {
      title: 'E-Waste Management System',
      description:
        'An innovative system designed to collect, track, and recycle electronic waste efficiently while reducing pollution and driving awareness for responsible disposal.',
      tech: ['Sustainability', 'System Design', 'Operations'],
      status: 'Featured',
      image: aceProject,
    },
    {
      title: 'Memory Hierarchy Budgeting',
      description:
        'A visualization and analysis project that explains different levels of computer memory hierarchy such as cache, RAM, and storage to support performance, speed, and cost optimization.',
      tech: ['Computer Architecture', 'Data Visualization', 'Performance'],
      status: 'Featured',
      image: aiForAll,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-4">Selected work</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Projects</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            A curated showcase of digital products and technical visualizations built for sustainability,
            AI understanding, and citizen impact.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-900/80 p-0 shadow-2xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-3 mb-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <span
                    className={`text-xs font-semibold uppercase tracking-[0.3em] rounded-full px-3 py-1 ${
                      project.status === 'Featured'
                        ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/30'
                        : 'bg-slate-800 text-slate-200'
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-medium uppercase tracking-[0.18em] bg-slate-800/80 text-slate-300 px-3 py-2 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;