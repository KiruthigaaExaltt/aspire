import { Link } from "react-router-dom";
import { images } from "../constants/image";
import { MyImage } from "../ui/MyImage";


const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-12 px-4 text-center bg-background">
      <div className="max-w-7xl w-full mb-8">
        <MyImage
          src={images?.NotFound}
          alt="Not Found Image"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </div>
      <Link to="/">
        {/* <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
          Back to Home
        </Button> */}
      </Link>
    </div>
  );
};

export default NotFound;
