const Pricing = () => {
  return (
    <div className="relative w-[90%] h-[80%] mx-auto rounded-sm shadow-2xl p-8 bg-white overflow-hidden">
      <div className="w-full h-[50%] bg-[#eff8fa] rounded-bl-[120px] absolute top-0 left-0"></div>
      
      <div className="h-1/2 text-black relative z-10 text-center mt-4">
        <div className="font-bold text-3xl text-[#322463]">
          Simple, traffic-based pricing  
        </div>        
        <div className="font-medium text-sm text-gray-500 mt-4">
          Sign-up for our 30-day trial. No credit card required.
        </div>

        <div className="mx-auto mt-6 w-[80%] max-w-sm rounded-sm shadow-lg p-6 bg-white">
          <div className="text-[#322463] text-lg font-semibold">
            Small Card Title
          </div>
          <div className="text-gray-600 mt-2">
            This is a smaller shadowed card inside the larger pricing card.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
