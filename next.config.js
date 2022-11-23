/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/GreenBoost-LP",
  assetPrefix: "/GreenBoost-LP",
}

module.exports = nextConfig
