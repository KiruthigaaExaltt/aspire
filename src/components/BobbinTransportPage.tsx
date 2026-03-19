import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Progress } from './ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Separator } from './ui/separator';
import { cn } from './ui/utils';

import {
  Cog,
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
  Eye,
  Truck,
  Package,
  Settings,
  TrendingUp,
  Users
} from 'lucide-react';


import { images } from '../components/constants/image';
import { MyImage } from './ui/MyImage';
import metaData from "../../metaData.js";
import { normalizePath } from "../helpers/pathUtils";



export function BobbinTransportPage() {
  const [activeTab, setActiveTab] = useState('overview');
  const [roiBobbins, setRoiBobbins] = useState(5000);
  const [expandedFeature, setExpandedFeature] = useState<number | null>(null);


  // Memoized ROI Calculation for Bobbin Transport System
  const roiData = useMemo(() => {
    const laborSavingsPerYear = roiBobbins * 0.15 * 365;
    const efficiencyImprovementValue = roiBobbins * 25;
    const qualityImprovements = roiBobbins * 12;
    const totalBenefits = laborSavingsPerYear + efficiencyImprovementValue + qualityImprovements;
    const investmentCost = roiBobbins * 45;
    const paybackMonths = (investmentCost / (totalBenefits / 12)).toFixed(1);

    return {
      laborSavings: laborSavingsPerYear.toLocaleString(),
      efficiencyValue: efficiencyImprovementValue.toLocaleString(),
      qualityValue: qualityImprovements.toLocaleString(),
      totalBenefits: totalBenefits.toLocaleString(),
      investmentCost: investmentCost.toLocaleString(),
      paybackMonths
    };
  }, [roiBobbins]);

  const keyFeatures = [
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Automated Handling",
      description: "Fully automated bobbin transport and sorting system",
      details: "Advanced robotic systems handle bobbins with precision, reducing manual labor and improving consistency across production lines."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Fast Transport",
      description: "Efficient bobbin movement with minimal delays",
      details: "High-speed conveyor systems and optimized routing ensure rapid bobbin transport, minimizing production bottlenecks."
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Gentle Handling",
      description: "Careful bobbin transport without damage",
      details: "Specialized gripping and cushioning systems protect bobbins during transport, maintaining yarn quality and reducing waste."
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "Precise Placement",
      description: "Accurate bobbin positioning and sorting",
      details: "Advanced sensors and control systems ensure precise bobbin placement and automatic sorting by size, weight, or quality parameters."
    }
  ];

  const specifications = {
    "Transport Capacity": "500-2000 bobbins/hour",
    "System Length": "10-50 meters (customizable)",
    "Bobbin Sizes": "Standard ring frame bobbins",
    "Sorting Categories": "Up to 8 different categories",
    "Power Consumption": "2-5 kW (depending on configuration)",
    "Control System": "PLC with HMI touchscreen",
    "Safety Features": "Emergency stops, safety barriers",
    "Maintenance": "Minimal daily maintenance required"
  };

  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Labor Reduction",
      value: "60-70%",
      description: "Significant reduction in manual bobbin handling labor"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Efficiency Gain",
      value: "40-50%",
      description: "Improved production efficiency through automation"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Quality Improvement",
      value: "25-30%",
      description: "Consistent handling reduces bobbin damage"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Time Savings",
      value: "4-6 hours/day",
      description: "Daily time savings from automated processes"
    }
  ];

  const technicalServices = [
    {
      title: "Installation & Commissioning",
      description: "Complete system setup and testing",
      duration: "2-3 weeks",
      cta: "Schedule Installation"
    },
    {
      title: "Operator Training",
      description: "Comprehensive training for your team",
      duration: "3-5 days",
      cta: "Book Training"
    },
    {
      title: "Maintenance Support",
      description: "Ongoing technical support and maintenance",
      duration: "Ongoing",
      cta: "Support Plans"
    },
    {
      title: "System Optimization",
      description: "Performance tuning and upgrades",
      duration: "1-2 days",
      cta: "Optimize Now"
    }
  ];

  const processSteps = [
    {
      step: 1,
      title: "Bobbin Collection",
      description: "Automated collection from spinning frames",
      icon: <Package className="h-6 w-6" />
    },
    {
      step: 2,
      title: "Quality Inspection",
      description: "Automated quality checking and sorting",
      icon: <Eye className="h-6 w-6" />
    },
    {
      step: 3,
      title: "Transport & Sorting",
      description: "Efficient transport to designated areas",
      icon: <Truck className="h-6 w-6" />
    },
    {
      step: 4,
      title: "Precise Placement",
      description: "Accurate placement in storage systems",
      icon: <Target className="h-6 w-6" />
    }
  ];
  const metaTitle = metaData?.find((m: any) => m?.slug === normalizePath(window.location.pathname))?.meta_title;
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/95 via-primary/85 to-accent/75 text-white py-15 sm:py-20 md:py-25 lg:py-30 px-4 overflow-hidden">
         {metaTitle ? (
        <h1 className="visually-hidden">
          {metaTitle}
        </h1>
      ) : null}
        {/* <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        /> */}

        <div
          className="max-w-7xl mx-auto relative lg:pt-0 px-6 sm:px-8 md:px-12"
          style={{ paddingTop: "10px" }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start lg:items-center py-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="secondary" className="px-4 py-2 bg-white/20 text-white border-white/30">
                  <Truck className="h-4 w-4 mr-2" />
                  Automation System
                </Badge>
                <Badge variant="outline" className="px-3 py-1 border-white/30 text-white">
                  Industrial Grade
                </Badge>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Bobbin Transport System
              </h2>

              <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
                Advanced automated bobbin handling and transport solution that streamlines
                textile production workflows with seamless integration and reliable performance.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <Link to="/contact/">
                  <Button
                    size="lg"
                    className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-semibold group"
                  >
                    Request Quote
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Button
                  size="lg"
                  className="bg-white hover:bg-gray-100 text-primary px-8 py-4 text-lg font-semibold group"
                  onClick={() => {
                    const specificationsSection = document.getElementById('specifications');
                    if (specificationsSection) {
                      specificationsSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  View Specifications
                  <Monitor className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold group"
                  onClick={() => {
                    const roiSection = document.getElementById('roi-calculator');
                    if (roiSection) {
                      roiSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  Get ROI Calculator
                  <Calculator className="ml-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform" />
                </Button>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">500-2000</div>
                  <div className="text-sm text-white/80">Bobbins/Hour</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">60-70%</div>
                  <div className="text-sm text-white/80">Labor Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">PLC</div>
                  <div className="text-sm text-white/80">Control System</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">24/7</div>
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
              <div className="relative bg-[#161243]/[0.45] backdrop-blur-[0.2px] rounded-2xl p-8 border border-[#161243]/[0.24] shadow-[0_4px_30px_rgba(0,0,0,0.1)] aspect-[4/3]">
                <MyImage
                  src={images.home4}
                  alt="Aspire Excel Bobbin Transport System - Automated Industrial Machinery"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                />

                {/* Floating Animation Elements */}
                <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-accent text-white p-2 sm:p-3 rounded-lg shadow-lg animate-float">
                  <Truck className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>

                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-white text-primary p-2 sm:p-3 rounded-lg shadow-lg animate-pulse-slow">
                  <Cog className="h-4 w-4 sm:h-6 sm:w-6" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our automated bobbin transport system follows a streamlined process
              for efficient and reliable bobbin handling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="text-center hover:shadow-lg transition-shadow border-[#0000001A]">
                  <CardHeader>
                    <div className="mx-auto mb-4 flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full">
                      {step.icon}
                    </div>
                    <div className="absolute -top-3 -right-3 bg-accent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                      {step.step}
                    </div>
                    <CardTitle className="text-primary">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{step.description}</CardDescription>
                  </CardContent>
                </Card>

                {index < processSteps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-gray-400 h-8 w-8" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="overview" className="w-full" value={activeTab} onValueChange={setActiveTab}>
            <div className="mb-12 flex justify-center">
              <TabsList className="flex flex-col sm:flex-row gap-2 sm:gap-0 rounded-2xl bg-white p-2 shadow-lg h-auto border-0 w-fit mx-0 sm:mx-auto">
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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">
                    Revolutionary Bobbin Handling
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Our Bobbin Transport System represents a significant advancement in textile automation,
                    designed to eliminate manual bobbin handling while ensuring gentle, precise transport
                    throughout your production facility.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span>Fully automated bobbin collection and transport</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span>Gentle handling to preserve yarn quality</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span>Intelligent sorting and placement systems</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      <span>Seamless integration with existing equipment</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  {benefits.slice(0, 2).map((benefit, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow border-[#0000001A]">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            <div className="p-2 bg-primary/10 rounded-lg text-primary mr-3">
                              {benefit.icon}
                            </div>
                            <h4 className="font-semibold text-primary">{benefit.title}</h4>
                          </div>
                          <Badge variant="secondary" className="bg-accent/10 text-accent">
                            {benefit.value}
                          </Badge>
                        </div>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {keyFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer border-[#0000001A]"
                      onClick={() => setExpandedFeature(expandedFeature === index ? null : index)}>
                      <CardHeader className="px-6 py-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="p-3 bg-primary/10 rounded-lg text-primary mr-4">
                              {feature.icon}
                            </div>
                            <div>
                              <CardTitle className="text-primary">{feature.title}</CardTitle>
                              <CardDescription>{feature.description}</CardDescription>
                            </div>
                          </div>
                          {expandedFeature === index ?
                            <ChevronUp className="h-5 w-5 text-gray-400" /> :
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          }
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="text-center hover:shadow-lg transition-shadow border-[#0000001A]">
                      <CardHeader>
                        <div className="mx-auto mb-4 flex items-center justify-center w-12 h-12 bg-accent/10 text-accent rounded-lg">
                          {benefit.icon}
                        </div>
                        <CardTitle className="text-primary">{benefit.title}</CardTitle>
                        <div className="text-2xl font-bold text-accent">{benefit.value}</div>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{benefit.description}</CardDescription>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                  Performance Improvements
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-accent mb-2">40-50%</div>
                    <div className="text-gray-600">Efficiency Increase</div>
                    <Progress value={45} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">60-70%</div>
                    <div className="text-gray-600">Labor Reduction</div>
                    <Progress value={65} className="mt-2" />
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-destructive mb-2">25-30%</div>
                    <div className="text-gray-600">Quality Improvement</div>
                    <Progress value={27} className="mt-2" />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {technicalServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow border-[#0000001A]">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="!leading-normal text-primary">{service.title}</CardTitle>
                        <Badge variant="outline">{service.duration}</Badge>
                      </div>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>

                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specifications" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for our Bobbin Transport System
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow border-[#0000001A]">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Settings className="h-6 w-6 mr-3" />
                  System Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {Object.entries(specifications).map(([key, value], index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="font-medium text-gray-700">{key}</span>
                      <span className="text-primary font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow border-[#0000001A]">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Shield className="h-6 w-6 mr-3" />
                    Safety Features
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      Emergency stop systems
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      Safety light curtains
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      Overload protection
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-accent mr-3" />
                      Interlocked access doors
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow border-[#0000001A]">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Award className="h-6 w-6 mr-3" />
                    Quality Assurance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-accent mr-3" />
                      ISO 9001:2015 certified
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-accent mr-3" />
                      CE marking compliance
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-accent mr-3" />
                      24-month warranty
                    </li>
                    <li className="flex items-center">
                      <Star className="h-5 w-5 text-accent mr-3" />
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
      <section id="roi-calculator" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ROI Calculator
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Calculate the return on investment for your Bobbin Transport System
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <Card className="hover:shadow-lg transition-shadow border-[#0000001A]">
              <CardHeader>
                <CardTitle className="flex items-center text-primary">
                  <Calculator className="h-6 w-6 mr-3" />
                  Investment Calculator
                </CardTitle>
                <CardDescription>
                  Adjust the number of bobbins to see projected savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Number of Bobbins: {roiBobbins.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="20000"
                    step="500"
                    value={roiBobbins}
                    onChange={(e) => setRoiBobbins(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>1,000</span>
                    <span>20,000</span>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Investment Breakdown</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">System Cost</span>
                      <span className="font-semibold">₹{roiData.investmentCost}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Installation & Training</span>
                      <span className="font-semibold">₹{(Number(roiData.investmentCost.replace(/,/g, '')) * 0.15).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-[#0000001A]">
              <CardHeader>
                <CardTitle className="flex items-center text-accent">
                  <TrendingUp className="h-6 w-6 mr-3" />
                  Projected Savings & Benefits
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">₹{roiData.laborSavings}</div>
                    <div className="text-sm text-gray-600">Annual Labor Savings</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-primary">₹{roiData.efficiencyValue}</div>
                    <div className="text-sm text-gray-600">Efficiency Improvements</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-destructive">₹{roiData.qualityValue}</div>
                    <div className="text-sm text-gray-600">Quality Benefits</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-accent">{roiData.paybackMonths}</div>
                    <div className="text-sm text-gray-600">Payback (Months)</div>
                  </div>
                </div>

                <Separator />

                <div className="text-center p-6 bg-gradient-to-r from-accent/10 to-primary/10 rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">₹{roiData.totalBenefits}</div>
                  <div className="text-gray-600">Total Annual Benefits</div>
                </div>


              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-primary to-accent text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Bobbin Handling?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join leading textile manufacturers who have revolutionized their production
            with our automated bobbin transport systems.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold mb-2">500+</div>
              <div className="text-white/80">Installations Worldwide</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Technical Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">98%</div>
              <div className="text-white/80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
