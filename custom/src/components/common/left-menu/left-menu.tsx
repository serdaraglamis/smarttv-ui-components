import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'left-menu',
  styleUrl: 'left-menu.scss'
})
export class LeftMenu {

  /* @Prop() data: {

   };*/
  @Prop() image: string;

  componentWillLoad() {
    console.log('The component is about to be rendered', this.image);
  }

  render() {
    return (
      <div>
        <div class="menu-item focusable">
          <span class="remote-button remote-button-red"></span>
          <span class="menu-text">Anasayfa</span>
        </div>
        <div class="menu-item focusable">
          <span class="remote-button remote-button-green"></span>
          <span class="menu-text">Keşfet</span>
        </div>
        <div class=" menu-item focusable">
          <span class="remote-button remote-button-orange"></span>
          <span class="menu-text">Kanallar</span>
        </div>
        <div class="menu-item focusable">
          <span class="remote-button remote-button-blue"></span>
          <span class="menu-text">Listeler</span>
        </div>
      </div>
    );
  }
}
