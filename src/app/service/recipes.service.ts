import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://raw.githubusercontent.com/Dawkos/pam/master/src/app/recipes.json');
  }
  getRecipesByType(type: string){
    //return this.http.get();
  }
  initRecipes(){
    //return this.http.get();
  }
}
