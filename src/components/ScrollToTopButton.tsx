import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasBouncedOnce, setHasBouncedOnce] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset;
      const clientHeight = window.innerHeight;
      
      // Show when scrolled 50% down the page
      const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
      const shouldShow = scrollPercentage >= 0.5;

      if (shouldShow && !isVisible) {
        setIsVisible(true);
        setIsAnimatingOut(false);
        // Trigger bounce animation only on first appearance per scroll session
        if (!hasBouncedOnce) {
          setHasBouncedOnce(true);
        }
      } else if (!shouldShow && isVisible) {
        setIsAnimatingOut(true);
        // Hide after animation completes
        setTimeout(() => {
          setIsVisible(false);
          setIsAnimatingOut(false);
        }, 300);
      }
    };

    // Reset bounce state when user scrolls back to top
    const resetBounceState = () => {
      if (window.pageYOffset === 0) {
        setHasBouncedOnce(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    window.addEventListener('scroll', resetBounceState);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      window.removeEventListener('scroll', resetBounceState);
    };
  }, [isVisible, hasBouncedOnce]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-24 right-6 z-50
        w-[60px] h-[60px] rounded-full
        bg-[#ad2326] 
        hover:bg-[#ad2326]
        shadow-lg hover:shadow-xl
        transition-all duration-200 ease-in-out
        hover:scale-110
        hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]
        cursor-pointer
        flex items-center justify-center
        group
        ${hasBouncedOnce && !isAnimatingOut ? 'animate-bounce-in' : ''}
        ${isAnimatingOut ? 'animate-fade-out' : ''}
      `}
      style={{
        boxShadow: isAnimatingOut 
          ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
          : '0 4px 15px rgba(0, 0, 0, 0.3), 0 0 0px rgba(255, 215, 0, 0)'
      }}
      aria-label="Scroll to top"
    >
      <ChevronUp 
        className="w-7 h-7 stroke-[3px] transition-transform duration-200 group-hover:scale-110" 
        style={{ color: 'var(--color-yellow-accent)' }}
      />
    </button>
  );
}
