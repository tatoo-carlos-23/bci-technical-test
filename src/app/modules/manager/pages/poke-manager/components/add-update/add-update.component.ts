import { ChangeDetectionStrategy, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IPokeApi } from '@core-interfaces';

@Component({
  selector: 'app-add-update',
  templateUrl: './add-update.component.html',
  styleUrls: ['./add-update.component.scss'],
  
})
export class AddUpdateComponent implements OnInit, OnDestroy {

  form!: FormGroup;

  listChips: string[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  constructor(
    private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: IPokeApi,
  ) {
    this.form = this.fb.group({
      pokemon_id: [null],
      pokemon_name: [null, [Validators.required]],
      form: [null, [Validators.required]],
      type: [null, [Validators.required]],
    })
  }

  ngOnDestroy(): void {
    this.listChips = []
    this.form.reset()
  }

  ngOnInit(): void {
    if (this.data && this.data.pokemon_id) {
      this.form.setValue(this.data)
      this.listChips = this.data.type as string[]
    }
  }


  removeChip(chip: string): void {
    const index = this.listChips.indexOf(chip);
    if (index >= 0) {
      this.listChips.splice(index, 1);
      if (this.listChips.length === 0) {
        this.form.get('type')?.setValue(null)
      } else {
        this.form.get('type')?.setValue(this.listChips)
      }
    }
  }

  addChip(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    // Add our fruit
    if (value) {
      this.listChips.push(value);
      this.form.get('type')?.setValue(this.listChips)
    }
    // Clear the input value
    event.chipInput!.clear();
  }



}
