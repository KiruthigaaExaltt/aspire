import { useState, useEffect } from 'react';

import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { images } from '../components/constants/image';
import { MyImage } from './ui/MyImage';
import {
  X,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Cog
} from 'lucide-react';

import { MessageSquare } from 'lucide-react';

interface GalleryImage {
  id: string;
  url: string | any;
  title: string;
  category: string;
  description: string;
  altText: string;
  location?: string;
  module?: string;
  countRange?: string;
  spindleBank?: string;
  date?: string;
  specs?: string;
  isVideo?: boolean;
}

export function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Featured Gallery Images based on your specifications
  const galleryImages: GalleryImage[] = [
    {
      id: 'hmi-action',
      url: images.gallery1,
      title: 'Auto Doffer – HMI in Action',
      category: 'Products',
      description: 'Touchscreen HMI displaying doff cycle status, fault logs, and 10-day doff history with 7-day fault tracking.',
      altText: 'Touchscreen HMI showing doff cycle and fault log',
      location: 'Aspire Excel Factory',
      module: 'Controls & HMI',
      date: '2024',
      specs: 'PLC + proximity sensors; fault messages; doff history'
    },
    {
      id: 'nylon-gripper',
      url: images.gallery2,
      title: 'Auto Doffer – Nylon Gripper',
      category: 'Products',
      description: 'Fail-safe nylon gripper on steel conveyor pegs, designed for smooth and reliable cop handling.',
      altText: 'Nylon fail‑safe gripper picking full cops',
      location: 'Client Site Installation',
      module: 'Gripper & Conveyor',
      date: '2024',
      specs: 'Nylon fail-safe design; steel conveyor pegs'
    },
    {
      id: 'planetary-gearbox',
      url: images.gallery3,
      title: 'Auto Doffer – Planetary Gearbox',
      category: 'Products',
      description: 'High-torque planetary gearbox mounted on doffer beam for superior power transmission and reliability.',
      altText: 'Planetary gearbox mounted on doffer beam',
      location: 'Aspire Excel Testing',
      module: 'Drive & Gearbox',
      date: '2024',
      specs: 'High torque output; low maintenance design'
    },
    {
      id: 'condensing-zone',
      url: images.gallery4,
      title: 'EXCELspin – Condensing Zone',
      category: 'Products',
      description: 'Lattice apron and nose bar assembly at the compact condensing zone, ensuring precise fiber guidance.',
      altText: 'Lattice apron and nose bar at compact zone',
      location: 'Client Mill Installation',
      module: 'Condensing Unit',
      countRange: 'Ne 20-60',
      date: '2024',
      specs: 'Precise nip; fiber ribbon integrity maintained'
    },
    {
      id: 'suction-manifold',
      url: images.gallery5,
      title: 'EXCELspin – Suction Manifold',
      category: 'Products',
      description: 'Central suction manifold with washable pre-filters and differential pressure monitoring system.',
      altText: 'Central suction manifold with washable filters',
      location: 'Aspire Excel Factory',
      module: 'Suction System',
      date: '2024',
      specs: 'High efficiency; washable filters; -18 to -22 kPa'
    },
    {
      id: 'yarn-hairiness',
      url: images.gallery6,
      title: 'Before/After – Hairiness',
      category: 'Before/After',
      description: 'Macro comparison showing 20-30% reduction in yarn hairiness with EXCELspin Compact technology.',
      altText: 'Compact yarn vs conventional hairiness macro',
      location: 'Quality Lab',
      date: '2024',
      specs: 'Hairiness reduction: 20-30% typical'
    },
    {
      id: 'fabric-smoothness',
      url: images.gallery7,
      title: 'Fabric – Surface Smoothness',
      category: 'Before/After',
      description: 'Fabric woven with compact yarn shows significantly improved surface smoothness and quality.',
      altText: 'Compact yarn fabric with smoother surface',
      location: 'Quality Lab',
      date: '2024',
      specs: 'Tensile improvement: +10% to +15%'
    },
    {
      id: 'installation-1200',
      url: images.gallery8,
      title: 'Installation – 1200 Spindles',
      category: 'Installations',
      description: 'Complete auto doffer retrofit installation across 1200 spindles showing mill aisle view.',
      altText: 'Retrofit installed across 1200 spindles at mill',
      location: 'Client Mill - India',
      spindleBank: '1200 spindles',
      date: '2024',
      specs: 'Doff time: ~2 min; Air: 2-3 CFM/doff'
    },
    {
      id: 'client-board',
      url: images.gallery9,
      title: 'Client Board',
      category: 'Clients',
      description: 'Client success board displaying key production metrics and performance improvements after installation.',
      altText: 'Client success board with production metrics',
      location: 'Client Mill - Bangladesh',
      date: '2024',
      specs: 'Efficiency gains: 30% productivity increase'
    },
    {
      id: 'factory-assembly',
      url: images.gallery10,
      title: 'Factory – Assembly Line',
      category: 'Factory',
      description: 'Auto doffer assembly line with comprehensive QA checks and testing procedures.',
      altText: 'Auto doffer assembly and QA checks',
      location: 'Aspire Excel Factory',
      date: '2024',
      specs: 'Quality control at every stage'
    },
    {
      id: 'testing-jig',
      url: images.gallery11,
      title: 'Factory – Testing Jig',
      category: 'Factory',
      description: 'Functional testing of gripper mechanisms and sensor systems using specialized test jigs.',
      altText: 'Functional testing of gripper and sensors',
      location: 'Aspire Excel Testing Lab',
      date: '2024',
      specs: 'Comprehensive functionality validation'
    },
    {
      id: 'certificates',
      url: images.gallery12,
      title: 'Certificates & Awards',
      category: 'Certificates',
      description: 'Display of compliance certificates, quality awards, and industry recognitions.',
      altText: 'Awards and compliance certificates',
      location: 'Aspire Excel Office',
      date: '2024',
      specs: 'ISO certified; industry awards'
    }
  ];

  const categories = ['All', 'Installations', 'Products', 'Before/After', 'Factory', 'Clients', 'Certificates'];

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  const handlePrevImage = () => {
    if (selectedImage !== null && selectedImage > 0) {
      setSelectedImage(selectedImage - 1);
    }
  };

  const handleNextImage = () => {
    if (selectedImage !== null && selectedImage < filteredImages.length - 1) {
      setSelectedImage(selectedImage + 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (selectedImage === null) return;

      switch (event.key) {
        case 'Escape':
          setSelectedImage(null);
          break;
        case 'ArrowLeft':
          handlePrevImage();
          break;
        case 'ArrowRight':
          handleNextImage();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, filteredImages.length]);

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section
        className="relative pt-24 pb-8 sm:pt-32 sm:pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${typeof images.galleryhero === 'string' ? images.galleryhero : (images.galleryhero as any).img.src})`
        }}
      >
        {/* Blue themed overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/70 to-accent/60"></div>

        <div className="max-w-7xl mx-auto px-4 py-12 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-6xl mx-auto">
            A visual look at our products, installations, and performance—right from the shop floor to your ring frames.
          </p>
          <p className="text-lg text-white/80 mb-8 max-w-3xl mx-auto">
            Browse categories or open any image to view details, captions, and specs. For plant visits and demos, contact our team.
          </p>


        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all duration-200 font-medium ${selectedCategory === category
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:text-gray-900'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16 ">
          {filteredImages.map((image, index) => (
            <figure
              key={image.id}
              className="group cursor-pointer rounded-2xl overflow-hidden border bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-[#0000001a]"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                {/* <ImageWithFallback */}
                <MyImage
                  src={image.url}
                  alt={image.altText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3">
                  <Badge className="bg-accent text-accent-foreground">
                    {image.category}
                  </Badge>
                </div>
              </div>
              <figcaption className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-primary text-sm">{image.title}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {image.location && (
                    <>
                      <span className="font-medium">Plant:</span> {image.location}
                      {image.module && (
                        <>
                          {' • '}
                          <span className="font-medium">Module:</span> {image.module}
                        </>
                      )}
                    </>
                  )}
                </p>
              </figcaption>
            </figure>
          ))}
        </section>

        {/* Image Lightbox Modal */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-7xl max-h-[95vh] overflow-auto p-0">
            {selectedImage !== null && (
              <div className="relative">
                {/* Navigation Arrows */}
                {selectedImage > 0 && (
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                )}
                {selectedImage < filteredImages.length - 1 && (
                  <button
                    onClick={handleNextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                )}

                {/* Close Button */}
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>

                {/* Image */}
                <div className="relative">
                  {/* <ImageWithFallback */}
                  <MyImage
                    src={filteredImages[selectedImage]?.url}
                    alt={filteredImages[selectedImage]?.altText}
                    className="w-full max-h-[60vh] object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <DialogHeader className="mb-4">
                    <DialogTitle className="text-2xl text-primary">
                      {filteredImages[selectedImage]?.title}
                    </DialogTitle>
                  </DialogHeader>

                  <div className="space-y-4">
                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed">
                      {filteredImages[selectedImage]?.description}
                    </p>

                    {/* Tech Tags */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-primary">Details</h4>
                        <div className="space-y-1 text-sm">
                          {filteredImages[selectedImage]?.location && (
                            <div className="flex items-center gap-2">
                              <MapPin className="h-4 w-4 text-accent" />
                              <span className="font-medium">Location:</span>
                              <span className="text-gray-600">{filteredImages[selectedImage]?.location}</span>
                            </div>
                          )}
                          {filteredImages[selectedImage]?.module && (
                            <div className="flex items-center gap-2">
                              <Cog className="h-4 w-4 text-accent" />
                              <span className="font-medium">Module:</span>
                              <span className="text-gray-600">{filteredImages[selectedImage]?.module}</span>
                            </div>
                          )}
                          {filteredImages[selectedImage]?.countRange && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Count Range:</span>
                              <span className="text-gray-600">{filteredImages[selectedImage]?.countRange}</span>
                            </div>
                          )}
                          {filteredImages[selectedImage]?.spindleBank && (
                            <div className="flex items-center gap-2">
                              <span className="font-medium">Spindle Bank:</span>
                              <span className="text-gray-600">{filteredImages[selectedImage]?.spindleBank}</span>
                            </div>
                          )}
                          {filteredImages[selectedImage]?.date && (
                            <div className="flex items-center gap-2">
                              <Clock className="h-4 w-4 text-accent" />
                              <span className="font-medium">Date:</span>
                              <span className="text-gray-600">{filteredImages[selectedImage]?.date}</span>
                            </div>
                          )}
                        </div>
                      </div>

                      {filteredImages[selectedImage]?.specs && (
                        <div className="space-y-2">
                          <h4 className="font-semibold text-primary">Specifications</h4>
                          <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                            {filteredImages[selectedImage]?.specs}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="flex items-center gap-2">
                      <Badge className="bg-accent text-accent-foreground">
                        {filteredImages[selectedImage]?.category}
                      </Badge>
                    </div>

                    {/* Action Buttons */}

                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Contact Section */}
        <section className="bg-gradient-to-br from-primary to-primary/80 text-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need specific shots or a demo?
              </h2>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Tell us your frame make & count range—we'll share relevant installs and arrange a visit.
              </p>

              <div className="space-y-4">
                <div className="flex items-center group">
                  <MapPin className="h-5 w-5 mr-3 text-accent group-hover:scale-110 transition-transform" />
                  <a href="https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6" target="_blank" rel="noopener noreferrer" className="text-sm opacity-90 hover:text-accent transition-colors cursor-pointer">
                    111/109A, Civil Aerodrome Road, SIHS Colony, Singanallur, Coimbatore‑641014
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 text-accent" />
                  <a href="mailto:aspiregrandexcel@gmail.com" className="text-sm opacity-90 hover:text-accent transition-colors">
                    aspiregrandexcel@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-accent" />
                  <a href="tel:+919087102929" className="text-sm opacity-90 hover:text-accent transition-colors">
                    +91 90871 02929
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-right">
              <div className="flex flex-col items-center lg:items-end space-y-4">
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
                <a href="https://wa.me/919087102929?text=" target="_blank" rel="noopener noreferrer" className="w-full lg:w-auto">
                  <Button
                    size="lg"
                    className="!bg-white !text-black !border-[#25D366] hover:!bg-[#25D366] hover:!text-white w-full lg:w-64"
                  >
                    <MessageSquare className="h-5 w-5 mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
