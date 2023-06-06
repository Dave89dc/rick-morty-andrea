import { NgModule } from '@angular/core';

import { CharactersPageComponent } from './characters-page.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [CharactersPageComponent],
  imports: [
SharedModule
  ],
  exports:[CharactersPageComponent]
})
export class CharactersPageModule {}
