import { Search, Bell } from 'lucide-react';

const Header = () => {
  return (
    <header className='fixed top-0 right-0 h-16 w-[calc(100%-260px)] ml-[260px] bg-white border-b border-gray-200 z-40 flex items-center justify-between px-8 shadow-sm'>
      <div className='flex items-center bg-gray-50 rounded-lg px-4 py-2 w-96 border border-transparent focus-within:border-[#007BFF] focus-within:bg-white transition-all'>
        <Search className='text-gray-400 mr-2' />
        <input className='bg-transparent border-none focus:ring-0 text-sm font-body-md w-full' placeholder='Search policies...' type='text' />
      </div>
      <div className='flex items-center gap-6'>
        <div className='relative cursor-pointer hover:scale-105 transition-transform'>
          <Bell className='text-gray-600' />
          <span className='absolute -top-1 -right-1 bg-error text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center'>2</span>
        </div>
        <div className='h-8 w-[1px] bg-gray-200'></div>
        <div className='flex items-center gap-3'>
          <div className='text-right'>
            <p className='font-label-sm text-label-sm text-on-surface'>Jane Doe</p>
            <p className='text-[10px] text-gray-400 font-bold uppercase tracking-tighter'>Premium Member</p>
          </div>
          <img alt='User Avatar' className='w-9 h-9 rounded-full object-cover shadow-sm' src='https://lh3.googleusercontent.com/aida-public/AB6AXuADz3nfqM67-Hzu_IZ4Iql6-SgHKt1YDnx7EbXLWW3D45P80IZIDU8GVOPz_-QgJ1CHx_-0JpwKjZ4fHQFB6uSEAtFTPOPvgQmNUcbilutq5ODEzNzOPmEPSB-cSHxFHAzseHln9K7K1qxPvKaN4SRXI9JR7Qei9vhuZSgZWgsvJOcNz48BPL5xqR1NKG6LL7pm-RTWBvFMc-vGCH7WM_lw43y-K9-Y8NbFEb2ICmpQFa-qg6TzSAGxU8Rb_pRnRvRH2aR9OcVvA00' />
        </div>
      </div>
    </header>
  );
};

export default Header;
