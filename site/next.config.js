/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kode\'s Registry',
    description: 'The my Kasm Workspaces.',
    icon: 'https://w7.pngwing.com/pngs/966/803/png-transparent-check-mark-tick-green-tick-mark-angle-leaf-text-thumbnail.png',
    listUrl: 'https://4e4eh.github.io/kasm-registry/',
    contactUrl: 'https://github.com/4e4eh/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
