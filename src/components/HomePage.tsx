import { Link } from 'react-router-dom';
import { CarouselSection } from './CarouselSection';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { CheckCircle, Cog, Users, Award, Zap, Clock, Wind, ArrowRight, Car, MapPin, Shield, Timer, Gauge, Settings, Target, TrendingUp, Building2, UserCheck } from 'lucide-react';
import { images } from '../components/constants/image';
import { MyImage } from './ui/MyImage';

interface HomePageProps { }

export function HomePage({ }: HomePageProps) {
  const features = [
    {
      icon: <Cog className="h-8 w-8 text-accent" />,
      title: "Advanced Technology",
      description: "State-of-the-art machinery and automation solutions for modern textile manufacturing."
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Expert Support",
      description: "Dedicated technical support and maintenance services to ensure optimal performance."
    },
    {
      icon: <Award className="h-8 w-8 text-accent" />,
      title: "Quality Assurance",
      description: "ISO certified products with rigorous quality control and testing procedures."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
      title: "Proven Results",
      description: "Trusted by leading textile manufacturers worldwide for enhanced productivity."
    }
  ];

  const autoParkingFeatures = [
    {
      icon: <Car className="h-6 w-6" />,
      title: "8–18 Car Capacity",
      description: "Flexible modular options to suit diverse site layouts."
    },
    {
      icon: <Timer className="h-6 w-6" />,
      title: "60–90 Second Cycle",
      description: "Fast and smooth automated parking and retrieval."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Advanced Safety",
      description: "Equipped with multiple safety sensors and fail-safe systems."
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Space Optimization",
      description: "Maximize parking in a minimal footprint with precision control."
    }
  ];

  const autoDofferFeatures = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "2-minute doff cycle",
      description: "Ultra-fast doffing in ideal conditions"
    },
    {
      icon: <Wind className="h-6 w-6" />,
      title: "2–3 CFM/doff air usage",
      description: "Energy-efficient operation"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "≈0.8 units/doff power",
      description: "Low power consumption @1200 spindles"
    },
    {
      icon: <Cog className="h-6 w-6" />,
      title: "PLC + HMI controls",
      description: "Advanced automation with touchscreen"
    }
  ];

  const excelSpinFeatures = [
    {
      icon: <Gauge className="h-6 w-6" />,
      title: "High Speed Operation",
      description: "Optimized for maximum spindle performance"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Compact Design",
      description: "Space-efficient spinning frame solution"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision Control",
      description: "Advanced automation for consistent quality"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Enhanced Productivity",
      description: "Proven efficiency improvements"
    }
  ];

  const bobbinTransportFeatures = [
    {
      icon: <Cog className="h-6 w-6" />,
      title: "Automated Handling",
      description: "Fully automated bobbin transport and sorting"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Fast Transport",
      description: "Efficient bobbin movement with minimal delays"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Gentle Handling",
      description: "Careful bobbin transport without damage"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precise Placement",
      description: "Accurate bobbin positioning and sorting"
    }
  ];

  const autoconePackingFeatures = [
    {
      icon: <Settings className="h-6 w-6" />,
      title: "Automated Winding",
      description: "Precise cone winding with consistent tension"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Control",
      description: "Integrated quality monitoring and defect detection"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "High Efficiency",
      description: "Optimized packaging speed with minimal waste"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Premium Packaging",
      description: "Professional cone preparation and presentation"
    }
  ];



  const teamMembers = [
    {
      name: "P N. SANTHANAKRISHNEN",
      role: "Director",
      icon: <UserCheck className="h-6 w-6" />,
      experience: "25 Years",
      description: "Visionary leader driving growth and innovation in textile automation."
    },
    {
      name: "P M. AYAASWAAMY",
      role: "Director",
      icon: <UserCheck className="h-6 w-6" />,
      experience: "20 Years",
      description: "Strategic leader focused on business development and industry partnerships."
    },
    {
      name: "K. MAHESH KUMAR",
      role: "Accounts Head",
      icon: <UserCheck className="h-6 w-6" />,
      experience: "20 Years",
      description: "Manages financial operations and ensures accurate accounting."
    },
    {
      name: "GOWTHAM K",
      role: "Design & Quality Head",
      icon: <UserCheck className="h-6 w-6" />,
      experience: "20 Years",
      description: "Leads product design and maintains high quality standards."
    },
    {
      name: "K. GOPALA KRISHNAN",
      role: "Purchase & Production Head",
      icon: <UserCheck className="h-6 w-6" />,
      experience: "20 Years",
      description: "Oversees procurement and production for smooth operations."
    }
  ];


  return (
    <div className="min-h-screen">
      {/* Hero Carousel */}
      <CarouselSection />

      {/* Welcome Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6">
            Welcome to our Aspire Excel
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-6xl mx-auto leading-relaxed">
            Leading manufacturer of innovative textile machinery and automation solutions.
            We specialize in cutting-edge technology that transforms textile production
            with enhanced efficiency, quality, and reliability.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16 px-4">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" onClick={() => {
            const productsSection = document.getElementById('products-section');
            if (productsSection) {
              productsSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Explore Products
          </Button>

          <Link to="/contact/">
            <Button size="lg" variant="outline" className="border-primary text-black hover:bg-primary hover:text-white bg-white">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-primary">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Product: Auto Parking System */}
        <section id="products-section" className="mb-16 relative rounded-2xl overflow-hidden min-h-[600px]">
          {/* Background Video - Multiple Sources with Fallbacks */}
          <div className="absolute inset-0">
            {/* Ultimate Fallback: Static Background */}
            <div className="absolute inset-0 bg-linear-to-br from-primary/95 via-primary/85 to-accent/75 -z-10"></div>
          </div>

          {/* Video Overlay for Content Readability */}
          <div className="absolute inset-0 bg-linear-to-br from-primary/80 via-primary/70 to-accent/60"></div>

          {/* Content Layer */}
          <div className="relative overflow-hidden">
            {/* Full-width animated background */}
            <div
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(31, 31, 88, 0.85) 0%, rgba(174, 35, 39, 0.75) 50%, rgba(250, 168, 46, 0.65) 100%)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            />
            {/* Content with proper padding */}
            <div className="relative z-10 p-4 sm:p-6 md:p-12">
              <div className="max-w-6xl mx-auto text-center">
                <div className="inline-flex items-center whitespace-nowrap bg-[#161243]/45 backdrop-blur-[0.2px] text-white 
