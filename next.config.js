/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  transpilePackages: ['thirdweb', 'viem', '@base-org/account', 'ox'],
  webpack: (config, { isServer, dev }) => {
    if (dev) config.cache = false;
    config.snapshot = { managedPaths: [], immutablePaths: [] };
    if (isServer) {
      config.externals = [
        ...(config.externals || []),
        'ox',
        '@ox/core',
        'viem/chains',
        'viem/actions',
      ];
    }
    return config;
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'Cross-Origin-Opener-Policy', value: 'same-origin' },
          { key: 'Cross-Origin-Embedder-Policy', value: 'require-corp' },
        ],
      },
    ];
  },
}
module.exports = nextConfig
