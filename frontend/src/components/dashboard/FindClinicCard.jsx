import { Stethoscope } from 'lucide-react';

const FindClinicCard = () => {
  return (
    <div className='col-span-12 md:col-span-6 lg:col-span-4 bg-white rounded-xl shadow-soft border border-gray-100 p-6 flex flex-col justify-center text-center'>
      <Stethoscope className='text-4xl text-[#007BFF] mb-4 mx-auto' />
      <h4 className='font-h3 text-h3 mb-2'>Find a Clinic</h4>
      <p className='text-sm text-gray-500 mb-6'>Locate the nearest medical facility covered by your Gold Plan.</p>
      <button className='w-full py-2 bg-gray-50 text-on-surface font-semibold rounded-lg hover:bg-gray-100 transition-colors'>Launch Map</button>
    </div>
  );
};

export default FindClinicCard;
