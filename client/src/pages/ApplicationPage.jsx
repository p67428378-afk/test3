import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { submitApplication } from '../services/api';

const ApplicationPage = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    personal_info: {
      full_name: '',
      address: '',
      phone_number: '',
      email: ''
    },
    financial_info: {
      account_statement_url: '',
      credit_score: '',
      annual_income: ''
    },
    employment_info: {
      employer_name: '',
      employer_address: '',
      job_title: '',
      employment_start_date: ''
    },
    credit_card_id: cardId
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (section, field) => (e) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        [field]: e.target.value
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      const response = await submitApplication(formData);
      setSuccess(true);
      setTimeout(() => navigate('/'), 3000);
    } catch (err) {
      setError('Failed to submit application. Please try again.');
    }
  };

  return (
    <div className='max-w-4xl mx-auto p-8'>
      <h1 className='font-headline-xl text-headline-xl text-[#1E293B] mb-4'>Apply for Your Credit Card</h1>
      {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Success!</strong>
        <span className="block sm:inline"> Your application has been submitted. Redirecting to homepage...</span>
      </div>}
      {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error!</strong>
        <span className="block sm:inline"> {error}</span>
      </div>}
      <form onSubmit={handleSubmit} className='space-y-8'>
        <div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Personal Information</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input type='text' placeholder='Full Name' value={formData.personal_info.full_name} onChange={handleChange('personal_info', 'full_name')} className='p-4 border rounded-lg' required />
            <input type='text' placeholder='Address' value={formData.personal_info.address} onChange={handleChange('personal_info', 'address')} className='p-4 border rounded-lg' required />
            <input type='tel' placeholder='Phone Number' value={formData.personal_info.phone_number} onChange={handleChange('personal_info', 'phone_number')} className='p-4 border rounded-lg' required />
            <input type='email' placeholder='Email' value={formData.personal_info.email} onChange={handleChange('personal_info', 'email')} className='p-4 border rounded-lg' required />
          </div>
        </div>

        <div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Financial Information</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input type='url' placeholder='Account Statement URL' value={formData.financial_info.account_statement_url} onChange={handleChange('financial_info', 'account_statement_url')} className='p-4 border rounded-lg' />
            <input type='number' placeholder='Credit Score' value={formData.financial_info.credit_score} onChange={handleChange('financial_info', 'credit_score')} className='p-4 border rounded-lg' required />
            <input type='number' placeholder='Annual Income' value={formData.financial_info.annual_income} onChange={handleChange('financial_info', 'annual_income')} className='p-4 border rounded-lg' required />
          </div>
        </div>

        <div>
          <h2 class="font-headline-lg text-headline-lg text-on-surface mb-4">Employment Information</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <input type='text' placeholder='Employer Name' value={formData.employment_info.employer_name} onChange={handleChange('employment_info', 'employer_name')} className='p-4 border rounded-lg' />
            <input type='text' placeholder='Employer Address' value={formData.employment_info.employer_address} onChange={handleChange('employment_info', 'employer_address')} className='p-4 border rounded-lg' />
            <input type='text' placeholder='Job Title' value={formData.employment_info.job_title} onChange={handleChange('employment_info', 'job_title')} className='p-4 border rounded-lg' />
            <input type='date' placeholder='Employment Start Date' value={formData.employment_info.employment_start_date} onChange={handleChange('employment_info', 'employment_start_date')} className='p-4 border rounded-lg' />
          </div>
        </div>

        <button type='submit' className='w-full py-4 bg-[#3B82F6] text-white rounded-lg font-label-md hover:bg-blue-600 transition-colors cursor-pointer active:scale-[0.98]'>Submit Application</button>
      </form>
    </div>
  );
};

export default ApplicationPage;
