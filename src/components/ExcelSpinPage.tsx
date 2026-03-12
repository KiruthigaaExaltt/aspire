import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Separator } from "./ui/separator";
import { cn } from './ui/utils';
import { images } from "../components/constants/image";
import { MyImage } from "./ui/MyImage";
import {
  Layers,
  Wind,
  TrendingUp,
  Shield,
  Award,
  CheckCircle,
  Calculator,
  Target,
  ChevronDown,
  Star,
  Microscope,
  Waves,
  Droplets,
  Sparkles,
  Minimize2,
} from "lucide-react";



export function ExcelSpinPage() {
  const [activeTab, setActiveTab] = useState("overview");
  // const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [selectedCountRange, setSelectedCountRange] = useState("Ne 30");
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  // const [comparisonMode, setComparisonMode] = useState<'conventional' | 'compact'>('compact');

  // (animationStep state removed - not used)
  // Count range data for ROI calculations
  const countRanges = ["Ne 20", "Ne 30", "Ne 40", "Ne 50", "Ne 60"];

  const calculateQualityImprovements = (count: string) => {
    const baseValues = {
      "Ne 20": { hairiness: 28, tensile: 12, evenness: 8 },
      "Ne 30": { hairiness: 25, tensile: 15, evenness: 10 },
      "Ne 40": { hairiness: 22, tensile: 18, evenness: 12 },
      "Ne 50": { hairiness: 20, tensile: 20, evenness: 15 },
      "Ne 60": { hairiness: 18, tensile: 22, evenness: 18 },
    };

    return baseValues[count as keyof typeof baseValues] || baseValues["Ne 30"];
  };

  const qualityData = calculateQualityImprovements(selectedCountRange);

  const features = [
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Compact Condensing Zone",
      description:
        "Advanced fiber condensing technology for superior yarn quality",
      details:
        "Precision-engineered condensing zone with lattice apron and nose bar assembly ensuring optimal fiber alignment and condensation.",
      metrics: [
        "Precise nip control",
        "Fiber ribbon integrity",
        "Consistent condensing",
      ],
      improvement: "+15% yarn strength",
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "High-Efficiency Suction",
      description: "Central suction manifold with washable pre-filters",
      details:
        "Advanced suction system with differential pressure monitoring, ensuring consistent performance and easy maintenance.",
      metrics: [
        "-18 to -22 kPa suction",
        "Washable filters",
        "Energy efficient",
      ],
      improvement: "25% energy savings",
    },
    {
      icon: <Microscope className="h-6 w-6" />,
      title: "Hairiness Reduction",
      description: "20-30% reduction in yarn hairiness",
      details:
        "Significant improvement in yarn surface smoothness through optimized fiber condensing process.",
      metrics: [
        "20-30% hairiness reduction",
        "Better surface quality",
        "Improved dyeability",
      ],
      improvement: "Superior fabric quality",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enhanced Tensile Strength",
      description: "10-15% improvement in yarn tensile strength",
      details:
        "Better fiber consolidation results in stronger yarn with improved performance characteristics.",
      metrics: [
        "+10% to +15% tensile",
        "Reduced breaks",
        "Better weaving performance",
      ],
      improvement: "Higher productivity",
    },
  ];

  const systemComponents = [
    {
      title: "Condensing Unit",
      description:
        "Lattice apron and nose bar assembly for precise fiber guidance",
      image: images.gallery4,
      specs: [
        "Lattice apron design",
        "Precision nose bar",
        "Optimal nip pressure",
        "Uniform fiber distribution",
      ],
      countRange: "Ne 20-60",
    },
    {
      title: "Suction Manifold",
      description:
        "Central suction system with washable pre-filters and monitoring",
      image: images.gallery5,
      specs: [
        "Central manifold",
        "Washable filters",
        "Pressure monitoring",
        "Energy efficient",
      ],
      countRange: "All counts",
    },
    {
      title: "Perforated Drum",
      description:
        "Precision-engineered perforated drum for optimal suction distribution",
      image: images.perforateddrum,
      specs: [
        "Perforated design",
        "Uniform suction",
        "Durable construction",
        "Easy maintenance",
      ],
      countRange: "Ne 20-60",
    },
    {
      title: "Control System",
      description: "Advanced monitoring and control for optimal performance",
      image: images.gallery11,
      specs: [
        "Digital monitoring",
        "Performance analytics",
        "Alarm systems",
        "Remote diagnostics",
      ],
      countRange: "Smart control",
    },
  ];

  const testimonials = [
    {
      quote:
        "EXCELspin transformed our yarn quality. 25% reduction in hairiness and 15% better tensile strength immediately.",
      author: "Priya Sharma",
      position: "Quality Manager",
      company: "Superior Textiles, Gujarat",
      countRange: "Ne 40s",
      improvement: "25% quality boost",
    },
    {
      quote:
        "The compact spinning retrofit paid for itself in 8 months through reduced waste and premium yarn pricing.",
      author: "Mohammad Hassan",
      position: "Mill Owner",
      company: "Dhaka Spinning Mills, Bangladesh",
      countRange: "Ne 30s-50s",
      improvement: "ROI: 8 months",
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section with Fiber Animation */}
      <section className="from-primary via-primary/90 to-accent/30 relative flex items-start lg:items-center justify-center overflow-hidden bg-gradient-to-br pt-32 pb-12 sm:pt-40 sm:pb-16 md:pt-36 md:pb-20 lg:pt-48 lg:pb-24">
        {/* Animated Fiber Flow Background */}
        <div className="absolute inset-0">
          {/* Flowing fiber strands */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="via-accent/20 absolute w-1 bg-gradient-to-b from-white/30 to-transparent"
              style={{
                left: `${i * 8 + 10}%`,
                height: "200px",
              }}
              animate={{
                y: [-100, window.innerHeight + 100],
                opacity: [0, 0.6, 0],
                scaleY: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 8 + i * 0.5,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[1550px] px-4 md:px-6 py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <motion.div
              className="space-y-6 text-white lg:space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-4">
                <Badge className="bg-accent px-4 py-2 text-base text-white md:text-lg">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Compact Technology
                </Badge>

                <motion.h1
                  className="text-4xl leading-tight font-bold sm:text-5xl md:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  EXCELspin
                  <span className="text-accent block">Compact</span>
                </motion.h1>

                <motion.p
                  className="text-lg leading-relaxed text-white/90 sm:text-xl md:text-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Revolutionary compact spinning technology delivering superior
                  yarn quality.
                  <span className="text-accent font-medium">
                    {" "}
                    20-30% hairiness reduction guaranteed.
                  </span>
                </motion.p>
              </div>

              {/* Animated Quality Metrics */}
              <motion.div
                className="grid grid-cols-3 gap-3 sm:gap-4 lg:gap-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  {
                    value: "30%",
                    label: "Hairiness ↓",
                    icon: <Minimize2 className="h-4 w-4 sm:h-5 sm:w-5" />,
                  },
                  {
                    value: "15%",
                    label: "Strength ↑",
                    icon: <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5" />,
                  },
                  {
                    value: "Ne 60",
                    label: "Max Count",
                    icon: <Target className="h-4 w-4 sm:h-5 sm:w-5" />,
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="rounded-2xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-3 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] sm:p-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="text-accent mb-2 flex justify-center">
                      {stat.icon}
                    </div>
                    <div className="text-accent text-xl font-bold sm:text-2xl">
                      {stat.value}
                    </div>
                    <div className="text-xs text-white/80 sm:text-sm">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex flex-col flex-wrap gap-3 sm:flex-row sm:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 group px-6 py-3 text-base font-semibold text-white sm:px-8 sm:py-4 sm:text-lg"
                  onClick={() => {
                    setActiveTab("calculator");
                    setTimeout(() => {
                      const calculatorSection =
                        document.getElementById("quality-calculator");
                      if (calculatorSection) {
                        calculatorSection.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }
                    }, 100);
                  }}
                >
                  Quality Calculator
                  <Microscope className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                </Button>
              </motion.div>
            </motion.div>

            {/* Right Content - Compact Process Visualization */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative w-full aspect-[4/3] sm:aspect-[4/3] md:aspect-[4/3] lg:aspect-[4/3]">
                {/* Main Compact Zone Visual */}
                <motion.div
                  className="absolute inset-0 overflow-hidden rounded-3xl border border-[#161243]/[0.24] bg-gradient-to-r from-[#161243]/[0.33] to-[#161243]/[0.25] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={images.home3}
                    alt="EXCELspin Compact Technology"
                    className="w-full h-full object-cover"
                  />
                  <div className="from-primary/30 absolute inset-0 bg-gradient-to-t to-transparent"></div>
                </motion.div>

                {/* Floating Process Cards */}
                <motion.div
                  className="absolute -top-3 -right-3 rounded-xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] sm:-top-6 sm:-right-6 sm:rounded-2xl sm:p-4"
                  animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Droplets className="h-4 w-4 text-blue-400" />
                    <span className="text-sm font-medium text-white sm:text-base">
                      Suction Active
                    </span>
                  </div>
                  <div className="text-accent mt-1 text-xl font-bold sm:text-2xl">
                    -20 kPa
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -bottom-3 -left-3 rounded-xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-2 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] sm:-bottom-6 sm:-left-6 sm:rounded-2xl sm:p-4"
                  animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <Waves className="text-accent h-4 w-4" />
                    <span className="text-sm font-medium text-white sm:text-base">
                      Fiber Quality
                    </span>
                  </div>
                  <div className="text-accent mt-1 text-xl font-bold sm:text-2xl">
                    Superior
                  </div>
                </motion.div>

                {/* Count Range Selector */}
                <motion.div
                  className="absolute top-4 left-4 rounded-2xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] sm:top-6 sm:left-6"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <div className="mb-1 text-xs text-white/80">Count Range</div>
                  <select
                    value={selectedCountRange}
                    onChange={(e) => setSelectedCountRange(e.target.value)}
                    className="text-accent border-none bg-transparent text-sm font-bold outline-none"
                  >
                    {countRanges.map((count) => (
                      <option
                        key={count}
                        value={count}
                        className="bg-primary text-white"
                      >
                        {count}
                      </option>
                    ))}
                  </select>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 transform sm:bottom-8"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-white/60 sm:h-8 sm:w-8" />
        </motion.div>
      </section>

      {/* Main Content */}
      <div className="mx-auto max-w-[1550px] px-4 py-16 pb-6 md:pb-16 lg:pb-20">
        {/* Navigation Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-16">
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
                value="technology"
                onClick={() => setActiveTab("technology")}
                style={{ backgroundColor: activeTab === "technology" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "technology" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Technology
              </TabsTrigger>
              <TabsTrigger
                value="quality"
                style={{ backgroundColor: activeTab === "quality" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "quality" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Quality
              </TabsTrigger>
              <TabsTrigger
                value="calculator"
                onClick={() => setActiveTab("calculator")}
                style={{ backgroundColor: activeTab === "calculator" ? "#faa82e" : "transparent" }}
                className={cn(
                  "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                  activeTab === "calculator" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                )}
              >
                Calculator
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            {/* Key Benefits */}
            <section className="m-5">
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-primary mb-4 text-4xl font-bold">
                  Why Choose EXCELspin Compact?
                </h2>
                <p className="mx-auto max-w-3xl text-xl text-gray-600">
                  Revolutionary compact spinning technology that transforms
                  ordinary yarn into premium quality fiber with superior
                  characteristics.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="group h-full cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                      onClick={() =>
                        setExpandedFeature(
                          expandedFeature === index ? null : index,
                        )
                      }
                    >
                      <CardHeader className="text-center">
                        <div className="bg-accent/10 group-hover:bg-accent/20 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full transition-colors">
                          <div className="text-accent">{feature.icon}</div>
                        </div>
                        <CardTitle className="text-primary">
                          {feature.title}
                        </CardTitle>
                        <CardDescription className="text-gray-600">
                          {feature.description}
                        </CardDescription>
                      </CardHeader>
                      {expandedFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CardContent className="pt-0">
                            <Separator className="mb-4" />
                            <p className="mb-4 text-sm text-gray-600">
                              {feature.details}
                            </p>
                            <div className="mb-4 space-y-2">
                              {feature.metrics.map((metric, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center text-sm"
                                >
                                  <CheckCircle className="text-accent mr-2 h-4 w-4" />
                                  <span>{metric}</span>
                                </div>
                              ))}
                            </div>
                            <Badge className="bg-accent text-white">
                              {feature.improvement}
                            </Badge>
                          </CardContent>
                        </motion.div>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Interactive Quality Comparison */}
            <section className="rounded-3xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12">
              <div className="mb-12 text-center">
                <h3 className="text-primary mb-4 text-3xl font-bold">
                  Yarn Quality Transformation
                </h3>
                <p className="text-lg text-gray-600">
                  Compare conventional vs compact spinning results
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Hairiness Comparison */}
                <motion.div
                  className="rounded-2xl bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 text-center">
                    <Minimize2 className="mx-auto mb-2 h-8 w-8 text-blue-500" />
                    <h4 className="text-primary font-bold">Hairiness Index</h4>
                    <p className="text-sm text-gray-600">Lower is better</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Conventional
                      </span>
                      <span className="font-bold text-red-500">12.5</span>
                    </div>
                    <Progress value={80} className="h-3" />

                    <Separator />

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">EXCELspin</span>
                      <span className="text-accent font-bold">8.7</span>
                    </div>
                    <Progress value={35} className="bg-accent/20 h-3" />

                    <Badge className="bg-accent w-full justify-center text-white">
                      {qualityData.hairiness}% Improvement
                    </Badge>
                  </div>
                </motion.div>

                {/* Tensile Strength Comparison */}
                <motion.div
                  className="rounded-2xl bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 text-center">
                    <TrendingUp className="mx-auto mb-2 h-8 w-8 text-purple-500" />
                    <h4 className="text-primary font-bold">Tensile Strength</h4>
                    <p className="text-sm text-gray-600">Higher is better</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Conventional
                      </span>
                      <span className="font-bold text-gray-500">
                        450 cN/tex
                      </span>
                    </div>
                    <Progress value={60} className="h-3" />

                    <Separator />

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">EXCELspin</span>
                      <span className="text-accent font-bold">518 cN/tex</span>
                    </div>
                    <Progress value={85} className="bg-accent/20 h-3" />

                    <Badge className="bg-accent w-full justify-center text-white">
                      +{qualityData.tensile}% Stronger
                    </Badge>
                  </div>
                </motion.div>

                {/* Evenness Comparison */}
                <motion.div
                  className="rounded-2xl bg-white p-6 shadow-lg"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="mb-4 text-center">
                    <Waves className="mx-auto mb-2 h-8 w-8 text-orange-500" />
                    <h4 className="text-primary font-bold">Yarn Evenness</h4>
                    <p className="text-sm text-gray-600">
                      CV% - Lower is better
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        Conventional
                      </span>
                      <span className="font-bold text-red-500">16.2%</span>
                    </div>
                    <Progress value={75} className="h-3" />

                    <Separator />

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">EXCELspin</span>
                      <span className="font-bold text-green-500">14.5%</span>
                    </div>
                    <Progress value={45} className="h-3 bg-green-100" />

                    <Badge className="w-full justify-center bg-green-500 text-white">
                      {qualityData.evenness}% Better CV
                    </Badge>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Client Success Stories */}
            <section>
              <div className="mb-12 text-center">
                <h3 className="text-primary mb-4 text-3xl font-bold">
                  Success Stories
                </h3>
                <p className="text-lg text-gray-600">
                  Real improvements from real mills
                </p>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full transition-shadow hover:shadow-lg">
                      <CardContent className="p-6">
                        <div className="mb-4 flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-5 w-5 fill-current text-yellow-400"
                            />
                          ))}
                        </div>
                        <blockquote className="mb-6 text-lg text-gray-700 italic">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="space-y-2">
                          <div className="text-primary font-semibold">
                            {testimonial.author}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.position}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.company}
                          </div>
                          <div className="flex items-center justify-between border-t pt-2">
                            <Badge variant="outline" className="text-accent">
                              {testimonial.countRange}
                            </Badge>
                            <Badge className="bg-green-500 text-white">
                              {testimonial.improvement}
                            </Badge>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </section>
          </TabsContent>

          {/* Technology Tab */}
          <TabsContent value="technology" className="space-y-12">
            <motion.div
              className="mb-12 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-primary m-5 mb-4 text-4xl font-bold">
                Advanced Compact Technology
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Precision-engineered components working in harmony to deliver
                superior yarn quality
              </p>
            </motion.div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {systemComponents.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl">
                    <div className="relative aspect-video overflow-hidden">
                      {/* <ImageWithFallback */}
                      <MyImage
                        src={component.image}
                        alt={component.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                      <Badge className="absolute top-4 right-4 bg-green-500 text-white">
                        {component.countRange}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <CardTitle className="text-primary mb-3">
                        {component.title}
                      </CardTitle>
                      <CardDescription className="mb-4 leading-relaxed text-gray-600">
                        {component.description}
                      </CardDescription>
                      <div className="space-y-2">
                        {component.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center text-sm">
                            <CheckCircle className="mr-2 h-4 w-4 flex-shrink-0 text-green-500" />
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

          {/* Quality Tab */}
          <TabsContent value="quality" className="space-y-12">
            <div className="m-5 grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Technical Specifications */}
              <div>
                <h3 className="text-primary mb-6 text-2xl font-bold">
                  Technical Specifications
                </h3>
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      {[
                        {
                          category: "Count Range & Performance",
                          specs: [
                            { label: "Count Range", value: "Ne 20 to Ne 60" },
                            {
                              label: "Hairiness Reduction",
                              value: "20-30% typical",
                            },
                            {
                              label: "Tensile Improvement",
                              value: "+10% to +15%",
                            },
                            { label: "Yarn Evenness", value: "Improved CV%" },
                          ],
                        },
                        {
                          category: "Suction System",
                          specs: [
                            {
                              label: "Suction Pressure",
                              value: "-18 to -22 kPa",
                            },
                            {
                              label: "Filter Type",
                              value: "Washable pre-filters",
                            },
                            {
                              label: "Energy Efficiency",
                              value: "25% savings",
                            },
                            {
                              label: "Maintenance",
                              value: "Easy access design",
                            },
                          ],
                        },
                        {
                          category: "Condensing Zone",
                          specs: [
                            { label: "Apron Type", value: "Lattice design" },
                            {
                              label: "Nose Bar",
                              value: "Precision engineered",
                            },
                            { label: "Nip Pressure", value: "Adjustable" },
                            {
                              label: "Fiber Guidance",
                              value: "Optimal alignment",
                            },
                          ],
                        },
                      ].map((section, index) => (
                        <div key={index}>
                          <h4 className="mb-3 font-semibold text-green-600">
                            {section.category}
                          </h4>
                          <div className="space-y-2">
                            {section.specs.map((spec, idx) => (
                              <div
                                key={idx}
                                className="flex items-center justify-between border-b border-gray-100 py-2 last:border-b-0"
                              >
                                <span className="text-gray-600">
                                  {spec.label}
                                </span>
                                <span className="text-primary font-medium">
                                  {spec.value}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quality Benefits */}
              <div>
                <h3 className="text-primary mb-6 text-2xl font-bold">
                  Quality Benefits
                </h3>
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Microscope className="mr-2 h-5 w-5 text-green-600" />
                        Yarn Properties
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          {
                            property: "Surface Smoothness",
                            improvement: "Significantly improved",
                          },
                          {
                            property: "Dye Uptake",
                            improvement: "More uniform",
                          },
                          {
                            property: "Abrasion Resistance",
                            improvement: "+12% better",
                          },
                          {
                            property: "Fabric Hand Feel",
                            improvement: "Premium quality",
                          },
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-lg bg-green-50 p-3"
                          >
                            <span className="font-medium">{item.property}</span>
                            <Badge className="bg-green-500 text-white">
                              {item.improvement}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Target className="mr-2 h-5 w-5 text-green-600" />
                        Process Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          Reduced yarn breaks in downstream processes
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          Better weaving/knitting efficiency
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          Premium yarn pricing potential
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                          Reduced fabric defects
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="mr-2 h-5 w-5 text-green-600" />
                        Market Advantage
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="rounded-lg bg-blue-50 p-3">
                          <div className="text-2xl font-bold text-blue-600">
                            15-20%
                          </div>
                          <div className="text-sm text-gray-600">
                            Premium Pricing
                          </div>
                        </div>
                        <div className="rounded-lg bg-purple-50 p-3">
                          <div className="text-2xl font-bold text-purple-600">
                            6-8 months
                          </div>
                          <div className="text-sm text-gray-600">
                            Payback Period
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Calculator Tab */}
          <TabsContent
            value="calculator"
            className="space-y-12"
            id="quality-calculator"
          >
            <div className="m-5 mb-12 text-center">
              <h2 className="text-primary mb-4 text-4xl font-bold">
                Quality & ROI Calculator
              </h2>
              <p className="mx-auto max-w-3xl text-xl text-gray-600">
                Calculate expected quality improvements and return on investment
                for your specific count range
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Calculator Input */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="mr-2 h-5 w-5 text-green-600" />
                    Quality Calculator
                  </CardTitle>
                  <CardDescription>
                    Select your count range to see expected improvements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Count Range
                    </label>
                    <select
                      value={selectedCountRange}
                      onChange={(e) => setSelectedCountRange(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 p-3 focus:border-green-500 focus:ring-2 focus:ring-green-500"
                    >
                      {countRanges.map((count) => (
                        <option key={count} value={count}>
                          {count}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-lg bg-gray-50 p-4 text-center">
                      <div className="text-sm text-gray-600">Current Range</div>
                      <div className="text-primary text-2xl font-bold">
                        {selectedCountRange}
                      </div>
                    </div>
                    <div className="rounded-lg bg-green-50 p-4 text-center">
                      <div className="text-sm text-gray-600">Technology</div>
                      <div className="text-xl font-bold text-green-600">
                        Compact
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Results */}
              <Card>
                <CardHeader>
                  <CardTitle>Expected Improvements</CardTitle>
                  <CardDescription>
                    For {selectedCountRange} yarn count
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[
                      {
                        label: "Hairiness Reduction",
                        value: `${qualityData.hairiness}%`,
                        icon: <Minimize2 className="h-5 w-5" />,
                        color: "bg-blue-500",
                        description: "Lower hairiness index",
                      },
                      {
                        label: "Tensile Strength",
                        value: `+${qualityData.tensile}%`,
                        icon: <TrendingUp className="h-5 w-5" />,
                        color: "bg-purple-500",
                        description: "Improved yarn strength",
                      },
                      {
                        label: "Yarn Evenness",
                        value: `${qualityData.evenness}%`,
                        icon: <Waves className="h-5 w-5" />,
                        color: "bg-orange-500",
                        description: "Better CV% uniformity",
                      },
                    ].map((improvement, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between rounded-lg border p-4"
                      >
                        <div className="flex items-center">
                          <div
                            className={`p-2 ${improvement.color} mr-3 rounded-lg text-white`}
                          >
                            {improvement.icon}
                          </div>
                          <div>
                            <span className="font-medium">
                              {improvement.label}
                            </span>
                            <div className="text-sm text-gray-600">
                              {improvement.description}
                            </div>
                          </div>
                        </div>
                        <span className="text-2xl font-bold text-green-600">
                          {improvement.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="rounded-lg bg-gradient-to-r from-green-50 to-blue-50 p-6 text-center">
                    <h4 className="text-primary mb-2 text-lg font-bold">
                      Premium Value
                    </h4>
                    <div className="mb-1 text-3xl font-bold text-green-600">
                      15-20%
                    </div>
                    <p className="text-sm text-gray-600">
                      Higher yarn pricing potential
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold text-blue-600">ROI</div>
                      <div className="text-sm text-gray-600">6-8 months</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold text-green-600">
                        Payback
                      </div>
                      <div className="text-sm text-gray-600">Fast returns</div>
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
