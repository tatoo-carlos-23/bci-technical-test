import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SActionsComponent } from './s-actions.component';

describe('SActionsComponent', () => {
  let component: SActionsComponent;
  let fixture: ComponentFixture<SActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SActionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
