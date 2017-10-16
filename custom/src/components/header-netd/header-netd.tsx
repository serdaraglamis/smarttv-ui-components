import {Component, Prop, Listen, State} from '@stencil/core';

@Component({
  tag: 'header-netd',
  styleUrl: 'header-netd.scss'
})
export class HeaderNetd {

  /* @Prop() data: {

   };*/

  @State() rightBlock: any;

  data: {
    logo?: string,
    headerType?: string, // badge, text, channel,
    textInfo?: {
      text: string,
      fontSize?: number,
      color?: string
    },
    badgeInfo?: {
      text: string,
      fontSize?: number,
      padding?: string,
      color?: string,
      backgroundColor?: string
    },
    channelInfo?: {
      text: string,
      image?: string,
      videoCount?: string | number,
      followersCount?: string | number
    }
  };


  componentWillLoad() {
/*    this.data = {
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
    };*/
    console.log('The component is about to be rendered', this);

    this.getRightBlock();
  }

  getLeftBlock() {
    switch (this.data.headerType) {
      case 'badge':
        let badgeStyle = {
          fontSize: `${this.data.badgeInfo.fontSize || 23}px`,
          color: this.data.badgeInfo.color,
          padding: this.data.badgeInfo.padding,
          backgroundColor: this.data.badgeInfo.backgroundColor
        };
        return (
          <span style={badgeStyle} class="badge-container">{this.data.badgeInfo.text}</span>
        );
      case 'text':

        let textStyle = {
          fontSize: `${this.data.textInfo.fontSize || 40}px`,
          color: this.data.textInfo.color || 'white'
        };
        return (
          <span style={textStyle} class="text-title">{this.data.textInfo.text}</span>
        );
      case 'channel':
        let imageConfig = {
          width: 75,
          height: 75
        };
        return (
          <div class="channel-container">
            <image-rounded image={this.data.channelInfo.image} config={imageConfig}></image-rounded>
            <div class="text-block">
              <div class="title">{this.data.channelInfo.text}</div>
              <div class="sub-info">
                <span class="video-count">{`${this.data.channelInfo.videoCount} VİDEO | `}</span>
                <span class="followers-count">{this.data.channelInfo.followersCount} TAKİPÇİ</span>
              </div>
            </div>
          </div>
        )
    }
  }

  @Listen('authEvent')
  getRightBlock(authEvent?) {
    let element: any;
    if(authEvent) {
        element = (
          <div></div>
        )
    } else {
      element = (
        <div class="buttons">
          <span class="rounded-button">A</span>
          <span class="rounded-button">B</span>
        </div>
      )
    }
    this.rightBlock = element;
  }

  render() {
    return (
      <div>
        <page-layout direction="vertical" width="20%">
          <main-logo image={this.data.logo}></main-logo>
        </page-layout>
        <page-layout direction="vertical" width="80%">
          <div class="left-info">
            {this.getLeftBlock()}
          </div>
          <div class="right-info">
            {this.rightBlock}
          </div>
        </page-layout>
      </div>
    );
  }
}
