import React from 'react';
import { motion } from 'motion/react';
import { Box, Code2, AlertTriangle, CheckCircle, Info } from 'lucide-react';

export default function BootstrapDemo() {
  const [showAlert, setShowAlert] = React.useState(true);

  return (
    <div className="space-y-12 pb-12">
      <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-800 tracking-tight">4. Bootstrap Framework</h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          Bootstrap is a framework for building responsive websites quickly. Here are some simple components I can build with it.
        </p>
      </header>

      {/* Grid of basic components */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Buttons & Badges */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 space-y-6">
          <h3 className="font-bold text-slate-800">Buttons & Badges</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded font-medium hover:bg-blue-700 transition">Primary Button</button>
            <button className="bg-slate-200 text-slate-700 px-4 py-2 rounded font-medium hover:bg-slate-300 transition">Secondary</button>
          </div>
          <div className="flex gap-2">
            <span className="bg-blue-100 text-blue-700 text-xs font-bold px-2 py-0.5 rounded">New</span>
            <span className="bg-emerald-100 text-emerald-700 text-xs font-bold px-2 py-0.5 rounded">Update</span>
            <span className="bg-red-100 text-red-700 text-xs font-bold px-2 py-0.5 rounded">Hot!</span>
          </div>
        </section>

        {/* Alerts */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-800">Simple Alerts</h3>
          <div className="bg-blue-50 border border-blue-100 text-blue-800 p-3 rounded-lg text-sm">
            <strong>Info:</strong> This is a simple information box.
          </div>
          <div className="bg-emerald-50 border border-emerald-100 text-emerald-800 p-3 rounded-lg text-sm">
            <strong>Success:</strong> Everything is working correctly!
          </div>
        </section>

        {/* Simple Card */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 space-y-4 md:col-span-2">
          <h3 className="font-bold text-slate-800">The Card Component</h3>
          <div className="max-w-sm border border-slate-200 rounded-xl overflow-hidden shadow-sm">
            <div className="h-32 bg-slate-100 flex items-center justify-center text-slate-400">
               <Box size={40} />
            </div>
            <div className="p-4 space-y-2">
              <h4 className="font-bold">Card Title</h4>
              <p className="text-sm text-slate-500">This is a basic example of a Bootstrap-style card with a header image and description.</p>
              <button className="text-blue-600 text-sm font-bold hover:underline">Learn more →</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
