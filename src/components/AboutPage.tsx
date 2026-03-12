import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Target, Eye, Award, Users, CheckCircle, Factory, Globe, Zap, Trophy, Building, Sparkles, Lightbulb, Rocket, Shield } from 'lucide-react';
import { motion } from 'motion/react';
import { images } from '../components/constants/image';
import { MyImage, MotionMyImage } from './ui/MyImage';
import { useLocation } from "react-router-dom";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";



function CounterAnimation({ target, suffix = '', delay = 0 }: { target: number; suffix?: string; delay?: number }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay * 1000);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    // const endTime = startTime + duration;

    const timer = setInterval(() => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(easeOutQuart * target);

      setCount(currentCount);

      if (progress === 1) {
        clearInterval(timer);
        setCount(target);
      }
    }, 16); // ~60fps

    return () => clearInterval(timer);
  }, [target, hasStarted]);

  return <span>{count}{suffix}</span>;
}



export function AboutPage() {
  const { pathname } = useLocation();
  // Strip leading/trailing slashes, take the last segment
  // e.g. "/about/" → "about", "/products/auto-doffer/" → "auto-doffer"
  const metaTitle = pathname.replace(/^\/|\/$/g, '').split('/').pop() || 'home';

  console.log("Meta title:", metaTitle);
  const [visibleItems, setVisibleItems] = useState(new Set());

  console.log("Visible timeline items:", visibleItems);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8 text-accent" />,
      title: "Innovation",
      description: "Continuously developing cutting-edge solutions for the textile industry.",
      gradient: "from-yellow-400 to-orange-500",
      pattern: "⚡",
      stats: "50+ Patents"
    },
    {
      icon: <Shield className="h-8 w-8 text-accent" />,
      title: "Quality",
      description: "Uncompromising commitment to excellence in every product we deliver.",
      gradient: "from-blue-400 to-purple-500",
      pattern: "🎯",
      stats: "ISO Certified"
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Partnership",
      description: "Building long-term relationships with our clients through reliable service.",
      gradient: "from-pink-400 to-red-500",
      pattern: "🤝",
      stats: "500+ Partners"
    },
    {
      icon: <Rocket className="h-8 w-8 text-accent" />,
      title: "Vision",
      description: "Leading the transformation of textile manufacturing through technology.",
      gradient: "from-green-400 to-teal-500",
      pattern: "🚀",
      stats: "Global Leader"
    }
  ];

  const milestones = [
    {
      year: "2009",
      event: "Company Founded",
      description: "Aspire Grand Excel Automation is established with a focus on spinning automation",
      icon: <Building className="h-6 w-6" />,
      color: "bg-primary",
      achievement: "Started the journey",
      impact: "Foundation of innovation"
    },
    {
      year: "2010",
      event: "Auto Doffer Innovation",
      description: "Successful deployment of indigenous Auto Doffing Systems in major mills",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-accent",
      achievement: "Benchmark in reliability",
      impact: "Ring frame automation"
    },
    {
      year: "2015",
      event: "Compact Spinning Breakthrough",
      description: "Launch of the EXCELspin Compact System addressing yarn quality and productivity needs",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-destructive",
      achievement: "100% Indigenous system",
      impact: "Superior yarn quality"
    },
    {
      year: "2018",
      event: "Bobbin Transport System",
      description: "Introduction of internal logistics automation for optimized handling efficiency",
      icon: <Factory className="h-6 w-6" />,
      color: "bg-primary",
      achievement: "Enhanced logistics",
      impact: "Workforce optimization"
    },
    {
      year: "2020",
      event: "Auto Cone Packing System",
      description: "Launch of a fully automated cone packing solution saving 6 workers per shift",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-accent",
      achievement: "Full automation achieved",
      impact: "Labor cost reduction"
    },
    {
      year: "2024",
      event: "15th Anniversary Milestone",
      description: "Celebrating 15 years of innovation and leadership in spinning automation",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-destructive",
      achievement: "Industry leader",
      impact: "Continuous innovation"
    }
  ];

  const stats = [
    { number: "15+", label: "Years Experience", icon: <Award className="h-5 w-5" />, color: "text-yellow-500" },
    { number: "100+", label: "Textile Mills Served", icon: <Factory className="h-5 w-5" />, color: "text-blue-500" },
    { number: "5", label: "Core Products", icon: <Target className="h-5 w-5" />, color: "text-green-500" },
    { number: "6", label: "R&D Engineers", icon: <Users className="h-5 w-5" />, color: "text-purple-500" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('[data-timeline-item]');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleItems(prev => new Set([...prev, index]));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">

      {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
      {/* Hero Section */}
      <section className="relative flex items-center justify-center py-15 sm:py-20 md:py-25 lg:py-30 overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0">
          <MotionMyImage
            src={images.abouthero}
            alt="Textile Manufacturing Floor"
            className="w-full h-full object-cover scale-110"

          />
          {/* Multi-layer Creative Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/85 via-primary/75 to-primary/80"></div>
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-accent/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white relative">
                <span className="bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
                  About Aspire Excel
                </span>

              </h2>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl mb-8 max-w-6xl mx-auto opacity-90 text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Our focus is on delivering innovative services and automation solutions that transform the spinning industry.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 mb-12">
              {stats.map((stat, index) => {
                // Extract number and suffix from stat.number (e.g., "25+" -> number: 25, suffix: "+")
                const match = stat.number.match(/(\d+)(.*)/) || ['0', '0', ''];
                const targetNumber = parseInt(match[1]) || 0;
                const suffix = match[2] || '';

                return (
                  <motion.div
                    key={index}
                    className="bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-2xl p-4 sm:p-6 text-center min-w-0 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] hover:bg-[#161243]/[0.55] transition-all duration-500 hover:scale-110 group cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    whileHover={{
                      y: -10,
                      boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                    }}
                  >
                    <motion.div
                      className={`flex justify-center mb-2 ${stat.color}`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 10, -10, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.5
                      }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className="text-3xl font-bold mb-1 text-white"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                    >
                      <CounterAnimation
                        target={targetNumber}
                        suffix={suffix}
                        delay={index * 0.1 + 1.2}
                      />
                    </motion.div>
                    <div className="text-sm opacity-80 text-white/90 group-hover:opacity-100 transition-opacity">
                      {stat.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        {/* Creative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-primary/5 opacity-50"></div>
          <motion.div
            className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-br from-accent/10 to-transparent rounded-full blur-3xl"
            animate={{
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 20, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 left-0 w-48 h-48 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-2xl"
            animate={{
              x: [0, -30, 0],
              y: [0, 20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />
        </div>

        {/* Company Overview Section */}
        <section className="mb-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <Card className="bg-gradient-to-r from-primary via-accent to-destructive text-white border-0 shadow-2xl">
              <CardContent className="p-4 sm:p-6 md:p-12 text-left sm:text-center">
                <Building className="h-16 w-16 mx-auto mb-6" />
                {/* <h2 className="text-4xl md:text-5xl font-bold mb-6">Company Overview</h2>
                <div className="space-y-6 leading-relaxed max-w-3xl mx-auto opacity-95">
                  <p className="text-xl">
                    Aspire Grand Excel Automation, formerly Aspire Automation and Technologies, is a Coimbatore-based engineering innovator with over two decades of expertise in spinning automation. The company pioneered indigenous manufacturing of doffing machines and has successfully deployed solutions across leading spinning mills, defining new benchmarks in reliability, efficiency, and performance.
                  </p>

                  <p className="text-xl">
                    Backed by strong technical leadership and continuous product enhancement, Aspire excels in solving the core challenges of doffing, compacting, bobbin handling, and cone packing with a robust line-up of automation systems tailored to modern textile mills.
                  </p>
                </div> */}
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 text-left lg:text-center">
                    Company Overview
                  </h2>

                  <div className="space-y-6 leading-relaxed opacity-95">
                    <p className="text-xl">
                      Aspire Grand Excel Automation, formerly Aspire Automation and Technologies, is a Coimbatore-based engineering innovator with over two decades of expertise in spinning automation. The company pioneered indigenous manufacturing of doffing machines and has successfully deployed solutions across leading spinning mills, defining new benchmarks in reliability, efficiency, and performance.
                    </p>

                    <p className="text-xl">
                      Backed by strong technical leadership and continuous product enhancement, Aspire excels in solving the core challenges of doffing, compacting, bobbin handling, and cone packing with a robust line-up of automation systems tailored to modern textile mills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Our Journey Timeline */}
        <section className="relative overflow-hidden">
          {/* Full-Page Journey Experience */}
          <div className="relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${typeof images.ourjourneybg === 'string' ? images.ourjourneybg : (images.ourjourneybg as any)?.img?.src})` }}>
            {/* Background Overlay */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${typeof images.ourjourneybg === 'string' ? images.ourjourneybg : (images.ourjourneybg as any)?.img?.src})`
              }}
            ></div>
            {/* Hero Title Section */}
            <div className="text-center mb-0 md:mb-16 pt-8 md:pt-12 pb-0 md:pb-12 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 uppercase">OUR JOURNEY</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-accent to-primary mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto uppercase">
                FROM A SMALL ENGINEERING COMPANY TO A GLOBAL LEADER IN TEXTILE MACHINERY
              </p>
            </div>

            {/* Milestone Timeline */}
            <div className="relative max-w-7xl mx-auto z-10">
              {/* Simple Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-primary via-accent to-primary rounded-full z-10 shadow-lg hidden md:block"
                style={{ height: `${milestones.length * 400}px`, top: '0px' }}></div>

              <div className="space-y-16 py-8" style={{ minHeight: `${milestones.length * 240 + 160}px` }}>
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    data-timeline-item
                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-10%" }}
                  >
                    {/* Content Side */}
                    <div className={`w-full sm:w-10/12 md:w-5/12 px-4 sm:px-6 ${index % 2 === 0 ? 'md:pr-8 md:pl-4' : 'md:pl-8 md:pr-4'}`}>
                      <div className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl border border-gray-200 p-6">
                        {/* Year Badge */}
                        <div className="inline-block mb-4">
                          <Badge className={`${milestone.color} text-white px-6 py-2 text-lg font-bold uppercase tracking-wide rounded-lg`}>
                            {milestone.year}
                          </Badge>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-primary uppercase mb-4 leading-tight">
                          {milestone.event}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-600 uppercase mb-4 leading-relaxed">
                          {milestone.description}
                        </p>

                        {/* Achievement & Impact */}
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <Trophy className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-primary uppercase text-sm mb-1">ACHIEVEMENT</p>
                              <p className="text-gray-700 uppercase text-sm">{milestone.achievement}</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Zap className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <div>
                              <p className="font-bold text-accent uppercase text-sm mb-1">IMPACT</p>
                              <p className="text-gray-700 uppercase text-sm">{milestone.impact}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Timeline Node */}
                    <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white border-4 border-accent rounded-full shadow-lg hidden md:flex">
                      <div className={`${milestone.color} text-white p-2 rounded-full`}>
                        {milestone.icon}
                      </div>
                    </div>

                    {/* Spacer */}
                    <div className="w-5/12 hidden md:block"></div>
                  </motion.div>
                ))}
              </div>

              {/* Journey Completion */}
              <div className="text-center mt-0 md:mt-16 py-12 px-4">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-primary to-accent text-white px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-lg max-w-full">
                  <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="font-bold text-base sm:text-lg uppercase">
                    JOURNEY CONTINUES
                  </span>
                  <Rocket className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                </div>
                <p className="text-base sm:text-lg text-gray-600 uppercase mt-4">
                  BUILDING THE FUTURE OF TEXTILE AUTOMATION
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Cards */}
        <section className="mb-20">
          <div className="flex flex-col lg:flex-row rounded-3xl overflow-hidden shadow-2xl">
            {/* Vision Section (Left Side - Orange Gradient) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[55%] bg-gradient-to-br from-orange-400 via-orange-500 to-accent text-white flex flex-col justify-center p-4 md:p-6 lg:p-10 xl:p-12 min-h-[400px] lg:min-h-[500px] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
            >
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl -z-10"
              />
              <motion.div
                animate={{
                  rotate: -360,
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-5 -left-5 w-24 h-24 bg-white/5 rounded-full blur-xl -z-10"
              />

              <div className="relative z-10 max-w-[90%] mx-auto lg:mx-0">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", bounce: 0.4 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#161243]/[0.45] rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-[0.2px] border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Eye className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight"
                >
                  OUR
                  <br />
                  VISION
                </motion.h2>

                {/* Content */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-white/90 text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    lineHeight: '1.7'
                  }}
                >
                  To be the global leader in textile manufacturing solutions, recognized for our
                  innovation, quality, and commitment to transforming the industry through
                  cutting-edge technology and exceptional customer service.
                </motion.p>
              </div>

              {/* Floating Decorative Elements */}
              {Array.from({ length: 4 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, Math.sin(i) * 8, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.8,
                    ease: "easeInOut"
                  }}
                  className="absolute w-2 h-2 bg-white/50 rounded-full -z-10"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${25 + i * 12}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* Mission Section (Right Side - Light Gray) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative w-full lg:w-[45%] bg-gradient-to-br from-gray-100 to-gray-200 text-primary flex flex-col justify-center p-4 md:p-6 lg:p-10 xl:p-12 min-h-[400px] lg:min-h-[500px] rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none"
            >
              {/* Animated Background Elements */}
              <motion.div
                animate={{
                  rotate: -360,
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  rotate: { duration: 18, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-8 -left-8 w-28 h-28 bg-primary/5 rounded-full blur-xl -z-10"
              />
              <motion.div
                animate={{
                  rotate: 360,
                  opacity: [0.1, 0.2, 0.1]
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: "linear" },
                  opacity: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -bottom-6 -right-6 w-20 h-20 bg-accent/10 rounded-full blur-xl -z-10"
              />

              <div className="relative z-10 max-w-[90%] mx-auto lg:mx-0">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0, rotate: 180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.4, type: "spring", bounce: 0.4 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-[#161243]/[0.45] rounded-full flex items-center justify-center mb-4 sm:mb-6 backdrop-blur-[0.2px] border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                  >
                    <Target className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-primary drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 tracking-tight"
                >
                  OUR
                  <br />
                  MISSION
                </motion.h2>

                {/* Content */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="text-primary/80 text-sm sm:text-base lg:text-lg leading-relaxed"
                  style={{
                    wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                    hyphens: 'auto',
                    lineHeight: '1.7'
                  }}
                >
                  To empower textile manufacturers worldwide with innovative, reliable, and efficient
                  machinery solutions that drive productivity, enhance quality, and create sustainable
                  competitive advantages in the global marketplace.
                </motion.p>
              </div>

              {/* Floating Decorative Elements */}
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -12, 0],
                    x: [0, Math.cos(i) * 10, 0],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{
                    duration: 5 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 1.2,
                    ease: "easeInOut"
                  }}
                  className="absolute w-1.5 h-1.5 bg-primary/30 rounded-full -z-10"
                  style={{
                    right: `${15 + i * 18}%`,
                    top: `${30 + i * 15}%`,
                  }}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="mb-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do, shaping our culture and driving our success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <Card className="relative text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 border-0 bg-white overflow-hidden group cursor-pointer h-full">
                  {/* Creative Background Pattern */}
                  <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <div className={`w-full h-full bg-gradient-to-br ${value.gradient}`}></div>
                  </div>

                  {/* Floating Pattern Element */}
                  <motion.div
                    className="absolute top-4 right-4 text-4xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    animate={{
                      rotate: hoveredCard === index ? 360 : 0,
                      scale: hoveredCard === index ? 1.2 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.pattern}
                  </motion.div>

                  <CardHeader className="pb-4 relative z-10">
                    <motion.div
                      className="flex justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative">
                        <div className={`p-4 bg-gradient-to-br ${value.gradient} rounded-2xl shadow-lg`}>
                          <div className="text-white">
                            {value.icon}
                          </div>
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500 -z-10`}></div>
                      </div>
                    </motion.div>
                    <CardTitle className="text-primary text-2xl mb-2">{value.title}</CardTitle>
                    <Badge
                      variant="outline"
                      className="border-accent/30 text-accent bg-accent/10"
                    >
                      {value.stats}
                    </Badge>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="text-gray-600 leading-relaxed mb-4">{value.description}</p>

                    {/* Interactive Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-1 mt-4">
                      <motion.div
                        className={`bg-gradient-to-r ${value.gradient} h-1 rounded-full`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                    initial={false}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Market Presence Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image on left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1"
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8">
                <MyImage
                  src={images.ourmarketfootprint}
                  alt="Our Market Footprint - Aspire Excel Global Presence"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </motion.div>

            {/* Text on right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 p-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center lg:text-left">
                Our Market Footprint
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Our domestic market forms the core of our operations, with strong presence across South India, Maharashtra, and Ludhiana.
                </p>
                <p>
                  Aspire also caters to global clients, particularly in Indonesia and Bangladesh, with expansion plans aligned to economic conditions and customer demand.
                </p>
              </div>

              {/* Market highlights */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-primary/5 rounded-xl p-4 text-center">
                  <Globe className="h-6 w-6 text-primary mx-auto mb-2" />
                  <div className="font-bold text-primary text-lg">Domestic</div>
                  <div className="text-sm text-gray-500">South India, Maharashtra, Ludhiana</div>
                </div>
                <div className="bg-accent/5 rounded-xl p-4 text-center">
                  <Globe className="h-6 w-6 text-accent mx-auto mb-2" />
                  <div className="font-bold text-accent text-lg">International</div>
                  <div className="text-sm text-gray-500">Indonesia, Bangladesh</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>


        {/* Company Story */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 p-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center lg:text-left text-primary mb-6">Product Journey</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-base md:text-lg">
                <p>
                  Aspire began its journey by developing the Aspire Auto Doffing System—now a benchmark in reliability for ring frames across India. Building on this success, the company introduced the 100% indigenous EXCELspin Compact Spinning System, ensuring superior yarn quality and higher productivity.
                </p>
                <p>
                  Aspire later added the Bobbin Transport System and the fully automated Auto Cone Packing System, enhancing internal logistics and workforce optimization in large mills.
                </p>
              </div>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative order-1 lg:order-2"
            >
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-4 md:p-6 lg:p-8">
                <MyImage
                  src={images.ourmarketfootprint}
                  alt="Business Leadership and Textile Manufacturing Innovation"
                  className="w-full h-auto rounded-lg shadow-lg object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Unique Selling Propositions Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl text-primary text-center">
                  What Sets Us Apart
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg text-center max-w-6xl mx-auto">
                  Our strength lies in being a technocrat-driven company supported by seasoned electrical and mechanical engineers. Aspire ensures consistent product quality, robust after-sales support, and continuous innovation without discontinuing existing product lines—an approach that sets us apart from other machinery manufacturers.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* After-Sales Service Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">After-Sales Excellence</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Aspire's after-sales service is built on responsiveness and thorough technical assessment. Issues are resolved through root-cause identification, remote support, and on-site engineering visits within 48–72 hours. With a strong inventory of spares and low-maintenance designs, our machines ensure minimal downtime for customers.
                </p>
              </div>
              <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-primary to-primary/80 text-white p-6 text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">48-72h</div>
                    <div className="text-sm opacity-90">Response Time</div>
                  </Card>
                  <Card className="bg-gradient-to-br from-accent to-accent/80 text-white p-6 text-center">
                    <Shield className="h-12 w-12 mx-auto mb-3" />
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <div className="text-sm opacity-90">Spare Parts Availability</div>
                  </Card>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Export Strategy Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-3xl md:text-4xl text-primary text-center flex items-center justify-center gap-3">
                  <Globe className="h-8 w-8 text-accent" />
                  Export Strategy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed text-lg text-center max-w-6xl mx-auto">
                  While India remains the primary market, Aspire has steadily grown its export footprint. Current focus areas include Indonesia and Bangladesh, with expansion to additional regions evaluated based on economic feasibility and customer readiness.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* R&D Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="flex justify-center order-2 lg:order-1">
                <Card className="bg-gradient-to-br from-primary to-primary/80 text-white p-8 text-center shadow-xl">
                  <Lightbulb className="h-16 w-16 mx-auto mb-4" />
                  <div className="text-5xl font-bold mb-2">6</div>
                  <div className="text-xl opacity-90">Dedicated R&D Engineers</div>
                  <p className="mt-4 text-sm opacity-80">Equipped with advanced tools and software</p>
                </Card>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-primary mb-6">Research & Development</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Our R&D team consists of six dedicated engineers equipped with advanced tools and software. Their focus is on continuous design improvement, product enhancement, and innovation, enabling Aspire to address evolving market requirements with precision and agility.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Future Outlook Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-r from-primary via-accent to-destructive text-white border-0 shadow-2xl">
              <CardContent className="p-12 text-center">
                <Rocket className="h-16 w-16 mx-auto mb-6 animate-bounce" />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">Future Outlook</h2>
                <p className="text-xl leading-relaxed max-w-3xl mx-auto opacity-95">
                  Aspire is currently focused on strengthening the Auto Cone Packing System before introducing its next innovation, with new product launches expected as early as next year.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        {/* Leadership Section */}
        <section className="mb-0 sm:mb-20">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Leadership & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driven by seasoned technocrats and engineering experts
            </p>
          </motion.div>

          <motion.div
            className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-gray-600">R&D Engineers</div>
                  <p className="text-sm text-gray-500 mt-2">Advanced tools & software</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <div className="text-3xl font-bold text-accent mb-2">20+</div>
                  <div className="text-gray-600">Years of Expertise</div>
                  <p className="text-sm text-gray-500 mt-2">Combined leadership experience</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <div className="text-gray-600">Technocrat-Driven</div>
                  <p className="text-sm text-gray-500 mt-2">Electrical & mechanical engineers</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
