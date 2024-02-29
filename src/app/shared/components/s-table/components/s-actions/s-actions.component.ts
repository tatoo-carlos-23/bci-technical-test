import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITbAction } from '../../interfaces/table.interface';

@Component({
  selector: 'app-s-actions',
  templateUrl: './s-actions.component.html',
  styleUrls: ['./s-actions.component.scss']
})
export class SActionsComponent {

  @Input() dataActions: ITbAction[] = [];
  @Output() changeAction = new EventEmitter<string>();

  constructor() { }

  public get getWidth() {
    return (this.dataActions.length * 45) + 'px'
  }



  public stylesIcon(action: ITbAction) {
    const sty: Record<string, string> = {}
    if (action.color) sty['color'] = action.color
    return sty;
  }

  public handlerChangeAction(actionName: string) {
    this.changeAction.emit(actionName)
  }
}
