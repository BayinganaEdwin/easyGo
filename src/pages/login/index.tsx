import Head from 'next/head';
import { Fragment, ReactElement } from 'react';
import { NextPage } from 'next';
import AuthLayout from '@layouts/auth';
import Typography from '@components/shared/typography';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactElement;
};

const Login: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Head>
        <title>Login | EasyGo</title>
      </Head>
      <Typography className="text-black">This is the Login Page</Typography>
    </Fragment>
  );
};

Login.getLayout = (page: ReactElement) => <AuthLayout>{page}</AuthLayout>;

export default Login;
