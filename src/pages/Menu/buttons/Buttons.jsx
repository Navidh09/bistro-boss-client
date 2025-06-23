const Buttons = ({ title }) => {
  return (
    <div>
      <button className="btn mt-16 flex mx-auto btn-outline uppercase rounded-md border-0 border-b-4 border-b-[#1F2937] text-[#1F2937] text-xl font-medium py-6 px-9 shadow-2xl">
        {title}
      </button>
    </div>
  );
};

export default Buttons;
