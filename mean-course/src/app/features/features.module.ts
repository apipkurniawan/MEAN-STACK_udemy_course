import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from './../components/components.module';

import { CalculatorComponent } from './calculator/calculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PostCreateComponent } from './posting/post-create/post-create.component';
import { PostListComponent } from './posting/post-list/post-list.component';
import { PostContainerComponent } from "./posting/post-container.component";
@NgModule({
  declarations: [
    CalculatorComponent,
    DashboardComponent,
    PostCreateComponent,
    PostListComponent,
    PostContainerComponent
  ],
  imports: [
    SharedModule,
    ComponentsModule
  ],
  exports: []
})
export class FeaturesModule { }