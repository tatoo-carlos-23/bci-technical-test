import { Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';
import { ICPagination, IPokeApi } from '@core-interfaces';
import { dataActions, dataHeaders } from './utils/columns.util';
import { ITbAction, ITbChangeAction, ITbColumn } from '@shared-components';
import { CLocalPaginationService } from '@core-services';

@Component({
  selector: 'app-poke-manager',
  templateUrl: './poke-manager.component.html',
  styleUrls: ['./poke-manager.component.scss']
})
export class PokeManagerComponent {

  public readonly dataHeaders: ITbColumn[] = dataHeaders;
  public readonly dataActions: ITbAction[] = dataActions;
  public isLoading: boolean = true;
  public dataBody: ICPagination<IPokeApi> = {} as ICPagination<IPokeApi>;
  public numberPage = 1;

  private contentDataBody: IPokeApi[] = []


  constructor(
    private pokeApiService: PokeApiService,
    private localPaginationService: CLocalPaginationService
  ) {
    this.getData()
  }

  private async getData() {
    this.isLoading = true
    this.dataBody.content = []
    try {
      this.contentDataBody = await this.pokeApiService.getDataPoke()
      this.changeGetData()
    } catch (error) {
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }

  private async changeGetData() {
    this.isLoading = true
    this.dataBody.content = []
    try {
      this.dataBody = this.localPaginationService.pagination(this.contentDataBody, this.numberPage)
    } catch (error) {
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }

  handlerChangePage(page: number) {
    this.numberPage = page + 1;
    this.changeGetData()
  }

  public handlerChangeAction(val: ITbChangeAction) {
    console.warn("Data actions selected: ", val)
  }
}
