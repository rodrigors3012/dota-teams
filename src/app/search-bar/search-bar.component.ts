import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/userdata.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  id:number;
  constructor(private userDataService:UserDataService) { }

  ngOnInit() {
    this.userDataService.currentTeamId.subscribe(id => this.id = id);
  }

  submitId(form)
  {
    console.log(form.value);
    this.userDataService.changeTeamId(form.value.idfield);
  }
}
