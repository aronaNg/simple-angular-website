import { NgModule } from '@angular/core';
import { RouterModule, Routes } from
'@angular/router';
import { AjoutetudiantComponent } from './ajoutetudiant/ajoutetudiant.component';
import { AjoutprofesseurComponent } from './ajoutprofesseur/ajoutprofesseur.component';
import { AjoutpersonnelComponent } from './ajoutpersonnel/ajoutpersonnel.component';
import { AccueilComponent } from './accueil/accueil.component';
const routes: Routes = [
  {path:'', component: AccueilComponent},
  {path:'ajoutetudiant', component: AjoutetudiantComponent},
  {path:'ajoutprofesseur', component: AjoutprofesseurComponent},
  {path:'ajoutpersonnel', component: AjoutpersonnelComponent}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
