import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'image-rounded',
  styleUrl: 'image-rounded.scss'
})
export class ImageRounded {

  @Prop() image: string;
  @Prop() config: {
    width?: number,
    height?: number,
    border?: {
      color?: string,
      padding?: number
    }
  };

  componentWillLoad() {
  }


  render() {
    let imageStyle = {
      width: `${this.config.width}px`,
      height: `${this.config.height || this.config.width}px`,
      borderRadius: `${this.config.width}px`,
    };

    let borderStyle = {
      width: `${this.config.width}px`,
      height: `${this.config.height || this.config.width}px`,
      border: `1px solid ${this.config.border && this.config.border.color ? this.config.border.color :  'white'}`,
      borderRadius: `${this.config.width}px`,
      padding: `${this.config.border && this.config.border.padding ? this.config.border.padding : 5}px`,
      display: 'inline-block'
    };
    return (
      <div style={borderStyle}>
        <img style={imageStyle} class="image-rounded" src={this.image}/>
      </div>
    );
  }
}
