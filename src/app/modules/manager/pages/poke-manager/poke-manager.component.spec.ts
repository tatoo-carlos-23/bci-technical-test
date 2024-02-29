import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeManagerComponent } from './poke-manager.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PokeApiService } from './services/poke-api.service';
import { CLocalPaginationService } from '@core-services';

describe('PokeManagerComponent', () => {
  let component: PokeManagerComponent;
  let fixture: ComponentFixture<PokeManagerComponent>;

  let apiPokeService: jasmine.SpyObj<PokeApiService>;
  let apiLocalPagination: jasmine.SpyObj<CLocalPaginationService>;

  beforeEach(async () => {

    apiPokeService = jasmine.createSpyObj<PokeApiService>(
      'PokeApiService',
      ['getDataPoke']
    )

    await TestBed.configureTestingModule({
      declarations: [
        PokeManagerComponent
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        ToastrModule.forRoot()
      ],
      providers: [
        ToastrService,
        {
          provide: PokeApiService,
          useValue: apiPokeService,
        },
        {
          provide: CLocalPaginationService,
          useValue: apiLocalPagination,
        },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PokeManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should changeGetData', () => {
    it('result ok', () => {
      component['contentDataBody'] = []
      component['changeGetData']();
      expect(component.dataBody.content.length).toEqual(0)
    })
    // it('resault error', () => {
    //   const error = new Error('Err') as any
    //   const spy = apiLocalPagination.pagination.and.returnValue(error)
    //   component['changeGetData']();
    //   expect(spy).toHaveBeenCalled();
    // })
  })

  it('handlerChangePage', () => {
    component.handlerChangePage(2)
    expect(component.numberPage).toEqual(2)
  })

  it('method updatePokemon', () => {
    component['contentDataBody'] = [
      { pokemon_id: 1, pokemon_name: 'pkename__', form: 'form', type: ['type01'] },
      { pokemon_id: 2, pokemon_name: 'pkename__2', form: 'form2', type: ['type02'] }
    ]
    component['updatePokemon']({ pokemon_id: 1, pokemon_name: 'pkename', form: 'form', type: ['type01'] })
    expect(component['contentDataBody'].length).toEqual(2)
  })

  it('method savePokemon', () => {
    component['contentDataBody'] = [
      { pokemon_id: 1, pokemon_name: 'pkename__', form: 'form', type: ['type01'] },
      { pokemon_id: 2, pokemon_name: 'pkename__2', form: 'form2', type: ['type02'] }
    ]
    component['savePokemon']({ pokemon_id: 3, pokemon_name: 'pkename3', form: 'form3', type: ['type03'] })
    expect(component['contentDataBody'].length).toEqual(3)
  })


  describe('method deletePokemon', () => {
    it('method deletePokemon - result ok', () => {
      component['contentDataBody'] = [
        { pokemon_id: 1, pokemon_name: 'pkename__', form: 'form', type: ['type01'] },
        { pokemon_id: 2, pokemon_name: 'pkename__2', form: 'form2', type: ['type02'] }
      ]
      component['deletePokemon']({ pokemon_id: 2, pokemon_name: 'pkename3', form: 'form3', type: ['type03'] })
      expect(component['contentDataBody'].length).toEqual(1)
    }) 
  })
});
