exports.config = {
  namespace: 'page_components',
  generateDistribution: true,
  bundles: [
    { components: ['page-background', 'page-layout']}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
