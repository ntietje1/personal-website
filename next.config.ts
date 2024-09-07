import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];
    // config.resolve.alias.canvas = false;

    return config;
  },
};

export default nextConfig;