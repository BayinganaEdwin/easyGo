import withTM from 'next-transpile-modules';

const withTranspileModules = withTM(['@ant-design/icons']);

export default withTranspileModules({
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com', 'example.com', 'picsum.photos'],
  },
  webpack(config) {
    return config;
  },
});
