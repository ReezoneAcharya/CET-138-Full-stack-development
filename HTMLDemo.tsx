import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function HTMLDemo() {
  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-800 tracking-tight">2. HTML: Core Structure</h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          HTML is the skeleton of any website. My demonstration focuses on semantic tag usage and accessible form design.
        </p>
      </header>

      {/* Explanation Section */}
      <section className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
        <h3 className="font-bold text-slate-800">Key Understanding</h3>
        <ul className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
            <span><strong>Semantic Tags:</strong> Using <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, and <code>&lt;header&gt;</code> for better SEO and accessibility.</span>
          </li>
          <li className="flex gap-2">
            <CheckCircle2 size={16} className="text-brand-primary shrink-0" />
            <span><strong>Attributes:</strong> Correct use of <code>alt</code> for images and <code>for</code> labels for input accessibility.</span>
          </li>
        </ul>
      </section>

      {/* Working Demo */}
      <section className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="p-4 bg-slate-50 border-b border-slate-200 font-bold text-xs uppercase tracking-widest text-slate-400">
          Working Example: Semantic Form
        </div>
        <div className="p-8 max-w-xl mx-auto space-y-6">
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label htmlFor="name-input" className="block text-sm font-bold text-slate-700">Full Name (Accessible Label)</label>
              <input 
                id="name-input"
                type="text" 
                placeholder="Enter your name" 
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email-input" className="block text-sm font-bold text-slate-700">Email Address</label>
              <input 
                id="email-input"
                type="email" 
                placeholder="you@email.com" 
                className="w-full px-4 py-2 rounded-lg border border-slate-300 focus:ring-2 focus:ring-brand-primary outline-none transition-all"
              />
            </div>
            <button className="bg-slate-900 text-white font-bold py-2 px-6 rounded-lg hover:bg-slate-800 transition-colors">
              Submit Demo
            </button>
          </form>
          <div className="pt-6 border-t border-slate-100">
             <p className="text-xs text-slate-400 italic">This demo uses native HTML5 types (email/text) to ensure browser validation works automatically.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
