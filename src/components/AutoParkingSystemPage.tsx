import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

import {
  Car,
  Shield,
  Zap,
  Clock,
  Settings,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Layers,
  Building,
  MoveVertical,
  RotateCcw,
  Wrench,
  Users,
  Home,
  Building2,
  ArrowRight,
  Gauge,
  Target,
  Sparkles,
  TrendingUp,
  Award,
  ChevronDown,
  Timer,
  Maximize,
  RefreshCw
} from 'lucide-react';
import { images } from '../components/constants/image';
import { MyImage } from './ui/MyImage';

export function AutoParkingSystemPage() {
  // const [activeFeature, setActiveFeature] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('');
  const [hasError, setHasError] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);


  const parkingSteps = [
    { title: 'Drive In', description: 'Simply drive your car onto the platform', icon: <Car className="h-6 w-6" /> },
    { title: 'Auto Detect', description: 'Sensors automatically detect your vehicle', icon: <Target className="h-6 w-6" /> },
    { title: 'Rotate & Park', description: 'System rotates to optimal parking position', icon: <RefreshCw className="h-6 w-6" /> },
    { title: 'Retrieve Easy', description: 'Quick retrieval with bidirectional movement', icon: <Timer className="h-6 w-6" /> }
  ];

  // const keyBenefits = [
  //   {
  //     title: 'SMART OPERATION',
  //     description: 'Fully automated, controlled by a touch panel or mobile app',
  //     icon: <Settings className="h-6 w-6" />,
  //     gradient: 'from-blue-500 to-purple-600'
  //   },
  //   {
  //     title: 'BIDIRECTIONAL MOVEMENT',
  //     description: 'Rotates both ways for quick car retrieval',
  //     icon: <RotateCcw className="h-6 w-6" />,
  //     gradient: 'from-green-500 to-teal-600'
  //   },
  //   {
  //     title: 'SAFETY FIRST',
  //     description: 'Sensors, emergency stop',
  //     icon: <Shield className="h-6 w-6" />,
  //     gradient: 'from-red-500 to-pink-600'
  //   },
  //   {
  //     title: 'MANUAL BACKUP',
  //     description: 'Retrieve cars even during power failure',
  //     icon: <Zap className="h-6 w-6" />,
  //     gradient: 'from-yellow-500 to-orange-600'
  //   },
  //   {
  //     title: 'CUSTOMIZABLE',
  //     description: 'Options like ANPR cameras, boom barriers, roof covers, automatic door safety guard',
  //     icon: <Wrench className="h-6 w-6" />,
  //     gradient: 'from-indigo-500 to-blue-600'
  //   }
  // ];

  const rotaryModels = [
    { cars: 8, sedan: '10550', suv: '11350', popular: false },
    { cars: 10, sedan: '12500', suv: '13500', popular: false },
    { cars: 12, sedan: '14450', suv: '15650', popular: true },
    { cars: 14, sedan: '16400', suv: '17800', popular: false },
    { cars: 16, sedan: '19950', suv: '20500', popular: false },
    { cars: 18, sedan: '20650', suv: '22650', popular: false }
  ];

  // Auto-cycle through steps
  useEffect(() => {
    try {
      const interval = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % parkingSteps.length);
      }, 3000);
      return () => clearInterval(interval);
    } catch (error) {
      console.warn('Error setting up steps interval:', error);
    }
  }, [parkingSteps.length]);

  // Auto-cycle through features
  // useEffect(() => {
  //   try {
  //     const interval = setInterval(() => {
  //       setActiveFeature((prev) => (prev + 1) % keyBenefits.length);
  //     }, 4000);
  //     return () => clearInterval(interval);
  //   } catch (error) {
  //     console.warn('Error setting up features interval:', error);
  //   }
  // }, [keyBenefits.length]);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Page load animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  // Scroll progress tracking
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // IntersectionObserver for active section tracking
  useEffect(() => {
    try {
      const sections = document.querySelectorAll('section[id]');
      if (sections.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id);
            }
          });
        },
        {
          threshold: 0.4,
          rootMargin: '-80px 0px -50% 0px'
        }
      );

      sections.forEach((section) => observer.observe(section));
      return () => {
        sections.forEach((section) => observer.unobserve(section));
        observer.disconnect();
      };
    } catch (error) {
      console.warn('Error setting up intersection observer:', error);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    try {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Update URL hash without triggering page reload
        window.history.pushState(null, '', `#${sectionId}`);
      }
    } catch (error) {
      console.warn('Error scrolling to section:', error);
    }
  };

  // Simple error boundary
  if (hasError) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Something went wrong</h2>
          <p className="text-gray-600 mb-4">Please refresh the page to try again.</p>
          <Button onClick={() => setHasError(false)}>Try Again</Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen bg-background relative overflow-hidden"
      >
        {/* Creative Loading Overlay */}
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.5 }}
          className={`fixed inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/20 z-50 flex items-center justify-center ${isLoaded ? 'pointer-events-none' : ''}`}
        >
          <div className="text-center">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-4 border-white/20 border-t-accent rounded-full mx-auto mb-8"
            />
            <motion.h2
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-2xl font-bold text-white"
            >
              Aspire Excel Auto Parking Systems
            </motion.h2>
            <motion.p
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              className="text-white/80 mt-2"
            >
              Revolutionizing Urban Parking Solutions
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll Progress Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoaded ? 1 : 0 }}
          transition={{ delay: 1 }}
          className="fixed top-0 left-0 w-full h-1 bg-black/10 z-40"
        >
          <motion.div
            className="h-full bg-gradient-to-r from-primary via-accent to-destructive"
            style={{ width: `${scrollProgress}%` }}
            transition={{ duration: 0.1 }}
          />
        </motion.div>

        {/* Floating Navigation Dots */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 50 }}
          transition={{ delay: 2 }}
          className="fixed right-8 top-1/2 transform -translate-y-1/2 z-30 space-y-4"
        >
          {['rotary', 'elevate', 'tower'].map((section) => (
            <motion.button
              key={section}
              onClick={() => scrollToSection(section)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${activeSection === section
                ? 'bg-accent border-accent scale-125'
                : 'bg-transparent border-gray-400 hover:border-accent'
                }`}
              aria-label={`Navigate to ${section} section`}
            >
              {/* Pulsing effect for active section */}
              {activeSection === section && (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0.8 }}
                  animate={{ scale: 1.5, opacity: 0 }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="absolute inset-0 bg-accent rounded-full"
                />
              )}
            </motion.button>
          ))}
        </motion.div>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main floating orbs */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.05, 0.2]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
            className="absolute top-1/2 left-1/2 w-60 h-60 bg-destructive/3 rounded-full blur-3xl"
          ></motion.div>

          {/* Interactive cursor following element */}
          <motion.div
            animate={{
              x: mousePosition.x - 25,
              y: mousePosition.y - 25,
            }}
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed w-12 h-12 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-xl z-10 pointer-events-none"
          />

          {/* Floating geometric shapes */}
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 15 + i * 2,
                repeat: Infinity,
                delay: i * 2,
                ease: "easeInOut"
              }}
              className={`absolute w-6 h-6 border border-accent/20 ${i % 2 === 0 ? 'rounded-full' : 'rotate-45'}`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
              }}
            />
          ))}

          {/* Animated grid pattern */}
          <motion.div
            animate={{ opacity: [0.05, 0.1, 0.05] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute inset-0 bg-[linear-gradient(rgba(31,31,88,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(31,31,88,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"
          />
        </div>

        {/* Hero Section */}
        <section className="relative flex items-center justify-center bg-gradient-to-br from-primary via-primary to-primary/90 text-white overflow-hidden py-15 sm:py-20 md:py-25 lg:py-30">
          {/* Animated Pattern Background */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent)]"
            ></motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,255,255,0.03)_45deg,transparent_90deg)]"
            ></motion.div>
          </div>

          <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start lg:items-center py-10">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {/* Animated Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="inline-flex items-center gap-2 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-full px-4 py-2 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                >
                  <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="h-4 w-4 text-accent" />
                  </motion.div>
                  <span className="text-sm">Revolutionary Parking Technology</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="space-y-4"
                >
                  <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="block"
                    >
                      Auto Parking
                    </motion.span>
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.0 }}
                      className="block bg-gradient-to-r from-accent to-yellow-400 bg-clip-text text-transparent"
                    >
                      Systems
                    </motion.span>
                  </h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                    className="text-xl md:text-2xl opacity-90 leading-relaxed"
                  >
                    Innovative vertical solutions that help solve parking problems in cities with
                    <span className="text-accent font-semibold"> limited space</span>.
                  </motion.p>
                </motion.div>

                {/* Animated Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  className="grid grid-cols-3 gap-4"
                >
                  {[
                    { value: '8-18', label: 'Cars' },
                    { value: '2x', label: 'Space Saved' },
                    { value: '99%', label: 'Uptime' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="text-center p-3 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-2xl border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] cursor-default"
                    >
                      <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                        className="text-2xl font-bold text-accent"
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Floating Navigation Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                  className="flex flex-wrap gap-3"
                >
                  {[
                    { name: 'Rotary Parking System', target: 'rotary', icon: <RotateCcw className="h-4 w-4" /> },
                    { name: 'Elevate Series Car Parking System', target: 'elevate', icon: <MoveVertical className="h-4 w-4" /> },
                    { name: 'Tower Car Parking System', target: 'tower', icon: <Building className="h-4 w-4" /> }
                  ].map((badge, index) => (
                    <motion.button
                      key={badge.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 + index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => scrollToSection(badge.target)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          scrollToSection(badge.target);
                        }
                      }}
                      className={`group relative overflow-hidden rounded-full px-5 py-3 border-2 text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-[0.2px] shadow-[0_4px_30px_rgba(0,0,0,0.1)] ${activeSection === badge.target
                        ? 'bg-white/40 text-primary border-white shadow-lg'
                        : 'bg-[#161243]/[0.45] text-white border-[#161243]/[0.24] hover:bg-[#161243]/[0.55]'
                        }`}
                      aria-label={`Navigate to ${badge.name} section`}
                    >
                      <div className="flex items-center gap-2 relative z-10">
                        <motion.div
                          animate={{ rotate: activeSection === badge.target ? 360 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          {badge.icon}
                        </motion.div>
                        {badge.name}
                      </div>

                      {/* Animated background pulse for active state */}
                      {activeSection === badge.target && (
                        <motion.div
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 1.5, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-white/20 rounded-full"
                        />
                      )}

                      {/* Hover effect background */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
                      />
                    </motion.button>
                  ))}
                </motion.div>

                {/* Feature Points with Staggered Animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 2.4 }}
                  className="space-y-3"
                >
                  {[
                    'Like a Ferris wheel, cars are rotated and parked one above another',
                    'Saving ground space while maximizing parking capacity',
                    'Fully automated with touch panel control',
                    'Emergency backup systems included'
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 2.6 + index * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      </motion.div>
                      <span className="text-lg opacity-90">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* CTA Buttons with Enhanced Animations */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 3.0 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-accent to-yellow-500 hover:from-yellow-500 hover:to-accent text-white rounded-2xl px-8 py-4 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                      onClick={() => scrollToSection('contact')}
                    >
                      <motion.div
                        animate={{ rotate: [0, 15, -15, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Phone className="h-5 w-5 mr-2" />
                      </motion.div>
                      Get Quote Now
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight className="h-5 w-5 ml-2" />
                      </motion.div>
                    </Button>
                  </motion.div>

                </motion.div>
              </motion.div>

              {/* Animated Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="relative"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-3xl blur-2xl"
                ></motion.div>
                <motion.div
                  // animate={isAnimating ? { scale: 1.05, rotateY: 5 } : { scale: 1, rotateY: 0 }}
                  animate={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="relative bg-transparent rounded-3xl p-6"
                >
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 2 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* <ImageWithFallback  */}
                    <MyImage
                      src={images.autoparkinghero}
                      alt="Multi-Level Parking System - Advanced vertical parking solution"
                      className="w-full h-auto rounded-2xl shadow-2xl opacity-90"
                    />
                  </motion.div>
                  {/* Floating Success Badge */}
                  <motion.div
                    animate={{
                      y: [0, -5, 0],
                      rotate: [-2, 2, -2]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-3 -right-3 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg"
                  >
                    ✨ Proven Technology
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -100, 0],
                  x: [0, Math.sin(i) * 50, 0],
                  opacity: [0, 0.6, 0],
                  scale: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 8 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.8,
                  ease: "easeInOut"
                }}
                className="absolute w-2 h-2 bg-gradient-to-br from-accent to-white rounded-full shadow-lg"
                style={{
                  left: `${10 + (i * 7)}%`,
                  bottom: '20%',
                }}
              />
            ))}
          </div>

          {/* Animated Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={() => scrollToSection('how-it-works')}
          >
            <div className="flex flex-col items-center space-y-2">
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-white/70 text-sm font-medium"
              >
                Discover More
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="p-2 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-full border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
              >
                <ChevronDown className="h-6 w-6 text-white/70" />
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
          {/* Animated Background Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-xl"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">How It Works</Badge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Simple. Fast. Reliable.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600"
              >
                Experience the future of parking in 4 easy steps
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {parkingSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className={`relative group cursor-pointer ${currentStep === index ? 'z-10' : ''
                    }`}
                  onClick={() => setCurrentStep(index)}
                >
                  <motion.div
                    animate={currentStep === index ? { scale: 1.05 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Card className={`p-6 text-center border-2 transition-all duration-500 overflow-hidden ${currentStep === index
                      ? 'border-accent bg-gradient-to-br from-accent/5 to-accent/10 shadow-xl'
                      : 'border-gray-200 hover:border-accent/50 hover:shadow-lg'
                      }`}>
                      {/* Progress indicator */}
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: currentStep === index ? '100%' : '0%' }}
                        transition={{ duration: 0.5 }}
                        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-accent to-yellow-500"
                      />

                      <motion.div
                        animate={currentStep === index ? {
                          rotate: [0, 360],
                          scale: [1, 1.2, 1]
                        } : { rotate: 0, scale: 1 }}
                        transition={{
                          duration: currentStep === index ? 2 : 0.3,
                          repeat: currentStep === index ? Infinity : 0
                        }}
                        className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-500 ${currentStep === index
                          ? 'bg-gradient-to-br from-accent to-yellow-500 text-white'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-accent/20 group-hover:text-accent'
                          }`}>
                        {step.icon}
                      </motion.div>
                      <motion.h3
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.3 }}
                        className="font-bold mb-2"
                      >
                        {step.title}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.2 + 0.4 }}
                        className="text-sm text-gray-600"
                      >
                        {step.description}
                      </motion.p>

                      {/* Animated Step Number */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.2 + 0.5, type: "spring", bounce: 0.5 }}
                        className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 ${currentStep === index
                          ? 'bg-accent text-white'
                          : 'bg-gray-300 text-gray-600'
                          }`}
                      >
                        {index + 1}
                      </motion.div>
                    </Card>
                  </motion.div>

                  {/* Animated Connection Line */}
                  {index < parkingSteps.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-accent/50 to-gray-300 z-0 origin-left"
                    ></motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section with Enhanced Cards */}


        {/* Applications with Animated Cards */}
        <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
          {/* Floating Background Elements */}
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.1, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 bg-primary/5 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, 20, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
            className="absolute bottom-20 left-20 w-40 h-40 bg-accent/5 rounded-full blur-xl"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Applications</Badge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Perfect for Every Setting
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600"
              >
                Our parking systems adapt to various environments
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: <Home className="h-10 w-10" />, title: 'Residential', desc: 'Apartments, villas, and residential complexes', color: 'from-green-500 to-green-600' },
                { icon: <Building2 className="h-10 w-10" />, title: 'Commercial', desc: 'Offices, malls, and business centers', color: 'from-blue-500 to-blue-600' },
                { icon: <Building className="h-10 w-10" />, title: 'Institutional', desc: 'Hospitals, schools, and government buildings', color: 'from-purple-500 to-purple-600' },
                { icon: <Users className="h-10 w-10" />, title: 'Public Spaces', desc: 'Transit hubs and public facilities', color: 'from-orange-500 to-orange-600' }
              ].map((app, index) => (
                <motion.div
                  key={app.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="group"
                >
                  <Card className="text-center p-8 border border-[#161243]/[0.24] shadow-lg hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-[0.2px] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.3 }
                      }}
                      className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br ${app.color} flex items-center justify-center text-white shadow-lg`}
                    >
                      {app.icon}
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300"
                    >
                      {app.title}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="text-gray-600 leading-relaxed"
                    >
                      {app.desc}
                    </motion.p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Cards with Enhanced Animations */}
        <section className="py-20 bg-gradient-to-br from-gray-100 to-white relative overflow-hidden">
          {/* Animated Background Patterns */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1]
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: { duration: 8, repeat: Infinity }
            }}
            className="absolute top-0 right-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl"
          ></motion.div>
          <motion.div
            animate={{
              rotate: -360,
              scale: [1.1, 1, 1.1]
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, delay: 2 }
            }}
            className="absolute bottom-0 left-0 w-48 h-48 bg-primary/3 rounded-full blur-2xl"
          ></motion.div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Our Promise</Badge>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                Installation & Service
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-xl text-gray-600"
              >
                Professional service from installation to maintenance
              </motion.p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Clock className="h-16 w-16" />, title: 'Quick Installation', desc: 'Complete setup in just 3-5 days with minimal disruption to your operations', color: 'from-green-400 to-green-600' },
                { icon: <Shield className="h-16 w-16" />, title: 'Safety First', desc: 'Multiple safety features including sensors, emergency stops, and manual backup systems', color: 'from-blue-400 to-blue-600' },
                { icon: <Wrench className="h-16 w-16" />, title: 'Low Maintenance', desc: 'Designed for long-lasting operation with minimal maintenance requirements', color: 'from-purple-400 to-purple-600' }
              ].map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="group"
                >
                  <Card className="text-center p-8 border-0 bg-white shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                    {/* Animated border effect */}
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    ></motion.div>

                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: index * 0.2 + 0.6,
                        type: "spring",
                        bounce: 0.4
                      }}
                      whileHover={{
                        rotate: 12,
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                      className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center text-white shadow-lg relative z-10`}
                    >
                      <motion.div
                        animate={{
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      >
                        {service.icon}
                      </motion.div>
                    </motion.div>

                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.8 }}
                      className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors duration-300 relative z-10"
                    >
                      {service.title}
                    </motion.h3>

                    <motion.p
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 1.0 }}
                      className="text-gray-600 leading-relaxed relative z-10"
                    >
                      {service.desc}
                    </motion.p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* Rotary Parking System Section */}
        <section id="rotary" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="fixed inset-x-0 top-0 bottom-0 w-screen h-full bg-white z-[-1] left-0 right-0"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Rotary Parking System Overview */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Featured Product</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Rotary Parking System</h2>
              <p className="text-xl text-white/90 max-w-6xl mx-auto leading-relaxed">
                Revolutionary vertical parking solution that rotates like a Ferris wheel, maximizing space utilization while providing efficient vehicle storage and retrieval.
              </p>
            </div>

            {/* Rotary System Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: <RotateCcw className="h-12 w-12" />,
                  title: "360° Rotation",
                  description: "Bidirectional rotation system for optimal parking position and quick vehicle retrieval",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Layers className="h-12 w-12" />,
                  title: "Multi-Level Storage",
                  description: "Park 8-18 vehicles vertically using the space of just 2 conventional parking spots",
                  gradient: "from-green-500 to-green-600"
                },
                {
                  icon: <Settings className="h-12 w-12" />,
                  title: "Smart Automation",
                  description: "Fully automated system with touch panel control and mobile app integration",
                  gradient: "from-purple-500 to-purple-600"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#161243]/[0.55] transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Capacity & Models */}
            <div className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-3xl p-8 mb-20 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Available Configurations</h3>
                <p className="text-white/80 text-lg">Choose the perfect capacity for your space requirements</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[8, 10, 12, 14, 16, 18].map((capacity) => (
                  <div
                    key={capacity}
                    className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${capacity === 12
                      ? 'bg-accent text-white border-accent shadow-lg'
                      : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                      }`}
                  >
                    <div className="text-3xl font-bold mb-2">{capacity}</div>
                    <div className="text-sm opacity-80">Cars</div>
                    {capacity === 12 && (
                      <Badge className="mt-2 bg-white text-accent text-xs">Most Popular</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8 py-20">
              {/* First Row: Two Column Grid */}
              <div className="grid lg:grid-cols-2 gap-16 items-start">
                <div className="space-y-8">
                  {/* Why Choose Section */}
                  <div className="bg-gradient-to-br from-primary to-primary/90 p-8 rounded-3xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_0%,rgba(255,255,255,0.1),transparent)]"></div>
                    <div className="relative z-10">
                      <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        WHY CHOOSE THE ROTARY PARKING SYSTEM?
                      </h2>
                      <div className="grid gap-4">
                        {[
                          'Park 8 - 18 cars using space of just 2 conventional spots',
                          'Ideal for homes, offices, hospitals, and malls',
                          'Quick setup in just 3 - 5 days',
                          'Suitable for SUVs and sedans',
                          'Long lasting and low maintenance'
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-3 p-3 rounded-2xl bg-[#161243]/[0.45] backdrop-blur-[0.2px] hover:bg-[#161243]/[0.55] border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group"
                          >
                            <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                            <span className="group-hover:text-accent transition-colors duration-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Interactive Benefits */}

                </div>

                <div className="space-y-8">
                  {/* Floating Feature Image */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-2xl animate-pulse"></div>
                    <MyImage
                      src={images.whychoose}
                      alt="Rotary Parking System Features and Benefits"
                      className="relative w-full rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Second Row: Full Width Specifications */}
              <div className="relative bg-white shadow-2xl border-y border-gray-200 py-16 px-4 mb-0" style={{ width: '100vw', marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)', marginBottom: '0', paddingBottom: '4rem' }}>
                <div className="max-w-5xl mx-auto">
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-primary mb-3">Working Space Specifications</h3>
                    <div className="w-24 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto"></div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center max-w-6xl mx-auto">
                    <div className="group">
                      <div className="bg-gradient-to-br from-accent/10 to-accent/20 p-8 rounded-2xl hover:from-accent/20 hover:to-accent/30 transition-all duration-300 hover:scale-105 h-64 border border-accent/20 shadow-lg">
                        <Maximize className="h-14 w-14 text-accent mx-auto mb-5" />
                        <p className="font-medium text-gray-600 mb-4 text-lg">Working Space Length</p>
                        <p className="text-4xl font-bold text-accent mb-3">6650 x 5100</p>
                        <p className="text-base text-gray-500 font-medium">millimeters</p>
                      </div>
                    </div>
                    <div className="group">
                      <div className="bg-gradient-to-br from-primary/10 to-primary/20 p-8 rounded-2xl hover:from-primary/20 hover:to-primary/30 transition-all duration-300 hover:scale-105 h-64 border border-primary/20 shadow-lg">
                        <Car className="h-14 w-14 text-primary mx-auto mb-5" />
                        <p className="font-medium text-gray-600 mb-4 text-lg">Allowable Car Length</p>
                        <p className="text-4xl font-bold text-primary mb-3">5000</p>
                        <p className="text-base text-gray-500 font-medium">millimeters</p>
                      </div>
                    </div>
                    <div className="group">
                      <div className="bg-gradient-to-br from-destructive/10 to-destructive/20 p-8 rounded-2xl hover:from-destructive/20 hover:to-destructive/30 transition-all duration-300 hover:scale-105 h-64 border border-destructive/20 shadow-lg">
                        <Gauge className="h-14 w-14 text-destructive mx-auto mb-5" />
                        <p className="font-medium text-gray-600 mb-4 text-lg">Allowable Car Width</p>
                        <p className="text-4xl font-bold text-destructive mb-3">2000</p>
                        <p className="text-base text-gray-500 font-medium">millimeters</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        {/* Elevate Series Car Parking System */}
        <section id="elevate" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-primary"></div>
            <div className="fixed inset-x-0 top-0 bottom-0 w-screen h-full bg-white z-[-1] left-0 right-0"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Elevate Series Overview */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Premium Series</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Elevate Series Car Parking System</h2>
              <p className="text-xl text-white/90 max-w-6xl mx-auto leading-relaxed mb-12">
                Smart two-level parking solution that doubles your space efficiency with modular design and rapid deployment capabilities.
              </p>

              {/* Multi-Level Parking System Image */}
              <div className="max-w-6xl mx-auto mb-8">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={images.elevateseries}
                    alt="Elevate Series Two-Level Parking System"
                    className="w-3/4 h-auto mx-auto"
                  />

                  <div className="absolute bottom-4 left-4 right-4">

                  </div>
                </div>
              </div>
            </div>

            {/* Elevate System Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: <MoveVertical className="h-12 w-12" />,
                  title: "Modular Lifts",
                  description: "Flexible lift mechanisms that adapt to different vehicle sizes and space configurations",
                  gradient: "from-green-500 to-green-600"
                },
                {
                  icon: <Zap className="h-12 w-12" />,
                  title: "Rapid Transfer",
                  description: "Quick 60-second vehicle retrieval with optimized lift speed and positioning system",
                  gradient: "from-blue-500 to-blue-600"
                },
                {
                  icon: <Shield className="h-12 w-12" />,
                  title: "Energy Optimized",
                  description: "Low power consumption with intelligent standby mode and energy recovery systems",
                  gradient: "from-purple-500 to-purple-600"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#161243]/[0.55] transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Capacity & Models */}
            <div className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-3xl p-8 mb-20 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Available Configurations</h3>
                <p className="text-white/80 text-lg">Scalable solutions for residential and commercial applications</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[6, 8, 10, 12, 16, 20].map((capacity) => (
                  <div
                    key={capacity}
                    className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${capacity === 12
                      ? 'bg-accent text-white border-accent shadow-lg'
                      : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                      }`}
                  >
                    <div className="text-3xl font-bold mb-2">{capacity}</div>
                    <div className="text-sm opacity-80">Cars</div>
                    {capacity === 12 && (
                      <Badge className="mt-2 bg-white text-accent text-xs">Most Popular</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tower Car Parking System */}
        <section id="tower" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0" style={{ backgroundColor: '#3D3D82' }}></div>
            <div className="fixed inset-x-0 top-0 bottom-0 w-screen h-full bg-white z-[-1] left-0 right-0"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            {/* Tower System Overview */}
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Enterprise Solution</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Tower Car Parking System</h2>
              <p className="text-xl text-white/90 max-w-6xl mx-auto leading-relaxed">
                Ultra-high capacity vertical parking solution with advanced automation and premium safety features for large-scale applications.
              </p>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* <ImageWithFallback */}
              <MyImage
                src={images.towercarparking}
                alt="Tower Parking System - Vertical multi-level parking solution"
                className="w-1/2 h-200 mx-auto"
              />

              <div className="absolute bottom-4 left-4 right-4">

              </div>
            </div>

            {/* Tower System Features Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: <Building className="h-12 w-12" />,
                  title: "High-Rise Capacity",
                  description: "Massive vertical storage with automated floor-by-floor vehicle management and retrieval",
                  gradient: "from-orange-500 to-orange-600"
                },
                {
                  icon: <Shield className="h-12 w-12" />,
                  title: "Redundant Safety",
                  description: "Multiple backup systems with earthquake-resistant design and emergency power supply",
                  gradient: "from-red-500 to-red-600"
                },
                {
                  icon: <Settings className="h-12 w-12" />,
                  title: "Smart Dispatch",
                  description: "AI-powered vehicle routing with predictive positioning and traffic flow optimization",
                  gradient: "from-cyan-500 to-cyan-600"
                }
              ].map((feature, index) => (
                <Card key={index} className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#161243]/[0.55] transition-all duration-500 hover:-translate-y-2 group">
                  <CardContent className="p-8 text-center">
                    <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-accent transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-white/80 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* System Capacity & Models */}
            <div className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-3xl p-8 mb-20 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">Available Configurations</h3>
                <p className="text-white/80 text-lg">Enterprise-grade solutions for maximum density and throughput</p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[20, 30, 40, 50, 60].map((capacity) => (
                  <div
                    key={capacity}
                    className={`text-center p-6 rounded-2xl border-2 transition-all duration-300 hover:scale-105 cursor-pointer ${capacity === 40
                      ? 'bg-accent text-white border-accent shadow-lg'
                      : 'bg-white/10 border-white/30 text-white hover:bg-white/20'
                      }`}
                  >
                    <div className="text-3xl font-bold mb-2">{capacity}</div>
                    <div className="text-sm opacity-80">Cars</div>
                    {capacity === 40 && (
                      <Badge className="mt-2 bg-white text-accent text-xs">Most Popular</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Models Table */}
        <section id="models" className="py-20 bg-gradient-to-br from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">Available Models</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Choose Your Perfect Model</h2>
              <p className="text-xl text-gray-600">From compact 8-car systems to large 18-car installations</p>
            </div>

            <Card className="overflow-hidden shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-primary to-primary/90 text-white p-8">
                <CardTitle className="text-center text-3xl flex items-center justify-center gap-3">
                  <Award className="h-8 w-8" />
                  AVAILABLE MODELS
                  <Award className="h-8 w-8" />
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200 bg-gray-50">
                        <th className="p-6 text-left font-bold text-lg">Model</th>
                        {rotaryModels.map((model) => (
                          <th key={model.cars} className="p-4 text-center relative">
                            {model.popular && (
                              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                                <Badge className="bg-accent text-white shadow-lg animate-pulse">
                                  Most Popular
                                </Badge>
                              </div>
                            )}
                            <div className={`rounded-2xl p-4 transition-all duration-300 hover:scale-105 ${model.popular
                              ? 'bg-gradient-to-br from-accent/20 to-yellow-500/20 border-2 border-accent'
                              : 'bg-gray-100 hover:bg-gray-200'
                              }`}>
                              <div className="text-2xl font-bold text-gray-800">{model.cars} CAR</div>
                              <div className="text-sm text-gray-600">Sedan | SUV</div>
                              {model.popular && (
                                <div className="mt-2">
                                  <TrendingUp className="h-4 w-4 text-accent mx-auto" />
                                </div>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b bg-gradient-to-r from-gray-50 to-white hover:from-gray-100 hover:to-gray-50 transition-all duration-300">
                        <td className="p-6 font-bold text-lg text-gray-800">System Height (mm)</td>
                        {rotaryModels.map((model) => (
                          <td key={model.cars} className="p-4 text-center">
                            <div className="space-y-1">
                              <div className="font-bold text-primary">{model.sedan}</div>
                              <div className="text-gray-400">|</div>
                              <div className="font-bold text-destructive">{model.suv}</div>
                            </div>
                          </td>
                        ))}
                      </tr>
                      <tr className="hover:bg-gray-50 transition-all duration-300">
                        <td className="p-6 font-bold text-lg text-gray-800">Car Height (mm)</td>
                        {rotaryModels.map((model) => (
                          <td key={model.cars} className="p-4 text-center">
                            <div className="space-y-1">
                              <div className="font-bold text-primary">1700</div>
                              <div className="text-gray-400">|</div>
                              <div className="font-bold text-destructive">1900</div>
                            </div>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-primary via-primary to-red-800 text-white relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(250,168,46,0.2),transparent)] animate-pulse"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.1),transparent)] animate-pulse delay-1000"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 bg-white/20 text-white border-white/30">Get Started Today</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                  Transform Your Parking Today
                </h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  Get a customized parking solution designed for your specific needs. Our experts will assess your space and recommend the best system.
                </p>

                <div className="space-y-6">
                  {[
                    { icon: <Phone className="h-6 w-6" />, title: 'Call Us', value: '+91 90871 02929', href: 'tel:+919087102929' },
                    { icon: <Mail className="h-6 w-6" />, title: 'Email Us', value: 'aspiregrandexcel@gmail.com', href: 'mailto:aspiregrandexcel@gmail.com' },
                    { icon: <MapPin className="h-6 w-6" />, title: 'Visit Us', value: '111/109A, Civil Aerodrome Road\nSIHS Colony, Singanallur\nCoimbatore‑641014', href: 'https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6' }
                  ].map((contact) => (
                    <a key={contact.title} href={contact.href} target={contact.title === 'Visit Us' ? '_blank' : undefined} rel={contact.title === 'Visit Us' ? 'noopener noreferrer' : undefined} className="flex items-start gap-4 p-4 rounded-2xl bg-[#161243]/[0.45] backdrop-blur-[0.2px] hover:bg-[#161243]/[0.55] border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 group cursor-pointer">
                      <div className="text-accent bg-white/20 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300">
                        {contact.icon}
                      </div>
                      <div>
                        <p className="font-bold text-lg">{contact.title}</p>
                        <p className="opacity-90 whitespace-pre-line group-hover:text-accent transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#2d2a4a] rounded-2xl p-10 shadow-2xl relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-8 text-white text-center">Get Your Quote</h3>
                    <div className="space-y-3">
                      <a href="tel:+919087102929" className="block">
                        <Button
                          size="lg"
                          className="w-full bg-[#f5a623] hover:bg-[#e09616] text-white font-medium py-7 rounded-xl transition-all duration-200"
                        >
                          <Phone className="h-5 w-5 mr-2" />
                          Call for Immediate Quote
                        </Button>
                      </a>
                      <a href="mailto:aspiregrandexcel@gmail.com" className="block">
                        <Button
                          size="lg"
                          className="w-full bg-white hover:bg-gray-100 text-gray-900 font-medium py-7 rounded-xl transition-all duration-200"
                        >
                          <Mail className="h-5 w-5 mr-2" />
                          Email Your Requirements
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </motion.div>
    </>
  );
}
