import { useNavigate } from 'react-router-dom';

export function useNavigation() {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const pageRoutes: { [key: string]: string } = {
      'home': '/',
      'about': '/about/',
      'products': '/products/',
      'product-0': '/products/auto-parking/',
      'product-1': '/products/auto-doffer/',
      'product-2': '/products/excelspin/',
      'product-3': '/products/bobbin-transport/',
      'product-4': '/products/autocone-packing/',
      'gallery': '/gallery/',
      'contact': '/contact/',
      'clients': '/clients/'
    };

    const route = pageRoutes[page] || '/';
    navigate(route);
  };

  return { handleNavigate };
}