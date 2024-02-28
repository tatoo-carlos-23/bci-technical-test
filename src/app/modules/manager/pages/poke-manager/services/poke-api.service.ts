import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { lastValueFrom, map } from 'rxjs';
import { IPokeApi } from '@core-interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private URL: string = environment.pokeApi.url;

  constructor(
    private httpClient: HttpClient
  ) { }

  public async getDataPoke(): Promise<IPokeApi[]> {

    const headers = new HttpHeaders()
      .set('X-RapidAPI-Key', environment.pokeApi.xRapidApiKey)
      .set('X-RapidAPI-Host', environment.pokeApi.xRapidApiHost);

    const URL = `${this.URL}/pokemon_types.json`;

    const obsData = this.httpClient.get<Record<number, IPokeApi>>(URL, { headers })
      .pipe(map(res => this.transformDataBody(res)))
      .pipe(map(res => this.deleteRepeats(res)))

    return lastValueFrom(obsData);
  }

  private transformDataBody(data: Record<number, IPokeApi>): IPokeApi[] {
    try {
      const dataBody: IPokeApi[] = [];
      const dataNumbers: string[] = Object.keys(data)
      for (let index = 0; index < dataNumbers.length; index++) {
        dataBody.push(data[index])
      }
      return dataBody
    } catch (error) {
      throw new Error("ERROR-01-080706")
    }
  }

  private deleteRepeats(data: IPokeApi[]): IPokeApi[] {
    try {
      const newDataBody: IPokeApi[] = []
      data.forEach(res => {
        const pokemon = newDataBody.find(f => f.pokemon_id === res.pokemon_id);
        if (!pokemon) newDataBody.push(res);
      })
      return newDataBody
    } catch (error) {
      throw new Error("ERROR-02-090807")
    }
  }
}
