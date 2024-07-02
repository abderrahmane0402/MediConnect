/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./lib/my_loader.ts",
    unoptimized: true,
  },
}

export default nextConfig
