import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import metaData from "../../helpers/config/metaData.js";
import { normalizePath } from "../../helpers/pathUtils";

const SchemaManager = () => {
  const { pathname } = useLocation();
  const normalizedPath = normalizePath(pathname);
  const currentMeta = metaData.find(
    (item) => normalizePath(item?.slug) === normalizedPath,
  );
  if (!currentMeta) return null;

  // Determine Schema Type based on path
  let schemaType = "WebPage";
  if (normalizedPath === "/") schemaType = "WebSite";
  else if (normalizedPath === "/about/") schemaType = "AboutPage";
  else if (normalizedPath === "/contact-us/") schemaType = "ContactPage";
  else if (normalizedPath === "/pricing/") schemaType = "OfferCatalog";
  else if (normalizedPath.includes("/service/")) schemaType = "Service";
  else if (normalizedPath === "/services/") schemaType = "ItemList";
  else if (normalizedPath === "/software/") schemaType = "SoftwareApplication";
  else if (normalizedPath.includes("/blog/")) schemaType = "BlogPosting";
  else if (normalizedPath === "/blog/") schemaType = "Blog";

  // Build schema data
  const schema = {
    "@context": "https://schema.org",
    "@type": schemaType,
    name: currentMeta.meta_title,
    description: currentMeta.meta_description,
    url: `https://homsense.in${normalizedPath}`,
    image: `https://homsense.in${currentMeta.og_image}`,
    publisher: {
      "@type": "Organization",
      name: "Homsense",
      url: "https://homsense.in",
      logo: {
        "@type": "ImageObject",
        url: "https://homsense.in/favIcon.png",
      },
      sameAs: [
        "https://www.facebook.com/share/17S2dGm8Eh/?mibextid=wwXIfr",
        "https://www.instagram.com/homsense_india/profilecard/?igsh=dGM4MTUxN21pNmg3",
        "https://www.linkedin.com/company/homsense",
      ],
    },
  };

  // Add type-specific extensions
  if (schemaType === "Service") {
    schema.serviceType = currentMeta.meta_title;
    schema.provider = {
      "@type": "LocalBusiness",
      name: "Homsense",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Coimbatore",
        addressCountry: "IN",
      },
    };
  }

  if (schemaType === "OfferCatalog") {
    schema.itemListElement = [
      { "@type": "Offer", name: "Bronze Package", price: "1.99L" },
      { "@type": "Offer", name: "Silver Package", price: "4.99L" },
      { "@type": "Offer", name: "Gold Package", price: "6.99L" },
    ];
  }

  if (schemaType === "SoftwareApplication") {
    schema.operatingSystem = "All";
    schema.applicationCategory = "HomeAutomationSoftware";
  }

  if (schemaType === "BlogPosting") {
    schema.author = { "@type": "Organization", name: "Homsense" };
    schema.mainEntityOfPage = {
      "@type": "WebPage",
        "@id": `https://homsense.in${normalizedPath}`,
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SchemaManager;
