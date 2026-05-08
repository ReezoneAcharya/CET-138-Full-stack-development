import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Home as HomeIcon, Layout, Palette, Box, Code2, Menu, X, ChevronRight, Github, ExternalLink } from 'lucide-react';
import Home from './components/Home';
import HTMLDemo from './components/HTMLDemo';
import CSSDemo from './components/CSSDemo';
import BootstrapDemo from './components/BootstrapDemo';
import JSDemo from './components/JSDemo';

type Section = 'home' | 'html' | 'css' | 'bootstrap' | 'javascript';

export default function App() {
  const [activeSection, setActiveSection] = React.useState<Section>('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const sections = [
    { id: 'home', label: '1. Overview', icon: <HomeIcon size={18} /> },
    { id: 'html', label: '2. HTML', icon: <Layout size={18} /> },
    { id: 'css', label: '3. CSS', icon: <Palette size={18} /> },
    { id: 'bootstrap', label: '4. Bootstrap', icon: <Box size={18} /> },
    { id: 'javascript', label: '5. JavaScript', icon: <Code2 size={18} /> },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home': return <Home onNavigate={setActiveSection} />;
      case 'html': return <HTMLDemo />;
      case 'css': return <CSSDemo />;
      case 'bootstrap': return <BootstrapDemo />;
      case 'javascript': return <JSDemo />;
      default: return <Home onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Mobile Header */}
      <header className="md:hidden glass fixed top-0 w-full z-50 px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-display font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
          CET138 Portfolio
        </h1>
        <button 
          id="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 text-slate-600"
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </header>

      {/* Sidebar Navigation */}
      <nav className={`
        fixed md:sticky top-0 h-screen w-64 glass z-40 p-6 flex flex-col gap-8 transition-transform duration-300
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="hidden md:block">
          <h1 className="text-2xl font-display font-bold bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
            CET-138 Portfolio
          </h1>
          <div className="mt-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
            <p className="text-sm font-bold text-slate-800">Reezone Acharya</p>
            <p className="text-[10px] text-slate-500 font-mono text-center">ID: 250640924</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 flex-grow">
          <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-2">Main Sections</p>
          {sections.map((section) => (
            <button
              id={`nav-${section.id}`}
              key={section.id}
              onClick={() => {
                setActiveSection(section.id as Section);
                setIsMobileMenuOpen(false);
              }}
              className={`nav-link ${activeSection === section.id ? 'nav-active' : 'nav-inactive'}`}
            >
              {section.icon}
              <span className="font-semibold">{section.label}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-slate-100">
          <p className="text-[10px] text-slate-400 text-center uppercase tracking-widest font-bold">CET138 Assignment</p>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-grow p-4 md:p-10 mt-16 md:mt-0 relative overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="max-w-5xl mx-auto"
          >
            {renderSection()}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
