import { Parallax } from "react-parallax";
const Cover = ({ img, title }) => {
  return (
    <div className="mb-12">
      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div>
            <h1 className="text-center -mt-[350px] text-white font-bold text-3xl">
              {title}
            </h1>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
