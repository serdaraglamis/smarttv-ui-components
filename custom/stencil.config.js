exports.config = {
  namespace: 'custom_components',
  generateDistribution: true,
  bundles: [
    {
      components: ['image-rounded', 'main-logo', 'header-netd', 'test-comp', 'left-menu', 'slider-highlight', 'slider-album-card', 'slider-video-card', 'slider-channel-card', 'slider-playlist-card', 'slider-button-categories']
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
