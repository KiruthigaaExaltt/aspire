import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { AutoDofferPage } from './components/AutoDofferPage';
import { ExcelSpinPage } from './components/ExcelSpinPage';
import { AutoParkingSystemPage } from './components/AutoParkingSystemPage';
import { BobbinTransportPage } from './components/BobbinTransportPage';
import { AutoconePackingPage } from './components/AutoconePackingPage';
import { ProductPage } from './components/ProductPage';
import { GalleryPage } from './components/GalleryPage';
import { ContactPage } from './components/ContactPage';
import { ClientPage } from './components/ClientPage';
import { ScrollToTopButton } from './components/ScrollToTopButton';
import NotFound from './components/pages/NotFound';

import { Phone, MessageCircle, Mail, MapPin, Factory, Globe, Zap, Car, Cog } from 'lucide-react';
import { images } from './components/constants/image';
import MetaTags from './components/MetaTags';
import { MyImage } from './components/ui/MyImage';
import { paths } from './components/constants/paths';

// Component to handle scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Error Boundary Component
// function ErrorPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center">
//       <div className="text-center">
//         <h2 className="text-2xl font-bold text-primary mb-4">Something went wrong</h2>
//         <p className="text-gray-600 mb-4">We're experiencing technical difficulties.</p>
//         <Link
//           to="/"
//           className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 inline-block"
//         >
//           Return to Home
//         </Link>
//       </div>
//     </div>
//   );
// }



// Navigation wrapper component
function NavigationWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="transition-opacity duration-200 ease-in-out">
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-gray-600">Loading...</p>
            </div>
          </div>
        }>
          {children}
        </Suspense>
      </main>

      {/* Professional Footer */}
      <Footer />

      {/* Global Scroll to Top Button */}
      <ScrollToTopButton />
    </div>
  );
}

