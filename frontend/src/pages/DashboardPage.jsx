import Sidebar from '../components/layout/Sidebar';
import Header from '../components/layout/Header';
import Dashboard from '../components/dashboard/Dashboard';

const DashboardPage = () => {
  return (
    <div className='bg-surface-bright text-on-surface min-h-screen'>
      <Sidebar />
      <Header />
      <main className='ml-[260px] mt-16 p-8'>
        <Dashboard />
      </main>
    </div>
  );
};

export default DashboardPage;
