/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/waitlist",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
