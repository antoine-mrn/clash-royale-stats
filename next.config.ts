import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            new URL("https://api-assets.clashroyale.com/**"),
            new URL("https://royaleapi.github.io/cr-api-assets/badges/**"),
        ],
    },
};

export default nextConfig;
