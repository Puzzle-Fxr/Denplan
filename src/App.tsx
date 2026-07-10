import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Menu, X, Phone, MapPin, Mail, Award, Shield, Clock, ChevronRight, 
  ArrowRight 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CURRENT_YEAR = new Date().getFullYear();

// Types
interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  description: string;
  specs: string[];
  image: string;
}

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

// Products Data
const products: Product[] = [
  {
    id: 1,
    name: "Beretta 686 Silver Pigeon",
    category: "shotguns",
    price: "GHS 48,500",
    description: "Premium Italian over-under shotgun. Exceptional balance and craftsmanship for the discerning hunter.",
    specs: ["12 Gauge", "28\" Barrel", "3\" Chamber", "Walnut Stock"],
    image: "/images/shotgun.jpg"
  },
  {
    id: 2,
    name: "Browning Citori 725",
    category: "shotguns",
    price: "GHS 62,900",
    description: "World-renowned reliability with refined aesthetics. The gold standard in sporting shotguns.",
    specs: ["12 Gauge", "30\" Barrel", "3\" Chamber", "Grade III Walnut"],
    image: "/images/shotgun.jpg"
  },
  {
    id: 3,
    name: "Winchester SXP Field",
    category: "shotguns",
    price: "GHS 24,750",
    description: "Rugged pump-action shotgun designed for consistent field performance in Ghanaian terrain.",
    specs: ["12 Gauge", "28\" Barrel", "3\" Chamber", "Matte Black Finish"],
    image: "/images/shotgun.jpg"
  },
  {
    id: 4,
    name: "Federal Premium 12ga #5",
    category: "ammunition",
    price: "GHS 285",
    description: "Premium copper-plated shot shells for upland game. Superior patterning and penetration.",
    specs: ["Box of 25", "3\" Magnum", "#5 Shot", "High Brass"],
    image: "/images/ammo.jpg"
  },
  {
    id: 5,
    name: "Winchester AA Target Loads",
    category: "ammunition",
    price: "GHS 195",
    description: "Industry-leading target loads trusted by competitive shooters across West Africa.",
    specs: ["Box of 25", "2 3/4\"", "#7.5 Shot", "Low Recoil"],
    image: "/images/ammo.jpg"
  },
  {
    id: 6,
    name: "Hornady Buckshot 12ga",
    category: "ammunition",
    price: "GHS 340",
    description: "Defensive and hunting loads engineered for maximum stopping power and accuracy.",
    specs: ["Box of 10", "3\" Magnum", "00 Buck", "Critical Defense"],
    image: "/images/ammo.jpg"
  },
  {
    id: 7,
    name: "Heritage Leather Gun Case",
    category: "accessories",
    price: "GHS 8,950",
    description: "Handcrafted premium leather double gun case with brass fittings and velvet interior.",
    specs: ["Fits 2 Shotguns", "Solid Brass Hardware", "Lockable", "Shoulder Strap"],
    image: "/images/accessories.jpg"
  },
  {
    id: 8,
    name: "Vortex Diamondback Optics",
    category: "accessories",
    price: "GHS 6,400",
    description: "Rugged, waterproof 3-9x40 scope with Dead-Hold BDC reticle for precision shooting.",
    specs: ["3-9x40mm", "BDC Reticle", "Nitrogen Purged", "Lifetime Warranty"],
    image: "/images/accessories.jpg"
  }
];

const categories: Category[] = [
  {
    id: "shotguns",
    name: "Shotguns",
    description: "Premium over-under, side-by-side, and pump-action shotguns from world-renowned manufacturers.",
    image: "/images/shotgun.jpg"
  },
  {
    id: "ammunition",
    name: "Ammunition",
    description: "Premium shotshells and specialty loads for hunting, sporting, and defensive use.",
    image: "/images/ammo.jpg"
  },
  {
    id: "accessories",
    name: "Accessories",
    description: "Luxury cases, premium optics, cleaning kits, and professional shooting accessories.",
    image: "/images/accessories.jpg"
  }
];

