module.exports = {
  webpack: (config) => {
    const rules = [
      ...config.module.rules,
      {
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {mode: ['react-component']},
      },
    ];
    const module = {
      ...config.module,
      rules,
    };

    return {...config, module};
  },
};
