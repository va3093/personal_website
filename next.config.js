module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname,
  },
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty",
      };
    }
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
