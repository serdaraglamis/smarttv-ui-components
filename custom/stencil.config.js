exports.config = {
  namespace: 'custom_components',
  generateDistribution: true,
  bundles: [
    {
      components: ['image-rounded', 'main-logo', 'header-netd', 'test-comp']
    }
  ],
  collections: [
    {
      name: '../page'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
