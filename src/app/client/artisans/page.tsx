import ArtisanWrapper from '@/app/client/artisans/_components/artisan-wrapper';
import { CustomBreadCrumb } from '@/components/dashboard/custom-breadcrumb';
import React from 'react';

const breadcrumbs = [
  {
    title: 'Home',
    link: '/client',
  },
  {
    title: 'Artisans',
  },
];

const Artisans = () => {
  return (
    <div className="w-full container mx-auto px-4 md:px-0 py-6">
      <CustomBreadCrumb breadcrumbs={breadcrumbs} />

      <ArtisanWrapper />
    </div>
  );
};

export default Artisans;
