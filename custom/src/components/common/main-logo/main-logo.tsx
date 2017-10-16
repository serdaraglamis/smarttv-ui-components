import {Component, Prop} from '@stencil/core';

@Component({
  tag: 'main-logo',
  styleUrl: 'main-logo.scss'
})
export class MainLogo {

  /* @Prop() data: {

   };*/
  @Prop() image: string;

  componentWillLoad() {
    console.log('The component is about to be rendered', this.image);
  }


  render() {
    return (
      <div>
        <img class="logo" src={this.image}/>
      </div>
    );
  }
}
