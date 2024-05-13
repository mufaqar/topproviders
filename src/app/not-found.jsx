import Link from 'next/link';
import React from 'react';
import PageHead from '@/components/metas/pagesmeta';
import NotFound from '../components/NotFound'

const NotFoundPage = () => {
  return (
    <>
      <PageHead
        title="Page Not Found | Top Providers"
        description=""
        url="https://www.topproviders.net/404"
      />

      <NotFound/>
    </>
  );
};

export default NotFoundPage;
