exports.config = {
  namespace: 'page_components',
  generateDistribution: true,
  bundles: [
    { components: ['page-background', 'page-layout']}
  ],
  collections: [
    {
      name: '../custom'
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
