const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center my-20 cinzel w-3/12 mx-auto">
      <p className="text-[#DA9B09] text-xl italic">---{subHeading}---</p>
      <h3 className="uppercase border-y-4 border-[#E8E8E8] py-4 text-3xl mt-2">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
