import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosCreatedComponent } from './cursos-created/cursos-created.component';
import { CursosEditComponent } from './cursos-edit/cursos-edit.component';

import { CursosComponent } from './cursos.component';


const routes_Cursos: Routes = [
    {
        path: '',
        component: CursosComponent,
        children: [

            {
                path: 'create',
                component: CursosCreatedComponent,
            }
            ,

            {
                path: 'edit',
                component: CursosEditComponent
            }
        ]
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes_Cursos)],
    exports: [RouterModule]
})
export class CursosRoutingModule { }
