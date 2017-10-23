import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'slider-video-card',
  styleUrl: 'slider-video-card.scss'
})
export class SliderVideoCard {

  /* @Prop() data: {

   };*/
  @Prop() image: string;
  @Prop() currentFocus: string;

  data: [{
    title?: string,
    timeAgo?: string,
    channelName?: string,
    image: string,
    category?: string,
    duration?: string
  }];

  componentWillLoad() {
    console.log('The component is about to be rendered', this.data);
    this.data = [{
      image: 'http://assets.dogannet.tv/img/75/294x167/59de01ad6300335548e631ba',
      title: 'Slider Highlight 1 sdasdasdasdadasdadasd  adasd asdsadsaddasdasdsadssadasdsdadasdasdasdadasdasds',
      timeAgo: '3 saat önce',
      channelName: 'Channel Name',
      category: 'Müzik',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/294x167/59de01ad6300335548e631ba',
      title: 'Slider Highlight 2',
      timeAgo: '3 saat önce',
      channelName: 'Channel Name',
      category: 'Müzik',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/294x167/59de01ad6300335548e631ba',
      title: 'Slider Highlight 3',
      timeAgo: '3 saat önce',
      channelName: 'Channel Name',
      category: 'Müzik',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/294x167/59de01ad6300335548e631ba',
      title: 'Slider Highlight 4',
      timeAgo: '3 saat önce',
      channelName: 'Channel Name',
      category: 'Müzik',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/294x167/59de01ad6300335548e631ba',
      title: 'Slider Highlight 5',
      timeAgo: '3 saat önce',
      channelName: 'Channel Name',
      category: 'Müzik',
      duration: '03:27'
    }]
  }

  componentDidLoad() {
    console.log('The component has been rendered');
  }

  renderItems() {
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
                    <img src={item.image} />
                    <div class="overlay"></div>
                    <span class="duration-info">{item.duration}</span>
                  </div>
                  <div class="text-container">
                    <div class="top-block">
                      <div class="title">
                        {item.title}
                      </div>
                      <div class="channel-name">
                        {item.channelName}
                      </div>
                    </div>
                    <div class="bottom-block">
                  <span class="time-field">
                    {item.timeAgo}
                  </span>
                      <span class="category-field">
                    {item.category}
                  </span>
                    </div>
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
