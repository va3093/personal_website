module.exports = {
  output: 'standalone',
  devIndicators: {
    autoPrerender: false,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
};
