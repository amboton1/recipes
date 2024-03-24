import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { RecipeService } from '../services/recipe.service';
import { ModalComponent } from 'src/app/modal/modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes$: Observable<any> | undefined;

  constructor(private recipeService: RecipeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.recipes$ = this.recipeService.getListOfRecipes();
    this.recipes$.subscribe(console.log)
  }

  openModal(recipe: any) {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { recipe: recipe }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