// Footer component extracted for reusability
function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Branding & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center mb-4">
              <MyImage
                src={images.newAspireLogo}
                alt="Aspire Excel"
                className="h-12 w-auto mr-3"
              />
              <div>
                <h3 className="font-bold text-xl text-primary">Aspire Grand Excel</h3>
                <p className="text-primary text-sm">Automation</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Leading manufacturer of innovative textile machinery and automation solutions.
              Transforming spinning mills across India & Bangladesh with proven retrofits.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="tel:9087102929" className="bg-white hover:bg-primary/90 text-black hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105 border border-gray-300">
                <Phone className="h-4 w-4" />
                Call Now
              </a>
              <a href="https://wa.me/9087102929?text=" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] hover:bg-[#1db954] text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105">
                <MessageCircle className="h-4 w-4" />
                WhatsApp
              </a>
              <a href="mailto:aspiregrandexcel@gmail.com" className="border border-gray-300 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 hover:scale-105">
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </div>

          {/* Products Navigation */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Products</h4>

            {/* Textile Management Category */}
            <div className="mb-6">
              <h5 className="flex items-center gap-2 mb-3 text-primary font-medium">
                <Cog className="h-4 w-4" />
                Textile Management
              </h5>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>
                  <Link to="/products/auto-doffer/" className="hover:text-primary transition-colors cursor-pointer">
                    Auto Doffer Retrofit
                  </Link>
                </li>
                <li>
                  <Link to="/products/excelspin/" className="hover:text-primary transition-colors cursor-pointer">
                    EXCELspin Compact
                  </Link>
                </li>
                <li>
                  <Link to="/products/bobbin-transport/" className="hover:text-primary transition-colors cursor-pointer">
                    Bobbin Transport System
                  </Link>
                </li>
                <li>
                  <Link to="/products/autocone-packing/" className="hover:text-primary transition-colors cursor-pointer">
                    Autocone Packing System
                  </Link>
                </li>
              </ul>
            </div>

            {/* Auto Parking System Category */}
            <div>
              <h5 className="flex items-center gap-2 mb-3 text-primary font-medium">
                <Car className="h-4 w-4" />
                Auto Parking System
              </h5>
              <ul className="space-y-2 text-gray-600 ml-6">
                <li>
                  <Link to="/products/auto-parking/" className="hover:text-primary transition-colors cursor-pointer">
                    Auto Parking System
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="font-bold mb-4 text-primary">Contact Info</h4>
            <div className="space-y-4 text-gray-600">
              <a href="tel:+919087102929" className="flex items-center transition-colors cursor-pointer group">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <div className="font-medium group-hover:text-primary transition-colors">+91 90871 02929</div>
                </div>
              </a>
              <a href="mailto:aspiregrandexcel@gmail.com" className="flex items-center transition-colors cursor-pointer group">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0 group-hover:scale-110 transition-transform duration-200" />
                <div className="group-hover:text-primary transition-colors">aspiregrandexcel@gmail.com</div>
              </a>
              <div className="flex items-start group">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <a href="https://maps.app.goo.gl/2vZaKTHTMZdUWAeV6" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors cursor-pointer">111/109A, Civil Aerodrome Road, SIHS Colony, Singanallur, Coimbatore‑641014</a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12">
          {/* Achievement Stats Above Line */}
          <div className="flex  mb-6">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm">
              <span className="text-primary font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <Factory className="h-4 w-4" />
                500+ Mills Served
              </span>
              <span className="text-primary font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <Globe className="h-4 w-4" />
                India & Bangladesh
              </span>
              <span className="text-primary font-medium flex items-center gap-2 hover:scale-105 transition-transform duration-200">
                <Zap className="h-4 w-4" />
                200,000+ Spindles
              </span>
            </div>
          </div>

          {/* Horizontal Line */}
                     
            <div className="border-t border-white/10 pt-6 text-gray-500">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <span className="text-center text-xs text-gray-500 sm:text-left">
                  © {new Date().getFullYear()} Aspire Grand Excel Automation. All rights reserved.
                </span>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-[10px] tracking-wide text-gray-500 sm:text-xs sm:tracking-wider">
                      Powered By
                    </span>
                    <a
                      href={paths?.poweredByECS}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center"
                    >
                      <MyImage
                        src={images?.ECSLogo}
                        alt="ECS Logo"
                        className="h-6 w-auto sm:h-8"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}

export default function App() {

  return (
    <Router>
      <ScrollToTop />
      <MetaTags />
      <Routes>
        <Route path="/" element={
          <NavigationWrapper>
            <HomePage />
          </NavigationWrapper>
        } />

        <Route path="/about/" element={
          <NavigationWrapper>
            <AboutPage />
          </NavigationWrapper>
        } />

        <Route path="/products/" element={
          <NavigationWrapper>
            <ProductPage />
          </NavigationWrapper>
        } />

        <Route path="/products/auto-parking/" element={
          <NavigationWrapper>
            <AutoParkingSystemPage />
          </NavigationWrapper>
        } />

        <Route path="/products/auto-doffer/" element={
          <NavigationWrapper>
            <AutoDofferPage />
          </NavigationWrapper>
        } />

        <Route path="/products/excelspin/" element={
          <NavigationWrapper>
            <ExcelSpinPage />
          </NavigationWrapper>
        } />

        <Route path="/products/bobbin-transport/" element={
          <NavigationWrapper>
            <BobbinTransportPage />
          </NavigationWrapper>
        } />

        <Route path="/products/autocone-packing/" element={
          <NavigationWrapper>
            <AutoconePackingPage />
          </NavigationWrapper>
        } />

        <Route path="/gallery/" element={
          <NavigationWrapper>
            <GalleryPage />
          </NavigationWrapper>
        } />

        <Route path="/contact/" element={
          <NavigationWrapper>
            <ContactPage />
          </NavigationWrapper>
        } />

        <Route path="/clients/" element={
          <NavigationWrapper>
            <ClientPage />
          </NavigationWrapper>
        } />

        {/* Catch all route for 404 */}
        <Route path="*" element={
          <NotFound />
        } />
      </Routes>
    </Router>
  );
}