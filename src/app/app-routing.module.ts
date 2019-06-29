import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ViewEntryComponent } from './components/view-entry/view-entry.component';

const routes: Routes = [

	{
		path: '',
		component: HomeComponent 
	},

	{
		path: 'admin/view/:id',
		component: ViewEntryComponent 
	},

	{
		path: 'admin',
		component: AdminComponent 
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
