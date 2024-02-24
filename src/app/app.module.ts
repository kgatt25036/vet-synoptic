import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewTestsComponent } from './view-tests/view-tests.component';
import { ViewTestDetailsComponent } from './view-test-details/view-test-details.component';
import { AddTestComponent } from './add-test/add-test.component';
import { UpdateTestComponent } from './update-test/update-test.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormatIsVirusDetectedPipe } from './format-is-virus-detected.pipe'; // Import the custom pipe


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewTestsComponent,
    ViewTestDetailsComponent,
    AddTestComponent,
    UpdateTestComponent,
    HeaderComponent,
    FormatIsVirusDetectedPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
