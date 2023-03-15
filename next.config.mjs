/** @type {import('next').NextConfig} */

// module.exports = nextConfig

const nextConfig = {
    reactStrictMode: true,
    images: {
        loader: 'akamai',
        path: './',
    },
    env: {
        TOKEN: process.env.NEXT_PUBLIC_TOKEN,
        CHAT_ID: process.env.NEXT_PUBLIC_CHAT_ID
    }
};

export default nextConfig;