import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'slider-channel-card',
  styleUrl: 'slider-channel-card.scss'
})
export class SliderChannelCard {

  /* @Prop() data: {

   };*/
  @Prop() image: string;
  @Prop() currentFocus: string;


  data: [{
    followersCount?: string,
    videoCount?: string,
    channelName?: string,
    image: string
  }];

  componentWillLoad() {
    console.log('The component is about to be rendered', this.data);
    this.data = [{
      image: 'http://assets.dogannet.tv/img/75/165x165/59de01ad6300335548e631ba',
      followersCount: '1567',
      videoCount: '54',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/165x165/59de01ad6300335548e631ba',
      followersCount: '1567',
      videoCount: '54',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/165x165/59de01ad6300335548e631ba',
      followersCount: '1567',
      videoCount: '54',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/165x165/59de01ad6300335548e631ba',
      followersCount: '1567',
      videoCount: '54',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/165x165/59de01ad6300335548e631ba',
      followersCount: '1567',
      videoCount: '54',
      channelName: 'Channel Name'
    }]
  }

  renderItems() {
    const imageConfig = {
      width: 165,
      height: 165,
      border: {
        color: '#D6D6D6',
        padding: '9'
      }
    };
    return (
      <div>
        <div class="section-info">
          <span class="title">EN YENİLER</span>
          <span class="pagination">{this.currentFocus} / {this.data.length}</span>
        </div>
        <div class="slider-wrapper focusable-section" data-section-hight="">
          {this.data.map((item) => {
            return (
              <div class="focusable slider-item" data-focus-step="321">
                <div class="item-container">
                  <div class="image-area">
                    <image-rounded image={item.image} config={imageConfig}></image-rounded>
                  </div>
                  <div class="text-container">
                    <div class="top-info">
                      {item.channelName}
                    </div>
                    <span class="video-count">
                  {item.videoCount} VİDEO | {item.followersCount} TAKİPÇİ
                </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

    )
  }

  render() {
    return (
      <div>
          {this.renderItems()}
      </div>
    );
  }
}
