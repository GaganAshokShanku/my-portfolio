import React from 'react';
import { Camera, Book, Gamepad2, Brain, Coffee, Mountain } from 'lucide-react';

// ✅ IMPORT YOUR PHOTOS
import photo1 from '../assets/photography/WhatsApp Image 2026-05-07 at 11.52.16 AM.jpeg';
import photo2 from '../assets/photography/WhatsApp Image 2026-05-07 at 11.52.17 AM (1).jpeg';
import photo3 from '../assets/photography/WhatsApp Image 2026-05-07 at 11.52.17 AM (2).jpeg';
import photo4 from '../assets/photography/WhatsApp Image 2026-05-07 at 11.52.17 AM.jpeg';
import photo5 from '../assets/photography/WhatsApp Image 2026-05-07 at 11.52.18 AM.jpeg';

const Interests = () => {
  const interests = [
    {
      icon: Camera,
      title: 'certificate',
      description: 'Capturing the beauty of nature through lens',
    },
    {
      icon: Book,
      title: 'Story Writing',
      description: 'Crafting narratives and creative tales',
    },
    {
      icon: Gamepad2,
      title: 'Anime & Manga',
      description: 'Exploring Japanese animation and comics',
    },
    {
      icon: Brain,
      title: 'Chess',
      description: 'Strategic thinking and problem solving',
    },
    {
      icon: Coffee,
      title: 'Building Things',
      description: 'Creating apps, games, and solutions',
    },
    {
      icon: Mountain,
      title: 'Learning',
      description: 'Always exploring new technologies',
    },
  ];

  // ✅ PHOTO ARRAY (clean approach)
  const photos = [photo1, photo2, photo3, photo4, photo5];

  return (
    <section id="interests" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-4">What I enjoy</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Interests & Creative Work</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Beyond code, I explore design, strategy, and user-first product thinking to keep every project
            engaging and meaningful.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <div
                key={index}
                className="group rounded-[2rem] border border-slate-800 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/20 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{interest.title}</h3>
                <p className="text-slate-400 leading-relaxed">{interest.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-extrabold text-white mb-6 text-center">Certificate Gallery</h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group aspect-square overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/80 shadow-xl shadow-slate-950/20"
              >
                <img
                  src={photo}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;