/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
      },
      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
      eslint: {
        ignoreDuringBuilds: true,
    },
  //     webpack5: true,
  //   webpack: (config) => {
  //   config.resolve.fallback = { fs: false };

  //   return config;
  // },
}

module.exports = nextConfig