px-3 py-1 text-xs sm:text-sm 
rounded-full mb-4 sm:mb-6 
border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">

                  <Car className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />

                  <span className="font-medium">NEW: Parking Solutions</span>

                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Auto Parking System
                </h2>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
                  Advanced, space-saving automated parking technology designed for secure, quick, and efficient vehicle storage. Aspire Excel systems ensure maximum safety and reliability for every cycle.
                </p>

                {/* Feature Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {autoParkingFeatures.map((feature, index) => (
                    <div key={index} className="bg-white/90 backdrop-blur-[0.2px] p-6 rounded-2xl text-center hover:bg-white/95 transition-all duration-300 hover:scale-105 border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                      <div className="flex justify-center p-3 bg-accent/10 rounded-lg text-accent mb-4 w-fit mx-auto">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-primary mb-2">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>

                {/* Call to Action Buttons */}
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/products/auto-parking/">
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-white shadow-lg px-8 py-4 text-lg">
                      <Car className="h-5 w-5 mr-2" />
                      View Parking Solutions
                    </Button>
                  </Link>
                  <Link to="/contact/">
                    <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-accent backdrop-blur-[0.2px] px-8 py-4 text-lg shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                      Request Quote
                      <ArrowRight className="h-5 w-5 ml-2" />
                    </Button>
                  </Link>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                  <div className="bg-white/95 backdrop-blur-[0.2px] rounded-2xl p-6 text-center border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <Car className="h-8 w-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">8–18 Cars</div>
                    <div className="text-sm text-gray-600">Capacity Range</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-[0.2px] rounded-2xl p-6 text-center border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <Timer className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent mb-1">60–90 Sec</div>
                    <div className="text-sm text-gray-600">Cycle Time</div>
                  </div>
                  <div className="bg-white/95 backdrop-blur-[0.2px] rounded-2xl p-6 text-center border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
                    <Shield className="h-8 w-8 text-destructive mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                    <div className="text-sm text-gray-600">Safety Monitoring</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>  

        {/* Featured Product: Auto Doffer */}
        <section className="mb-16 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl p-4 sm:p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Award className="h-4 w-4 mr-2" />
                <span className="font-medium">Featured Product</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Auto Doffer Retrofit
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Reliable, precise & cost‑effective doffing for ring frames with PLC control
                and ultra‑low energy use. Proven technology with over 200,000 spindles deployed.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {autoDofferFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white/80 p-4 rounded-lg">
                    <div className="shrink-0 p-2 bg-accent/10 rounded-lg text-accent mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products/auto-doffer/">
                  <Button size="lg" variant="outline" className="bg-[#faac38] text-white hover:bg-[#faac38]/90 border-[#faac38]">
                    <Award className="h-5 w-5 mr-2" />
                    Explore Auto Doffer Retrofit
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                <MyImage
                  src={images.autodofferretreofit}
                  alt="Aspire Excel Green Control Units with Digital Displays in Textile Factory"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-accent transform scale-75 sm:scale-100 origin-bottom-left transition-all">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Proven Scale</p>
                    <p className="font-bold text-primary text-xs sm:text-base">200K+ Spindles</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-primary transform scale-75 sm:scale-100 origin-top-right transition-all">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Efficiency</p>
                    <p className="font-bold text-accent text-xs sm:text-base">&lt; 3% Breaks</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product: EXCELspin Compact */}
        <section className="mb-16 bg-linear-to-br from-destructive/5 to-accent/5 rounded-2xl p-4 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-destructive/10 text-destructive px-4 py-2 rounded-full mb-6">
                <Gauge className="h-4 w-4 mr-2" />
                <span className="font-medium">Performance Leader</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                EXCELspin Compact
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Advanced compact spinning frame technology that delivers superior yarn quality
                with enhanced productivity. Engineered for modern textile mills requiring
                high-performance spinning solutions in optimized floor space.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {excelSpinFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white/80 p-4 rounded-lg">
                    <div className="shrink-0 p-2 bg-destructive/10 rounded-lg text-destructive mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products/excelspin/">
                  <Button size="lg" className="bg-destructive hover:bg-destructive/90 text-white">
                    <Gauge className="h-5 w-5 mr-2" />
                    Explore EXCELspin
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* <ImageWithFallback */}
                <MyImage
                  src={images.excelspincompact}
                  alt="Aspire Excel EXCELspin Compact - Advanced Spinning Frame Technology"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-destructive/10 to-transparent"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-destructive transform scale-75 sm:scale-100 origin-bottom-left transition-all">
                <div className="flex items-center">
                  <Settings className="h-5 w-5 sm:h-6 sm:w-6 text-destructive mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Design</p>
                    <p className="font-bold text-primary text-xs sm:text-base">Compact Frame</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-primary transform scale-75 sm:scale-100 origin-top-right transition-all">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Performance</p>
                    <p className="font-bold text-accent text-xs sm:text-base">High Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product: Bobbin Transport System */}
        <section className="mb-16 bg-linear-to-br from-primary/5 to-accent/5 rounded-2xl p-4 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
                <Cog className="h-4 w-4 mr-2" />
                <span className="font-medium">Automation Excellence</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Bobbin Transport System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Advanced automated bobbin handling and transport system that streamlines
                textile production workflows. Designed for seamless integration with existing
                spinning frames to reduce manual labor and increase operational efficiency.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {bobbinTransportFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white/80 p-4 rounded-lg">
                    <div className="shrink-0 p-2 bg-primary/10 rounded-lg text-primary mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products/bobbin-transport/">
                  <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <Cog className="h-5 w-5 mr-2" />
                    Explore Transport System
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* <ImageWithFallback */}
                <MyImage
                  src={images.home3}
                  alt="Aspire Excel Yarn Spindle System - White Yarn Bobbins with Green and Red Caps for Precision Threading"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-primary/10 to-transparent"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-primary transform scale-75 sm:scale-100 origin-bottom-left transition-all">
                <div className="flex items-center">
                  <Cog className="h-5 w-5 sm:h-6 sm:w-6 text-primary mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Technology</p>
                    <p className="font-bold text-primary text-xs sm:text-base">Automated</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-accent transform scale-75 sm:scale-100 origin-top-right transition-all">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Efficiency</p>
                    <p className="font-bold text-primary text-xs sm:text-base">High Speed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Product: Autocone Packing System */}
        <section className="mb-16 bg-linear-to-br from-accent/5 to-destructive/5 rounded-2xl p-4 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                <Settings className="h-4 w-4 mr-2" />
                <span className="font-medium">Packaging Innovation</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Autocone Packing System
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                State-of-the-art automated cone winding and packaging system that ensures
                consistent yarn quality and professional presentation. Designed for high-volume
                textile operations requiring efficient cone preparation and quality assurance.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {autoconePackingFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start bg-white/80 p-4 rounded-lg">
                    <div className="shrink-0 p-2 bg-accent/10 rounded-lg text-accent mr-3">
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link to="/products/autocone-packing/">
                  <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    <Settings className="h-5 w-5 mr-2" />
                    Explore Packing System
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                {/* <ImageWithFallback */}
                <MyImage
                  src={images.autoconepackingsystem}
                  alt="Aspire Excel Autocone Packing System - Blue and Orange Automated Industrial Textile Machinery"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-linear-to-t from-accent/10 to-transparent"></div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-accent transform scale-75 sm:scale-100 origin-bottom-left transition-all">
                <div className="flex items-center">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-accent mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Quality</p>
                    <p className="font-bold text-primary text-xs sm:text-base">Premium</p>
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white/95 backdrop-blur-[2px] rounded-lg shadow-xl p-2 sm:p-4 border-l-4 border-destructive transform scale-75 sm:scale-100 origin-top-right transition-all">
                <div className="flex items-center">
                  <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-destructive mr-2" />
                  <div>
                    <p className="text-[10px] sm:text-sm text-gray-600">Speed</p>
                    <p className="font-bold text-primary text-xs sm:text-base">High Output</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="mb-16 bg-linear-to-br from-accent/10 via-primary/5 to-accent/5 rounded-2xl p-4 md:p-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Building2 className="h-4 w-4 mr-2" />
              <span className="font-medium">Trusted Worldwide</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Valued Clients
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by leading textile manufacturers across India & Bangladesh.
              Over 500 mills rely on our automation solutions.
            </p>
          </div>

          {/* INDIA SECTION */}
          <h3 className="text-center text-2xl font-bold text-primary mb-6">India</h3>

          {/* Two Containers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

            {/* TAMIL NADU - Blue Gradient */}
            <div className="bg-linear-to-br from-primary/10 via-primary/5 to-blue-100/50 p-6 rounded-2xl shadow-lg backdrop-blur-[0.2px] border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              <h4 className="text-lg font-bold text-primary mb-4 pb-2 border-b border-primary/20">Tamil Nadu</h4>
              <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
                <li>S.P. Spinning Mills</li>
                <li>KAS Industries</li>
                <li>Vindhya Spinning Mills</li>
                <li>Top Light Textiles Pvt Ltd</li>
                <li>SSK Textiles</li>
                <li>Sri Balaganapathy Spinning Mills – Unit 1</li>
                <li>Dollar Industries</li>
                <li>Ramalinga Mills A Unit</li>
                <li>Royal Classic Mills Pvt Ltd</li>
                <li>Spictex Cotton Mills Pvt Ltd</li>
                <li>Seyad Cotton Mills Ltd</li>
                <li>PAS Cotton Mills Pvt Ltd</li>
                <li>Chendoor Murughan Yarntex India Pvt Ltd</li>
                <li>Sri Rammohan Textiles</li>
                <li>Thirupathy Yarntex Spinners Pvt Ltd</li>
                <li>Sri Balaganapathy Spinning Mills – Unit 2</li>
                <li>Aruppukottai Sri Jayavilas Pvt Ltd</li>
                <li>Sunil Industries</li>
                <li>Arumuga Fabrics Pvt Ltd</li>
                <li>Sri Balaganapathy Spintex</li>
                <li>Janaki Cotton Mills Pvt Ltd</li>
                <li>Tirumathi Muthammal Textiles Pvt Ltd</li>
                <li>Sree Koppammal Cotton Spinning Mills</li>
                <li>Laxmi Sankar Spintex</li>
              </ul>
            </div>

            {/* MAHARASHTRA & OTHER STATES COMBINED - Orange/Red Gradient */}
            <div className="bg-linear-to-br from-accent/10 via-orange-100/50 to-rose-100/50 p-6 rounded-2xl shadow-lg backdrop-blur-[0.2px] border border-[#161243]/24 shadow-[0_4px_30px_rgba(0,0,0,0.1)]">
              {/* Maharashtra */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-accent mb-4 pb-2 border-b border-accent/20">Maharashtra</h4>
                <ul className="space-y-1.5 text-gray-700 text-sm leading-relaxed">
                  <li>Deendayal Magasvargia Sahakari Soot Girni Ltd</li>
                  <li>Anna Bhau Ajara Shetkari Sahakari Soot Girni Ltd</li>
                  <li>Choundeswari Sahakari Soot Girani Ltd</li>
                  <li>Ajinkyatara Sahakari Soot Girani Ltd</li>
                  <li>Krishnaverala Sahakari Soot Girni Ltd</li>
                  <li>Nagpur Zilla Kapus Utpadak Sahakari Soot Girni Ltd</li>
                  <li>Mahatma Phule Sahakari Soot Girni Ltd</li>
                  <li>Mohite Industries Ltd</li>
                </ul>
              </div>

              {/* Other States */}
              <div>
                <h4 className="text-lg font-bold text-destructive mb-4 pb-2 border-b border-destructive/20">Other States</h4>
                <div className="space-y-3">
                  {/* Silvassa */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Silvassa</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Sanathan Textiles Pvt Ltd</li>
                    </ul>
                  </div>

                  {/* Andhra Pradesh */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Andhra Pradesh</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>OTIS Textiles Pvt Ltd</li>
                      <li>Ravali Spinners</li>
                    </ul>
                  </div>

                  {/* Telangana */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Telangana</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Suryauday Spinning Mills Pvt Ltd</li>
                    </ul>
                  </div>

                  {/* Haryana */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Haryana</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>DCM Textiles Ltd (DCM Nouvelle)</li>
                    </ul>
                  </div>

                  {/* Kerala */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Kerala</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>The Malabar Co-op Textiles Ltd</li>
                      <li>Cannanore Co-operative Spinning Mills Ltd</li>
                    </ul>
                  </div>

                  {/* Gujarat */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Gujarat</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Sree Siddhanath Cotex</li>
                    </ul>
                  </div>

                  {/* Punjab */}
                  <div>
                    <p className="font-semibold text-primary text-xs mb-1">Punjab</p>
                    <ul className="space-y-1 text-gray-700 text-sm">
                      <li>Grospinz Fabs Ltd</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* BANGLADESH SECTION - Marquee */}
          <h3 className="text-center text-2xl font-bold text-primary mb-6 mt-8">Bangladesh</h3>

          <div className="relative overflow-hidden py-4">
            <div className="flex animate-marquee whitespace-nowrap">
              {/* First set of clients */}
              <div className="flex items-center gap-8 mx-4">
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Shohagpur Textiles Ltd</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Purbhani Synthetics</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">CRC Textile Mills</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Multazim Textile Mills</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">NZ Group</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Square Textiles</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Saiham Textiles</span>
              </div>

              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-8 mx-4">
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Shohagpur Textiles Ltd</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Purbhani Synthetics</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">CRC Textile Mills</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Multazim Textile Mills</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">NZ Group</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Square Textiles</span>
                <span className="text-lg font-semibold text-primary bg-white/80 px-6 py-3 rounded-lg shadow-md">Saiham Textiles</span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 mt-10">
            <div className="text-center min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold text-primary">500+</div>
              <div className="text-xs md:text-sm text-gray-600">Mills Served</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold text-accent">98%</div>
              <div className="text-xs md:text-sm text-gray-600">Satisfaction</div>
            </div>
            <div className="text-center min-w-[80px]">
              <div className="text-2xl md:text-3xl font-bold text-primary">200K+</div>
              <div className="text-xs md:text-sm text-gray-600">Spindles Automated</div>
            </div>
          </div>
        </section>


        {/* Our Team Section */}
        <section className="bg-linear-to-br from-accent/5 to-secondary/10 rounded-2xl p-4 md:p-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
              <Users className="h-4 w-4 mr-2" />
              <span className="font-medium">Meet Our Experts</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Led by industry veterans with decades of combined experience in textile automation,
              engineering excellence, and client success. Our leadership team drives innovation
              and ensures world-class solutions for every client.
            </p>
          </div>

          <div className="mb-12">
            {/* First Row - 2 Cards */}
            <div className="flex flex-wrap justify-center gap-6 mb-6 max-w-7xl mx-auto">
              {teamMembers.slice(0, 2).map((member, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow group h-full flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] border-[#0000001A]">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent">
                        {member.icon}
                      </div>
                    </div>
                    <CardTitle className="text-primary text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 grow flex flex-col">
                    <div className="mb-3">
                      <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {member.experience}+
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Second Row - 3 Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
              {teamMembers.slice(2, 5).map((member, index) => (
                <Card key={index + 2} className="text-center hover:shadow-lg transition-shadow group h-full flex flex-col border-[#0000001A]">
                  <CardHeader className="pb-4">
                    <div className="w-20 h-20 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <div className="text-accent">
                        {member.icon}
                      </div>
                    </div>
                    <CardTitle className="text-primary text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0 grow flex flex-col">
                    <div className="mb-3">
                      <span className="inline-flex items-center bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                        {member.experience}+
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Team Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">50+</h3>
              <p className="text-gray-600">Team Members</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">100+</h3>
              <p className="text-gray-600">Years Combined Experience</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-destructive/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-gray-600">Support Coverage</p>
            </div>
          </div>

          {/* Team Image */}

        </section>

      </section>
    </div>
  );
}
