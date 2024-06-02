
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
});

const NextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  images: {
    domains: ['placehold.jp']
  }
};

module.exports = withMDX(NextConfig);
