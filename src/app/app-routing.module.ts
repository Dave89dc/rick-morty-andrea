import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';

const routes: Routes = [
  {path:'characters', component: CharactersPageComponent},
  {path: 'locations', loadChildren: () => import('./components/locations-page/locations-page.module').then(m => m.LocationsPageModule) },
  {path:'', redirectTo: 'characters', pathMatch: 'full'},
  {path:'**', redirectTo: 'characters'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
