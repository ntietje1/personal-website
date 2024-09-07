const nextConfig = {
  webpack: (config, { isServer }) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];

    return config;
  },
};

module.exports = nextConfig;