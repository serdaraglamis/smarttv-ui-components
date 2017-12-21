exports.config = {
  namespace: 'custom_components',
  generateDistribution: true,
  bundles: [
    {
      components: [
        'image-rounded',
        'main-logo',
        'loading-element',
        'list-play-card'
      ]
    }
  ],
  collections: [
    {
      name: '../page'
    }
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
