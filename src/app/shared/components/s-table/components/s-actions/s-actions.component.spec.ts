import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SActionsComponent } from './s-actions.component';

describe('SActionsComponent', () => {
  let component: SActionsComponent;
  let fixture: ComponentFixture<SActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SActionsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('get styles color for icon', () => {
    it('no color', () => {
      const action = component.stylesIcon({ iconName: 'person', name: 'delete' })
      expect(Object.keys(action).length).toEqual(0)
    })
    it('si color', () => {
      const action = component.stylesIcon({ iconName: 'person', name: 'delete', color: 'red' })
      expect(Object.keys(action).length > 0).toBeTrue()
    })
  })

  it('emit changeAction', () => {
    spyOn(component.changeAction, 'emit'); 
    component.handlerChangeAction('') 
    expect(component.changeAction.emit).toHaveBeenCalledWith('')
  })
});
