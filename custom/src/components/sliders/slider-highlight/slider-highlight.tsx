import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'slider-highlight',
  styleUrl: 'slider-highlight.scss'
})
export class SliderHighlight {

  /* @Prop() data: {

   };*/
  @Prop() image: string;

  data: [{
    title?: string,
    duration?: string,
    subDesc?: string,
    image: string
  }];

  componentWillLoad() {
    console.log('The component is about to be rendered', this.data);
    this.data = [{
      image: 'http://assets.dogannet.tv/img/75/455x256/59de01ad6300335548e631ba',
      title: 'Slider Highlight 1',
      subDesc: 'Slider subdesc',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/455x256/59de01ad6300335548e631ba',
      title: 'Slider Highlight 2',
      subDesc: 'Slider subdesc2',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/455x256/59de01ad6300335548e631ba',
      title: 'Slider Highlight 3',
      subDesc: 'Slider subdesc3',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/455x256/59de01ad6300335548e631ba',
      title: 'Slider Highlight 4',
      subDesc: 'Slider subdesc4',
      duration: '03:27'
    },{
      image: 'http://assets.dogannet.tv/img/75/455x256/59de01ad6300335548e631ba',
      title: 'Slider Highlight 5',
      subDesc: 'Slider subdesc5',
      duration: '03:27'
    }]
  }

  renderItems() {
    return (
      <div class="slider-wrapper focusable-section">
      {this.data.map((item) => {
        return (
          <div class="focusable slider-item" data-focus-step="473">
            <div class="item-container">
              <img src={item.image} />
              <div class="overlay"></div>
              <div class="text-container">
                <div class="top-info">
                  {item.title}
                </div>
                <div class="sub-info">
                  <span class="field-left">{item.subDesc}</span>
                  <span class="field-right">{item.duration}</span>
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
