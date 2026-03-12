import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Zap, Award, Globe, Car, Clock, Cpu, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import React, { useState } from 'react';

// react‑slick carousel (replaces PrimeReact)
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { MyImage } from './ui/MyImage';
import { images } from '../components/constants/image';

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all border border-white/10 group shadow-lg"
    >
      <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </button>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <button
      onClick={onClick}
      className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-40 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white transition-all border border-white/10 group shadow-lg"
    >
      <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
    </button>
  );
};

interface CarouselSlide {
  id: number;
  url: any;
  title: string;
  subtitle: string;
  description: string;
  stats: { label: string; value: string; icon: React.ReactNode }[];
  cta: string;
  badge?: string;
  gradient: string;
}

const carouselSlides: CarouselSlide[] = [
  {
    id: 1,
    url: images.home1,
    title: "Auto Parking System",
    subtitle: "Parking System",
    description: "Aspire Excel delivers advanced automated parking solutions with Rotary, Elevate, and Tower systems that provide secure, reliable, and space-efficient parking for residential, commercial, and institutional spaces without expanding their footprint.",
    stats: [
      { label: "Parking Capacity Range", value: "8–18 Cars", icon: <Car className="h-4 w-4" /> },
      { label: "Average Retrieval Cycle Time", value: "60–90 Sec", icon: <Clock className="h-4 w-4" /> },
      { label: "Intelligent Automated Operation", value: "PLC", icon: <Cpu className="h-4 w-4" /> }
    ],
    cta: "Explore Auto Parking",
    badge: "Featured",
    gradient: "from-blue-600/80 via-primary/60 to-accent/40"
  },
  {
    id: 2,
    url: images.home2,
    title: "Auto Doffer Retrofit",
    subtitle: "Next-Gen Automation Technology",
    description: "A Perfect Solution for LR6/LR60, KTTM, Toyoda, Rieter, Zinser, Jingwei and Shanghai Erfangji Ring Frame Automation",
    stats: [
      { label: "Productivity Boost", value: "+120%", icon: <Award className="h-4 w-4" /> },
      { label: "Quality Score", value: "99.8%", icon: <Zap className="h-4 w-4" /> },
      { label: "Energy Savings", value: "35%", icon: <ArrowUpRight className="h-4 w-4" /> }
    ],
    cta: "Learn More",
    badge: "Best Seller",
    gradient: "from-green-600/80 via-primary/60 to-accent/40"
  },
  {
    id: 3,
    url: images.home3,
    title: "EXCELspin Compact",
    subtitle: "Premium Yarn Production",
    description: "A Perfect value-added solution for all make Ring Frames from a reliable indigenous manufacturer.",
    stats: [
      { label: "Yarn Quality", value: "99.9%", icon: <Zap className="h-4 w-4" /> },
      { label: "Production Speed", value: "+40%", icon: <Globe className="h-4 w-4" /> },
      { label: "Waste Reduction", value: "45%", icon: <ArrowUpRight className="h-4 w-4" /> }
    ],
    cta: "View Solutions",
    badge: "Premium",
    gradient: "from-orange-600/80 via-primary/60 to-accent/40"
  },
  {
    id: 4,
    url: images.home4,
    title: "Bobbin Transport System",
    subtitle: "Precision Yarn Handling",
    description: "Advanced bobbin transport machinery with precision red guides and automated yarn handling. Engineered for seamless integration with spinning frames for optimal yarn quality and minimal breakage.",
    stats: [
      { label: "Yarn Quality", value: "99.9%", icon: <Award className="h-4 w-4" /> },
      { label: "Transport Speed", value: "+65%", icon: <ArrowUpRight className="h-4 w-4" /> },
      { label: "Breakage Reduction", value: "85%", icon: <Zap className="h-4 w-4" /> }
    ],
    cta: "Discover System",
    badge: "Precision",
    gradient: "from-red-600/80 via-primary/60 to-accent/40"
  },
  {
    id: 5,
    url: images.home5,
    title: "Autocone Packing System",
    subtitle: "Automated Cone Processing",
    description: "State-of-the-art blue and orange autocone packing system for efficient yarn cone processing and packaging. Features automated handling, quality control, and high-speed packaging capabilities.",
    stats: [
      { label: "Processing Speed", value: "2000/hr", icon: <Award className="h-4 w-4" /> },
      { label: "Automation Level", value: "95%", icon: <Zap className="h-4 w-4" /> },
      { label: "Quality Control", value: "100%", icon: <ArrowUpRight className="h-4 w-4" /> }
    ],
    cta: "View System",
    badge: "Automated",
    gradient: "from-blue-600/80 via-primary/60 to-accent/40"
  }
];


