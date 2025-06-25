const nextConfig = {
  swcMinify: true,
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
