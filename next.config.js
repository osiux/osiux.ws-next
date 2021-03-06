const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['ky']);
const optimizedImages = require('next-optimized-images');
const pwa = require('next-pwa');

const nextConfig = {
    images: {
        domains: ['osiux.ws', 'www.osiux.ws'],
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty',
            };
        }

        return config;
    },
};

module.exports = withPlugins(
    [
        withTM,
        optimizedImages,
        [
            pwa,
            {
                pwa: {
                    dest: 'public',
                    disable: process.env.NODE_ENV === 'development',
                    register: true,
                    skipWaiting: false,
                },
            },
        ],
    ],
    nextConfig,
);
