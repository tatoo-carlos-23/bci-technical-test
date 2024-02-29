import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITbAction, ITbChangeAction, ITbColumn } from './interfaces/table.interface';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss'],
})
export class STableComponent {

  @Input() dataHeaders: ITbColumn[] = [];

  @Input() dataBody: any[] = [];
  @Input() dataActions: ITbAction[] = [];

  @Input() isLoading?: boolean;

  //Paginacion
  @Input() dataContentAll: number = 0;
  @Input() pageSizeOptions: number[] = [10, 50, 100]
  @Input() numberPage: number = 0;
  @Input() numberSize: number = 10;

  @Output() changePage = new EventEmitter<number>();
  @Output() changeAction = new EventEmitter<ITbChangeAction>();

  constructor() { }

  public get getColumns(): string[] {
    const columns = this.dataHeaders.map(r => r.id)
    if (this.dataActions.length === 0) return columns;
    return ['actions'].concat(columns)
  }

  public get getWidth() {
    return (this.dataActions.length * 55) + 'px'
  }

  handlerChangePage(ev: PageEvent) {
    // console.warn('sdas', { pag: ev.pageIndex, cant: ev.pageSize })
    this.changePage.emit(ev.pageIndex)
  }

  public handlerChangeAction(actionName: string, index: number, row: any) {
    this.changeAction.emit({ actionName, row, index })
  }

}