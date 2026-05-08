import React from 'react';
import { motion } from 'motion/react';
import { Server, Monitor, Database, ChevronRight, Sparkles, Palette } from 'lucide-react';

interface HomeProps {
  onNavigate: (section: 'home' | 'html' | 'css' | 'bootstrap' | 'javascript') => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="space-y-12 pb-12">
      {/* Hero Section */}
      <section className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
        <div className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-display font-bold text-slate-900">
            CET-138 Full Stack Development: <span className="text-brand-primary">Portfolio</span>
          </h1>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-slate-500 font-medium">
            <p>Name: <span className="text-slate-900">Reezone Acharya</span></p>
            <p>Student ID: <span className="text-slate-900">250640924</span></p>
          </div>
          <p className="text-slate-600 text-lg leading-relaxed pt-2">
            Welcome to my technical portfolio. This application serves as a demonstration of the core skills developed during the Full Stack Development module. Below is an overview of the technologies covered and my understanding of the discipline.
          </p>
        </div>
      </section>

      {/* What is Full Stack Section */}
      <section id="full-stack-definition" className="space-y-6">
        <h2 className="text-2xl font-display font-bold text-slate-800">1. What is Full Stack Development?</h2>
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 text-slate-600">
          <p>
            Full Stack Development is the ability to code across all layers of a web application. This includes the <span className="font-bold text-slate-900">Front-End</span> (what users see), the <span className="font-bold text-slate-900">Back-End</span> (the server and logic), and the <span className="font-bold text-slate-900">Database</span> (where data is stored).
          </p>
          <p>
            For this portfolio, I have focused on the foundational technologies that power the modern web, demonstrating proficiency in both structure and logic.
          </p>
          <div className="grid md:grid-cols-3 gap-4 pt-4">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <Monitor className="text-blue-500" size={20} />
              <div className="text-sm font-bold">Front-End UI</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <Server className="text-brand-secondary" size={20} />
              <div className="text-sm font-bold">Logic Layer</div>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-3">
              <Database className="text-emerald-500" size={20} />
              <div className="text-sm font-bold">Data Storage</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-primary/5 rounded-3xl p-8 border border-brand-primary/10">
        <h3 className="font-bold text-slate-800 mb-4">Quick Navigation</h3>
        <div className="flex flex-wrap gap-3">
          {['html', 'css', 'bootstrap', 'javascript'].map((path) => (
            <button
              key={path}
              onClick={() => onNavigate(path as any)}
              className="bg-white hover:bg-slate-50 text-slate-700 px-6 py-2.5 rounded-lg border border-slate-200 text-sm font-bold uppercase tracking-wider transition-all shadow-sm"
            >
              {path} Demo
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

