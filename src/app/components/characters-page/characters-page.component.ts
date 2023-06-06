import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/model/character';
import { ConnectionService } from 'src/app/services/connection/connection.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.scss']
})
export class CharactersPageComponent implements OnInit{

  characters: Character[] = [];

  constructor(public connService: ConnectionService){
  }

  ngOnInit(): void {
    this.connService.getCharacters().subscribe({
      next: data => this.characters = data,
      error: err => console.log(err)
    })
  }


}
