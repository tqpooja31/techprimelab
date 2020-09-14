import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { NewIdeaComponent } from './new-idea/new-idea.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Routes, RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { DisplaydataComponent } from './displaydata/displaydata.component';


const routes: Routes = [
 {path:"login",component:LoginComponent},

 {path:"side",component:SidenavComponent,
 children:[{path:'idea',component:NewIdeaComponent},
            {path:'view',component:DisplaydataComponent},
        ],},


{path:'',redirectTo:'/login',pathMatch:'full'},
   
{path:'**',component:PagenotfoundComponent}


];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewIdeaComponent,
    SidenavComponent,
    PagenotfoundComponent,
    DisplaydataComponent,
  
   

  ],
  imports: [
    BrowserModule,
    
    BrowserAnimationsModule,MatInputModule,MatButtonModule,
    MatFormFieldModule,FormsModule, HttpClientModule,
    ReactiveFormsModule,RouterModule.forRoot(routes),

    MatCardModule,MatDatepickerModule,MatSelectModule,
    MatNativeDateModule,LayoutModule, MatToolbarModule,
    MatSidenavModule, MatIconModule, MatListModule,MatTableModule,MatPaginatorModule,MatSortModule,

  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

