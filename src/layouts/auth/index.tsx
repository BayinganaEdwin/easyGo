import { Layout } from 'antd';
import React, { FC } from 'react';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AuthLayout: FC<Props> = ({ children }) => {
  return (
    <Layout className="bg-primaryBackground">
      <Content className="">{children}</Content>
    </Layout>
  );
};

export default AuthLayout;
