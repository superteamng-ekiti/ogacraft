import { CustomBreadCrumb } from '@/components/dashboard/custom-breadcrumb';
import React from 'react';

const breadcrumbs = [
  {
    title: 'Home',
    link: '/client',
  },
  {
    title: 'Payments',
  },
];

const Payments = () => {
  return (
    <div className="w-full container mx-auto px-4 md:px-0 py-6">
      <CustomBreadCrumb breadcrumbs={breadcrumbs} />
    </div>
  );
};

export default Payments;
