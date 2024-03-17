import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<any> | undefined;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.getListOfRecipes();

    this.recipes$.subscribe(console.log)
    
  }

}
