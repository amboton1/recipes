import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient) {}

  getListOfRecipes() {
    return this.http.get<any>(`${environment.API_URL}/recipes/list`, {
      headers: {
        'X-RapidAPI-Key': `${environment.API_TOKEN}`,
        'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
      }
    })
  }
}
