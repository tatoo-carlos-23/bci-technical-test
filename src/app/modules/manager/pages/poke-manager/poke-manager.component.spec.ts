import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeManagerComponent } from './poke-manager.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';

describe('PokeManagerComponent', () => {
  let component: PokeManagerComponent;
  let fixture: ComponentFixture<PokeManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        PokeManagerComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
