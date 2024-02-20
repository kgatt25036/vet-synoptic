import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewTestDetailsComponent } from './view-test-details/view-test-details.component';
import { AddTestComponent } from './add-test/add-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'view-tests', component: ViewTestsComponent },
  { path: 'view-test-details/:id', component: ViewTestDetailsComponent },
  { path: 'add-test', component: AddTestComponent },
  { path: 'update-test/:id', component: UpdateTestComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: '**', redirectTo: '/login' }, // Redirect to login for any other path
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
