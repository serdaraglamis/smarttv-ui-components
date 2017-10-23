import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'slider-album-card',
  styleUrl: 'slider-album-card.scss'
})
export class SliderAlbumCard {

  /* @Prop() data: {

   };*/
  @Prop() image: string;

  data: [{
    title?: string,
    videoCount?: string,
    channelName?: string,
    image: string
  }];

  componentWillLoad() {
    console.log('The component is about to be rendered', this.data);
    this.data = [{
      image: 'http://assets.dogannet.tv/img/75/116x116/59de01ad6300335548e631ba',
      title: 'Slider Highlight 1',
      videoCount: '54 Video',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/116x116/59de01ad6300335548e631ba',
      title: 'Slider Highlight 2',
      videoCount: '54 Video',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/116x116/59de01ad6300335548e631ba',
      title: 'Slider Highlight 3',
      videoCount: '54 Video',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/116x116/59de01ad6300335548e631ba',
      title: 'Slider Highlight 4',
      videoCount: '54 Video',
      channelName: 'Channel Name'
    },{
      image: 'http://assets.dogannet.tv/img/75/116x116/59de01ad6300335548e631ba',
      title: 'Slider Highlight 5',
      videoCount: '54 Video',
      channelName: 'Channel Name'
    }]
  }

  renderItems() {
    return (
      <div class="slider-wrapper focusable-section" data-section-hight="">
      {this.data.map((item) => {
        return (
          <div class="focusable slider-item" data-focus-step="321">
            <div class="item-container">
              <div class="image-area">
                <img src={item.image} />
              </div>
              <div class="text-container">
                <div class="top-info">
                  {item.title}
                </div>
                <div class="video-count">
                  {item.videoCount}
                </div>
                <div class="channel-name">
                  {item.channelName}
                </div>
              </div>
            </div>
          </div>
        )
      })}
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
