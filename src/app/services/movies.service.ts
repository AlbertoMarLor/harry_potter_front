import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  baseUrl: string


  constructor(
    private HttpClient: HttpClient
  ) {

    this.baseUrl = 'http://localhost:3000/api/movies'



  }

  getAll() {
    const options = {
      headers: new HttpHeaders({
        'Authorization': localStorage.getItem('tokenPotter')!
      })
    }
    return firstValueFrom(
      this.HttpClient.get<any>(this.baseUrl, options)
    )
  }


}
