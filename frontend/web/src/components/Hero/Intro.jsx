import { intro } from "../../constants/index";

const Intro = () => {
  return (
    <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center space-y-8 px-6 text-center py-24 md:px-12">
      <h1 className="mt-20 text-4xl font-bold leading-tight text-white text-outline-1 md:text-6xl">
        {intro.title}
      </h1>
      <p className="text-lg text-orange-50 md:text-xl">{intro.description1}</p>
      <p className="text-lg text-orange-50 md:text-xl">{intro.description2}</p>
      <div className="flex flex-row space-x-10 justify-center items-center md:space-x-20">
        <button className="w-40 transform rounded-full bg-orange-100 px-6 py-3 font-semibold text-orange-800 shadow-lg transitionn hover:scale-105 hover:bg-orange-200">
          Get Started⬇️
        </button>
        <button className="w-40 transform rounded-full bg-orange-500 px-6 py-3 font-semibold text-orange-50 shadow-lg transitionn hover:scale-105 hover:bg-orange-400">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Intro;
