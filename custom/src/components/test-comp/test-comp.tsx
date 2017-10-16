import {Component, Prop, Listen, State} from '@stencil/core';

@Component({
  tag: 'test-comp',
  styleUrl: 'test-comp.scss'
})
export class HeaderNetd {

  /* @Prop() data: {

   };*/

  headerData: any;

  componentWillLoad() {
    this.headerData = {
      logo: "https://firebasestorage.googleapis.com/v0/b/smarttv-7a185.appspot.com/o/netd.png?alt=media&token=c36b1d77-7c4a-487f-a3cd-7d8cc16d5900",
      headerType: 'channel',
      badgeInfo: {
        text: 'müzik',
        fontSize: 30,
        padding: '10px'
      },
      textInfo: {
        fontSize: 40,
        text: 'Kanallar'
      },
      channelInfo: {
        text: 'Lorem Ipsum',
        image: 'http://assets.dogannet.tv/img/75/130x130/59b7de0d6300333ba12a7cf3',
        videoCount: 24,
        followersCount: 1567
      }
    };

  }

  render() {
    return (
      <div>
        <header-netd data={this.headerData}></header-netd>
      </div>
    );
  }
}
