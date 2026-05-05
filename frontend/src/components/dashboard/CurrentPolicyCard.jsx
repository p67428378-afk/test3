import { VerifiedUser } from 'lucide-react';

const CurrentPolicyCard = () => {
  return (
    <div className='col-span-12 lg:col-span-8 bg-white rounded-xl shadow-soft border border-gray-100 p-6'>
      <div className='flex items-start justify-between mb-8'>
        <div>
          <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 mb-2'>
            Active
          </span>
          <h3 className='font-h3 text-h3 text-on-surface'>Current Policy</h3>
          <p className='text-sm text-gray-400 font-medium'>HS-2023-001</p>
        </div>
        <div className='w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-[#007BFF]'>
          <VerifiedUser size={32} />
        </div>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 mb-8'>
        <div>
          <p className='text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1'>Plan</p>
          <p className='font-label-md text-label-md text-on-surface'>Gold Plan</p>
        </div>
        <div>
          <p className='text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1'>Premium</p>
          <p className='font-label-md text-label-md text-primary font-bold'>$300.00/mo</p>
        </div>
        <div>
          <p className='text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1'>Effective</p>
          <p className='font-label-md text-label-md text-on-surface'>Jan 1, 2023</p>
        </div>
        <div>
          <p className='text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1'>Expiry</p>
          <p className='font-label-md text-label-md text-on-surface'>Dec 31, 2024</p>
        </div>
      </div>
      <div className='flex flex-wrap gap-4 pt-6 border-t border-gray-100'>
        <button className='px-6 py-2.5 bg-[#007BFF] text-white rounded-lg font-label-md text-label-md shadow-lg shadow-blue-200 hover:bg-blue-700 transition-all active:scale-[0.98]'>
          Update Policy
        </button>
        <button className='px-6 py-2.5 bg-white text-error border border-error-container rounded-lg font-label-md text-label-md hover:bg-error-container/10 transition-all active:scale-[0.98]'>
          Cancel Policy
        </button>
      </div>
    </div>
  );
};

export default CurrentPolicyCard;
