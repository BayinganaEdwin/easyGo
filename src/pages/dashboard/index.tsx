import AppLayout from '@layouts/app';
import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import DashboardContent from '@components/dashboard';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const DashboardPage: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Dashboard | EasyGo</title>
      </Head>
      <DashboardContent />
    </Fragment>
  );
};

DashboardPage.getLayout = (page: ReactElement) => <AppLayout>{page}</AppLayout>;

export default DashboardPage;
