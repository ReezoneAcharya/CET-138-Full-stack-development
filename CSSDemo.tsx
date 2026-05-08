import React from 'react';
import { Layout, Grid as GridIcon, Zap } from 'lucide-react';

export default function CSSDemo() {
  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-800 tracking-tight">3. CSS: Styling & Design</h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          CSS is used to style the layout and look of web pages. Here are some basic examples of how CSS can change elements.
        </p>
      </header>

      {/* Simple Concept Section */}
      <div className="grid md:grid-cols-3 gap-6">
        <section className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <h3 className="font-bold text-slate-800">Colors</h3>
          <p className="text-sm text-slate-500">Changing text and background colors.</p>
          <div className="flex gap-2">
            <div className="w-8 h-8 rounded bg-red-500" />
            <div className="w-8 h-8 rounded bg-blue-500" />
            <div className="w-8 h-8 rounded bg-green-500" />
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <h3 className="font-bold text-slate-800">Borders</h3>
          <p className="text-sm text-slate-500">Adding outlines and rounding corners.</p>
          <div className="w-full h-8 border-2 border-slate-300 rounded-lg flex items-center justify-center text-[10px] font-bold text-slate-400 uppercase">
            Rounded Border
          </div>
        </section>

        <section className="bg-white p-6 rounded-xl border border-slate-200 space-y-3">
          <h3 className="font-bold text-slate-800">Spacing</h3>
          <p className="text-sm text-slate-500">Using Padding and Margins for space.</p>
          <div className="bg-slate-100 p-4 border border-dashed border-slate-300 rounded">
            <div className="bg-white p-2 text-center text-[10px] font-bold">Content with Padding</div>
          </div>
        </section>
      </div>

      {/* Responsive Demo */}
      <section className="bg-white rounded-2xl p-8 border border-slate-200">
        <h3 className="text-lg font-bold mb-4 text-slate-800">Basic Responsive Layout</h3>
        <p className="text-sm text-slate-500 mb-6">Below is a simple flexbox layout that arranges boxes in a row.</p>
        <div className="flex flex-wrap gap-4">
          <div className="bg-blue-100 text-blue-700 font-bold px-6 py-4 rounded-lg flex-1 min-w-[120px] text-center border border-blue-200">Box 1</div>
          <div className="bg-emerald-100 text-emerald-700 font-bold px-6 py-4 rounded-lg flex-1 min-w-[120px] text-center border border-emerald-200">Box 2</div>
          <div className="bg-amber-100 text-amber-700 font-bold px-6 py-4 rounded-lg flex-1 min-w-[120px] text-center border border-amber-200">Box 3</div>
        </div>
      </section>
    </div>
  );
}
