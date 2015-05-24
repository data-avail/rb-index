import {Component, View, NgFor} from 'angular2/angular2';
import {IMediaVM} from '../../global/vm';

interface IMediaItemVM {
  item : IMediaVM
  style: Object
}  

@Component({
  properties : {media: "media"},
  selector: 'mosaic'
})
@View({
  template: `
    <ul>
      <li *ng-for="#item of getDisplayedMedia()">
        <img [style.width]="item.style.width" [style.height]="item.style.height" [src]="item.item.url">        
      </li>
    </ul>
  `,
  directives: [NgFor]
})
export class Mosaic {
  
  media: IMediaVM[]   
  
  constructor() {
  }
  
  getDisplayedMedia() : IMediaItemVM[] {
    return (this.media ? this.media.filter((f) => f.type == "image") : [])
    .map(function(m) { return {
      item : m, 
      style : {width: "100px", height : "100px"}
    }});
  }
}
