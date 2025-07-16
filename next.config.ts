import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [new URL("https://api-assets.clashroyale.com/**")],
    },
};

export default nextConfig;