// Navigation Component
const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/shotguns', label: 'Shotguns' },
    { path: '/ammunition', label: 'Ammunition' },
    { path: '/accessories', label: 'Accessories' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const scrollToTopAndCloseMenu = () => {
    window.scrollTo(0, 0);
    setIsOpen(false);
  };
  
  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#0F0F0F]/95 backdrop-blur-lg border-b border-[#2A2A2A] z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center gap-3" 
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="flex items-center">
              <img 
                src="/images/denplanlogo.png" 
                alt="Deplan Trading Enterprise" 
                className="h-14 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link text-sm font-medium tracking-[1px] uppercase transition-colors ${
                  location.pathname === link.path ? 'text-[#C5A26F]' : 'text-[#F5F5F5] hover:text-[#C5A26F]'
                }`}
                onClick={() => window.scrollTo(0, 0)}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C5A26F] hover:bg-[#A67C52] text-[#0F0F0F] text-sm font-semibold tracking-wider transition-all active:scale-[0.985]"
              onClick={() => window.scrollTo(0, 0)}
            >
              INQUIRE NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-[#F5F5F5]"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-[#2A2A2A] bg-[#0F0F0F]"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={scrollToTopAndCloseMenu}
                  className={`text-lg tracking-wider ${location.pathname === link.path ? 'text-[#C5A26F]' : 'text-[#F5F5F5]'}`}
                >
                  {link.label}
                </Link>
              ))}
              <Link 
                to="/contact" 
                onClick={scrollToTopAndCloseMenu}
                className="mt-4 inline-block text-center py-4 bg-[#C5A26F] text-[#0F0F0F] font-semibold tracking-widest"
              >
                INQUIRE NOW
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

// Product Modal
const ProductModal: React.FC<{ 
  product: Product | null; 
  onClose: () => void;
}> = ({ product, onClose }) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4" onClick={onClose}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 30 }}
        transition={{ duration: 0.2 }}
        className="modal bg-[#161616] max-w-4xl w-full overflow-hidden border border-[#2A2A2A]"
        onClick={e => e.stopPropagation()}
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image */}
          <div className="relative h-[380px] md:h-auto bg-[#0F0F0F]">
            <img 
              src={product.image} 
              alt={product.name} 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
          </div>

          {/* Details */}
          <div className="p-10 flex flex-col">
            <button 
              onClick={onClose} 
              className="self-end text-[#B8B8B8] hover:text-white mb-4"
            >
              <X size={22} />
            </button>
            
            <div>
              <div className="uppercase tracking-[3px] text-xs text-[#C5A26F] mb-2">{product.category.toUpperCase()}</div>
              <h3 className="serif text-4xl text-white leading-none mb-4">{product.name}</h3>
              <div className="text-2xl text-[#C5A26F] mb-8 font-light tracking-tight">{product.price}</div>
            </div>

            <p className="text-[#B8B8B8] text-[15px] leading-relaxed mb-8">
              {product.description}
            </p>

            <div>
              <div className="uppercase tracking-[2px] text-xs mb-3 text-[#C5A26F]">SPECIFICATIONS</div>
              <ul className="grid grid-cols-1 gap-y-2.5 text-sm">
                {product.specs.map(spec => (
                  <li key={spec} className="flex items-center gap-3 text-[#F5F5F5]">
                    <div className="w-1 h-1 bg-[#C5A26F] rounded-full" /> {spec}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto pt-8 border-t border-[#2A2A2A]">
              <a href="#contact" className="block w-full text-center py-4 bg-[#C5A26F] hover:bg-[#A67C52] text-[#0F0F0F] font-semibold tracking-[1.5px] transition-colors">
                REQUEST QUOTE &amp; AVAILABILITY
              </a>
              <p className="text-center text-xs text-[#B8B8B8] mt-4 tracking-wider">LICENSED SALES ONLY • GHANA FIREARMS ACT COMPLIANT</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Product Card
const ProductCard: React.FC<{ product: Product; onClick: () => void }> = ({ product, onClick }) => (
  <div 
    onClick={onClick}
    className="product-card group bg-[#161616] border border-[#2A2A2A] overflow-hidden cursor-pointer flex flex-col"
  >
    <div className="relative aspect-[16/10] overflow-hidden bg-black">
      <img 
        src={product.image} 
        alt={product.name} 
        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.06] transition-transform duration-700" 
      />
      <div className="absolute top-4 right-4 px-4 py-1 text-xs tracking-[1px] bg-black/70 text-[#C5A26F] border border-[#C5A26F]/50">
        {product.category.toUpperCase()}
      </div>
    </div>
    <div className="p-7 flex-1 flex flex-col">
      <div>
        <div className="font-semibold text-xl tracking-tight text-white mb-1">{product.name}</div>
        <div className="text-[#C5A26F] text-xl font-light tracking-tight mb-4">{product.price}</div>
      </div>
      <p className="text-sm text-[#B8B8B8] leading-relaxed mb-auto line-clamp-3">{product.description}</p>
      
      <button className="mt-6 inline-flex items-center text-sm text-[#C5A26F] tracking-widest group-hover:gap-2 transition-all">
        VIEW DETAILS <ArrowRight className="ml-1.5 w-4 h-4" />
      </button>
    </div>
  </div>
);

// Home Page
const Home: React.FC<{ onProductClick: (p: Product) => void }> = ({ onProductClick }) => {
  const featured = products.slice(0, 6);

  return (
    <>
      {/* HERO BANNER */}
      <div className="relative h-[100dvh] min-h-[720px] flex items-center justify-center pt-20 bg-[#0F0F0F]">
        <div className="absolute inset-0">
          <img 
            src="/images/hero.jpg" 
            alt="Deplan Trading Enterprise Showroom" 
            className="absolute inset-0 w-full h-full object-cover opacity-70" 
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-[#0F0F0F]" />
        </div>
        
        <div className="relative z-10 max-w-5xl px-6 text-center">
          <div className="inline-block px-5 py-1.5 border border-[#C5A26F]/40 text-[#C5A26F] text-xs tracking-[4px] mb-6">EST. 2009 • ACCRA, GHANA</div>
          
          <h1 className="serif text-white text-7xl md:text-[92px] leading-[0.9] tracking-[-4.2px] mb-6">
            PRECISION.<br />TRADITION.<br />TRUST.
          </h1>
          <p className="max-w-md mx-auto text-xl text-[#B8B8B8] tracking-tight mb-10">
            Ghana's premier licensed dealer of fine shotguns, premium ammunition, and professional shooting accessories.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shotguns" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#C5A26F] hover:bg-[#A67C52] text-[#0F0F0F] font-semibold tracking-[2px] transition-all text-sm"
              onClick={() => window.scrollTo(0, 0)}
            >
              EXPLORE OUR COLLECTION <ChevronRight size={18} />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-3 px-10 py-4 border border-[#C5A26F] hover:bg-white/5 text-[#F5F5F5] font-semibold tracking-[2px] text-sm transition-all"
              onClick={() => window.scrollTo(0, 0)}
            >
              SPEAK WITH OUR TEAM
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-[#C5A26F] text-xs tracking-[3px]">
          SCROLL TO BEGIN <div className="h-px w-8 bg-[#C5A26F]/60 my-2" />
        </div>
      </div>

      {/* TRUST BAR */}
      <div className="bg-[#161616] py-7 border-b border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6 flex flex-wrap items-center justify-center gap-x-16 gap-y-4 text-center">
          {[
            { icon: <Shield className="w-4 h-4" />, label: "FULLY LICENSED" },
            { icon: <Award className="w-4 h-4" />, label: "CERTIFIED DEALER" },
            { icon: <Clock className="w-4 h-4" />, label: "15+ YEARS EXPERIENCE" }
          ].map(item => (
            <div key={item.label} className="flex items-center gap-3 text-[#C5A26F] text-xs tracking-[2px]">
              {item.icon} {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <div className="text-[#C5A26F] text-xs tracking-[3px] mb-1">CURATED SELECTIONS</div>
            <h2 className="serif text-white text-6xl tracking-[-1.6px]">Featured Products</h2>
          </div>
          <Link 
            to="/shotguns" 
            className="hidden md:flex items-center gap-2 text-sm text-[#C5A26F] hover:text-white transition-colors tracking-widest"
            onClick={() => window.scrollTo(0, 0)}
          >
          VIEW ALL <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      </div>

      {/* BRAND HIGHLIGHTS / CATEGORIES */}
      <div className="bg-[#161616] py-20 border-y border-[#2A2A2A]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#C5A26F] text-xs tracking-[4px] mb-3">EXPLORE OUR DEPARTMENTS</div>
            <h2 className="serif text-6xl tracking-[-1.5px] text-white">Three Pillars of Excellence</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {categories.map(cat => (
              <Link 
                to={`/${cat.id}`} 
                key={cat.id} 
                className="group block"
                onClick={() => window.scrollTo(0, 0)}
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-black border border-[#2A2A2A]">
                  <img src={cat.image} alt={cat.name} className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
                  <div className="absolute bottom-0 left-0 p-9">
                    <div className="text-[#C5A26F] tracking-[3px] text-xs mb-2">{cat.name.toUpperCase()}</div>
                    <div className="serif text-white text-[42px] leading-none tracking-[-1.5px] mb-4">{cat.name}</div>
                    <div className="text-[#B8B8B8] text-[15px] pr-6">{cat.description}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* LICENSING & COMPLIANCE */}
      <div className="max-w-5xl mx-auto px-6 py-20 text-center border-b border-[#2A2A2A]">
        <div className="mx-auto max-w-2xl">
          <div className="inline px-4 py-1 border border-[#C5A26F]/30 text-[#C5A26F] text-xs tracking-[3px]">REGULATORY COMPLIANCE</div>
          <h3 className="serif mt-4 text-white text-5xl tracking-tight">Licensed &amp; Regulated</h3>
          <p className="mt-6 text-[#B8B8B8] leading-relaxed">
            Deplan Trading Enterprise operates under full authorization from the Ghana Police Service Firearms Licensing Division. 
            Every transaction is conducted in strict accordance with Ghanaian firearms legislation. All firearms are registered and tracked.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-sm text-[#B8B8B8]">
          {[
            "Ghana Police Service License",
            "Firearms & Ammunition Act, 2023",
            "Import & Export Certified",
            "Background Verification"
          ].map(item => (
            <div key={item} className="border border-[#2A2A2A] py-5 px-5 tracking-tight">{item}</div>
          ))}
        </div>
      </div>
    </>
  );
};

// Category Page Component
const CategoryPage: React.FC<{ 
  category: string; 
  onProductClick: (p: Product) => void;
}> = ({ category, onProductClick }) => {
  const filtered = products.filter(p => p.category === category);
  const catInfo = categories.find(c => c.id === category)!;

  return (
    <div className="pt-20 bg-[#0F0F0F] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12">
        <div className="max-w-3xl">
          <Link 
            to="/" 
            className="text-xs tracking-[3px] text-[#C5A26F] mb-3 inline-block"
            onClick={() => window.scrollTo(0, 0)}
          >
            BACK TO HOME
          </Link>
          <h1 className="serif text-white text-[68px] tracking-[-2.6px] leading-none mb-4">{catInfo.name}</h1>
          <p className="text-xl text-[#B8B8B8]">{catInfo.description}</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} onClick={() => onProductClick(product)} />
          ))}
        </div>
      </div>
    </div>
  );
};

// About Page
const About: React.FC = () => (
  <div className="pt-20 bg-[#0F0F0F] min-h-screen">
    <div className="max-w-4xl mx-auto px-6 pt-20 pb-24">
      <div className="text-[#C5A26F] text-xs tracking-[4px]">OUR HERITAGE</div>
      <h1 className="serif text-[72px] tracking-[-3.5px] text-white leading-none mt-2 mb-9">A Tradition of Excellence</h1>
      
      <div className="prose prose-invert max-w-none text-[#B8B8B8] text-[15px] leading-[1.75]">
        <p className="text-xl text-white tracking-tight">Since 2009, Deplan Trading Enterprise has been Ghana’s trusted source for premium firearms and related equipment.</p>
        
        <p>Based in Accra, we have built our reputation on uncompromising quality, rigorous compliance, and genuine expertise. Our clients range from professional hunters and competitive shooters to conservation organizations and private security firms.</p>
        
        <p>Every firearm we offer is hand-selected for its reliability, craftsmanship, and suitability to the demanding conditions found across West Africa. Our staff provides in-depth guidance, ensuring each client receives the most appropriate equipment for their specific needs.</p>
      </div>

      <div className="mt-16 pt-9 border-t border-[#2A2A2A] grid md:grid-cols-3 gap-9 text-sm">
        {[
          { title: "Our Promise", text: "Only the finest, field-proven products. Every gun is inspected and test-fired before sale." },
          { title: "Expert Guidance", text: "Our team has over 60 combined years of hunting, sporting, and firearms experience." },
          { title: "Aftercare", text: "Full after-sales support, servicing, and genuine spare parts sourcing." }
        ].map(i => (
          <div key={i.title}>
            <div className="text-[#C5A26F] tracking-widest text-xs mb-3">{i.title.toUpperCase()}</div>
            <p>{i.text}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Contact Page
const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2800);
  };

  return (
    <div className="pt-20 bg-[#0F0F0F] min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-x-16 gap-y-16">
          {/* Contact Info */}
          <div className="lg:col-span-2">
            <div className="text-[#C5A26F] text-xs tracking-[4px]">ACCRA, GHANA</div>
            <h2 className="serif text-white text-7xl tracking-[-2.4px] mt-1 mb-10">Let's Talk</h2>
            
            <div className="space-y-9 text-sm">
              <div>
                <div className="flex items-center gap-3 text-[#C5A26F] mb-1"><MapPin size={17} /> HEAD OFFICE</div>
                <div className="pl-8 text-[#B8B8B8]">18 Independence Avenue<br />Ridge, Accra, Ghana</div>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[#C5A26F] mb-1"><Phone size={17} /> PHONE</div>
                <a href="tel:+233302123456" className="pl-8 text-[#B8B8B8] hover:text-white transition-colors">+233 302 123 456</a>
              </div>
              <div>
                <div className="flex items-center gap-3 text-[#C5A26F] mb-1"><Mail size={17} /> EMAIL</div>
                <a href="mailto:info@deplantrading.com" className="pl-8 text-[#B8B8B8] hover:text-white transition-colors">info@deplantrading.com</a>
              </div>
            </div>
            
            <div className="mt-14 text-xs tracking-widest text-[#C5A26F]">MON — FRI: 8:30AM — 5:30PM<br />SATURDAYS BY APPOINTMENT ONLY</div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" required placeholder="FULL NAME" className="contact-input bg-transparent border border-[#2A2A2A] px-7 py-4 text-white placeholder:text-[#666] w-full" />
                <input type="tel" required placeholder="PHONE NUMBER" className="contact-input bg-transparent border border-[#2A2A2A] px-7 py-4 text-white placeholder:text-[#666] w-full" />
              </div>
              <input type="email" required placeholder="EMAIL ADDRESS" className="contact-input bg-transparent border border-[#2A2A2A] px-7 py-4 text-white placeholder:text-[#666] w-full" />
              <textarea required rows={6} placeholder="YOUR MESSAGE OR INQUIRY" className="contact-input resize-y bg-transparent border border-[#2A2A2A] px-7 py-4 text-white placeholder:text-[#666] w-full" />
              
              <button type="submit" className="w-full py-5 bg-[#C5A26F] hover:bg-[#A67C52] text-[#0F0F0F] text-sm tracking-[3px] font-semibold transition-colors">
                {submitted ? "THANK YOU. WE'LL BE IN TOUCH SHORTLY." : "SUBMIT YOUR INQUIRY"}
              </button>
            </form>
            <div className="text-center mt-6 text-xs text-[#666]">All inquiries are handled confidentially. We respond within 24 hours.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App
const AppContent: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showIntroOverlay, setShowIntroOverlay] = useState(true);
  const location = useLocation();
  const shouldShowOverlay = showIntroOverlay && location.pathname === '/';

  return (
    <div className="bg-[#0F0F0F] text-[#F5F5F5] min-h-screen overflow-x-hidden">
      <AnimatePresence>
        {shouldShowOverlay && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setShowIntroOverlay(false)}
            className="fixed inset-0 z-[120] flex cursor-pointer items-center justify-center bg-[#1C2526]"
          >
            <motion.img
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              src="/images/denplanlogo.png"
              alt="Deplan Trading Enterprise"
              className="h-40 w-auto max-w-[80vw] object-contain sm:h-56"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Navigation />
      
      <Routes>
        <Route path="/" element={<Home onProductClick={setSelectedProduct} />} />
        <Route path="/shotguns" element={<CategoryPage category="shotguns" onProductClick={setSelectedProduct} />} />
        <Route path="/ammunition" element={<CategoryPage category="ammunition" onProductClick={setSelectedProduct} />} />
        <Route path="/accessories" element={<CategoryPage category="accessories" onProductClick={setSelectedProduct} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
      </Routes>

      {/* Footer */}
        <footer className="bg-black py-16 px-6 border-t border-[#2A2A2A]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-y-6 text-xs tracking-[1.5px] text-[#666]">
            <div>© {CURRENT_YEAR} DEPLAN TRADING ENTERPRISE. ALL RIGHTS RESERVED.</div>
            <div className="flex gap-x-8">
              <div>LICENSED BY GHANA POLICE SERVICE</div>
              <Link 
                to="/privacy-policy" 
                className="hover:text-white transition-colors"
                onClick={() => window.scrollTo(0, 0)}
              >
                PRIVACY POLICY
              </Link>
            </div>
            <div>ACCRA, GHANA</div>
          </div>
        </footer>

      {/* Product Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;

{{ /* New Privacy Policy Page Component */ }}
const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="pt-20 bg-[#0F0F0F] min-h-screen">
      <div className="container mx-auto p-8 max-w-4xl pt-20 pb-24">
        <div className="text-[#C5A26F] text-xs tracking-[4px]">LEGAL &amp; COMPLIANCE</div>
        <h1 className="serif text-[72px] tracking-[-3.5px] text-white leading-none mt-2 mb-9">Privacy Policy</h1>

        <div className="prose prose-invert max-w-none text-[#B8B8B8] text-[15px] leading-[1.75]">
          <p className="mb-4">
            **Last Updated:** October 26, {CURRENT_YEAR}
          </p>

          <p className="mb-6">
            Your privacy is important to us. This Privacy Policy explains how Deplan Trading Enterprise ("we," "us," or "our") collects, uses, discloses, and safeguards your information when you visit our website deplantrading.com and use our services. Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">1. Information We Collect</h2>
          <p className="mb-4">
            We may collect information about you in a variety of ways. The information we may collect on the site includes:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>
              **Personal Data:** Personally identifiable information, such as your name, shipping address, email address, and telephone number, that you voluntarily give to us when you register with the site or when you choose to participate in various activities related to the site, such as online chat and message boards.
            </li>
            <li>
              **Derivative Data:** Information our servers automatically collect when you access the site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the site.
            </li>
            <li>
              **Financial Data:** Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.
            </li>
            <li>
              **Data from Social Networks:** User information from social networking sites, such as Facebook, Instagram, and Twitter, if you connect to our site through these networks.
            </li>
            <li>
              **Mobile Device Data:** Device information, such as your mobile device ID, model, and manufacturer, and information about the location of your device, if you access the site from a mobile device.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">2. How We Use Your Information</h2>
          <p className="mb-4">
            Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Create and manage your account.</li>
            <li>Process your transactions and send notices about your transactions.</li>
            <li>Email you regarding your account or order.</li>
            <li>Enable user-to-user communications.</li>
            <li>Generate a personal profile about you to make future visits to the site more personalized.</li>
            <li>Increase the efficiency and operation of the site.</li>
            <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
            <li>Notify you of updates to the site or services.</li>
            <li>Offer new products, services, mobile applications, and/or recommendations to you.</li>
            <li>Perform other business activities as needed.</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclosure of Your Information</h2>
          <p className="mb-4">
            We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>
              **By Law or to Protect Rights:** If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.
            </li>
            <li>
              **Third-Party Service Providers:** We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.
            </li>
            <li>
              **Marketing Communications:** With your consent, or with an opportunity for you to withdraw consent, we may share your information with third parties for marketing purposes, as permitted by law.
            </li>
            <li>
              **Affiliates:** We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include our parent company and any subsidiaries, joint venture partners or other companies that we control or that are under common control with us.
            </li>
            <li>
              **Business Partners:** We may share your information with our business partners to offer you certain products, services or promotions.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4 text-white">4. Security of Your Information</h2>
          <p className="mb-4">
            We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">5. Policy for Children</h2>
          <p className="mb-4">
            We do not knowingly solicit information from or market to children under the age of 13. If you become aware of any data we have collected from children under age 13, please contact us using the contact information provided below.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">6. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Revised" date and the updated version will be effective as soon as it is accessible. We encourage you to review this Privacy Policy frequently to be informed of how we are protecting your information.
          </p>

          <h2 className="text-2xl font-semibold mb-4 text-white">7. Contact Us</h2>
          <p className="mb-4">
            If you have questions or comments about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-4">
            Deplan Trading Enterprise <br />
            18 Independence Avenue, Ridge <br />
            Accra, Ghana <br />
            info@deplantrading.com <br />
            +233 302 123 456 <br />
          </p>
        </div>
      </div>
    </div>
  );
};


