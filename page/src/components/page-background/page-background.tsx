import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-background',
  styleUrl: 'page-background.scss'
})
export class PageBackground {

  @Prop() type: string;
  @Prop() value: string;
  elementStyle: {};

  /**
   * The component will load but has not rendered yet.
   *
   * This is a good place to make any last minute updates before rendering.
   */
  componentWillLoad() {
    console.log('The component is about to be rendered', this);
    this.elementStyle = {
      background: this.type === 'image' ? `url(${this.value})` : this.value
    }
  }

  render() {
    return (
      <div style={this.elementStyle}>
        <slot>
        </slot>
      </div>
    );
  }
}
