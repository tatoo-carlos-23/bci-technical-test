import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';

@Component({
  selector: 'app-poke-manager',
  templateUrl: './poke-manager.component.html',
  styleUrls: ['./poke-manager.component.scss']
})
export class PokeManagerComponent implements OnInit {

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  private async getData() {
    try {
      const res = await this.pokeApiService.getDataPoke()
      console.warn("Res: ",res)
    } catch (error) {
      console.warn("Error data: ", error)
    }
  }
}
