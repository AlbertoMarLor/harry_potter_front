import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  baseUrl: string


  constructor(
    private HttpClient: HttpClient
  ) {

    this.baseUrl = 'http://localhost:3000/api/characters'



  }

  getAll() {
    return firstValueFrom(
      this.HttpClient.get<any>(this.baseUrl)
    )
  }

  getCharacterById(characterId: number) {
    return firstValueFrom(
      this.HttpClient.get<any>(`${this.baseUrl}/${characterId}`)
    );
  }
}