/**
 * @format
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	reactStrictMode: false
};

module.exports = {
	nextConfig,
	images: {
		domains: ['media.graphcms.com', 'media.graphassets.com']
	}
};
