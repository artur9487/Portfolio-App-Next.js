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
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx']
			}
		}
	}
};
