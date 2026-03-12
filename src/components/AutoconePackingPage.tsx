import { useState, useEffect, useMemo } from "react";
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
import { images } from "../components/constants/image";
import { MyImage } from "./ui/MyImage";
import { cn } from './ui/utils';
import {
  Package,
  Clock,
  Shield,
  Target,
  Award,
  ArrowRight,
  CheckCircle,
  Phone,
  Calculator,
  Monitor,
  ChevronDown,
  ChevronUp,
  Star,
  Settings,
  TrendingUp,
  Users,
  Box,
  Scan,
  Boxes,
  Link,
} from "lucide-react";

interface AutoconePackingPageProps {
  onNavigate?: (page: string) => void;
}

export function AutoconePackingPage({ }: AutoconePackingPageProps) {
  const [activeTab, setActiveTab] = useState("overview");
  const [roiCones, setRoiCones] = useState(10000);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(true);

  console.log("AutoconePackingPage rendered, activeTab:", isVisible);

  // Page visibility API to pause animations when tab is not visible
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    if (typeof document !== "undefined") {
      document.addEventListener("visibilitychange", handleVisibilityChange);
      return () =>
        document.removeEventListener(
          "visibilitychange",
          handleVisibilityChange,
        );
    }
  }, []);

  // Memoized ROI Calculation for Autocone Packing System
  const roiData = useMemo(() => {
    const laborSavingsPerYear = roiCones * 0.08 * 365;
    const packagingEfficiencyValue = roiCones * 18;
    const qualityImprovements = roiCones * 8;
    const totalBenefits =
      laborSavingsPerYear + packagingEfficiencyValue + qualityImprovements;
    const investmentCost = roiCones * 35;
    const paybackMonths = (investmentCost / (totalBenefits / 12)).toFixed(1);

    return {
      laborSavings: laborSavingsPerYear.toLocaleString(),
      packagingValue: packagingEfficiencyValue.toLocaleString(),
      qualityValue: qualityImprovements.toLocaleString(),
      totalBenefits: totalBenefits.toLocaleString(),
      investmentCost: investmentCost.toLocaleString(),
      paybackMonths,
    };
  }, [roiCones]);

  const keyFeatures = [
    {
      icon: <Package className="h-8 w-8" />,
      title: "Automated Packaging",
      description: "Fully automated cone packaging with precision handling",
      details:
        "Advanced robotic systems handle cone packaging with exceptional precision, reducing manual labor and ensuring consistent packaging quality across all production runs.",
    },
    {
      icon: <Scan className="h-8 w-8" />,
      title: "Quality Inspection",
      description: "Integrated quality control and cone inspection",
      details:
        "Built-in vision systems and sensors perform comprehensive quality checks, automatically sorting cones by quality grade and rejecting defective products.",
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "High-Speed Processing",
      description: "Up to 800 cones per hour packaging capacity",
      details:
        "High-throughput processing capabilities ensure rapid packaging without compromising quality, meeting the demands of high-volume textile operations.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Flexible Formats",
      description: "Multiple packaging formats and configurations",
      details:
        "Supports various packaging formats including boxes, cartons, and pallets with customizable configurations to meet specific customer requirements.",
    },
  ];

  const specifications = {
    "Packing Speed": "Up to 800 cones/hour",
    "Cone Weight Range": "0.5kg to 5kg",
    "Package Types": "Boxes, cartons, pallets",
    "Control Interface": "Touch screen with remote access",
    "Power Consumption": "3-8 kW (depending on configuration)",
    "System Dimensions": "Length: 12-20m, Width: 3-5m",
    "Safety Features": "Emergency stops, light curtains",
    Maintenance: "Automated lubrication system",
  };

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Labor Efficiency",
      value: "50-60%",
      description: "Reduction in packaging labor requirements",
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Speed Increase",
      value: "3-4x",
      description: "Faster packaging compared to manual methods",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Consistency",
      value: "99.5%",
      description: "Consistent packaging quality and presentation",
    },
    {
      icon: <Box className="h-6 w-6" />,
      title: "Material Savings",
      value: "15-20%",
      description: "Optimized packaging material usage",
    },
  ];

  const technicalServices = [
    {
      title: "System Installation",
      description: "Complete installation and commissioning",
      duration: "2-4 weeks",
      cta: "Schedule Installation",
    },
    {
      title: "Operator Training",
      description: "Comprehensive training for your team",
      duration: "5-7 days",
      cta: "Book Training",
    },
    {
      title: "Technical Support",
      description: "24/7 technical support and maintenance",
      duration: "Ongoing",
      cta: "Support Plans",
    },
    {
      title: "System Upgrades",
      description: "Performance optimization and upgrades",
      duration: "1-3 days",
      cta: "Upgrade Now",
    },
  ];

  const processSteps = [
    {
      step: 1,
      title: "Cone Loading",
      description: "Automated loading of finished yarn cones",
      icon: <Box className="h-6 w-6" />,
    },
    {
      step: 2,
      title: "Quality Check",
      description: "Vision system inspection and grading",
      icon: <Scan className="h-6 w-6" />,
    },
    {
      step: 3,
      title: "Packaging",
      description: "Automated packaging in selected format",
      icon: <Package className="h-6 w-6" />,
    },
    {
      step: 4,
      title: "Final Output",
      description: "Labeled and ready for shipment",
      icon: <Boxes className="h-6 w-6" />,
    },
  ];

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-primary/95 via-primary/85 to-accent/75 relative overflow-hidden bg-gradient-to-br px-4 py-15 sm:py-20 md:py-25 lg:py-30 text-white">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative mx-auto max-w-7xl lg:pt-0 py-0 px-6 sm:px-8 md:px-12" style={{ paddingTop: "10px" }}>
          <div className="grid grid-cols-1 items-start lg:items-center gap-12 lg:grid-cols-2 py-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <Badge
                  variant="secondary"
                  className="border-white/30 bg-white/20 px-4 py-2 text-white"
                >
                  <Package className="mr-2 h-4 w-4" />
                  Packaging System
                </Badge>
                <Badge
                  variant="outline"
                  className="border-white/30 px-3 py-1 text-white"
                >
                  Industrial Grade
                </Badge>
              </div>

              <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
                Autocone Packing System
              </h1>

              <p className="mb-8 text-xl leading-relaxed text-white/90 md:text-2xl">
                State-of-the-art automated cone winding and packaging system
                that ensures consistent yarn quality and professional
                presentation for high-volume textile operations.
              </p>

              <div className="mb-8 flex flex-wrap gap-4">
                <Link to="/contact/">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 group px-8 py-4 text-lg font-semibold text-white"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="text-primary group bg-white px-8 py-4 text-lg font-semibold hover:bg-gray-100"
                  onClick={() => {
                    const specificationsSection =
                      document.getElementById("specifications");
                    if (specificationsSection) {
                      specificationsSection.scrollIntoView({
                        behavior: "smooth",
                      });
                    }
                  }}
                >
                  View Specifications
                  <Monitor className="ml-2 h-5 w-5 transition-transform group-hover:scale-110" />
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 group px-6 py-3 text-base font-semibold text-white sm:px-8 sm:py-4 sm:text-lg"
                  onClick={() => {
                    const roiSection =
                      document.getElementById("roi-calculator");
                    if (roiSection) {
                      roiSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  Get ROI Calculator
                  <Calculator className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="text-center">
                  <div className="text-accent text-2xl font-bold">800</div>
                  <div className="text-sm text-white/80">Cones/Hour</div>
                </div>
                <div className="text-center">
                  <div className="text-accent text-2xl font-bold">99.5%</div>
                  <div className="text-sm text-white/80">Quality Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-accent text-2xl font-bold">50-60%</div>
                  <div className="text-sm text-white/80">Labor Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-accent text-2xl font-bold">24/7</div>
                  <div className="text-sm text-white/80">Operation</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl border border-[#161243]/[0.24] bg-[#161243]/[0.45] p-8 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[0.2px] aspect-[4/3]">
                {/* <ImageWithFallback */}
                <MyImage
                  src={images.home5}
                  alt="Aspire Excel Autocone Packing System - Blue and Orange Automated Industrial Textile Machinery"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />
                {/* /> */}

                {/* Floating Animation Elements */}
                <div className="bg-accent animate-float absolute -top-3 -right-3 sm:-top-4 sm:-right-4 rounded-lg p-2 sm:p-3 text-white shadow-lg">
                  <Package className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>

                <div className="text-primary animate-pulse-slow absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 rounded-lg bg-white p-2 sm:p-3 shadow-lg">
                  <Settings className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              Packaging Process Flow
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Our automated cone packaging system follows a streamlined process
              for efficient and professional packaging results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="text-center transition-shadow hover:shadow-lg border-[#0000001A]">
                  <CardHeader>
                    <div className="bg-primary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full text-white">
                      {step.icon}
                    </div>
                    <div className="bg-accent absolute -top-3 -right-3 flex h-8 w-8 items-center justify-center rounded-full font-bold text-white">
                      {step.step}
                    </div>
                    <CardTitle className="text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>

                {index < processSteps.length - 1 && (
                  <ArrowRight className="absolute top-1/2 -right-4 hidden h-8 w-8 -translate-y-1/2 transform text-gray-400 lg:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-7xl">

          <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
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
                  value="benefits"
                  onClick={() => setActiveTab("benefits")}
                  style={{ backgroundColor: activeTab === "benefits" ? "#faa82e" : "transparent" }}
                  className={cn(
                    "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                    activeTab === "benefits" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="services"
                  onClick={() => setActiveTab("services")}
                  style={{ backgroundColor: activeTab === "services" ? "#faa82e" : "transparent" }}
                  className={cn(
                    "rounded-xl px-4 py-1.5 transition-all duration-300 font-semibold border-0",
                    activeTab === "services" ? "text-black shadow-lg" : "text-gray-600 hover:bg-gray-100"
                  )}
                >
                  Services
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="overview" className="space-y-8">
              <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div>
                  <h3 className="text-primary mb-4 text-2xl font-bold">
                    Professional Cone Packaging
                  </h3>
                  <p className="mb-6 leading-relaxed text-gray-600">
                    Our Autocone Packing System revolutionizes the final stage
                    of yarn production with intelligent automation that ensures
                    consistent quality, professional presentation, and maximum
                    packaging efficiency for high-volume textile operations.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      <span>Automated cone loading and positioning</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      <span>Integrated quality inspection systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      <span>Multiple packaging format support</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      <span>Touch screen control interface</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {benefits.slice(0, 2).map((benefit, index) => (
                    <Card
                      key={index}
                      className="transition-shadow hover:shadow-md border-[#0000001A]"
                    >
                      <CardContent className="p-6">
                        <div className="mb-3 flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-primary/10 text-primary mr-3 rounded-lg p-2">
                              {benefit.icon}
                            </div>
                            <h4 className="text-primary font-semibold">
                              {benefit.title}
                            </h4>
                          </div>
                          <Badge
                            variant="secondary"
                            className="bg-accent/10 text-accent"
                          >
                            {benefit.value}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card
                      className="h-full cursor-pointer transition-shadow hover:shadow-lg border-[#0000001A]"
                      onClick={() =>
                        setExpandedFeature(
                          expandedFeature === index ? null : index,
                        )
                      }
                    >
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="bg-primary/10 text-primary mr-4 rounded-lg p-3">
                              {feature.icon}
                            </div>
                            <div>
                              <CardTitle className="text-primary">
                                {feature.title}
                              </CardTitle>
                              <CardDescription>
                                {feature.description}
                              </CardDescription>
                            </div>
                          </div>
                          {expandedFeature === index ? (
                            <ChevronUp className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </CardHeader>
                      {expandedFeature === index && (
                        <CardContent>
                          <p className="text-gray-600">{feature.details}</p>
                        </CardContent>
                      )}
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits" className="space-y-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center transition-shadow hover:shadow-lg border-[#0000001A]">
                      <CardHeader>
                        <div className="bg-accent/10 text-accent mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-primary">
                          {benefit.title}
                        </CardTitle>
                        <div className="text-accent text-2xl font-bold">
                          {benefit.value}
                        </div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{benefit.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="rounded-2xl bg-gray-50 p-8">
                <h3 className="text-primary mb-6 text-center text-2xl font-bold">
                  Performance Improvements
                </h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                  <div className="text-center">
                    <div className="text-accent mb-2 text-3xl font-bold">
                      3-4x
                    </div>
                    <div className="text-gray-600">Speed Increase</div>
                    <Progress value={75} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-primary mb-2 text-3xl font-bold">
                      50-60%
                    </div>
                    <div className="text-gray-600">Labor Reduction</div>
                    <Progress value={55} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-destructive mb-2 text-3xl font-bold">
                      99.5%
                    </div>
                    <div className="text-gray-600">Quality Consistency</div>
                    <Progress value={99} className="mt-2" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {technicalServices.map((service, index) => (
                  <Card
                    key={index}
                    className="transition-shadow hover:shadow-lg border-[#0000001A]"
                  >
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-primary">
                          {service.title}
                        </CardTitle>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent></CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="bg-gray-50 px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              Technical Specifications
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Detailed specifications for our Autocone Packing System
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <Card className="transition-shadow hover:shadow-lg border-[#0000001A]">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Settings className="mr-3 h-6 w-6" />
                  System Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(specifications).map(([key, value], index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-gray-100 py-2 last:border-b-0"
                    >
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-primary font-semibold">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="transition-shadow hover:shadow-lg border-[#0000001A]">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Shield className="mr-3 h-6 w-6" />
                    Safety & Quality Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      Emergency stop systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      Safety light curtains
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      Quality vision inspection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="text-accent mr-3 h-5 w-5" />
                      Automated fault detection
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="transition-shadow hover:shadow-lg border-[#0000001A]">
                <CardHeader>
                  <CardTitle className="text-primary flex items-center">
                    <Award className="mr-3 h-6 w-6" />
                    Quality Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="text-accent mr-3 h-5 w-5" />
                      ISO 9001:2015 certified
                    </li>
                    <li className="flex items-center">
                      <Star className="text-accent mr-3 h-5 w-5" />
                      CE marking compliance
                    </li>
                    <li className="flex items-center">
                      <Star className="text-accent mr-3 h-5 w-5" />
                      24-month warranty
                    </li>
                    <li className="flex items-center">
                      <Star className="text-accent mr-3 h-5 w-5" />
                      Factory acceptance testing
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section id="roi-calculator" className="px-4 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-primary mb-4 text-3xl font-bold md:text-4xl">
              ROI Calculator
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              Calculate the return on investment for your Autocone Packing
              System
            </p>
          </div>

          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <Card className="transition-shadow hover:shadow-lg border-[#0000001A]">
              <CardHeader>
                <CardTitle className="text-primary flex items-center">
                  <Calculator className="mr-3 h-6 w-6" />
                  Investment Calculator
                </CardTitle>
                <CardDescription>
                  Adjust the number of cones to see projected savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Number of Cones per Day: {roiCones.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={roiCones}
                    onChange={(e) => setRoiCones(Number(e.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-200"
                  />
                  <div className="mt-1 flex justify-between text-xs text-gray-500">
                    <span>5,000</span>
                    <span>50,000</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="text-primary font-semibold">
                    Investment Breakdown
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">System Cost</span>
                      <span className="font-semibold">
                        ₹{roiData.investmentCost}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">
                        Installation & Training
                      </span>
                      <span className="font-semibold">
                        ₹
                        {(
                          Number(roiData.investmentCost.replace(/,/g, "")) *
                          0.12
                        ).toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="transition-shadow hover:shadow-lg border-[#0000001A]">
              <CardHeader>
                <CardTitle className="text-accent flex items-center">
                  <TrendingUp className="mr-3 h-6 w-6" />
                  Projected Savings & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-accent text-2xl font-bold">
                      ₹{roiData.laborSavings}
                    </div>
                    <div className="text-sm text-gray-600">
                      Annual Labor Savings
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-primary text-2xl font-bold">
                      ₹{roiData.packagingValue}
                    </div>
                    <div className="text-sm text-gray-600">
                      Packaging Efficiency
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-destructive text-2xl font-bold">
                      ₹{roiData.qualityValue}
                    </div>
                    <div className="text-sm text-gray-600">
                      Quality Benefits
                    </div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-4 text-center">
                    <div className="text-accent text-2xl font-bold">
                      {roiData.paybackMonths}
                    </div>
                    <div className="text-sm text-gray-600">
                      Payback (Months)
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="from-accent/10 to-primary/10 rounded-lg bg-gradient-to-r p-6 text-center">
                  <div className="text-primary mb-2 text-3xl font-bold">
                    ₹{roiData.totalBenefits}
                  </div>
                  <div className="text-gray-600">Total Annual Benefits</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="from-primary to-accent bg-gradient-to-r px-4 py-16 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Automate Your Cone Packaging?
          </h2>
          <p className="mb-8 text-xl text-white/90">
            Join leading textile manufacturers who have transformed their
            packaging operations with our automated autocone packing systems.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact/">
              <Button
                size="lg"
                className="text-primary bg-white px-8 py-4 text-lg font-semibold hover:bg-gray-100"
              >
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
            <div>
              <div className="mb-2 text-2xl font-bold">200+</div>
              <div className="text-white/80">Systems Installed</div>
            </div>
            <div>
              <div className="mb-2 text-2xl font-bold">24/7</div>
              <div className="text-white/80">Technical Support</div>
            </div>
            <div>
              <div className="mb-2 text-2xl font-bold">99%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
