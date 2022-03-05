import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddAnimalComponent } from './components/add-animal/add-animal.component';
import { FormGroupsComponent } from './components/form-groups/form-groups.component';
import { FormBuilderComponent } from './components/form-builder/form-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    AddAnimalComponent,
    FormGroupsComponent,
    FormBuilderComponent,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
