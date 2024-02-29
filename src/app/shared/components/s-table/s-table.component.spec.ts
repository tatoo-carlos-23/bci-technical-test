import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STableComponent } from './s-table.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('STableComponent', () => {
  let component: STableComponent;
  let fixture: ComponentFixture<STableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [STableComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();

    fixture = TestBed.createComponent(STableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should getColumns', () => {
    it('no column actions', () => {
      component.dataActions = []
      expect(component.getColumns.length).toEqual(0)
    })
    it('yes column actions', () => {
      component.dataActions = [{ name: '', iconName: '' }]
      component.dataHeaders = [{ id: 'id', label: 'ID' }]
      expect(component.getColumns.length > 0).toBeTrue()
    })
  })

  describe('should getWidth', () => {
    it('no column action', () => {
      component.dataActions = []
      expect(component.getWidth).toEqual(0 + 'px')
    })
    it('yes column action', () => {
      component.dataActions = [{ name: '', iconName: '' }]
      expect(component.getWidth).toEqual(55 + 'px')
    })
  })

  it('emit handlerChangePage', () => {
    spyOn(component.changePage, 'emit');
    component.handlerChangePage({} as any)
    expect(component.changePage.emit).toHaveBeenCalled()
  })

  it('emit handlerChangeAction', () => {
    spyOn(component.changeAction, 'emit');
    component.handlerChangeAction('', 0, {} as any)
    expect(component.changeAction.emit).toHaveBeenCalled()
  })
});
