/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});
const nextConfig = {
    experimental: {
        optimizePackageImports: ["@mantine/core", "@mantine/hooks"],
    },
};

module.exports = withBundleAnalyzer(nextConfig);
