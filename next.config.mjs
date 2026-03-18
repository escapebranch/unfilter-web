const isProd = process.env.NODE_ENV === 'production';
const repo = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? 'unfilter-web';
const basePath = isProd ? `/${repo}` : '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath,
  assetPrefix: isProd ? `${basePath}/` : undefined,
};

export default nextConfig;
