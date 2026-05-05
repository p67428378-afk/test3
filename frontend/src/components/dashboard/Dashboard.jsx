import CurrentPolicyCard from './CurrentPolicyCard';
import QuickVisualMetric from './QuickVisualMetric';
import RecentActivityCard from './RecentActivityCard';
import FindClinicCard from './FindClinicCard';
import WellnessProgramCard from './WellnessProgramCard';

const Dashboard = () => {
  return (
    <div className='max-w-6xl mx-auto'>
      <header className='mb-8'>
        <h2 className='font-h2 text-h2 text-on-surface'>Welcome back, Jane</h2>
        <p className='font-body-md text-body-md text-gray-500 mt-1'>Here is the overview of your current coverage and activities.</p>
      </header>
      <div className='grid grid-cols-12 gap-6'>
        <CurrentPolicyCard />
        <QuickVisualMetric />
        <RecentActivityCard />
        <FindClinicCard />
        <WellnessProgramCard />
      </div>
    </div>
  );
};

export default Dashboard;
