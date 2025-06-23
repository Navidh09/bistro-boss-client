import { Parallax } from "react-parallax";

const Cover = ({ img, title, desc }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div className="hero h-[600px]">
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content">
            <div className=" bg-[#15151599] w-[900px] h-[400px] flex items-center justify-center flex-col">
              <h1 className="text-[88px] uppercase font-bold cinzel">
                {title}
              </h1>
              <p className="cinzel text-2xl font-semibold -mt-4">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
