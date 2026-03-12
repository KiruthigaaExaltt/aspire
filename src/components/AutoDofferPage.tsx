import { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { images } from '../components/constants/image';
import { MyImage } from './ui/MyImage';
import { cn } from './ui/utils';
import {
  Zap,
  Clock,
  TrendingUp,
  Shield,
  Cog,
  Users,
  Award,
  Wind,
  Settings,
  BarChart3,
  CheckCircle,
  AlertCircle,
  Calculator,
  Wrench,
  ChevronDown,
  Star,

} from 'lucide-react';


import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";


export function AutoDofferPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [roiSpindles, setRoiSpindles] = useState(1200);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const roiData = useMemo(() => {
    const laborSavingsPerYear = roiSpindles * 0.25 * 365;
    const qualityImprovementValue = roiSpindles * 50;
    const energySavings = roiSpindles * 0.15 * 365;
    const totalBenefits = laborSavingsPerYear + qualityImprovementValue + energySavings;
    const investmentCost = roiSpindles * 120;
    const paybackMonths = (investmentCost / (totalBenefits / 12)).toFixed(1);

    return {
      laborSavings: laborSavingsPerYear.toLocaleString(),
      qualityValue: qualityImprovementValue.toLocaleString(),
      energySavings: energySavings.toLocaleString(),
      totalBenefits: totalBenefits.toLocaleString(),
      investmentCost: investmentCost.toLocaleString(),
      paybackMonths
    };
  }, [roiSpindles]);

  const features = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "2-Minute Doff Cycle",
      description: "Ultra-fast automated doffing in ideal conditions",
      details: "Complete cop removal and tube loading in approximately 2 minutes, significantly reducing downtime and increasing productivity.",
      metrics: ["98% cycle reliability", "30% faster than manual", "Zero missed doffs"]
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "Ultra-Low Energy Use",
      description: "2–3 CFM air usage per doff cycle",
      details: "Energy-efficient pneumatic system designed for minimal compressed air consumption while maintaining optimal performance.",
      metrics: ["≈0.8 units/doff power", "25% energy savings", "Eco-friendly operation"]
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "PLC + HMI Controls",
      description: "Advanced automation with touchscreen interface",
      details: "Programmable Logic Controller with intuitive Human Machine Interface for seamless operation and monitoring.",
      metrics: ["10-day doff history", "7-day fault logs", "Real-time diagnostics"]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Fail-Safe Design",
      description: "Nylon gripper with steel conveyor reliability",
      details: "Robust fail-safe mechanisms ensure continuous operation even in challenging mill environments.",
      metrics: ["99.8% uptime", "Self-diagnostic systems", "Redundant safety features"]
    }
  ];

  const systemModules = [
    {
      title: "Gripper & Conveyor",
      description: "Nylon fail‑safe gripper with steel conveyor pegs for smooth movement",
      image: images.gallery2,
      specs: ["Nylon construction", "Fail-safe operation", "Steel conveyor pegs", "Smooth motion control"]
    },
    {
      title: "Yarn Cutter (Under‑winding)",
      description: "Press‑fit design with ~5–7g weight for lower running power",
      image: images.yarncutter,
      specs: ["Press-fit design", "5-7g weight", "Low power consumption", "Precision cutting"]
    },
    {
      title: "Drive & Gearbox",
      description: "Planetary gearbox on doffer beam for higher torque & easy upkeep",
      image: images.gallery3,
      specs: ["Planetary design", "High torque output", "Easy maintenance", "Beam mounting"]
    },
    {
      title: "Controls & Logs",
      description: "PLC + proximity sensors with touchscreen HMI and comprehensive logging",
      image: images.gallery11,
      specs: ["PLC control", "Proximity sensors", "Touchscreen HMI", "Data logging"]
    }
  ];

  const testimonials = [
    {
      quote: "The Auto Doffer retrofit transformed our mill operations. 30% productivity increase within 6 months.",
      author: "Rajesh Kumar",
      position: "Production Manager",
      company: "Textile Mills Ltd., Tamil Nadu",
      spindles: "2,400 spindles",
      savings: "$45,000/year"
    },
    {
      quote: "Exceptional reliability and support. Our doffing efficiency improved dramatically with zero downtime.",
      author: "Fatima Rahman",
      position: "Mill Director",
      company: "Bengal Spinning Co., Bangladesh",
      spindles: "1,800 spindles",
      savings: "$38,000/year"
    }
  ];
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Animated Elements */}
       {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
      <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-accent/20 py-15 sm:py-20 md:py-25 lg:py-30">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {/* Remove the animated circular background elements */}
        </div>

        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 lg:py-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            {/* Left Content */}
            <motion.div
              className="text-white space-y-6 lg:space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="space-y-4 flex flex-col items-center lg:items-start">
                <Badge className="bg-accent text-white text-base md:text-lg px-4 py-2">
                  <Award className="h-4 w-4 mr-2" />
                  Industry Leading
                </Badge>

                <motion.h2
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Auto Doffer
                  <span className="block text-accent">Retrofit</span>
                </motion.h2>

                <motion.p
                  className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  A Perfect Solution for LR6/LR60, KTTM, Toyoda, Rieter, Zinser, Jingwei and Shanghai Erfangji Ring Frame Automation
                  <span className="text-accent font-medium"> 9,00,000+ spindles all over India and Bangladesh.</span>
                </motion.p>
              </div>

              {/* Animated Stats */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  { value: "2 min", label: "Doff Cycle", icon: <Clock className="h-4 w-4 sm:h-5 sm:w-5" /> },
                  { value: "99.8%", label: "Reliability", icon: <Shield className="h-4 w-4 sm:h-5 sm:w-5" /> },
                  { value: "30%", label: "Efficiency Boost", icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" /> }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-3 sm:p-4 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-2xl border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-accent mb-2 flex justify-center">{stat.icon}</div>
                    <div className="text-xl sm:text-2xl font-bold text-accent">{stat.value}</div>
                    <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group"
                  onClick={() => {
                    setActiveTab('roi');
                    setTimeout(() => {
                      const roiSection = document.getElementById('roi-calculator');
                      if (roiSection) {
                        roiSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      }
                    }, 100);
                  }}
                >
                  Get ROI Calculator
                  <Calculator className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                </Button>

              </motion.div>
            </motion.div>

            {/* Right Content - 3D Visual */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]">

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#161243]/[0.33] to-[#161243]/[0.25] backdrop-blur-[0.2px] rounded-3xl border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MyImage
                    src={images.autodofferretreofit}
                    alt="Auto Doffer Retrofit System"
                    className="w-full h-full object-cover"
                  />
                </motion.div>


                <motion.div
                  className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-white font-medium text-sm sm:text-base">Live Status</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-accent mt-1">Online</div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-xl sm:rounded-2xl p-2 sm:p-4 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center space-x-2">
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-white font-medium text-sm sm:text-base">Efficiency</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-accent mt-1">98.5%</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 sm:h-8 sm:w-8 text-white/60" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 py-16 pb-6 md:pb-16 lg:pb-20">

        {/* Navigation Tabs */}

        <Tabs defaultValue="overview" className="mb-16" value={activeTab} onValueChange={setActiveTab}>
          <div className="mb-8 flex justify-center">
            <TabsList className="flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-2xl bg-white p-2 shadow-lg h-auto border-0 w-fit mx-auto">
              <TabsTrigger
                value="overview"
                onClick={() => setActiveTab("overview")}
                style={{ backgroundColor: activeTab === "overview" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "overview" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Overview
              </TabsTrigger>
              <TabsTrigger
                value="features"
                onClick={() => setActiveTab("features")}
                style={{ backgroundColor: activeTab === "features" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "features" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Features
              </TabsTrigger>
              <TabsTrigger
                value="specifications"
                onClick={() => setActiveTab("specifications")}
                style={{ backgroundColor: activeTab === "specifications" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "specifications" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Specs
              </TabsTrigger>
              <TabsTrigger
                value="roi"
                onClick={() => setActiveTab("roi")}
                style={{ backgroundColor: activeTab === "roi" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "roi" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                ROI Calculator
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            {/* Key Benefits */}
            <section className="m-5">
              <motion.div
                className="text-center mb-12 mt-4 md:mt-12"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Auto Doffer Retrofit?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Proven technology with over 200,000 spindles deployed worldwide.
                  Experience unprecedented productivity gains with our industry-leading automation solution.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group border-[#0000001A]"
                      onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}
                    >
                      <CardHeader className="text-center">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                          <div className="text-accent">{feature.icon}</div>
                        </div>
                        <CardTitle className="text-primary">{feature.title}</CardTitle>
                        <CardDescription className="text-gray-600">{feature.description}</CardDescription>
                      </CardHeader>
                      {expandedFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0">
                            <Separator className="mb-4" />
                            <p className="text-sm text-gray-600 mb-4">{feature.details}</p>
                            <div className="space-y-2">
                              {feature.metrics.map((metric, idx) => (
                                <div key={idx} className="flex items-center text-sm">
                                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                                  <span>{metric}</span>
                                </div>
                              ))}
                            </div>
                          </CardContent>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Before/After Comparison */}
            <section className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-8 md:p-12">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary mb-4">Before vs After Installation</h3>
                <p className="text-lg text-gray-600">See the dramatic improvement in your mill operations</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Before */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <Badge variant="destructive" className="text-lg px-4 py-2 mb-4">
                      Before: Manual Doffing
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Doff Time", value: "8-12 minutes", icon: <Clock className="h-5 w-5" /> },
                      { label: "Labor Cost", value: "High", icon: <Users className="h-5 w-5" /> },
                      { label: "Consistency", value: "Variable", icon: <BarChart3 className="h-5 w-5" /> },
                      { label: "Break Rate", value: "5-8%", icon: <AlertCircle className="h-5 w-5" /> }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white/50 rounded-lg">
                        <div className="flex items-center">
                          <div className="text-gray-500 mr-3">{item.icon}</div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <span className="text-gray-600">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* After */}
                <motion.div
                  className="space-y-6"
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center">
                    <Badge className="bg-green-500 text-white text-lg px-4 py-2 mb-4">
                      After: Auto Doffer
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Doff Time", value: "2 minutes", icon: <Clock className="h-5 w-5" /> },
                      { label: "Labor Cost", value: "75% Reduced", icon: <Users className="h-5 w-5" /> },
                      { label: "Consistency", value: "99.8%", icon: <BarChart3 className="h-5 w-5" /> },
                      { label: "Break Rate", value: "<3%", icon: <CheckCircle className="h-5 w-5" /> }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="flex items-center">
                          <div className="text-green-600 mr-3">{item.icon}</div>
                          <span className="font-medium">{item.label}</span>
                        </div>
                        <span className="text-green-600 font-semibold">{item.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Client Testimonials */}
            <section className="m-5">
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-primary mb-4">What Our Clients Say</h3>
                <p className="text-lg text-gray-600">Real results from real mills</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow border-[#0000001A]">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <blockquote className="text-lg italic text-gray-700 mb-6">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="space-y-2">
                          <div className="font-semibold text-primary">{testimonial.author}</div>
                          <div className="text-sm text-gray-600">{testimonial.position}</div>
                          <div className="text-sm text-gray-600">{testimonial.company}</div>
                          <div className="flex items-center justify-between pt-2 border-t">
                            <span className="text-sm font-medium text-accent">{testimonial.spindles}</span>
                            <span className="text-sm font-medium text-green-600">{testimonial.savings}</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Features Tab */}
          <TabsContent value="features" className="space-y-12">
            <motion.div
              className="text-center mb-12 mt-4 md:mt-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-primary mb-4">System Modules</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive components engineered for reliable doffing operation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {systemModules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-[#0000001A]">
                    <div className="aspect-video relative overflow-hidden">
                      {/* <ImageWithFallback */}
                      <MyImage
                        src={module.image}
                        alt={module.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"

                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-primary mb-3">{module.title}</CardTitle>
                      <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                        {module.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {module.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          {/* Specifications Tab */}
          <TabsContent value="specifications" className="space-y-12">
            <div className="m-5 grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4 md:mt-12">
              {/* Technical Specifications */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Technical Specifications</h3>
                <Card className='border-[#0000001A]'>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          category: "Performance",
                          specs: [
                            { label: "Doff Cycle Time", value: "≈2 minutes (ideal conditions)" },
                            { label: "Air Consumption", value: "2–3 CFM per doff" },
                            { label: "Power Consumption", value: "≈0.8 units/doff (@1200 spindles)" },
                            { label: "Break Rate", value: "<3% typical" }
                          ]
                        },
                        {
                          category: "Physical",
                          specs: [
                            { label: "Centre-to-Centre", value: "1.750 m (class-leading)" },
                            { label: "Off-end Clearance", value: "≈1.1 m + cop collection space" },
                            { label: "Yarn Cutter Weight", value: "~5–7 g" },
                            { label: "Gripper Material", value: "Nylon, fail-safe design" }
                          ]
                        },
                        {
                          category: "Control System",
                          specs: [
                            { label: "Control Type", value: "PLC + proximity sensors" },
                            { label: "Interface", value: "Touchscreen HMI" },
                            { label: "Data Logging", value: "10-day doff, 7-day fault history" },
                            { label: "Positioning", value: "Proximity-based precision" }
                          ]
                        }
                      ].map((section, index) => (
                        <div key={index}>
                          <h4 className="font-semibold text-accent mb-3">{section.category}</h4>
                          <div className="space-y-2">
                            {section.specs.map((spec, idx) => (
                              <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                                <span className="text-gray-600">{spec.label}</span>
                                <span className="font-medium text-primary">{spec.value}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Installation Requirements */}
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">Installation Requirements</h3>
                <div className="space-y-6">
                  <Card className="border-[#0000001A]">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Settings className="h-5 w-5 mr-2 text-accent" />
                        Pre-Installation
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Mill survey and assessment</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Frame compatibility check</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Electrical requirements planning</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Compressed air system evaluation</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="border-[#0000001A]">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Wrench className="h-5 w-5 mr-2 text-accent" />
                        Installation Process
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { step: "1", title: "Mechanical Installation", duration: "2-3 days" },
                          { step: "2", title: "Electrical & Controls", duration: "1-2 days" },
                          { step: "3", title: "Commissioning & Testing", duration: "1 day" },
                          { step: "4", title: "Training & Handover", duration: "1 day" }
                        ].map((phase, index) => (
                          <div key={index} className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {phase.step}
                            </div>
                            <div className="flex-1">
                              <div className="font-medium">{phase.title}</div>
                              <div className="text-sm text-gray-600">{phase.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#0000001A]">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Shield className="h-5 w-5 mr-2 text-accent" />
                        Support & Warranty
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />2-year comprehensive warranty</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />24/7 remote monitoring support</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />On-site technical assistance</li>
                        <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Preventive maintenance program</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* ROI Calculator Tab */}
          <TabsContent value="roi" className="space-y-12" id="roi-calculator">
            <div className="text-center mb-12 m-5">
              <h2 className="text-4xl font-bold text-primary mb-4">ROI Calculator</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Calculate your return on investment and see how quickly the Auto Doffer pays for itself
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Calculator Input */}
              <Card className='border-[#0000001A]'>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2 text-accent" />
                    Calculate Your ROI
                  </CardTitle>
                  <CardDescription>
                    Enter your mill specifications to get personalized ROI calculations
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Number of Spindles</label>
                    <input
                      type="range"
                      min="600"
                      max="5000"
                      step="100"
                      value={roiSpindles}
                      onChange={(e) => setRoiSpindles(Number(e.target.value))}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600 mt-1">
                      <span>600</span>
                      <span className="font-medium text-accent">{roiSpindles.toLocaleString()}</span>
                      <span>5,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-sm text-gray-600">Investment Cost</div>
                      <div className="text-2xl font-bold text-primary">${roiData.investmentCost}</div>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <div className="text-sm text-gray-600">Payback Period</div>
                      <div className="text-2xl font-bold text-green-600">{roiData.paybackMonths} months</div>
                    </div>
                  </div>


                </CardContent>
              </Card>

              {/* ROI Breakdown */}
              <Card className="border-[#0000001A]">
                <CardHeader>
                  <CardTitle>Annual Benefits Breakdown</CardTitle>
                  <CardDescription>
                    Based on {roiSpindles.toLocaleString()} spindles
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        label: "Labor Cost Savings",
                        value: `$${roiData.laborSavings}`,
                        icon: <Users className="h-5 w-5" />,
                        color: "bg-blue-500"
                      },
                      {
                        label: "Quality Improvements",
                        value: `$${roiData.qualityValue}`,
                        icon: <Award className="h-5 w-5" />,
                        color: "bg-green-500"
                      },
                      {
                        label: "Energy Savings",
                        value: `$${roiData.energySavings}`,
                        icon: <Zap className="h-5 w-5" />,
                        color: "bg-yellow-500"
                      }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border border-[#0000001A] rounded-lg">
                        <div className="flex items-center">
                          <div className={`p-2 ${benefit.color} text-white rounded-lg mr-3`}>
                            {benefit.icon}
                          </div>
                          <span className="font-medium">{benefit.label}</span>
                        </div>
                        <span className="font-bold text-lg">{benefit.value}</span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="flex items-center justify-between p-4 bg-accent/10 rounded-lg">
                    <span className="font-bold text-lg">Total Annual Benefits</span>
                    <span className="font-bold text-2xl text-accent">${roiData.totalBenefits}</span>
                  </div>

                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-green-600">ROI</div>
                      <div className="text-sm text-gray-600">Year 1</div>
                      <div className="font-medium">125%</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">NPV</div>
                      <div className="text-sm text-gray-600">5 Years</div>
                      <div className="font-medium">$2.1M</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-purple-600">IRR</div>
                      <div className="text-sm text-gray-600">Internal</div>
                      <div className="font-medium">78%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
