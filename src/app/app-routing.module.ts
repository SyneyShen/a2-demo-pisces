import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'index', component: IndexComponent},
            { path: 'contactus', component: ContactusComponent},
            { path: '', redirectTo: '/index', pathMatch: 'full'},
            { path: '**', component: IndexComponent}
        ], {useHash: true})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule{

}