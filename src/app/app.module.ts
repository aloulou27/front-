import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LoginComponent } from './components/login/login.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatTooltipModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
   LoginComponent,
   EditProfileComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
