/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Kasm Technologies',
    description: 'The official store for Kasm supported workspaces.',
    icon: 'https://s3-us-west-1.amazonaws.com/realisticshots/2016/0250.jpg',
    listUrl: 'https://4e4eh.github.io/kasm/',
    contactUrl: 'https://github.com/4e4eh/kasm/issues',
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
