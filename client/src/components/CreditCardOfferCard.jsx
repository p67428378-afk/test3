import React from 'react';
import { Link } from 'react-router-dom';

const CreditCardOfferCard = ({ offer }) => {
  const { id, name, description, apr, annual_fee, imageUrl } = offer;

  return (
    <div className='bg-white rounded-xl card-shadow overflow-hidden flex flex-col h-full border border-outline-variant/30'>
      <div className='h-56 w-full overflow-hidden bg-surface-container'>
        <img alt={name} className='w-full h-full object-cover' src={imageUrl} />
      </div>
      <div className='p-8 flex flex-col flex-grow'>
        <h3 className='font-headline-md text-headline-md text-on-surface mb-3'>{name}</h3>
        <p className='font-body-md text-body-md text-on-surface-variant mb-6 flex-grow'>
          {description}
        </p>
        <div className='space-y-4 mb-8'>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
              <span className='material-symbols-outlined text-primary' style={{ fontSize: '20px' }}>payments</span>
            </div>
            <span className='font-body-sm text-body-sm text-on-surface-variant'>${annual_fee} Annual Fee</span>
          </div>
          <div className='flex items-center gap-3'>
            <div className='w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center'>
              <span className='material-symbols-outlined text-primary' style={{ fontSize: '20px' }}>percent</span>
            </div>
            <span className='font-body-sm text-body-sm text-on-surface-variant'>{apr}% APR</span>
          </div>
        </div>
        <Link to={`/apply/${id}`} className='w-full py-4 bg-[#3B82F6] text-white rounded-lg font-label-md hover:bg-blue-600 transition-colors cursor-pointer active:scale-[0.98] text-center'>
          Apply Now
        </Link>
      </div>
    </div>
  );
};

export default CreditCardOfferCard;
