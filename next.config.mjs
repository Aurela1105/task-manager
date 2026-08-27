/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/task-manager',
  assetPrefix: '/task-manager/',
  
  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
}

export default nextConfig