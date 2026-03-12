import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, useInView } from "motion/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";

import {
  Star,
  Quote,
  TrendingUp,
  Users,
  Globe,
  Award,
  CheckCircle,
  MapPin,
  Search,
  Phone,
  Mail,
  MessageSquare,
  MessageCircle,
  Wrench,
  Cog,
  Zap,
  Clock,
  Target,
  Factory,
  Sparkles,
  Gauge,
  ArrowRight,
  Heart,
  Hexagon,
  Lightbulb,
  Activity,
  Timer,
  Trophy,
  ThumbsUp,
} from "lucide-react";
import { images } from "./constants/image";
import { MyImage } from "./ui/MyImage";

// random star positions generated once at module load to keep component pure
const STAR_POSITIONS = Array.from({ length: 8 }, () => ({
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
}));


interface ClientPageProps {
  onNavigate?: (page: string) => void;
}

export function ClientPage({ onNavigate }: ClientPageProps) {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(0);
  // const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredClient, setHoveredClient] = useState<number | null>(null);
  const [mapConnections, setMapConnections] = useState<number[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  const { scrollYProgress } = useScroll();
  const mapRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const isMapInView = useInView(mapRef, { once: true });
  const isHeroInView = useInView(heroRef, { once: true });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  // Define testimonials before useEffect hooks to avoid initialization error
  const testimonials = [
    {
      quote:
        "Installation and training were smooth. Doff cycles are consistent and our operators adapted quickly to the new system.",
      attribution: "Plant Head, Tamil Nadu",
      company: "Leading Cotton Mill",
      rating: 5,
      image: images.ourclientsay,

      improvements: { efficiency: "+25%", quality: "+15%", cost: "-20%" },
    },
    {
      quote:
        "Compact yarn gave our fabric better surface feel. Export quality has improved significantly since the retrofit.",
      attribution: "Quality Manager, Telangana",
      company: "Premium Exports Ltd",
      rating: 5,
      image: images.ourclientsay,
      improvements: { efficiency: "+30%", quality: "+20%", cost: "-15%" },
    },
    {
      quote:
        "Support team responds fast with clear HMI guidance. Remote troubleshooting saves us valuable production time.",
      attribution: "Maintenance Lead, Bangladesh",
      company: "Global Textiles BD",
      rating: 5,
      image: images.ourclientsay,
      improvements: { efficiency: "+22%", quality: "+18%", cost: "-18%" },
    },
    {
      quote:
        "The Auto Doffer has reduced our doffing labor by 60% while maintaining consistent yarn quality throughout shifts.",
      attribution: "Production Manager, Gujarat",
      company: "Pioneer Textiles",
      rating: 5,
      image: images.ourclientsay,
      improvements: { efficiency: "+35%", quality: "+12%", cost: "-25%" },
    },
    {
      quote:
        "Energy consumption per doff is exactly as promised. The planetary gearbox design has been maintenance-free so far.",
      attribution: "Technical Director, Maharashtra",
      company: "Elite Spinning Co",
      rating: 5,
      image: images.ourclientsay,
      improvements: { efficiency: "+28%", quality: "+16%", cost: "-22%" },
    },
  ];

  // Simplified animation cycle with visibility check (animationStep removed)
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setMapConnections((prev) => {
        const newConnections = [...prev];
        const randomIndex = Math.floor(Math.random() * 12);
        if (newConnections.includes(randomIndex)) {
          return newConnections.filter((i) => i !== randomIndex);
        } else {
          newConnections.push(randomIndex);
          return newConnections.slice(-3);
        }
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isVisible]);

  // Auto-rotate testimonials with visibility check
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, [testimonials.length, isVisible]);

  // Auto-rotate metrics with visibility check (removed - activeMetric not used)

  // Page visibility API to pause animations when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  const clientLogos = [
    {
      name: "Gujarat Textile Mills",
      logo: null,
      confidential: false,
      region: "Gujarat",
      spindles: "15,000",
      products: ["Auto Doffer", "EXCELspin"],
      year: "2024",
    },
    {
      name: "Bengal Yarn Industries",
      logo: null,
      confidential: false,
      region: "West Bengal",
      spindles: "22,000",
      products: ["EXCELspin", "Autocone"],
      year: "2023",
    },
    {
      name: "Premier Spinning Mills",
      logo: null,
      confidential: true,
      region: "Tamil Nadu",
      spindles: "18,500",
      products: ["Auto Doffer"],
      year: "2024",
    },
    {
      name: "Excellence Textiles",
      logo: null,
      confidential: true,
      region: "Andhra Pradesh",
      spindles: "28,000",
      products: ["EXCELspin", "Auto Doffer"],
      year: "2023",
    },
    {
      name: "Apex Cotton Mills",
      logo: null,
      confidential: true,
      region: "Telangana",
      spindles: "14,200",
      products: ["Auto Doffer", "Bobbin Transport"],
      year: "2024",
    },
    {
      name: "Supreme Yarns Ltd",
      logo: null,
      confidential: true,
      region: "Karnataka",
      spindles: "31,000",
      products: ["EXCELspin"],
      year: "2023",
    },
    {
      name: "Elite Spinning Co",
      logo: null,
      confidential: true,
      region: "Maharashtra",
      spindles: "25,500",
      products: ["Auto Doffer", "EXCELspin"],
      year: "2024",
    },
    {
      name: "Pioneer Textiles",
      logo: null,
      confidential: true,
      region: "Gujarat",
      spindles: "19,800",
      products: ["Autocone", "Bobbin Transport"],
      year: "2023",
    },
    {
      name: "Modern Spinning Mills",
      logo: null,
      confidential: true,
      region: "Rajasthan",
      spindles: "16,700",
      products: ["Auto Doffer"],
      year: "2024",
    },
    {
      name: "Progressive Yarns",
      logo: null,
      confidential: true,
      region: "Haryana",
      spindles: "21,400",
      products: ["EXCELspin", "Auto Doffer"],
      year: "2023",
    },
    {
      name: "Quality Cotton Mills",
      logo: null,
      confidential: true,
      region: "Punjab",
      spindles: "13,900",
      products: ["Auto Doffer"],
      year: "2024",
    },
    {
      name: "Global Textiles BD",
      logo: null,
      confidential: true,
      region: "Bangladesh",
      spindles: "35,000",
      products: ["EXCELspin", "Auto Doffer", "Autocone"],
      year: "2023",
    },
  ];

  const sectors = [
    {
      title: "Cotton Ring Spinning",
      subtitle: "Ne 20–60",
      description:
        "Premium cotton spinning mills requiring consistent quality and reliable doffing cycles for medium to fine count production.",
      icon: <Target className="h-6 w-6" />,
      stats: { mills: 45, spindles: "180,000", efficiency: "+25%" },
      color: "from-blue-500/20 to-blue-600/20",
    },
    {
      title: "Blends & Speciality Yarns",
      subtitle: "On request",
      description:
        "Process-tuned compact upgrades for polyester-cotton blends and specialty yarn applications with customized parameters.",
      icon: <Cog className="h-6 w-6" />,
      stats: { mills: 28, spindles: "95,000", efficiency: "+18%" },
      color: "from-purple-500/20 to-purple-600/20",
    },
    {
      title: "Brownfield Retrofits",
      subtitle: "LR, Zinser, KTTM, G5/1",
      description:
        "Drop-in friendly retrofits for existing ring frames with minimal downtime and maximum compatibility across frame types.",
      icon: <Wrench className="h-6 w-6" />,
      stats: { mills: 67, spindles: "245,000", efficiency: "+30%" },
      color: "from-green-500/20 to-green-600/20",
    },
  ];

  const caseStudies = [
    {
      title: "Mill A – Tamil Nadu",
      scope: "Auto Doffer retrofit, 1200 spindles",
      highlights: [
        "~2‑min doff (ideal conditions)",
        "Low air consumption (2–3 CFM/doff)",
        "HMI fault logs & cycle history",
      ],
      outcome: "Faster turns; operator load reduced significantly",
      image: images.milla,
      metrics: { roiMonths: 8, efficiencyGain: 25, satisfaction: 95 },
      year: "2024",
    },
    {
      title: "Mill B – Telangana",
      scope: "EXCELspin Compact on Ne 30s cotton",
      highlights: [
        "Hairiness ↓ (typical range)",
        "U%/CVm stabilized",
        "Better surface finish",
      ],
      outcome: "Fewer end‑breaks; smoother fabric finish",
      image: images.millb,
      metrics: { roiMonths: 6, efficiencyGain: 30, satisfaction: 98 },
      year: "2024",
    },
    {
      title: "Mill C – Bangladesh",
      scope: "Mixed: Auto Doffer + Compact",
      highlights: [
        "Predictable starts",
        "Simple PM routine",
        "Balanced integration",
      ],
      outcome: "Balanced quality with lower running effort",
      image: images.millc,
      metrics: { roiMonths: 7, efficiencyGain: 28, satisfaction: 96 },
      year: "2023",
    },
  ];

  const processSteps = [
    {
      step: "1",
      title: "Survey & Audit",
      description:
        "Frame assessment, count range analysis, and feasibility study",
      icon: <Search className="h-6 w-6" />,
      duration: "1-2 days",
      deliverable: "Technical feasibility report",
    },
    {
      step: "2",
      title: "Trial & Tuning",
      description:
        "On-site trials with parameter optimization and performance validation",
      icon: <Cog className="h-6 w-6" />,
      duration: "3-5 days",
      deliverable: "Performance validation data",
    },
    {
      step: "3",
      title: "Retrofit",
      description: "Professional installation with minimal production downtime",
      icon: <Wrench className="h-6 w-6" />,
      duration: "5-10 days",
      deliverable: "Commissioned system",
    },
    {
      step: "4",
      title: "Training",
      description:
        "Operator and maintenance team training with HMI familiarization",
      icon: <Users className="h-6 w-6" />,
      duration: "2-3 days",
      deliverable: "Certified operators",
    },
    {
      step: "5",
      title: "PM & Support",
      description:
        "Ongoing support, PM kits, and remote troubleshooting assistance",
      icon: <CheckCircle className="h-6 w-6" />,
      duration: "Ongoing",
      deliverable: "24/7 support",
    },
  ];

  const globalMetrics = [
    {
      label: "Mills Served",
      value: "500+",
      icon: <Factory className="h-6 w-6" />,
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Spindles Upgraded",
      value: "200K+",
      icon: <Gauge className="h-6 w-6" />,
      color: "from-green-500 to-green-600",
    },
    {
      label: "Countries",
      value: "2",
      icon: <Globe className="h-6 w-6" />,
      color: "from-purple-500 to-purple-600",
    },
    {
      label: "Satisfaction",
      value: "98%",
      icon: <ThumbsUp className="h-6 w-6" />,
      color: "from-orange-500 to-orange-600",
    },
  ];
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;

  return (
    <div className="from-background via-primary/5 to-accent/5 min-h-screen overflow-hidden bg-gradient-to-br">
      {/* Simplified Background Elements */}
       {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
      <div className="pointer-events-none fixed inset-0">
        {STAR_POSITIONS.map((star, i) => (
          <motion.div
            key={i}
            className="bg-accent/10 absolute h-2 w-2 rounded-full"
            style={{
              left: star.x,
              top: star.y,
            }}
            animate={{
              y: [-10, 10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Parallax */}
      <motion.section
        ref={heroRef}
        className="relative flex min-h-[100px] xl:h-screen items-center justify-center overflow-hidden pb-8  sm:pb-12 md:pt-28 md:pb-16  lg:pb-20"
        style={{ y, opacity }}
      >
        {/* Hero Background with Gradients */}
        <div className="from-primary/10 via-accent/5 to-background absolute inset-0 bg-gradient-to-br">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(31,31,88,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(250,168,46,0.1),transparent_50%)]"></div>
        </div>

        {/* Simplified floating geometric shapes */}
        <motion.div
          className="border-accent/20 absolute top-20 left-20 h-32 w-32 rounded-full border-2"
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute right-32 bottom-32 h-24 w-24"
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <Hexagon className="text-primary/10 h-full w-full" />
        </motion.div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-10">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6 flex flex-wrap items-center gap-3"
              >
                <div className="flex -space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="from-accent to-primary flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full border-2 border-white bg-gradient-to-r shadow-lg"
                      initial={{ scale: 0 }}
                      animate={isHeroInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                    >
                      <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </motion.div>
                  ))}
                </div>
                <Badge className="bg-accent px-3 py-1.5 sm:px-4 sm:py-2 text-white text-xs sm:text-sm">
                  <Sparkles className="mr-1.5 h-3 w-3 sm:h-4 sm:w-4" />
                  500+ Happy Clients
                </Badge>
              </motion.div>

              <motion.h2
                className="mb-6 text-3xl font-bold sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl"
                initial={{ opacity: 0, y: 50 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <span className="from-primary via-accent to-primary bg-gradient-to-r bg-clip-text text-transparent">
                  Our Clients
                </span>
                <motion.div
                  className="mt-4 text-2xl text-gray-600 md:text-3xl"
                  initial={{ opacity: 0 }}
                  animate={isHeroInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Transforming Spinning Mills Worldwide
                </motion.div>
              </motion.h2>

              <motion.p
                className="mb-8 text-xl leading-relaxed text-gray-600 md:text-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Trusted by leading spinning mills across{" "}
                <span className="text-accent font-medium">
                  India & Bangladesh
                </span>{" "}
                for dependable retrofits and measurable results. From 500+
                successful installations to 200,000+ upgraded spindles.
              </motion.p>

              {/* Animated Metrics */}
              <motion.div
                className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
              >
                {globalMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    className={`rounded-2xl bg-gradient-to-br p-4 ${metric.color} text-white shadow-lg`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="mb-2 flex items-center justify-center">
                      {metric.icon}
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-2xl font-bold"
                        initial={{ scale: 0 }}
                        animate={isHeroInView ? { scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                      >
                        {metric.value}
                      </motion.div>
                      <div className="text-xs opacity-90">{metric.label}</div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <a href="tel:9087102929" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-accent hover:bg-accent/90 group text-white"
                  >
                    <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                    Enquire Now
                  </Button>
                </a>
                <Link to="/contact/" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    Request Trial
                  </Button>
                </Link>
                <a
                  href="https://wa.me/9087102929?text="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-accent bg-[rgba(255,255,255,1)] text-[rgba(50,135,50,1)] hover:bg-[#1baf3e] hover:text-white"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </a>
              </motion.div>
            </motion.div>

            {/* Right Content - Interactive 3D Card */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 100 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                className="perspective-1000 relative"
                whileHover={{ rotateY: 5, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 className="text-primary m-5 text-center text-3xl font-bold md:text-4xl">
                  WE HAVE OUR MACHINES IN INDIA
                </h2>
                <div className="relative transform-gpu overflow-hidden rounded-3xl bg-white shadow-2xl">
                  <div className="from-primary/5 to-accent/5 absolute inset-0 bg-gradient-to-br"></div>

                  {/* Image with overlay */}
                  <div className="relative">
                    {/* Our Clients Section */}
                    {/* Scrolling States Section */}
                    <div className="h-[400px] w-full bg-[#F8F9FA] px-6 py-12">
                      <div className="mx-auto grid h-full max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
                        {/* Left Column (X values) - Scroll Top to Bottom */}
                        <div className="relative h-full overflow-hidden">
                          <motion.div
                            className="flex flex-col gap-6"
                            animate={{ y: ["0%", "-50%"] }}
                            transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {[
                              "TamilNadu",
                              "Telangana",
                              "Rajasthan",
                              "Kerala",
                              "Maharastra",
                              "TamilNadu",
                              "Telangana",
                              "Rajasthan",
                              "Kerala",
                              "Maharastra",
                            ].map((state, index) => (
                              <div key={`x-${index}`} className="text-center">
                                <p className="text-primary text-2xl font-bold">
                                  {state}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        </div>

                        {/* Right Column (Y values) - Scroll Bottom to Top */}
                        <div className="relative h-full overflow-hidden">
                          <motion.div
                            className="flex flex-col gap-6"
                            animate={{ y: ["-50%", "0%"] }}
                            transition={{
                              duration: 15,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          >
                            {[
                              "Punjab",
                              "Andhra",
                              "Gujarat",
                              "Himachal",
                              "Punjab",
                              "Andhra",
                              "Gujarat",
                              "Himachal",
                            ].map((state, index) => (
                              <div key={`y-${index}`} className="text-center">
                                <p className="text-accent text-2xl font-bold">
                                  {state}
                                </p>
                              </div>
                            ))}
                          </motion.div>
                        </div>
                      </div>
                    </div>

                    {/* Floating stats - Repositioned to avoid overlap */}
                  </div>
                </div>

                {/* Floating connection lines - Reduced intensity */}
                <div className="pointer-events-none absolute -inset-4">
                  {mapConnections.slice(0, 2).map((connection) => (
                    <motion.div
                      key={connection}
                      className="from-accent/30 absolute h-12 w-px bg-gradient-to-t to-transparent"
                      style={{
                        left: `${connection * 8 + 15}%`,
                        top: `${connection * 5 + 25}%`,
                      }}
                      initial={{ scaleY: 0, opacity: 0 }}
                      animate={{ scaleY: 1, opacity: 0.4 }}
                      exit={{ scaleY: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Client Spotlight Section - Sri Kannapiran Mills */}
      <section className="relative overflow-hidden py-20">
        <div className="from-accent/5 to-primary/5 absolute inset-0 bg-gradient-to-br via-white"></div>

        <div className="relative z-10 mx-auto max-w-7xl px-4">
          {/* Section Header */}
          <motion.div
            className="mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Badge className="from-accent to-primary mb-6 bg-gradient-to-r px-6 py-2 text-white">
              <Sparkles className="mr-2 inline h-4 w-4" />
              FEATURED PARTNERSHIP
            </Badge>
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              Client Spotlight: Sri Kannapiran Mills
            </h2>
            <div className="from-accent via-primary to-accent mx-auto mb-6 h-1 w-32 bg-gradient-to-r"></div>
            <p className="mx-auto max-w-3xl text-xl text-gray-700 italic md:text-2xl">
              "Aspire Excel teams up with Sri Kannapiran Mills to redefine
              sustainable spinning."
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8"
            >
              {/* Intro Paragraph */}
              <div className="border-accent rounded-2xl border-l-4 bg-white p-8 shadow-lg">
                <p className="text-lg leading-relaxed text-gray-700">
                  <span className="text-primary font-bold">
                    Sri Kannapiran Mills
                  </span>
                  , a pioneer in
                  <span className="text-accent font-semibold">
                    {" "}
                    zero-waste and sustainable spinning since the 1980s
                  </span>
                  , partnered with Aspire Excel Automation to enhance
                  efficiency, reduce yarn waste, and modernize their spinning
                  operations with{" "}
                  <span className="text-primary font-semibold">
                    advanced autodoffers and bobbin transport systems
                  </span>
                  .
                </p>
              </div>

              {/* Key Impact Highlights */}
              <div>
                <h3 className="text-primary mb-6 flex items-center text-2xl font-bold">
                  <Trophy className="text-accent mr-3 h-6 w-6" />
                  Key Impact Highlights
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {/* Highlight 1 */}
                  <motion.div
                    className="rounded-xl border border-green-200 bg-gradient-to-br from-green-50 to-green-100 p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-green-500 p-2">
                        <TrendingUp className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="mb-1 font-bold text-green-800">
                          Start-up Breaks Reduced from 5% to &lt;2%
                        </div>
                        <div className="text-sm text-green-700">
                          Significant reduction in waste and cost.
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlight 2 */}
                  <motion.div
                    className="rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-blue-500 p-2">
                        <Activity className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="mb-1 font-bold text-blue-800">
                          Ripple Effect Across the Mill
                        </div>
                        <div className="text-sm text-blue-700">
                          Fewer breaks in spinning, autoconer, warping &
                          weaving.
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlight 3 */}
                  <motion.div
                    className="rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50 to-purple-100 p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-purple-500 p-2">
                        <Gauge className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="mb-1 font-bold text-purple-800">
                          32 Autodoffers Installed Across Two Units
                        </div>
                        <div className="text-sm text-purple-700">
                          Scaling from initial 2 machines after proven
                          performance.
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlight 4 */}
                  <motion.div
                    className="rounded-xl border border-orange-200 bg-gradient-to-br from-orange-50 to-orange-100 p-5 shadow-md transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-orange-500 p-2">
                        <Zap className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="mb-1 font-bold text-orange-800">
                          Adopting Bobbin Transport System
                        </div>
                        <div className="text-sm text-orange-700">
                          Installed on multiple ring frames; expansion under
                          evaluation.
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Highlight 5 */}
                  <motion.div
                    className="rounded-xl border border-pink-200 bg-gradient-to-br from-pink-50 to-pink-100 p-5 shadow-md transition-shadow duration-300 hover:shadow-xl sm:col-span-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-lg bg-pink-500 p-2">
                        <Users className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <div className="mb-1 font-bold text-pink-800">
                          Strong Technical Collaboration
                        </div>
                        <div className="text-sm text-pink-700">
                          Aspire Excel's responsiveness and support praised.
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Client Testimonial */}
              <motion.div
                className="from-primary via-primary to-primary/90 relative rounded-2xl bg-gradient-to-br p-8 shadow-2xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                {/* Decorative quote mark */}
                <div className="bg-accent absolute -top-6 -left-6 flex h-16 w-16 items-center justify-center rounded-full shadow-xl">
                  <Quote className="h-8 w-8 text-white" />
                </div>

                {/* Testimonial Text */}
                <blockquote className="relative z-10">
                  <p className="mb-6 text-lg leading-relaxed text-white italic md:text-xl">
                    "We don't just look at the product. We look at the people.
                    Aspire Excel's team is responsive, innovative, and
                    dedicated. Both teams have grown together through this
                    partnership."
                  </p>

                  <footer className="flex items-center gap-4 border-t border-white/20 pt-4">
                    <div className="bg-accent flex h-12 w-12 items-center justify-center rounded-full">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white">
                        Mr. Srihari Balakrishnan
                      </div>
                      <div className="text-sm text-white/80">
                        Managing Director, Sri Kannapiran Mills
                      </div>
                    </div>
                  </footer>
                </blockquote>

                {/* Decorative elements */}
                <div className="absolute right-4 bottom-4 opacity-10">
                  <Quote className="h-32 w-32 rotate-180 transform text-white" />
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-8"
            >
              <div className="group relative">
                {/* Elegant frame with golden accent */}
                <div className="from-accent via-primary to-accent absolute -inset-4 rounded-3xl bg-gradient-to-r opacity-20 blur-xl transition-opacity duration-500 group-hover:opacity-30"></div>

                {/* Main image container */}
                <div className="relative rounded-2xl border-4 border-white bg-white p-4 shadow-2xl">
                  <div className="aspect-video overflow-hidden rounded-xl">
                    {/* <ImageWithFallback */}
                    <MyImage
                      src={images.clients}
                      alt="Sri Kannapiran Mills Partnership with Aspire Excel"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  {/* Image caption */}
                  <div className="mt-4 text-center">
                    <p className="text-sm leading-relaxed text-gray-600 italic">
                      Mr. Srihari Balakrishnan (MD), Mr. R. Seenivasahan (VP),
                      with Aspire Excel leadership
                    </p>
                  </div>
                </div>

                {/* Decorative corner accents */}
                <div className="border-accent absolute -top-2 -left-2 h-8 w-8 rounded-tl-lg border-t-4 border-l-4"></div>
                <div className="border-accent absolute -right-2 -bottom-2 h-8 w-8 rounded-br-lg border-r-4 border-b-4"></div>
              </div>

              {/* Additional Partnership Stats */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="rounded-xl border-t-4 border-green-500 bg-white p-4 text-center shadow-lg">
                  <div className="mb-1 text-3xl font-bold text-green-600">
                    60%
                  </div>
                  <div className="text-xs text-gray-600">Waste Reduction</div>
                </div>
                <div className="rounded-xl border-t-4 border-blue-500 bg-white p-4 text-center shadow-lg">
                  <div className="mb-1 text-3xl font-bold text-blue-600">
                    32
                  </div>
                  <div className="text-xs text-gray-600">Systems Deployed</div>
                </div>
                <div className="rounded-xl border-t-4 border-purple-500 bg-white p-4 text-center shadow-lg">
                  <div className="mb-1 text-3xl font-bold text-purple-600">
                    1980s
                  </div>
                  <div className="text-xs text-gray-600">Established Since</div>
                </div>
                <div className="rounded-xl border-t-4 border-orange-500 bg-white p-4 text-center shadow-lg">
                  <div className="mb-1 text-3xl font-bold text-orange-600">
                    100%
                  </div>
                  <div className="text-xs text-gray-600">
                    Partnership Success
                  </div>
                </div>
              </motion.div>

              {/* Partnership Highlights */}
              <motion.div
                className="from-primary/5 via-accent/5 to-primary/5 border-primary/10 rounded-2xl border bg-gradient-to-br p-6 shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <h4 className="text-primary mb-4 flex items-center text-lg font-bold">
                  <Award className="text-accent mr-2 h-5 w-5" />
                  Partnership Excellence
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <p className="text-sm text-gray-700">
                      Trusted partnership built on innovation and reliability
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-600" />
                    <p className="text-sm text-gray-700">
                      Continuous support and technical collaboration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-purple-600" />
                    <p className="text-sm text-gray-700">
                      Proven track record of successful implementations
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-orange-600" />
                    <p className="text-sm text-gray-700">
                      Commitment to sustainable textile manufacturing
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="bg-accent/5 absolute top-20 left-10 h-64 w-64 rounded-full blur-3xl"></div>
        <div className="bg-primary/5 absolute right-10 bottom-20 h-80 w-80 rounded-full blur-3xl"></div>
      </section>

      <div className="relative mx-auto max-w-7xl px-4 py-16">
        {/* Interactive Client Network */}
        <section className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              Our Client Network
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              An interactive showcase of our trusted partnerships across India &
              Bangladesh
            </p>
          </motion.div>

          {/* Interactive Map Visualization */}
          <motion.div
            ref={mapRef}
            className="from-primary/5 to-accent/5 relative mb-12 overflow-hidden rounded-3xl bg-gradient-to-br p-4 sm:p-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isMapInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
              {/* Map Visualization */}
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-inner">
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={images.ourclientnetwork}
                    alt="Global client network map"
                    className="w-full h-full object-cover opacity-30"
                  />

                  {/* Animated connection points */}
                  <div className="absolute inset-0">
                    {clientLogos.slice(0, 8).map((client, index) => (
                      <motion.div
                        key={index}
                        className="bg-accent absolute h-4 w-4 cursor-pointer rounded-full shadow-lg"
                        style={{
                          left: `${index * 12 + 15}%`,
                          top: `${index * 8 + 20}%`,
                        }}
                        initial={{ scale: 0 }}
                        animate={
                          isMapInView
                            ? {
                              scale: [0, 1.5, 1],
                              opacity: mapConnections.includes(index)
                                ? 1
                                : 0.6,
                            }
                            : {}
                        }
                        transition={{
                          duration: 0.5,
                          delay: index * 0.1,
                          scale: { duration: 0.3 },
                          opacity: { duration: 0.3 },
                        }}
                        whileHover={{ scale: 1.8 }}
                        onHoverStart={() => setHoveredClient(index)}
                        onHoverEnd={() => setHoveredClient(null)}
                      >
                        {/* Hover info */}
                        {hoveredClient === index && (
                          <motion.div
                            className="absolute -top-16 left-1/2 z-10 -translate-x-1/2 transform rounded-2xl border border-[#161243]/[0.24] bg-white/95 p-3 whitespace-nowrap shadow-xl backdrop-blur-[0.2px]"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="text-xs">
                              <div className="text-primary font-bold">
                                {client.region}
                              </div>
                              <div className="text-gray-600">
                                {client.spindles} spindles
                              </div>
                              <div className="text-accent">
                                {client.products.join(", ")}
                              </div>
                            </div>
                          </motion.div>
                        )}

                        {/* Ripple effect */}
                        <motion.div
                          className="border-accent absolute inset-0 rounded-full border-2"
                          animate={
                            mapConnections.includes(index)
                              ? {
                                scale: [1, 2.5],
                                opacity: [0.8, 0],
                              }
                              : {}
                          }
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stats and Information */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-primary mb-4 text-2xl font-bold">
                    Real-Time Network Stats
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { label: "Active Clients", value: "140+", trend: "+12%" },
                      { label: "States Covered", value: "12", trend: "+2" },
                      {
                        label: "Average ROI",
                        value: "7.2 months",
                        trend: "-0.8 months",
                      },
                      { label: "Success Rate", value: "98.5%", trend: "+1.2%" },
                    ].map((stat, index) => (
                      <motion.div
                        key={index}
                        className="rounded-2xl border border-[#161243]/[0.24] bg-white/60 p-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isMapInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="text-primary text-2xl font-bold">
                          {stat.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {stat.label}
                        </div>
                        <div className="mt-1 flex items-center text-xs text-green-600">
                          <TrendingUp className="mr-1 h-3 w-3" />
                          {stat.trend}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-[#161243]/[0.24] bg-white/40 p-6 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]">
                  <h4 className="text-primary mb-3 font-bold">
                    Geographic Coverage
                  </h4>
                  <div className="space-y-2">
                    {["Tamil Nadu", "Gujarat", "Maharashtra", "Bangladesh"].map(
                      (region, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <span className="text-gray-600">{region}</span>
                          <div className="flex items-center space-x-2">
                            <div className="h-2 w-16 rounded-full bg-gray-200">
                              <motion.div
                                className="bg-accent h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={
                                  isMapInView
                                    ? { width: `${75 + index * 5}%` }
                                    : {}
                                }
                                transition={{
                                  duration: 1,
                                  delay: 1 + index * 0.2,
                                }}
                              />
                            </div>
                            <span className="text-accent text-sm font-medium">
                              {75 + index * 5}%
                            </span>
                          </div>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Client Cards Grid */}
        </section>

        {/* Enhanced Sectors with 3D Cards */}
        <section className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              Sectors We Revolutionize
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Specialized solutions for different spinning applications
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="group hover:border-accent/20 relative h-full overflow-hidden border-2 border-transparent bg-white transition-all duration-300 hover:bg-[#1f1f58] hover:shadow-xl">
                  <CardHeader className="relative z-10 text-center">
                    <motion.div
                      className="mb-6 flex justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <div className="from-accent to-primary rounded-full bg-gradient-to-br p-4 text-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                        {sector.icon}
                      </div>
                    </motion.div>

                    <CardTitle className="text-primary text-xl transition-colors duration-300 group-hover:text-white">
                      {sector.title}
                    </CardTitle>
                    <Badge
                      variant="outline"
                      className="text-accent border-accent group-hover:text-primary mx-auto w-fit transition-all duration-300 group-hover:bg-white"
                    >
                      {sector.subtitle}
                    </Badge>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="mb-6 text-center leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                      {sector.description}
                    </p>

                    {/* Animated Stats */}
                    <div className="flex flex-col sm:flex-row gap-3">
                      {Object.entries(sector.stats).map(([key, value], idx) => (
                        <motion.div
                          key={key}
                          className="flex-1 w-full rounded-2xl border border-[#161243]/[0.24] bg-gray-50 p-3 text-center shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] transition-colors duration-300 group-hover:bg-white/20"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 1 + idx * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="text-accent text-lg font-bold transition-colors duration-300 group-hover:text-white">
                            {value}
                          </div>
                          <div className="text-xs text-gray-600 capitalize transition-colors duration-300 group-hover:text-white/80">
                            {key}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Revolutionary Case Studies Carousel */}
        <section className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              Success Stories That Inspire
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Real transformations, measurable results
            </p>
          </motion.div>

          {/* Interactive Case Study Selector */}
          <div className="mb-8 flex justify-center">
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-2xl bg-white p-2 shadow-lg">
              {caseStudies.map((study, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCaseStudy(index)}
                  className={`rounded-xl px-6 py-3 transition-all duration-300 ${selectedCaseStudy === index
                    ? "bg-accent text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {study.title}
                </button>
              ))}
            </div>
          </div>

          {/* Selected Case Study Display */}
          <motion.div
            key={selectedCaseStudy}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="overflow-hidden shadow-2xl border-[#0000001a]">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image Section */}
                <div className="relative aspect-video lg:aspect-auto">
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={caseStudies[selectedCaseStudy].image}
                    alt={caseStudies[selectedCaseStudy].title}
                    className="w-full h-full object-cover"
                  />

                  <div className="from-primary/60 absolute inset-0 bg-gradient-to-t to-transparent"></div>

                  {/* Year badge */}
                  <Badge className="absolute top-6 left-6 border border-[#161243]/[0.24] bg-[#161243]/[0.45] text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]">
                    {caseStudies[selectedCaseStudy].year}
                  </Badge>

                  {/* ROI highlight */}
                  <motion.div
                    className="bg-accent/90 absolute right-6 bottom-6 rounded-2xl border border-[#161243]/[0.24] p-4 text-white shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <div className="text-sm">ROI Achieved</div>
                    <div className="text-2xl font-bold">
                      {caseStudies[selectedCaseStudy].metrics.roiMonths} months
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <CardContent className="p-6 md:p-8 lg:p-12">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <CardTitle className="text-primary mb-2 text-2xl">
                      {caseStudies[selectedCaseStudy].title}
                    </CardTitle>
                    <CardDescription className="text-accent mb-6 text-lg font-medium">
                      {caseStudies[selectedCaseStudy].scope}
                    </CardDescription>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 pb-4">
                      {[
                        {
                          label: "ROI",
                          value: `${caseStudies[selectedCaseStudy].metrics.roiMonths}m`,
                          icon: <Timer className="h-4 w-4" />,
                        },
                        {
                          label: "Efficiency",
                          value: `+${caseStudies[selectedCaseStudy].metrics.efficiencyGain}%`,
                          icon: <TrendingUp className="h-4 w-4" />,
                        },
                        {
                          label: "Satisfaction",
                          value: `${caseStudies[selectedCaseStudy].metrics.satisfaction}%`,
                          icon: <ThumbsUp className="h-4 w-4" />,
                        },
                      ].map((metric, idx) => (
                        <motion.div
                          key={idx}
                          className="from-primary/5 to-accent/5 rounded-lg bg-gradient-to-br p-3 text-center"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.3 + idx * 0.1 }}
                        >
                          <div className="text-accent mb-1 flex justify-center">
                            {metric.icon}
                          </div>
                          <div className="text-primary text-lg font-bold">
                            {metric.value}
                          </div>
                          <div className="text-xs text-gray-600">
                            {metric.label}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div className="mb-6 space-y-4">
                      <h4 className="text-primary flex items-center font-bold">
                        <Lightbulb className="text-accent mr-2 h-5 w-5" />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {caseStudies[selectedCaseStudy].highlights.map(
                          (highlight, idx) => (
                            <motion.li
                              key={idx}
                              className="flex items-start"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{
                                duration: 0.3,
                                delay: 0.4 + idx * 0.1,
                              }}
                            >
                              <CheckCircle className="text-accent mt-0.5 mr-3 h-4 w-4 flex-shrink-0" />
                              <span className="text-gray-600">{highlight}</span>
                            </motion.li>
                          ),
                        )}
                      </ul>
                    </div>

                    {/* Outcome */}
                    <motion.div
                      className="from-accent/10 to-primary/10 rounded-xl bg-gradient-to-r p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <h4 className="text-primary mb-2 font-bold">
                        Business Impact
                      </h4>
                      <p className="text-gray-600 italic">
                        "{caseStudies[selectedCaseStudy].outcome}"
                      </p>
                    </motion.div>
                  </motion.div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          <p className="mt-6 text-center text-sm text-gray-500 italic">
            Performance varies by fibre/mix/count and process tuning; validate
            via trials.
          </p>
        </section>

        {/* Immersive Testimonials Section */}
        <section className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              What Our Clients Say
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Authentic feedback from industry leaders
            </p>
          </motion.div>

          {/* Main Featured Testimonial */}
          <motion.div
            key={selectedTestimonial}
            className="from-primary via-primary/90 to-accent/30 relative mb-8 overflow-hidden rounded-3xl bg-gradient-to-br p-8 md:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 h-64 w-64 -translate-x-32 -translate-y-32 rounded-full bg-white"></div>
              <div className="absolute right-0 bottom-0 h-48 w-48 translate-x-24 translate-y-24 rounded-full bg-white"></div>
            </div>

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
              {/* Quote Section */}
              <div className="text-white lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Quote className="text-accent mb-6 h-12 w-12" />
                  <blockquote className="mb-6 text-xl leading-relaxed italic md:text-2xl">
                    "{testimonials[selectedTestimonial].quote}"
                  </blockquote>

                  <div className="space-y-2">
                    <div className="text-lg font-bold">
                      — {testimonials[selectedTestimonial].attribution}
                    </div>
                    <div className="text-accent font-medium">
                      {testimonials[selectedTestimonial].company}
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonials[selectedTestimonial].rating)].map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="text-accent h-5 w-5 fill-current"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Metrics & Image */}
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {/* Company image */}
                <div className="aspect-square overflow-hidden rounded-2xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]">
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={testimonials[selectedTestimonial].image}
                    alt="Client facility"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Performance improvements */}
                <div className="rounded-2xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px]">
                  <h4 className="mb-3 font-bold text-white">
                    Improvements Achieved
                  </h4>
                  <div className="space-y-3">
                    {Object.entries(
                      testimonials[selectedTestimonial].improvements,
                    ).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex items-center justify-between"
                      >
                        <span className="text-white/80 capitalize">{key}:</span>
                        <span className="text-accent font-bold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setSelectedTestimonial(index)}
                className={`h-3 w-3 rounded-full transition-all duration-300 ${selectedTestimonial === index
                  ? "bg-accent"
                  : "bg-gray-300 hover:bg-gray-400"
                  }`}
              />
            ))}
          </div>

          {/* Testimonial Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-[#161243]/[0.24] bg-white/60 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] transition-all duration-300 hover:shadow-xl">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-start">
                      <Quote className="text-accent mt-1 mr-3 h-6 w-6 flex-shrink-0" />
                      <p className="text-sm leading-relaxed text-gray-700 italic">
                        "{testimonial.quote.slice(0, 100)}..."
                      </p>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-primary text-sm font-medium">
                          {testimonial.attribution}
                        </p>
                        <p className="text-xs text-gray-500">
                          {testimonial.company}
                        </p>
                      </div>
                      <div className="flex items-center">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="text-accent h-3 w-3 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Enhanced Process Flow */}
        <section className="mb-20">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-primary mb-4 text-4xl font-bold md:text-5xl">
              Our Proven Process
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              From initial consultation to ongoing support - your journey to
              success
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group relative overflow-hidden text-center transition-all duration-500 hover:-translate-y-4 hover:shadow-xl border-[#0000001a]">
                  {/* Animated background */}
                  <div className="from-accent/5 to-primary/5 absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

                  <CardHeader className="relative z-10 pb-4">
                    {/* Step number */}
                    <motion.div
                      className="mb-4 flex justify-center"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="from-accent to-primary flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br text-xl font-bold text-white shadow-lg transition-shadow duration-300 group-hover:shadow-xl">
                        {step.step}
                      </div>
                    </motion.div>

                    {/* Icon */}
                    <motion.div
                      className="mb-3 flex justify-center"
                      whileHover={{ rotate: 15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-primary/10 text-primary group-hover:bg-primary rounded-full p-3 transition-colors duration-300 group-hover:text-white">
                        {step.icon}
                      </div>
                    </motion.div>

                    <CardTitle className="text-primary group-hover:text-accent text-lg transition-colors duration-300">
                      {step.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <p className="mb-4 text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      <div className="text-accent flex items-center justify-center space-x-2 text-xs">
                        <Clock className="h-3 w-3" />
                        <span>{step.duration}</span>
                      </div>
                      <div className="rounded-lg bg-gray-100 p-2">
                        <div className="text-xs font-medium text-gray-600">
                          {step.deliverable}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection arrow for desktop */}
                {index < processSteps.length - 1 && (
                  <motion.div
                    className="absolute top-20 -right-3 z-20 hidden md:block"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-accent flex h-6 w-6 items-center justify-center rounded-full shadow-lg">
                      <ArrowRight className="h-3 w-3 text-white" />
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          ></motion.div>
        </section>

        {/* Contact Section with Enhanced Design */}
        <section id="contact">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="from-primary via-primary/90 to-accent/30 relative overflow-hidden bg-gradient-to-r text-white">
              {/* Background elements */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 h-96 w-96 translate-x-48 -translate-y-48 rounded-full bg-white"></div>
                <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-32 translate-y-32 rounded-full bg-white"></div>
              </div>

              <CardContent className="relative z-10 p-6 md:p-12">
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3">
                  <div className="lg:col-span-2">
                    <motion.h2
                      className="mb-6 text-3xl font-bold md:text-4xl"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                    >
                      Ready to Transform Your Mill?
                    </motion.h2>

                    <motion.p
                      className="mb-8 text-lg md:text-xl"
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      Share your frame make & count range—we'll propose a
                      customized plan and trial.
                    </motion.p>

                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.4 }}
                      viewport={{ once: true }}
                    >
                      <div className="group flex items-center">
                        <MapPin className="text-accent mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <a
                          href="https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group-hover:text-accent cursor-pointer transition-colors duration-300"
                        >
                          111/109A, Civil Aerodrome Road, SIHS Colony,
                          Singanallur, Coimbatore‑641014
                        </a>
                      </div>
                      <div className="group flex items-center">
                        <Mail className="text-accent mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <a
                          href="mailto:aspiregrandexcel@gmail.com"
                          className="hover:text-accent transition-colors duration-300"
                        >
                          aspiregrandexcel@gmail.com
                        </a>
                      </div>
                      <div className="group flex items-center">
                        <Phone className="text-accent mr-3 h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                        <a
                          href="tel:+919087102929"
                          className="group-hover:text-accent transition-colors duration-300"
                        >
                          +91 90871 02929
                        </a>
                      </div>
                    </motion.div>
                  </div>

                  <motion.div
                    className="flex flex-col items-center space-y-4"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href="mailto:aspiregrandexcel@gmail.com"
                      className="w-full lg:w-auto"
                    ></a>

                    <a href="tel:9087102929" className="w-full lg:w-auto">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white lg:w-64"
                      >
                        <Phone className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                        Call Now
                      </Button>
                    </a>

                    <a
                      href="https://wa.me/9087102929?text="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full lg:w-auto"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white lg:w-64"
                      >
                        <MessageSquare className="mr-2 h-5 w-5" />
                        WhatsApp
                      </Button>
                    </a>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
