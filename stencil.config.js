exports.config = {
  namespace: 'smarttv-ui-components',
  generateDistribution: true,
  bundles: [
    {components: ['page-layout']},
    {components: ['page-background']},
    {components: ['image-rounded']},
    {components: ['main-logo']}
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
