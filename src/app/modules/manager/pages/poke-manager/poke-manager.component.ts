import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';
import { IPokeApi } from '@core-interfaces';
import { dataActions, dataHeaders } from './utils/columns.util';
import { ITbAction, ITbColumn } from '@shared-components';

@Component({
  selector: 'app-poke-manager',
  templateUrl: './poke-manager.component.html',
  styleUrls: ['./poke-manager.component.scss']
})
export class PokeManagerComponent {

  public dataBody: IPokeApi[] = [];
  public readonly dataHeaders: ITbColumn[] = dataHeaders;
  public readonly dataActions: ITbAction[] = dataActions;
  public isLoading: boolean = true;

  constructor(
    private pokeApiService: PokeApiService
  ) {
    this.getData()
  }

  private async getData() {
    this.isLoading = true
    this.dataBody = []
    try {
      this.dataBody = await this.pokeApiService.getDataPoke()
    } catch (error) {
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }
}
