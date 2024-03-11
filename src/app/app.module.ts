import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EtudiantlistComponent } from './etudiantlist/etudiantlist.component';
import { MypipePipe } from './mypipe.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EnseignantlistComponent } from './enseignantlist/enseignantlist.component';
import { PersonnelComponent } from './personnel/personnel.component';
import { PersonnellistComponent } from './personnellist/personnellist.component';

@NgModule({
  declarations: [
    AppComponent,
    EtudiantComponent,
    EtudiantlistComponent,
    MypipePipe,
    NavbarComponent,
    EnseignantComponent,
    EnseignantlistComponent,
    PersonnelComponent,
    PersonnellistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
