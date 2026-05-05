import { Shield, LayoutDashboard, FileText, Settings, LogOut, UserCircle } from 'lucide-react';

const Sidebar = () => {
  return (
    <aside className='fixed left-0 top-0 h-full w-[260px] border-r border-gray-100 bg-white z-50 flex flex-col justify-between py-6'>
      <div>
        <div className='px-6 mb-8 flex items-center gap-3'>
          <div className='w-10 h-10 bg-primary-container rounded-lg flex items-center justify-center'>
            <Shield className='text-white' />
          </div>
          <div>
            <h1 className='text-2xl font-black text-[#007BFF]'>HealthShield</h1>
            <p className='text-[10px] uppercase tracking-widest text-gray-400 font-bold'>Insurance Portal</p>
          </div>
        </div>
        <nav className='flex flex-col gap-1'>
          <a className='sidebar-active flex items-center gap-3 py-3 px-6 transition-all duration-200' href='#'>
            <LayoutDashboard />
            <span className='font-label-md text-label-md'>Dashboard</span>
          </a>
          <a className='flex items-center gap-3 py-3 px-6 text-gray-600 border-l-4 border-transparent hover:bg-gray-50 transition-all duration-200' href='#'>
            <FileText />
            <span className='font-label-md text-label-md'>My Policy</span>
          </a>
          <a className='flex items-center gap-3 py-3 px-6 text-gray-600 border-l-4 border-transparent hover:bg-gray-50 transition-all duration-200' href='#'>
            <Settings />
            <span className='font-label-md text-label-md'>Settings</span>
          </a>
          <a className='flex items-center gap-3 py-3 px-6 text-gray-600 border-l-4 border-transparent hover:bg-gray-50 transition-all duration-200' href='#'>
            <LogOut />
            <span className='font-label-md text-label-md'>Logout</span>
          </a>
        </nav>
      </div>
      <div className='px-4'>
        <div className='flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 cursor-pointer transition-all duration-200'>
          <img alt='User Avatar' className='w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm' src='https://lh3.googleusercontent.com/aida-public/AB6AXuDxaN-xqcfz1Qm-zq44PkCcBh0q1qQl8dFLyn9QpNGBAz6VpRfMPoa_hh-tHA-F8SjLjgNQLvXw3_ZxzhxaGNjsFFEsRFP33ICx55vDbs69GLfIJ6C4MyOL5cLimCUhiuggij2zF34IgMIVuDuluKNao9mP2b8XHLzr60HLa6fNswQsLP6_gHATxF09BvOKPQU5HnodZespJ7QighbGERux4p7_kd4NxmRZLZCN71bTMVPQQib5S3aRNE2ddJIFNHHSinMUtCY254w' />
          <div className='overflow-hidden'>
            <p className='font-label-md text-label-md text-on-surface truncate'>Jane Doe</p>
            <p className='text-[11px] text-gray-500 font-medium'>Policy Holder</p>
          </div>
          <UserCircle className='ml-auto text-gray-400' />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
