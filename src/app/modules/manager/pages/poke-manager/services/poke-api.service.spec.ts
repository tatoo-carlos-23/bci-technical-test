import { TestBed } from '@angular/core/testing';

import { PokeApiService } from './poke-api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IPokeApi } from '@core-interfaces';

describe('PokeApiService', () => {
  let service: PokeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PokeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('should transformDataBody', () => {
    it('case ok', () => {
      const dataBody: Record<any, IPokeApi> = {
        34: { form: '', pokemon_id: 11, pokemon_name: '', type: [] },
        35: { form: '', pokemon_id: 11, pokemon_name: '', type: [] }
      }
      expect(service['transformDataBody'](dataBody).length).toEqual(2)
    })
  })
  describe('should deleteRepeats', () => {
    it('case ok', () => {
      const dataBody: IPokeApi[] = [
        { pokemon_id: 1, pokemon_name: '', form: '', type: [] },
        { pokemon_id: 1, pokemon_name: '', form: '', type: [] },
      ]
      expect(service['deleteRepeats'](dataBody).length).toEqual(1)
    })
  })
});
