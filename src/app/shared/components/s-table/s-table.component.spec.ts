import { ComponentFixture, TestBed } from '@angular/core/testing';

import { STableComponent } from './s-table.component';

describe('STableComponent', () => {
  let component: STableComponent;
  let fixture: ComponentFixture<STableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ STableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(STableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
