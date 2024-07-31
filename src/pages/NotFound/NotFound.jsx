import { useEffect } from "react";
import image from "../../assets/images.png";
export default function NotFound() {
  useEffect(() => {
    document.title = "404";
  }, []);
  return (
    <div className="  min-h-lvh flex  justify-center items-center">
      <img src={image} alt="notFound" className="  w-full" />
    </div>
  );
}
