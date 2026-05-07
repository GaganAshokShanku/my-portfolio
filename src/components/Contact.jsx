import React from 'react';
import { Mail, Phone, ExternalLink } from 'lucide-react';

const Contact = () => {
  const contacts = [
    {
      icon: Mail,
      label: 'Email',
      value: 'gshanku19@gmail.com',
      link: 'mailto:gshanku19@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9322474728',
      link: 'tel:+919322474728',
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-slate-950 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300 mb-4">Let's connect</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Get in touch</h2>
            <p className="text-slate-300 leading-relaxed text-lg">
              Have a project idea, collaboration, or internship opportunity? Reach out directly via email
              or phone and let’s turn it into something meaningful.
            </p>
          </div>

          <div className="grid gap-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-[1.8rem] border border-slate-800 bg-slate-900/90 p-6 shadow-2xl shadow-slate-950/40 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/40"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-cyan-500 text-slate-950 transition-colors group-hover:bg-white">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-slate-400 mb-1">{contact.label}</p>
                    <p className="font-semibold text-white">{contact.value}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
