import { Component, Input } from '@angular/core';
import { ITbAction } from '../../interfaces/table.interface';

@Component({
  selector: 'app-s-actions',
  templateUrl: './s-actions.component.html',
  styleUrls: ['./s-actions.component.scss']
})
export class SActionsComponent {

  @Input() dataActions: ITbAction[] = [];

  constructor() { }

  public get getWidth() {
    return (this.dataActions.length * 45) + 'px'
  }

  public stylesIcon(action: ITbAction) {
    const sty: Record<string, string> = {}
    if (action.color) sty['color'] = action.color
    return sty;
  }

}
