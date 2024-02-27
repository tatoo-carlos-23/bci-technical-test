import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';

@Component({
  selector: 'app-manager',
  templateUrl: './manager.component.html',
  styleUrls: ['./manager.component.scss']
})
export class ManagerComponent implements OnInit {

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
