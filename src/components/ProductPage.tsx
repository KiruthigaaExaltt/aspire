import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Cog, Zap, Shield, Wrench } from 'lucide-react';
interface ProductPageProps {
  productIndex?: number;
}

export function ProductPage({ productIndex = 0 }: ProductPageProps) {
  // Keep original product pages for other indices
  const products = [
    {
      name: "Auto Doffer",
      description: "Automated doffing system for seamless bobbin management",
      longDescription: "Our Auto Doffer system revolutionizes the spinning process by automatically removing full bobbins and replacing them with empty ones. This advanced automation reduces manual intervention, increases productivity, and ensures consistent quality throughout the spinning operation.",
      features: [
        "Fully automated bobbin exchange",
        "Reduced downtime and labor costs",
        "Consistent yarn quality",
        "Remote monitoring capabilities",
        "Energy-efficient operation"
      ],
      specifications: {
        "Processing Speed": "Up to 1,200 bobbins/hour",
        "Compatibility": "Universal spinning frames",
        "Power Requirements": "5 KW",
        "Dimensions": "2.5m x 1.8m x 2.2m"
      },
      benefits: [
        "50% reduction in labor requirements",
        "30% increase in productivity",
        "Improved yarn quality consistency",
        "Lower operational costs"
      ]
    },
    {
      name: "EXCELspin Compact",
      description: "Compact design for high-performance spinning",
      longDescription: "The EXCELspin Compact retrofit boosts yarn strength, reduces hairiness, and stabilizes CV% with a low-maintenance compacting system.",
      features: [
        "+10–15% tensile (typical) with optimized settings*",
        "Hairiness ↓ up to 20–30% (typical)*",
        "Better U% / CVm and fewer yarn breaks",
        "Energy‑efficient centralized suction module",
        "Quick‑fit condensing unit; minimal frame changes",
        "HMI indicators for suction & filter status"
      ],
      specifications: {
        "Frame Compatibility": "LR6, Zinser, KTTM, G5/1",
        "Count Range": "Ne 20–60 (cotton & blends)",
        "Suction Range": "–18 to –22 kPa (zone)",
        "Filters": "Washable pre‑filters + fine mesh",
        "HMI": "Pressure status, filter alert (optional)",
        "Install Time": "~1–2 shifts/side (typical)",
        "Maintenance": "Daily wipe; weekly filter wash",
        "Power": "Energy‑optimized impeller design"
      },
      benefits: [
        "Quality Leap: Denser yarn with tight structure and low fuzz",
        "Stable Production: Fewer end‑breaks → higher machine efficiency",
        "Retrofit‑Ready: Modular sub‑assemblies; reduced downtime for install",
        "Low Running Cost: Optimized suction path, washable filters"
      ]
    },
    {
      name: "Auto Parking System",
      description: "Intelligent automated parking solution for textile manufacturing facilities",
      longDescription: "Our Auto Parking System provides intelligent vehicle management with advanced robotics and IoT integration. This comprehensive solution optimizes space utilization, reduces operational costs, and enhances security for textile manufacturing facilities.",
      features: [
        "90‑second automated vehicle positioning",
        "±2mm positioning accuracy with laser guidance",
        "50‑500 vehicle capacity with modular expansion",
        "PLC + IoT cloud connectivity for real‑time monitoring",
        "Multi‑layer security with RFID and biometric access",
        "24/7 autonomous operation with predictive maintenance"
      ],
      specifications: {
        "Vehicle Capacity": "50‑500 vehicles (modular)",
        "Processing Speed": "90 seconds/vehicle average",
        "Positioning Accuracy": "±2mm with laser guidance",
        "Power Consumption": "15kW average operation",
        "Control System": "PLC + IoT cloud connectivity",
        "Safety Rating": "SIL 3 certified systems",
        "Operating Temperature": "-20°C to +50°C",
        "Connectivity": "4G/5G, WiFi, Ethernet"
      },
      benefits: [
        "Space Optimization: Maximize facility space utilization",
        "Operational Efficiency: Reduce vehicle retrieval time",
        "Enhanced Security: Multi‑layer access control with monitoring",
        "Cost Reduction: Lower operational costs through automation"
      ]
    },
    {
      name: "Bobbin Transport System",
      description: "Efficient automated transport solution for bobbin management",
      longDescription: "Our Bobbin Transport System provides a comprehensive solution for moving bobbins throughout the production facility. This intelligent conveyor system optimizes material flow, reduces handling time, and ensures seamless integration with existing production equipment.",
      features: [
        "Intelligent routing system",
        "RFID tracking technology",
        "Variable speed control",
        "Automated sorting capabilities",
        "Maintenance-free operation"
      ],
      specifications: {
        "Transport Capacity": "Up to 2,000 bobbins/hour",
        "Track Length": "Customizable up to 500m",
        "Load Capacity": "50kg per meter",
        "Control System": "Distributed PLC network"
      },
      benefits: [
        "Optimized material flow",
        "Reduced transportation time",
        "Lower labor requirements",
        "Improved production scheduling"
      ]
    },
    {
      name: "Autocone Packing System",
      description: "Intelligent automated packing system for yarn cones",
      longDescription: "The Autocone Packing system streamlines the final stage of yarn production with intelligent automation. This sophisticated system automatically packages yarn cones with precision, ensuring optimal protection and presentation while maximizing packaging efficiency.",
      features: [
        "Automated cone handling and packaging",
        "Quality inspection integration",
        "Flexible packaging formats",
        "Barcode labeling system",
        "Statistical reporting capabilities"
      ],
      specifications: {
        "Packing Speed": "Up to 800 cones/hour",
        "Cone Weight Range": "0.5kg to 5kg",
        "Package Types": "Boxes, cartons, pallets",
        "Control Interface": "Touch screen with remote access"
      },
      benefits: [
        "Consistent packaging quality",
        "Reduced manual handling",
        "Improved inventory management",
        "Enhanced product protection"
      ]
    }
  ];

  const currentProduct = products[productIndex];

  if (!currentProduct) {
    return (
      <div className="min-h-screen py-16 px-4 max-w-[1550px] mx-auto text-center">
        <h1 className="text-4xl font-bold text-primary mb-6">Product Not Found</h1>
        <p className="text-gray-600">The requested product could not be found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 lg:py-10 px-4 max-w-[1550px] mx-auto" >
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">{currentProduct.name}</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          {currentProduct.description}
        </p>
      </div>

      {/* Product Overview */}
      <section className="mb-16">
        <Card className="border-2 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Cog className="h-8 w-8 mr-3 text-accent" />
              Product Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-lg leading-relaxed">
              {currentProduct.longDescription}
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Features & Benefits Grid */}
      <section className="mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Zap className="h-6 w-6 mr-2 text-accent" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-primary flex items-center">
                <Shield className="h-6 w-6 mr-2 text-accent" />
                Key Benefits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {currentProduct.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-600">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="mb-16">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary flex items-center">
              <Wrench className="h-8 w-8 mr-3 text-accent" />
              Technical Specifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Object.entries(currentProduct.specifications).map(([key, value], index) => (
                <div key={index} className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                  <span className="font-medium text-primary">{key}:</span>
                  <Badge variant="outline" className="text-gray-700">{value}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg p-8 md:p-12 text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Production?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
            Contact our expert team to learn more about how {currentProduct.name} can
            enhance your textile manufacturing operations.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Request Quote
            </Button>
            <Button size="lg" variant="outline" className="border-white text-primary hover:bg-white hover:text-primary">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}