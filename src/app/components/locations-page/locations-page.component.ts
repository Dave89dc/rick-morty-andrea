import { Component, OnInit } from '@angular/core';
import { ConnectionService } from 'src/app/services/connection/connection.service';
import { Location } from 'src/app/model/location';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {


  locations: Location[] = [];

  constructor(public connService: ConnectionService){
    console.log('constructor')
  }

  ngOnInit(): void {
    console.log('oninit')
    this.connService.getLocations().subscribe({
      next: data => {
        this.locations = data
        console.log(this.locations)
      },
      error: err => console.log(err)
    })
  }

}
