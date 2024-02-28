import { Component, Input } from '@angular/core';
import { ITbAction, ITbColumn } from './interfaces/table.interface';

@Component({
  selector: 'app-s-table',
  templateUrl: './s-table.component.html',
  styleUrls: ['./s-table.component.scss']
})
export class STableComponent {

  @Input() dataHeaders: ITbColumn[] = [];

  @Input() dataBody: any[] = [];
  @Input() dataActions: ITbAction[] = [];

  @Input() isLoading?: boolean;

  constructor() { }

  public get getColumns(): string[] {
    const columns = this.dataHeaders.map(r => r.id)
    if (this.dataActions.length === 0) return columns; 
    return ['actions'].concat(columns)
  }

  public get getWidth() {
    return (this.dataActions.length * 55) + 'px'
  }

}