import { useLocation } from "react-router-dom";
import metaData from "../../metaData.js";
import useMetaTags from "../hooks/useMetaTags";

const MetaTags = () => {
  const { pathname } = useLocation();

  useMetaTags(metaData, {
    getPath: () => pathname.toLowerCase().replace(/\/+$/, "") || "/",
    includeTwitter: true,
    setOgUrl: true,
    twitterCard: "summary_large_image",
  });

  return <></>;
};

export default MetaTags;
