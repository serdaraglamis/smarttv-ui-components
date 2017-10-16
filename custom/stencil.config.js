exports.config = {
  namespace: 'custom_components',
  generateDistribution: true,
  bundles: [
    {
      components: ['image-rounded', 'main-logo']
    },
    { components: ['header-netd'] }
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
