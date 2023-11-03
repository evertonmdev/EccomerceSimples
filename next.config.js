/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                hostname: 'fakestoreapi.com'
            }
        ]
    }
}

module.exports = nextConfig
