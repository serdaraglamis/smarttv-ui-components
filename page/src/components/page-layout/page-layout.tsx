import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'page-layout',
  styleUrl: 'page-layout.scss'
})
export class PageLayout {

  @Prop() direction: string;
  @Prop() width: string;
  layoutStyle: {};

  componentWillLoad() {
    // console.log('The component is about to be rendered', this.direction, this.width);
    this.direction === 'vertical' ? this.layoutStyle = {
      width: this.width,
      maxWidth: this.width
    } : null;
  }

  render() {
    return (
      <div class={this.direction} style={this.layoutStyle}>
        <slot></slot>
      </div>
    );
  }
}
