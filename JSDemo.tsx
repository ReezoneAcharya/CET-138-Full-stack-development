import React from 'react';
import { Code2, Zap } from 'lucide-react';

export default function JSDemo() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="space-y-12 pb-12">
       <header className="space-y-2">
        <h1 className="text-3xl font-display font-bold text-slate-800 tracking-tight">5. JavaScript: Logic & Interaction</h1>
        <p className="text-slate-500 leading-relaxed max-w-2xl">
          JavaScript is a programming language that lets you make web pages interactive. Here is a simple example of JavaScript at work.
        </p>
      </header>

      <div className="max-w-md mx-auto">
        {/* Simple Counter */}
        <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <Zap size={20} />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Click Counter Demo</h3>
          </div>
          <p className="text-sm text-slate-500">Every time you click the button, a JavaScript variable increases by 1.</p>
          <div className="flex flex-col items-center gap-4 p-6 bg-slate-50 rounded-xl">
            <div className="text-4xl font-bold text-slate-900">{count}</div>
            <button 
              onClick={() => setCount(count + 1)}
              className="bg-blue-600 text-white px-8 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Click Me!
            </button>
            <button 
              onClick={() => setCount(0)}
              className="text-xs text-slate-400 hover:text-slate-600 underline"
            >
              Reset
            </button>
          </div>
        </section>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 text-white text-xs font-mono space-y-2">
        <p className="text-blue-400">// JavaScript Beginner Concepts:</p>
        <p>- Variables & State (useState)</p>
        <p>- Event Listeners (onClick)</p>
        <p>- Basic Math (+ 1)</p>
      </div>
    </div>
  );
}
