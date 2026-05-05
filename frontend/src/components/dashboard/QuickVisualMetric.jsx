const QuickVisualMetric = () => {
  return (
    <div className='col-span-12 lg:col-span-4 bg-[#0059bb] rounded-xl p-6 text-white relative overflow-hidden flex flex-col justify-between h-full'>
      <div className='relative z-10'>
        <p className='text-blue-100/80 text-sm font-medium mb-1'>Coverage Utilization</p>
        <p className='text-4xl font-bold'>12.5%</p>
        <div className='w-full bg-white/20 h-2 rounded-full mt-4 overflow-hidden'>
          <div className='bg-white h-full' style={{ width: '12.5%' }}></div>
        </div>
      </div>
      <div className='mt-4 relative z-10'>
        <p className='text-xs text-blue-100 leading-relaxed'>Your current claims are well below the annual threshold. You are maintaining a healthy balance!</p>
      </div>
      <div className='absolute -right-8 -bottom-8 w-32 h-32 bg-white/10 rounded-full blur-2xl'></div>
    </div>
  );
};

export default QuickVisualMetric;
