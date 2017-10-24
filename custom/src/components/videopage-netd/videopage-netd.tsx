import {Component, Prop, Listen, State, EventEmitter, Event} from '@stencil/core';

@Component({
  tag: 'videopage-netd',
  styleUrl: 'videopage-netd.scss'
})
export class VideopageNetd {

  /* @Prop() data: {

   };*/

  headerData: any;
  @Prop() data?: {
    image?: string,
    title?: string,
    date?: string,
    channelName?: string,
    duration?: number
  };

  @State() playInfo?: {
    current?: string | number | any,
    total?: string | number | any
  };

  componentWillLoad() {
/*    this.data = {
      image: "http://assets.dogannet.tv/img/75/130x130/59b7de0d6300333ba12a7cf3",
      title: 'Lorem Ipsum Dolor Sitmet Consend',
      channelName: 'Channel Name',
      date: '2 gün önce',
      duration: 115
    };*/
    this.playInfo = {
      current: 0,
      total: this.data.duration
    }

  }


  componentDidLoad() {
  }

  @Listen('playerEvent')
  timeUpdateHandler(data) {
    const currentPlayInfo = Object.assign({}, this.playInfo);
    currentPlayInfo.current = data.detail.current;
    this.playInfo = currentPlayInfo;
  }

  calculateProgress() {
    return `${(this.playInfo.current / this.playInfo.total) * 100}%`;
  }

  convertTimeStamp(value) {
    const sec_num = parseInt(value, 10); // don't forget the second param
    let hours: string | number   = Math.floor(sec_num / 3600);
    let minutes: string | number = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds: string | number = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
  }

  render() {
    let imageConfig = {
      width: 75,
      height: 75
    };
    return (
      <div class="video-page">
        <div class="top-block">
          <div class="player-info">
            <image-rounded image={this.data.image} config={imageConfig}></image-rounded>
            <div class="description">
              <div class="title">
                {this.data.title}&nbsp;&nbsp;•
                <span class="date">2 gün önce</span>
              </div>
              <div class="channel">{this.data.channelName}</div>
            </div>
          </div>
        </div>
        <div class="bottom-block">
          <table class="progress-bar">
            <td class="current">{this.convertTimeStamp(this.playInfo.current)}</td>
            <td class="progress">
              <span class="background"></span>
              <span class="overlay" style={{width: this.calculateProgress()}}></span>
            </td>
            <td class="total">{this.convertTimeStamp(this.playInfo.total)}</td>
          </table>
        </div>
      </div>
    );
  }
}
