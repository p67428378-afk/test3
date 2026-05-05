import { UserPlus, IndianRupee, Download, ChevronRight } from 'lucide-react';

const RecentActivityCard = () => {
  return (
    <div className='col-span-12 bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden'>
      <div className='p-6 border-b border-gray-50 flex items-center justify-between'>
        <h3 className='font-h3 text-h3 text-on-surface'>Recent Activity</h3>
        <button className='text-sm font-semibold text-[#007BFF] hover:underline'>View all</button>
      </div>
      <div className='divide-y divide-gray-50'>
        <div className='p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors'>
          <div className='w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#007BFF]'>
            <UserPlus />
          </div>
          <div className='flex-1'>
            <p className='font-body-md text-body-md text-on-surface'>Policy updated: Added <span className='font-semibold text-on-surface'>John Smith</span> as beneficiary</p>
            <p className='text-xs text-gray-400 mt-0.5'>2 days ago</p>
          </div>
          <ChevronRight className='text-gray-300' />
        </div>
        <div className='p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors'>
          <div className='w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center text-amber-600'>
            <IndianRupee />
          </div>
          <div className='flex-1'>
            <p className='font-body-md text-body-md text-on-surface'>Premium payment due</p>
            <p className='text-xs text-gray-400 mt-0.5'>5 days ago</p>
          </div>
          <ChevronRight className='text-gray-300' />
        </div>
        <div className='p-6 flex items-center gap-4 hover:bg-gray-50 transition-colors'>
          <div className='w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600'>
            <Download />
          </div>
          <div className='flex-1'>
            <p className='font-body-md text-body-md text-on-surface'>Policy document downloaded</p>
            <p className='text-xs text-gray-400 mt-0.5'>1 week ago</p>
          </div>
          <ChevronRight className='text-gray-300' />
        </div>
      </div>
    </div>
  );
};

export default RecentActivityCard;
