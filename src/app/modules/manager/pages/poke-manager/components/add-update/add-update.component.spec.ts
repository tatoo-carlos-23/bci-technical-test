import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpdateComponent } from './add-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

describe('AddUpdateComponent', () => {
  let component: AddUpdateComponent;
  let fixture: ComponentFixture<AddUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddUpdateComponent],
      imports: [ReactiveFormsModule, MatDialogModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }]
    }).compileComponents();

    fixture = TestBed.createComponent(AddUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('test ngOnInit', () => {
    component.data = { pokemon_id: 1, pokemon_name: 'pokemon', form: 'form', type: ['type01'] }
    component.ngOnInit()
    expect(component.form.get('pokemon_name')?.value).toEqual('pokemon')
  })

  it('test addChip', () => {
    component.listChips = ['uno', 'dos']
    const clear = () => {

    }
    component.addChip({ value: 'tres', chipInput: { clear: clear } } as any)
    // expect(component.form.get('pokemon_name')?.value).toEqual('pokemon')
    expect(component.listChips.length).toEqual(3)
  })

  it('test removeChip', () => {
    component.listChips = ['uno', 'dos']
    component.removeChip('uno')
    // expect(component.form.get('pokemon_name')?.value).toEqual('pokemon')
    expect(component.listChips.length).toEqual(1)
  })

  it('test removeChip - 0 chips selected', () => {
    component.listChips = ['uno']
    component.removeChip('uno')
    expect(component.listChips.length).toEqual(0)
    expect(component.form.get('type')?.value).toEqual(null)
  })
});
