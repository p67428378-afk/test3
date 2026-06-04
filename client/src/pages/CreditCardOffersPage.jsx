import React, { useState, useEffect } from 'react';
import { getCreditCardOffers } from '../services/api';
import CreditCardOfferCard from '../components/CreditCardOfferCard';

const CreditCardOffersPage = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const response = await getCreditCardOffers();
        setOffers(response.data.items);
      } catch (err) {
        setError('Failed to fetch credit card offers. Using mock data.');
        // Mock data as a fallback
        setOffers([
          {
            id: '1',
            name: 'Platinum Rewards',
            description: 'Earn 3x points on travel and dining. Perfect for the frequent traveler who wants to be rewarded.',
            apr: 18.99,
            annual_fee: 95,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCDo8whvQSb1Uu3dfnJi3DSsM6z9t3AWRy9czNVqH9KGmrKGk2kqi7mQzvqlSRRtMRrVfJTJ2sJQxB28_fXyPMMNEE2eZpNfTTDN_EBunIDaVnJ7hwjvtd3Q2QdChBiyg6QXSta7vJJkQXZz_rWZUVda0WUMQ0ij84oaluUE_l7KNzTvA-D4wRo-zedMsUBCPKJGJOcXuluJs7W4xRIBBtwUWp1nDRBjfOEtvJK8fEewK_xVRczmWP0hv4MyLQuuFhSILW29_vwg'
          },
          {
            id: '2',
            name: 'Travel Miles',
            description: 'Get the most out of your travels with 2x miles on every purchase. No foreign transaction fees.',
            apr: 21.50,
            annual_fee: 0,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbrVosERzARorTvQzN5EU-TEL-DI1mxadhh5dZT9x9in6319SlzQ_h1k58iqanMyMryfw8A5nGJbCT562jCKeuQLY9GBoOgGYtY78bTPsul0kOgRVyHpZTZq6xjjtUUFWu44CuDb2aL5eWoMpi6be9OFP1gcPa-4LV1epkWD3qZZ8gCoutTvNB3o4U-1RKy1Mv5_c6anyVKct4r3pCKljZL8eBw4DRf_EOm0kv86hvZZOEEyU-9Epq4_2emExa84TRn3J5K4ksYg'
          },
          {
            id: '3',
            name: 'Cash Back Plus',
            description: 'Simple and rewarding. Earn 1.5% cash back on every purchase, every day. No annual fee.',
            apr: 16.75,
            annual_fee: 0,
            imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjHtqOI4x0eFtKgJAb5AhGT7q088YcnS0qMkbzYU9fHtGEchq0b1ZVKlTVOkDZPexcITGPRwEUntM44foF6nPBQOAb3YBYYf9syQ6wYxhH32kIlDfqQ3u_ikcd0XAkowXD-NTm29TA3PCv0eYncZ0HU1opuXhcL40nK5-8U0zs3WNA6S32pQ3PgbdHlq9HIq7olhc8GTEFV6oxnr4arsWvYI9rK31mWBovSAcJdN9xaWGhITbyndJO-5z4w0-uWAhldR7cCDE75g'
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

  return (
    <div className='relative px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto pb-stack-lg'>
      {loading && <p>Loading offers...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-gutter'>
        {offers.map(offer => (
          <CreditCardOfferCard key={offer.id} offer={offer} />
        ))}
      </div>
    </div>
  );
};

export default CreditCardOffersPage;
