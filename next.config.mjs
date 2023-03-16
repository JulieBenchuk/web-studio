/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: './',
    },
    env: {
        TOKEN: process.env.TOKEN,
    }
};

export default nextConfig;