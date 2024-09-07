import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    config.optimization.minimize = false;
    config.optimization.minimizer = [];

    return config;
  },
};

export default nextConfig;