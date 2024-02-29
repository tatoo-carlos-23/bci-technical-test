import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PokeApiService } from './services/poke-api.service';
import { ICPagination, IPokeApi } from '@core-interfaces';
import { dataActions, dataHeaders } from './utils/columns.util';
import { ITbAction, ITbChangeAction, ITbColumn } from '@shared-components';
import { CLocalPaginationService } from '@core-services';
import { MatDialog } from '@angular/material/dialog';
import { DeleteComponent } from './components/delete/delete.component';
import { AddUpdateComponent } from './components/add-update/add-update.component';

@Component({
  selector: 'app-poke-manager',
  templateUrl: './poke-manager.component.html',
  styleUrls: ['./poke-manager.component.scss'],
})
export class PokeManagerComponent {

  public readonly dataHeaders: ITbColumn[] = dataHeaders;
  public readonly dataActions: ITbAction[] = dataActions;
  public isLoading: boolean = true;
  public dataBody: ICPagination<IPokeApi> = {} as ICPagination<IPokeApi>;
  public numberPage = 0;

  private contentDataBody: IPokeApi[] = []

  private isModeUpdate = false

  constructor(
    private pokeApiService: PokeApiService,
    private localPaginationService: CLocalPaginationService,
    private dialog: MatDialog
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

  private changeGetData() {
    this.isLoading = true
    this.dataBody.content = []
    try {
      this.dataBody = this.localPaginationService.pagination(this.contentDataBody, this.numberPage + 1)
    } catch (error) {
      this.isLoading = false;
    } finally {
      this.isLoading = false;
    }
  }

  handlerChangePage(page: number) {
    this.numberPage = page;
    this.changeGetData()
  }

  public handlerChangeAction(val: ITbChangeAction<IPokeApi>) {
    if (val.actionName === "delete") {
      this.openDialog(val.row)
    } else if (val.actionName === "edit") {
      this.openModalAddOrUpdate(val.row.pokemon_id)
    }
  }

  private deletePokemon(row: IPokeApi) {
    try {
      this.numberPage = 0
      this.contentDataBody = this.contentDataBody.filter(fl => fl.pokemon_id !== row.pokemon_id)
      this.changeGetData()
    } catch (error) {
      console.warn('Error: ', error)
    }
  }

  openDialog(pokemon: IPokeApi): void {
    const modal = this.dialog.open(DeleteComponent, {
      width: '250px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      disableClose: true,
      data: { ...pokemon }
    })

    modal.afterClosed().subscribe((result: IPokeApi) => {
      if (result) {
        this.deletePokemon(result)
      }
    });
  }

  openModalAddOrUpdate(pokemonId?: number) {
    const pokemon: IPokeApi | undefined = this.contentDataBody.find(r => r.pokemon_id === pokemonId)
    this.isModeUpdate = pokemon ? true : false
    const modal = this.dialog.open(AddUpdateComponent, {
      minWidth: '290px',
      enterAnimationDuration: '10ms',
      exitAnimationDuration: '10ms',
      disableClose: true,
      data: { ...pokemon }
    })
    modal.afterClosed().subscribe((result: IPokeApi) => {
      if (result && this.isModeUpdate) {
        this.updatePokemon(result)
      } else if (result && !this.isModeUpdate) {
        this.savePokemon(result)
      } else {
        this.changeGetData()
      } 
    });
  }

  private updatePokemon(pokemon: IPokeApi) {
    try {
      this.contentDataBody = this.contentDataBody.filter(fl => fl.pokemon_id !== pokemon.pokemon_id)
      this.contentDataBody.push(pokemon)
      this.contentDataBody = this.contentDataBody.reverse()
      this.changeGetData()
    } catch (error) {

    }
  }

  private savePokemon(pokemon: IPokeApi) {
    try {
      pokemon.pokemon_id = (this.contentDataBody.length * 10) + this.contentDataBody.length
      this.contentDataBody.push(pokemon)
      this.contentDataBody = this.contentDataBody.reverse()
      this.changeGetData()
    } catch (error) {

    }
  }
}
