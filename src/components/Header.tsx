import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, Factory, Car } from 'lucide-react';
import { MyImage } from './ui/MyImage';
import { images } from '../components/constants/image';
export function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Helper function to convert old route names to new paths
  const getRoutePath = (route: string): string => {
    const routeMap: { [key: string]: string } = {
      'product-0': '/products/auto-parking/',
      'product-1': '/products/auto-doffer/',
      'product-2': '/products/excelspin/',
      'product-3': '/products/bobbin-transport/',
      'product-4': '/products/autocone-packing/'
    };
    return routeMap[route] || '/';
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  // const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const productCategories = {
    textileManagement: {
      title: 'Textile Management',
      icon: <Factory className="h-5 w-5" />,
      image: images.home2,
      products: [
        { name: 'Auto Doffer Retrofit', route: 'product-1', image: images.home2 },
        { name: 'EXCELspin Compact', route: 'product-2', image: images.home3 },
        { name: 'Bobbin Transport System', route: 'product-3', image: images.home4 },
        { name: 'Autocone Packing System', route: 'product-4', image: images.home5 }
      ]
    },
    parkingSystems: {
      title: 'Auto Parking System',
      icon: <Car className="h-5 w-5" />,
      image: images.home1,
      products: [
        { name: 'Auto Parking System', route: 'product-0', image: images.home1 }
      ]
    }
  };



  // Close dropdown when navigating away from product pages
  useEffect(() => {
    // Only close if the path changed away from products, not on every open
    if (!currentPath.startsWith('/products/')) {
      setIsProductsOpen(false);
    }
  }, [currentPath]);

  // Hover handlers for smooth dropdown behavior with delay
  const handleMouseEnter = () => {
    // Clear any existing timeout when mouse enters
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    // Set a 3-second delay before closing the dropdown
    closeTimeoutRef.current = setTimeout(() => {
      setIsProductsOpen(false);
      closeTimeoutRef.current = null;
    }, 3000);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Clear timeout and close immediately on click outside
        if (closeTimeoutRef.current) {
          clearTimeout(closeTimeoutRef.current);
          closeTimeoutRef.current = null;
        }
        setIsProductsOpen(false);
      }
    };

    if (isProductsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProductsOpen]);

  // Close mobile menu on scroll - REMOVED to allow interaction while scrolled
  // Previous logic was causing issues with mobile navigation accessibility

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-[1550px] mx-auto px-4 sm:px-6 lg:px-4">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center cursor-pointer"
          >
            <MyImage
              src={images.newAspireLogo}
              alt="Aspire Excel - Keep trust, We care rest"
              className="h-22 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-16">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md transition-colors ${currentPath === '/'
                ? 'text-accent'
                : 'text-primary hover:text-accent'
                }`}
            >
              Home
            </Link>

            <Link
              to="/about/"
              className={`px-3 py-2 rounded-md transition-colors ${currentPath === '/about/'
                ? 'text-accent'
                : 'text-primary hover:text-accent'
                }`}
            >
              About Us
            </Link>

            {/* Products Dropdown */}
            <div
              className="relative"
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center px-3 py-2 rounded-md transition-colors ${currentPath.startsWith('/products')
                  ? 'text-accent'
                  : 'text-primary hover:text-accent'
                  }`}
                onClick={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setIsProductsOpen((prev) => !prev);
                }}
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProductsOpen && (
                <>
                  {/* Desktop (≥1024px): Side-by-side layout with right alignment */}
                  <div className="hidden lg:block absolute top-full right-0 mt-2 w-[680px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
                    {/* Arrow pointing to trigger */}
                    <div className="absolute -top-2 right-8 w-4 h-4 bg-gray-50 border-l border-t border-gray-200 transform rotate-45"></div>

                    <div className="flex">
                      {/* Left: Product Links (60%) */}
                      <div className="w-[60%] p-5 border-r border-gray-200">
                        <div className="space-y-4">
                          {/* Textile Management */}
                          <div>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                              <div className="text-primary">{productCategories.textileManagement.icon}</div>
                              <h3 className="font-semibold text-primary">
                                {productCategories.textileManagement.title}
                              </h3>
                            </div>
                            <div className="space-y-1">
                              {productCategories.textileManagement.products.map((product) => (
                                <Link
                                  key={product.route}
                                  to={getRoutePath(product.route)}
                                  onMouseEnter={() => setHoveredProduct(product.route)}
                                  onMouseLeave={() => setHoveredProduct(null)}
                                  onClick={() => setIsProductsOpen(false)}
                                  className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-100 hover:text-accent rounded-md transition-colors duration-200"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </div>

                          {/* Auto Parking System */}
                          <div>
                            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                              <div className="text-primary">{productCategories.parkingSystems.icon}</div>
                              <h3 className="font-semibold text-primary">
                                {productCategories.parkingSystems.title}
                              </h3>
                            </div>
                            <div className="space-y-1">
                              {productCategories.parkingSystems.products.map((product) => (
                                <Link
                                  key={product.route}
                                  to={getRoutePath(product.route)}
                                  onMouseEnter={() => setHoveredProduct(product.route)}
                                  onMouseLeave={() => setHoveredProduct(null)}
                                  onClick={() => setIsProductsOpen(false)}
                                  className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-100 hover:text-accent rounded-md transition-colors duration-200"
                                >
                                  {product.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right: Preview Image Panel (40%) - Vertically Centered */}
                      <div className="w-[40%] p-5 flex items-center justify-center bg-gray-50">
                        <div className="w-full h-48 relative overflow-hidden rounded-lg">
                          {hoveredProduct ? (() => {
                            const allProducts = [
                              ...productCategories.textileManagement.products,
                              ...productCategories.parkingSystems.products
                            ];
                            const currentProduct = allProducts.find(p => p.route === hoveredProduct);
                            return currentProduct ? (
                              <MyImage
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                              />
                            ) : (
                              <MyImage
                                src={images.autodofferretreofit}
                                alt="Auto Doffer Retrofit"
                                className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                              />
                            );
                          })() : (
                            <MyImage
                              src={images.autodofferretreofit}
                              alt="Auto Doffer Retrofit"
                              className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Tablet (768-1023px): Centered, single column with preview below */}
                  <div className="hidden md:block lg:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
                    {/* Arrow pointing to trigger */}
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-l border-t border-gray-200 transform rotate-45"></div>

                    <div className="p-5">
                      {/* Product Links */}
                      <div className="space-y-4 mb-4">
                        {/* Textile Management */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                            <div className="text-primary">{productCategories.textileManagement.icon}</div>
                            <h3 className="font-semibold text-primary">
                              {productCategories.textileManagement.title}
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {productCategories.textileManagement.products.map((product) => (
                              <Link
                                key={product.route}
                                to={getRoutePath(product.route)}
                                onMouseEnter={() => setHoveredProduct(product.route)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                onClick={() => setIsProductsOpen(false)}
                                className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-100 hover:text-accent rounded-md transition-colors duration-200"
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        </div>

                        {/* Auto Parking System */}
                        <div>
                          <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-200">
                            <div className="text-primary">{productCategories.parkingSystems.icon}</div>
                            <h3 className="font-semibold text-primary">
                              {productCategories.parkingSystems.title}
                            </h3>
                          </div>
                          <div className="space-y-1">
                            {productCategories.parkingSystems.products.map((product) => (
                              <Link
                                key={product.route}
                                to={getRoutePath(product.route)}
                                onMouseEnter={() => setHoveredProduct(product.route)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                onClick={() => setIsProductsOpen(false)}
                                className="block w-full text-left px-3 py-2 text-primary hover:bg-gray-100 hover:text-accent rounded-md transition-colors duration-200"
                              >
                                {product.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Preview Panel Below */}
                      <div className="w-full h-40 border-t border-gray-200 pt-4">
                        <div className="w-full h-full relative overflow-hidden rounded-lg bg-gray-50">
                          {hoveredProduct ? (() => {
                            const allProducts = [
                              ...productCategories.textileManagement.products,
                              ...productCategories.parkingSystems.products
                            ];
                            const currentProduct = allProducts.find(p => p.route === hoveredProduct);
                            return currentProduct ? (
                              <MyImage
                                src={currentProduct.image}
                                alt={currentProduct.name}
                                className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                              />
                            ) : (
                              <MyImage
                                src={images.autodofferretreofit}
                                alt="Auto Doffer Retrofit"
                                className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                              />
                            );
                          })() : (
                            <MyImage
                              src={images.autodofferretreofit}
                              alt="Auto Doffer Retrofit"
                              className="w-full h-full object-cover transition-opacity duration-300 rounded-lg border border-gray-200"
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            <Link
              to="/gallery/"
              className={`px-3 py-2 rounded-md transition-colors ${currentPath === '/gallery/'
                ? 'text-accent'
                : 'text-primary hover:text-accent'
                }`}
            >
              Gallery
            </Link>

            <Link
              to="/clients/"
              className={`px-3 py-2 rounded-md transition-colors ${currentPath === '/clients/'
                ? 'text-accent'
                : 'text-primary hover:text-accent'
                }`}
            >
              Clients
            </Link>

            <Link
              to="/contact/"
              className={`px-3 py-2 rounded-md transition-colors ${currentPath === '/contact/'
                ? 'text-accent'
                : 'text-primary hover:text-accent'
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation (<768px): Full-width bottom sheet, list only, no preview */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 animate-slideDown">
            <nav className="py-4 space-y-1 max-h-[calc(100vh-80px)] overflow-y-auto">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${currentPath === '/'
                  ? 'text-accent bg-accent/10 border-l-4 border-accent'
                  : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
              >
                Home
              </Link>

              <Link
                to="/about/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${currentPath === '/about/'
                  ? 'text-accent bg-accent/10 border-l-4 border-accent'
                  : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
              >
                About Us
              </Link>

              {/* Products - List only, no images */}
              <div className="px-4 py-2">
                <p className="py-2 text-primary font-medium flex items-center gap-2">
                  <ChevronDown className="h-4 w-4" />
                  Products
                </p>

                {/* Textile Management Section */}
                <div className="mb-4 bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 py-2 text-primary font-medium mb-2">
                    <Factory className="h-4 w-4" />
                    Textile Management
                  </div>
                  <div className="space-y-1">
                    {productCategories.textileManagement.products.map((product) => (
                      <Link
                        key={product.route}
                        to={getRoutePath(product.route)}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left pl-6 py-2 rounded-md transition-all duration-200 ${currentPath === getRoutePath(product.route)
                          ? 'text-accent bg-white font-medium'
                          : 'text-primary hover:text-accent hover:bg-white'
                          }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Auto Parking System Section */}
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex items-center gap-2 py-2 text-primary font-medium mb-2">
                    <Car className="h-4 w-4" />
                    Auto Parking System
                  </div>
                  <div className="space-y-1">
                    {productCategories.parkingSystems.products.map((product) => (
                      <Link
                        key={product.route}
                        to={getRoutePath(product.route)}
                        onClick={() => setIsMenuOpen(false)}
                        className={`block w-full text-left pl-6 py-2 rounded-md transition-all duration-200 ${currentPath === getRoutePath(product.route)
                          ? 'text-accent bg-white font-medium'
                          : 'text-primary hover:text-accent hover:bg-white'
                          }`}
                      >
                        {product.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                to="/gallery/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${currentPath === '/gallery/'
                  ? 'text-accent bg-accent/10 border-l-4 border-accent'
                  : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
              >
                Gallery
              </Link>

              <Link
                to="/clients/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${currentPath === '/clients/'
                  ? 'text-accent bg-accent/10 border-l-4 border-accent'
                  : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
              >
                Clients
              </Link>

              <Link
                to="/contact/"
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left px-4 py-3 transition-all duration-200 ${currentPath === '/contact/'
                  ? 'text-accent bg-accent/10 border-l-4 border-accent'
                  : 'text-primary hover:text-accent hover:bg-gray-50'
                  }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
