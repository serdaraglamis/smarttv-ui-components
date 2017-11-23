import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-background',
  styleUrl: 'page-background.scss'
})
export class PageBackground {

  @Prop() type: string;
  @Prop() value: string;
  elementStyle: {};
  @Prop() key?: any;
  @Prop() gradient?: any;

  /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   */
  componentWillLoad() {
    // console.log('HEADER * * * * The component is about to be rendered', this);
    this.elementStyle = {
      'background-image': this.type === 'image' ? `url(${this.value})` : this.value
    };
  }

  render() {
    if(this.gradient === 'true' || this.gradient === true) {
      return (
        <div style={this.elementStyle} class="gradient">
          <div class="gradient">
            <slot>
            </slot>
          </div>
        </div>
      );
    } else {
      return (
        <div style={this.elementStyle}>
          <slot>
          </slot>
        </div>
      );
    }
  }
}
