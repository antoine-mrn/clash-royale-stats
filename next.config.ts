import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api-assets.clashroyale.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "royaleapi.github.io",
                pathname: "/cr-api-assets/badges/**",
            },
        ],
    },
    output: "standalone",
    cacheMaxMemorySize: 0,
};

export default nextConfig;
