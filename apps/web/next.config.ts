import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@aksara/ui", "@aksara/database"],
};

export default nextConfig;
