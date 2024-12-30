const Cover = ({ img, title }) => {
  return (
    <div>
      <div
        className="h-[700px]"
        style={{
          backgroundImage: `url("${img}")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div>
          <h1 className="text-center -mt-[350px] text-white font-bold text-3xl">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Cover;
