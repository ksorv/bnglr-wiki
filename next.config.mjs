/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v5.airtableusercontent.com",
      },
    ],
  },
  redirects: () => [
    {
      source: "/create",
      destination:
        "https://airtable.com/appw1C2d6NfwmSkDe/pagTuHtwG8R1kNbnC/form",
    },
  ],
};

export default nextConfig;
