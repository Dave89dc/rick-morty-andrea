import { NgModule } from '@angular/core';
import { LocationsPageRoutingModule } from './locations-page-routing.module';
import { LocationsPageComponent } from './locations-page.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    LocationsPageComponent
  ],
  imports: [
    SharedModule,
    LocationsPageRoutingModule
  ]
})
export class LocationsPageModule { }
