import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'slider-button-categories',
  styleUrl: 'slider-button-categories.scss'
})
export class SliderButtonCategories {

  /* @Prop() data: {

   };*/
  @Prop() image: string;
  @Prop() currentFocus: string;

  data: [{
    title?: string,
    color?: string,
    backgroundImage?: string
  }];

  componentWillLoad() {
    console.log('The component is about to be rendered', this.data);
    this.data = [{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Müzik',
      color: '#740043'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Eğlence',
      color: '#813C00'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Seyahat',
      color: '#004C74'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Sağlık',
      color: '#2A5300'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Eğlence',
      color: '#7B1968'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Spor',
      color: '#7B1968'
    },{
      backgroundImage: 'https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/categorysa.png?alt=media&token=b9332090-146c-4e8a-8f2a-82af9151574e',
      title: 'Müzik',
      color: '#7B1968'
    }]
  }

  componentDidLoad() {
    console.log('The component has been rendered');
  }

  renderItems() {
    return (
      <div>
        <div class="slider-wrapper focusable-section" data-section-hight="">
          {this.data.map((item) => {
            return (
              <div class="focusable slider-item" data-focus-step="321">
                <div class="item-container">
                  <div class="image-area">
                    <img src={item.backgroundImage} />
                    <div style={{backgroundColor: item.color}} class="overlay"></div>
                  </div>
                  <div class="text-container">
                    <div class="top-block">
                      <div class="title">
                        {item.title}
                      </div>
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
