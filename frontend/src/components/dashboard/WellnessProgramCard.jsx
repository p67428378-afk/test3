const WellnessProgramCard = () => {
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-8 overflow-hidden rounded-xl h-[240px] relative'>
      <img alt='Healthcare Facility' className='w-full h-full object-cover' src='https://lh3.googleusercontent.com/aida-public/AB6AXuALOR51Lt9BZmnWhAqqQeXntOSXFZR2b6ftudjB-ExQze_AhbBSG3OPL4c1xrt0a9GoI5RGECs_X3hJEeSqGrapDD0NK3DR8HbiapEFWFvMhaKvsmM-KYxzckVZ3STO4C4SUAPU2ZVcI54pUP7z-uZS3OZvlUa37gId0p9gcOzb1wTRtTqvXeb4Pm6qi8VdgPs0tMEThQd9-n4FR8n6vOA8IDHY2AoqwMZoVkqPKIPNziny-txUoSYKQWsI7MAOdprPGtaVkuYoLXw' />
      <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8'>
        <div>
          <p className='text-white font-bold text-xl'>Exclusive Partner Wellness Programs</p>
          <p className='text-white/80 text-sm'>Earn rewards for staying active and healthy throughout 2024.</p>
        </div>
      </div>
    </div>
  );
};

export default WellnessProgramCard;