export function CarouselSection() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  // slick settings mirror previous prime configuration
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: true,
    dots: false,
    accessibility: true,
    swipeToSlide: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (current: number) => setCurrentSlide(current),
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };




  const slideTemplate = (slide: CarouselSlide) => {
    return (
      <div className="relative w-full overflow-hidden group flex flex-col h-full">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20 z-10"></div>
          <MyImage
            src={slide.url}
            alt={slide.title}
            className="w-full h-full object-cover transition-transform duration-[8000ms] ease-out scale-105"
          />
          {/* Dynamic Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-opacity duration-1000 z-20`}></div>
        </div>

        {/* Main Content Container - Highest Z-index */}
        <div className="relative w-full flex-1 flex items-center justify-center z-30 py-20">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

              {/* Left Content */}
              <div className="text-white space-y-3 sm:space-y-4 md:space-y-5 lg:space-y-6 text-center lg:text-left">
                {/* Badge */}
                {slide.badge && (
                  <div className="flex items-center justify-center lg:justify-start space-x-4">
                    <Badge
                      className="bg-accent/90 text-white border-accent hover:bg-accent transition-all duration-500 transform translate-y-0 opacity-100"
                      style={{ transitionDelay: '200ms' }}
                    >
                      {slide.badge}
                    </Badge>
                  </div>
                )}
                {/* Title */}
                <div className="space-y-4">
                  <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-tight"
                    style={{ transitionDelay: '400ms' }}>
                    {slide.title}
                  </h1>
                  <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-accent font-medium"
                    style={{ transitionDelay: '600ms' }}>
                    {slide.subtitle}
                  </h2>
                </div>

                <p
                  className="text-xs sm:text-sm md:text-base lg:text-lg text-white/90 leading-relaxed max-w-prose mx-auto lg:mx-0"
                  style={{
                    transitionDelay: '800ms',
                    overflow: 'visible',
                    whiteSpace: 'normal',
                    lineHeight: '1.8',
                    wordBreak: 'break-word',
                  }}
                >
                  {slide.description}
                </p>

                {/* Read More Link from Screenshot */}
                <div className="pt-2" style={{ transitionDelay: '900ms' }}>
                  <button 
                    onClick={() => {
                      const slideRouteMap: { [key: number]: string } = {
                        1: '/products/auto-parking/',
                        2: '/products/auto-doffer/',
                        3: '/products/excelspin/',
                        4: '/products/bobbin-transport/',
                        5: '/products/autocone-packing/'
                      };
                      window.scrollTo(0, 0);
                      navigate(slideRouteMap[slide.id] || '/products/auto-parking/');
                    }}
                    className="text-accent hover:text-accent/80 font-bold border-b-2 border-accent transition-colors text-sm"
                  >
                    Read More
                  </button>
                </div>


                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-6 max-w-lg mx-auto lg:mx-0"
                  style={{ transitionDelay: '1000ms' }}>
                  {slide.stats.map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-lg sm:rounded-xl mb-1 sm:mb-2 lg:mb-3 mx-auto border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] group-hover:bg-accent/20 transition-colors duration-300">
                        <div className="scale-50 sm:scale-75 md:scale-90 lg:scale-100">
                          {stat.icon}
                        </div>
                      </div>
                      <div className="text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-accent mb-0.5 sm:mb-1">
                        {stat.value}
                      </div>
                      <div className="text-[10px] sm:text-xs md:text-sm text-white/70 leading-tight">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start items-center pt-2 sm:pt-4"
                  style={{ transitionDelay: '1200ms' }}>
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white font-semibold px-4 sm:px-6 md:px-8 py-2 md:py-4 rounded-lg sm:rounded-xl group transition-all duration-300 hover:scale-105 hover:shadow-2xl text-[10px] sm:text-xs md:text-base w-auto min-h-[36px] sm:min-h-[44px] touch-manipulation"
                    onClick={() => {
                      const slideRouteMap: { [key: number]: string } = {
                        1: '/products/auto-parking/',
                        2: '/products/auto-doffer/',
                        3: '/products/excelspin/',
                        4: '/products/bobbin-transport/',
                        5: '/products/autocone-packing/'
                      };
                      window.scrollTo(0, 0);
                      navigate(slideRouteMap[slide.id] || '/products/auto-parking/');
                    }}
                  >
                    <span className="flex items-center justify-center">
                      {slide.cta}
                      <ArrowUpRight className="ml-1.5 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </span>
                  </Button>
                </div>
              </div>

              {/* Right Content - Interactive Elements */}
              <div className="hidden lg:block">
                <div className="relative"
                  style={{ transitionDelay: '1400ms' }}>

                  {/* Floating Info Cards */}
                  <div className="absolute -bottom-6 lg:-bottom-8 -left-3 lg:-left-4 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-xl lg:rounded-2xl p-4 lg:p-6 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                    <div className="flex items-center space-x-2 lg:space-x-3">
                      <Award className="h-4 w-4 lg:h-5 lg:w-5 text-accent" />
                      <span className="text-white font-medium text-sm lg:text-base">ISO Certified</span>
                    </div>
                    <div className="text-xl lg:text-2xl font-bold text-accent mt-2">99.8%</div>
                    <div className="text-white/70 text-xs lg:text-sm">Quality Rating</div>
                  </div>

                  {/* Central Illustration */}
                  <div className="w-48 h-48 lg:w-64 lg:h-64 mx-auto relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full animate-ping"></div>
                    <div className="absolute inset-3 lg:inset-4 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-full border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] flex items-center justify-center">
                      <div className="text-center">
                        {slide.id === 1 ? (
                          <>
                            <div className="text-2xl lg:text-4xl font-bold text-accent mb-1 lg:mb-2">100+</div>
                            <div className="text-white text-xs lg:text-sm">Parking Solutions</div>
                          </>
                        ) : (
                          <>
                            <div className="text-2xl lg:text-4xl font-bold text-accent mb-1 lg:mb-2">200K+</div>
                            <div className="text-white text-xs lg:text-sm">Spindles Deployed</div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="hero-carousel-wrapper overflow-hidden relative w-full">
      <Slider ref={sliderRef} {...settings} className="hero-carousel">
        {carouselSlides.map(slide => (
          <div key={slide.id} className="h-full flex!">
            {slideTemplate(slide)}
          </div>
        ))}
      </Slider>

      {/* Custom Bottom UI */}
      <div className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex items-center gap-4 md:gap-6 bg-[#161243]/40 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
        <div className="text-white text-xs md:text-sm font-bold whitespace-nowrap">
          {String(currentSlide + 1).padStart(2, '0')} / {String(carouselSlides.length).padStart(2, '0')}
        </div>
        <div className="flex gap-2">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => sliderRef.current?.slickGoTo(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer hover:bg-accent/50 ${i === currentSlide ? 'w-8 md:w-12 bg-accent' : 'w-4 md:w-8 bg-white/30'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style>{`
        /* ensure slick slides fill wrapper height and match the tallest slide */
        .hero-carousel .slick-list {
          height: auto !important;
        }
        .hero-carousel .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        .hero-carousel .slick-slide {
          height: auto !important;
          display: flex !important;
          float: none !important;
        }
        .hero-carousel .slick-slide > div {
          display: flex !important;
          width: 100%;
        }
 
        /* Hide default dots and arrows */
        .hero-carousel .slick-dots { display: none !important; }
        .hero-carousel .slick-prev, .hero-carousel .slick-next { display: none !important; }
      `}</style>
    </div>
  );
}
