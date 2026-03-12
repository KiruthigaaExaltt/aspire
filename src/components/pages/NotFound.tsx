import { images } from "../constants/image";
import { MyImage } from "../ui/MyImage";

const NotFound = () => {
  return (
    <div className="h-screen w-screen">
      <MyImage
        src={images?.NotFound}
        alt="Not Found Image"
        className="h-full w-full bg-[#0097a8] object-contain"
      />
    </div>
  );
};

export default NotFound;
