// import React from 'react';
// import Header from '@/app/components/header';
// export interface PageProps {
//   params: { id: string };
// }
// export default function Page({ params }: PageProps) {
//   return <Header>{`Company (${params.id})`}</Header>;
// }
import CompanyForm from '@/app/components/company-form';
export default function Page() {
  return (
    <div className="py-6 px-10">
      <CompanyForm />
    </div>
  );
}
