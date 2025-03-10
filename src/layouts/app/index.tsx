import { Layout } from 'antd';
import React, { FC, Fragment } from 'react';

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
}

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <Layout>
      <Layout>
        <Fragment>
          <Content className="bg-primaryBackground">{children}</Content>
        </Fragment>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
