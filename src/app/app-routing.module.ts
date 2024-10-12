import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomARenterComponent } from './becom-arenter/becom-arenter.component';
import { DrtailsComponent } from './drtails/drtails.component';
import { SinglCarComponent } from './singl-car/singl-car.component';
import { AllCarComponent } from './all-car/all-car.component';
import { HowItWorkComponent } from './how-it-work/how-it-work.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'become-renter',component:BecomARenterComponent}
,{path:'rental-deals',component:DrtailsComponent},{path:'singl-car/:id',component:SinglCarComponent}
,{path:'all-cars',component:AllCarComponent}
,{path:'how-it-work',component:HowItWorkComponent}
,{path:'why-choose-us',component:WhyChooseUsComponent}
,{path:'',redirectTo:'become-renter' ,pathMatch:'full'}
,{path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
