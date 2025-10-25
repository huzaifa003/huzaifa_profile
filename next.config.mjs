/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true }, // needed for static export
  // remove any `eslint` key; configure ESLint via .eslintrc.*
};
export default nextConfig;
