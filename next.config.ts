import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true, // required for static export; images are already sized at source
    remotePatterns: [
      {
        protocol: "https",
        hostname: "analyticsdrift.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  trailingSlash: true,
  compress: true,
  poweredByHeader: false,
};

export default nextConfig;
