/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  output: 'export',
  images: {
    disableStaticImages: true,
    unoptimized: true,
  }
}




module.exports = nextConfig
