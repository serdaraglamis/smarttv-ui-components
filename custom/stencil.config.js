exports.config = {
  namespace: 'custom_components',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'image-rounded',
        'main-logo'
      ]
    }
  ],
  collections: [
  ],
  copy: [
    {
      src: 'static'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
