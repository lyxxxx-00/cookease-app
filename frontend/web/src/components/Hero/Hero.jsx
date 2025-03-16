import cover from "../../assets/cover.jpg";
import Intro from "./Intro";

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-orange-500">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={cover}
          alt="cover"
          className="h-full w-full opacity-70 object-cover"
        />
      </div>
      <Intro />
    </div>
  );
};

export default Hero;
