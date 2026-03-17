import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, Instagram, Youtube, Sparkles, ExternalLink } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import profileImage from '../assets/a157fd8fe358c814c9538463690dab3a08669de8.png';

// --- UTILS ---
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================================================
// 🎨 CONTENT MANAGEMENT ZONE (VIBE CODING FRIENDLY) 🎨
// ============================================================================
// AI INSTRUCTIONS:
// When the user asks to "update videos", "add a new video", or "change links",
// ONLY modify the `VIDEOS` array below. 
// - `thumbnail`: Image URL for the video cover.
// - `platform`: Must be exactly 'TikTok', 'Instagram', or 'YouTube'.
// - `products`: Array of items featured in the video. If none, leave as empty array `[]`.

type Product = {
  id: string;
  brand: string;
  name: string;
  image: string;
};

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  platform: 'TikTok' | 'Instagram' | 'YouTube';
  products: Product[];
};

export const VIDEOS: Video[] = [
  {
    id: 'v1',
    title: 'Morning Skincare Routine',
    thumbnail: 'https://images.unsplash.com/photo-1773015806006-addf313bda7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'TikTok',
    products: [
      { id: 'p1', brand: 'Glow Recipe', name: 'Watermelon Glow Dew Drops', image: 'https://images.unsplash.com/photo-1596642748852-5596416147ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
      { id: 'p2', brand: 'Laneige', name: 'Lip Sleeping Mask', image: 'https://images.unsplash.com/photo-1642505172812-15cf294b1212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' },
    ]
  },
  {
    id: 'v2',
    title: 'Soft Girl Makeup Look',
    thumbnail: 'https://images.unsplash.com/photo-1674154082514-44b308d0209e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'Instagram',
    products: [
      { id: 'p3', brand: 'Rom&nd', name: 'Juicy Lasting Tint', image: 'https://images.unsplash.com/photo-1642505172812-15cf294b1212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
    ]
  },
  {
    id: 'v3',
    title: 'Cafe Hopping Outfit',
    thumbnail: 'https://images.unsplash.com/photo-1769614552343-a86788218525?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'YouTube',
    products: []
  },
  {
    id: 'v4',
    title: 'Spring Floral Arrangements',
    thumbnail: 'https://images.unsplash.com/photo-1771370558788-0fd2a69bc1c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'TikTok',
    products: []
  },
  {
    id: 'v5',
    title: 'Minimalist Desktop Setup',
    thumbnail: 'https://images.unsplash.com/photo-1769985841487-da8af9cc5184?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'Instagram',
    products: []
  },
  {
    id: 'v6',
    title: 'My Favorite Serums',
    thumbnail: 'https://images.unsplash.com/photo-1596642748852-5596416147ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    platform: 'YouTube',
    products: [
      { id: 'p4', brand: 'COSRX', name: 'Snail Mucin Essence', image: 'https://images.unsplash.com/photo-1596642748852-5596416147ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400' }
    ]
  }
];
// ============================================================================

// Custom Icons
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 448 512" fill="currentColor">
    <path d="M448 209.91a210.06 210.06 0 0 1-122.77-39.25V349.38A162.55 162.55 0 1 1 185 188.31V278.2a74.62 74.62 0 1 0 52.23 71.18V0l88 0a121.18 121.18 0 0 0 1.86 22.17h.05A122.18 122.18 0 0 0 381 102.39a121.43 121.43 0 0 0 67 20.14Z"/>
  </svg>
);

const AsteriskLogo = () => (
  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 text-black" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 4v16M4 12h16M7.5 7.5l9 9M16.5 7.5l-9 9"/>
  </svg>
);

// Use a high-quality portrait that fits the gradient aesthetic
const PROFILE_IMG = profileImage;

const FILTERS = ['All', 'TikTok', 'Instagram', 'YouTube'];
const PLATFORMS = ['TikTok', 'Instagram', 'YouTube'];

const PixelHeart = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg 
    viewBox="0 0 11 10" 
    className={className} 
    style={{ ...style }}
    aria-hidden="true"
  >
    {/* Outline */}
    <rect x="2" y="0" width="2" height="1" fill="#FF9EBB" />
    <rect x="7" y="0" width="2" height="1" fill="#FF9EBB" />
    <rect x="1" y="1" width="1" height="1" fill="#FF9EBB" />
    <rect x="4" y="1" width="1" height="1" fill="#FF9EBB" />
    <rect x="6" y="1" width="1" height="1" fill="#FF9EBB" />
    <rect x="9" y="1" width="1" height="1" fill="#FF9EBB" />
    <rect x="0" y="2" width="1" height="3" fill="#FF9EBB" />
    <rect x="5" y="2" width="1" height="1" fill="#FF9EBB" />
    <rect x="10" y="2" width="1" height="3" fill="#FF9EBB" />
    <rect x="1" y="5" width="1" height="1" fill="#FF9EBB" />
    <rect x="9" y="5" width="1" height="1" fill="#FF9EBB" />
    <rect x="2" y="6" width="1" height="1" fill="#FF9EBB" />
    <rect x="8" y="6" width="1" height="1" fill="#FF9EBB" />
    <rect x="3" y="7" width="1" height="1" fill="#FF9EBB" />
    <rect x="7" y="7" width="1" height="1" fill="#FF9EBB" />
    <rect x="4" y="8" width="1" height="1" fill="#FF9EBB" />
    <rect x="6" y="8" width="1" height="1" fill="#FF9EBB" />
    <rect x="5" y="9" width="1" height="1" fill="#FF9EBB" />

    {/* Fill */}
    <rect x="2" y="1" width="2" height="1" fill="#FFC4D4" />
    <rect x="7" y="1" width="2" height="1" fill="#FFC4D4" />
    <rect x="1" y="2" width="4" height="1" fill="#FFC4D4" />
    <rect x="6" y="2" width="4" height="1" fill="#FFC4D4" />
    <rect x="1" y="3" width="9" height="1" fill="#FFC4D4" />
    <rect x="1" y="4" width="9" height="1" fill="#FFC4D4" />
    <rect x="2" y="5" width="7" height="1" fill="#FFC4D4" />
    <rect x="3" y="6" width="5" height="1" fill="#FFC4D4" />
    <rect x="4" y="7" width="3" height="1" fill="#FFC4D4" />
    <rect x="5" y="8" width="1" height="1" fill="#FFC4D4" />

    {/* Highlights */}
    <rect x="2" y="2" width="1" height="1" fill="#FFFFFF" />
    <rect x="1" y="3" width="1" height="1" fill="#FFFFFF" />
  </svg>
);

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; size: number; duration: number; sway: number; startY?: number }[]>([]);

  // 1. Continuous slow spawning from bottom
  useEffect(() => {
    const interval = setInterval(() => {
      setHearts((prev) => {
        const currentHearts = prev.length > 25 ? prev.slice(prev.length - 20) : prev;
        return [
          ...currentHearts,
          {
            id: Date.now() + Math.random(),
            left: Math.random() * 90 + 5,
            size: Math.random() * 10 + 15, // Reduced max size for background hearts (15px to 25px)
            duration: Math.random() * 4 + 5,
            sway: (Math.random() - 0.5) * 60
          }
        ];
      });
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  // 2. Burst spawning on click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Don't spawn if clicking on links or buttons to avoid distracting from primary actions
      if (target.closest('a') || target.closest('button')) return;

      const burstCount = Math.floor(Math.random() * 3) + 3; // 3 to 5 hearts
      
      setHearts((prev) => {
        const currentHearts = prev.length > 25 ? prev.slice(prev.length - 20) : prev;
        const newHearts = Array.from({ length: burstCount }).map(() => ({
          id: Date.now() + Math.random(),
          left: (e.clientX / window.innerWidth) * 100 + (Math.random() * 6 - 3), // Near click X
          size: Math.random() * 15 + 15, // Reduced max size for click burst hearts
          duration: Math.random() * 2.5 + 2.5, // Faster float up
          sway: (Math.random() - 0.5) * 100, // Wider sway
          startY: e.clientY // Start exactly where clicked
        }));
        
        return [...currentHearts, ...newHearts];
      });
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    const cleanup = setInterval(() => {
      setHearts((prev) => prev.filter(h => Date.now() - h.id < 12000));
    }, 5000);
    return () => clearInterval(cleanup);
  }, []);

  return (
    // Make sure z-index is super high (z-[100]) to float OVER text and images
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ 
              y: heart.startY ? heart.startY : '110vh', 
              opacity: 0, 
              x: `${heart.left}vw`, 
              scale: 0.2, 
              rotate: -20 
            }}
            animate={{
              y: '-20vh',
              opacity: [0, 1, 1, 0],
              x: [`${heart.left}vw`, `calc(${heart.left}vw + ${heart.sway}px)`],
              scale: [0.2, 1, 1],
              rotate: [-20, 20, -20, 20] 
            }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
              duration: heart.duration,
              ease: 'easeOut',
              x: {
                duration: heart.duration,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              },
              rotate: {
                duration: heart.duration / 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse"
              }
            }}
            style={{ 
              width: heart.size, 
              height: heart.size, 
              position: 'absolute', 
              top: 0,
              left: 0
            }}
          >
            <PixelHeart className="w-full h-full" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [activeFilters, setActiveFilters] = useState<string[]>(['All']);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  const handleFilterClick = (filter: string) => {
    // If clicking "All", reset everything
    if (filter === 'All') {
      setActiveFilters(['All']);
      return;
    }

    let newFilters = activeFilters.includes('All') ? [] : [...activeFilters];
    
    // Toggle logic for the clicked filter
    if (newFilters.includes(filter)) {
      newFilters = newFilters.filter(f => f !== filter);
    } else {
      newFilters.push(filter);
    }

    if (newFilters.length === 0) {
      setActiveFilters(['All']);
    } else if (newFilters.length === PLATFORMS.length) {
      // If all three platforms are now selected, show them all as active momentarily
      setActiveFilters(newFilters);
      
      // Then automatically revert to 'All' after 400ms to show the user the transition
      setTimeout(() => {
        setActiveFilters(['All']);
      }, 400);
    } else {
      setActiveFilters(newFilters);
    }
  };

  const filteredVideos = activeFilters.includes('All') 
    ? VIDEOS 
    : VIDEOS.filter(video => activeFilters.includes(video.platform));

  return (
    // Base background color matched to the new profile image's pinkish background (#EFD5CE)
    <div className="min-h-screen bg-[#EFD5CE] text-[#2C2C2C] font-sans selection:bg-rose-100 flex flex-col relative overflow-x-hidden">
      
      {/* Background Floating Hearts */}
      <FloatingHearts />
      
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[60vh] max-h-[600px] pointer-events-none select-none z-0">
        {/* Profile Image filling the top */}
        <img 
          src={PROFILE_IMG} 
          alt="Profile" 
          className="w-full h-full object-cover object-[center_15%]"
        />
        {/* Gradient mask to blend exactly into the background color */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#EFD5CE]/60 to-[#EFD5CE]" />
      </div>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full max-w-2xl mx-auto flex-1 -mt-24 md:-mt-32 px-4 md:px-6">
        
        {/* Profile Info */}
        <section className="flex flex-col items-center text-center mb-8">
          <h1 
            className="text-4xl md:text-[44px] font-semibold tracking-tight text-[#2B2B2B] mb-3"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            ByElla
          </h1>
          <p className="text-[#3A3A3A] text-sm md:text-[15px] font-medium leading-relaxed max-w-[280px]">
            Just a Korean girl 💅 K-beauty • Food • Life 💝 Daily Updates ✨
          </p>
          <div className="mt-5 mb-2 flex items-center justify-center gap-6">
            <a href="#" className="text-[#2B2B2B] hover:text-black hover:scale-110 transition-all duration-300">
              <TikTokIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#2B2B2B] hover:text-black hover:scale-110 transition-all duration-300">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-[#2B2B2B] hover:text-black hover:scale-110 transition-all duration-300">
              <Youtube className="w-6 h-6" />
            </a>
          </div>
        </section>

        {/* Linktree style Extra Links */}
        <section className="flex flex-col gap-3.5 mb-10 w-full">
          {[
            { title: "🛍️ Shop My Amazon Finds", url: "#" },
            { title: "💌 Collab / Business Inquiries", url: "#" },
            { title: "✨ My Holy Grail Skincare Routine", url: "#" },
          ].map((link, idx) => (
            <a 
              key={idx}
              href={link.url} 
              className="w-full bg-white/60 hover:bg-white/90 backdrop-blur-md transition-all duration-300 py-4 px-6 rounded-[24px] text-center font-semibold text-[#2B2B2B] shadow-[0_4px_12px_rgba(0,0,0,0.03)] flex justify-between items-center group border border-white/40"
            >
              <span className="flex-1 text-center group-hover:pl-6 transition-all duration-300">{link.title}</span>
              <ExternalLink size={18} className="text-[#2B2B2B] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          ))}
        </section>

        {/* Social Filters */}
        <section className="mb-6 w-full">
          <div className="flex justify-start md:justify-center gap-2.5 overflow-x-auto pb-2 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {FILTERS.map((filter) => {
              const isSelected = (activeFilters.includes('All') && filter === 'All') || activeFilters.includes(filter);
              
              return (
                <button
                  key={filter}
                  onClick={() => handleFilterClick(filter)}
                  className={cn(
                    "snap-center flex-shrink-0 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-md whitespace-nowrap",
                    isSelected 
                      ? "bg-[#2C2C2C] text-white shadow-md shadow-[#2C2C2C]/20" 
                      : "bg-white/50 border border-white/60 text-[#4A4A4A] hover:bg-white/80 hover:shadow-sm"
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </section>

        {/* Video Grid (Uniform Grid) */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-12">
           <AnimatePresence mode="popLayout">
             {filteredVideos.map(video => (
                <motion.div 
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.25 }}
                  key={video.id} 
                  className="cursor-pointer group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 bg-stone-100 aspect-[3/4]"
                  onClick={() => setSelectedVideo(video)}
                >
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                  {/* Video Title (Bottom) */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs md:text-sm font-medium line-clamp-2 drop-shadow-md">
                    {video.title}
                  </div>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/20 backdrop-blur-md p-3 md:p-4 rounded-full text-white shadow-lg border border-white/20 transform group-hover:scale-110 transition-transform duration-300">
                      <Play fill="currentColor" size={20} className="ml-1" />
                    </div>
                  </div>
                </motion.div>
             ))}
           </AnimatePresence>
           
           {filteredVideos.length === 0 && (
             <div className="col-span-full py-20 flex flex-col items-center justify-center text-stone-500 font-medium">
               <p>No videos found for this filter.</p>
             </div>
           )}
        </section>
      </main>

      {/* --- FOOTER & CTA --- */}
      <footer className="relative z-10 w-full pb-12 pt-6 flex flex-col items-center justify-center gap-6">
        <p className="text-sm font-medium text-[#666666] tracking-wide">
          © 2026 ByElla. All rights reserved.
        </p>
      </footer>

      {/* Product Detail Overlay */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedVideo(null)}
              className="absolute inset-0 bg-stone-900/40 backdrop-blur-sm pointer-events-auto"
            />
            
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 100 }}
              transition={{ type: "spring", bounce: 0, duration: 0.5 }}
              className="relative w-full md:w-[480px] h-[85vh] md:h-[auto] md:max-h-[85vh] bg-white rounded-t-[32px] md:rounded-[32px] shadow-2xl flex flex-col overflow-hidden pointer-events-auto border border-stone-100"
            >
              <div className="w-full flex justify-center pt-3 pb-1 md:hidden">
                <div className="w-12 h-1.5 bg-stone-200 rounded-full" />
              </div>

              <div className="p-4 md:p-6 pb-4 flex items-start justify-between border-b border-stone-100">
                <div className="flex items-center gap-4 bg-stone-50/50 p-2 pr-4 rounded-2xl border border-stone-100">
                  <div className="w-12 h-16 rounded-xl overflow-hidden relative shadow-sm shrink-0">
                    <img src={selectedVideo.thumbnail} className="w-full h-full object-cover" alt="Playing preview" />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                      <Play fill="white" size={14} className="text-white ml-0.5" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pr-2">
                    <p className="text-xs text-[#E87373] font-medium tracking-wide uppercase mb-0.5">Playing from {selectedVideo.platform}</p>
                    <h3 className="text-sm font-medium text-stone-900 line-clamp-1">{selectedVideo.title}</h3>
                  </div>
                </div>
                
                <button 
                  onClick={() => setSelectedVideo(null)} 
                  className="p-2.5 bg-stone-50 text-stone-500 rounded-full hover:bg-stone-100 transition-colors shrink-0 md:mt-1"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-6 pt-6 bg-white [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                <h2 
                  className="text-2xl font-medium mb-6 text-stone-900" 
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Shop My Picks
                </h2>
                
                <div className="space-y-4">
                  {selectedVideo.products.length > 0 ? (
                    selectedVideo.products.map(product => (
                      <div 
                        key={product.id} 
                        className="flex items-center gap-4 p-3 rounded-2xl bg-[#FAFAFA] border border-stone-100 hover:border-stone-200 hover:shadow-sm transition-all group cursor-pointer"
                      >
                         <img 
                           src={product.image} 
                           alt={product.name}
                           className="w-20 h-20 rounded-xl object-cover border border-stone-100" 
                         />
                         <div className="flex-1 min-w-0 py-1">
                           <p className="text-[10px] sm:text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">{product.brand}</p>
                           <p className="text-sm font-medium text-stone-800 line-clamp-2">{product.name}</p>
                         </div>
                         <button className="flex-shrink-0 px-4 py-2 sm:px-5 sm:py-2.5 bg-[#2C2C2C] text-white text-xs sm:text-sm font-medium rounded-full shadow-md shadow-[#2C2C2C]/20 hover:scale-105 active:scale-95 transition-all">
                           Shop
                         </button>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12 text-stone-400">
                      <div className="w-16 h-16 rounded-full bg-stone-50 flex items-center justify-center mb-4">
                        <Sparkles size={24} className="text-stone-300" />
                      </div>
                      <p className="text-sm font-medium">No products tagged</p>
                      <p className="text-xs text-stone-400 mt-1">Check out my other videos for picks!</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
