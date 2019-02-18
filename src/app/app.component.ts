import { Component } from '@angular/core';
import { JsonService } from './json.Service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
	constructor(private JsonService : JsonService){};
	slideNumber : any = 0;
	userArr : any = [];
	albumArr : any = [];
	photoArr : any = [];

	ngOnInit(){
		let UserData = this.JsonService.getUser()
		.subscribe((data) => this.userArr = data);
	}

	navigateBack(iIndex){
		this.slideNumber = iIndex;
	}
	
	expandUser($event,iIndex,iObj){
		this.slideNumber = 1;
		let UserData = this.JsonService.getAlbum(iObj.id)
		.subscribe((data) => this.albumArr = data);
	}

	ExpandAlbum($event,iIndex,iObj){
		this.slideNumber = 2;
		let UserData = this.JsonService.getPhotos(iObj.id)
		.subscribe((data) => this.photoArr = data.slice(0,5));
	}
}


