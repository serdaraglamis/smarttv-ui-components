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

  }


  render() {
    return (
      <div>
        <img class="logo" src={this.image}/>
      </div>
    );
  }
}
