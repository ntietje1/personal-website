import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  webpack: (config, { isServer }) => {
    // Modify the optimization.minimize option
    config.optimization.minimize = false;
    config.optimization.minimizer = [];

    // Return the modified config
    return config;
  },
  // Other Next.js config options can go here
};

export default nextConfig;