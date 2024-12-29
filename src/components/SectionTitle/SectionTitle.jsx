import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="w-3/12 mx-auto">
      <p className="text-green-700 font-semibold italic mb-1 text-center">
        --- {subHeading} ---
      </p>
      <h3 className="text-purple-950 text-3xl font-bold border-y-[3px] mb-12 py-2 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
