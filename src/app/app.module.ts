import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {LoginModule} from 'app/components/login/login.module';
import {RouterModule} from '@angular/router';
import {routers} from './router';
import {LayoutsModule} from './components/layouts/layouts.module';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {SignUpComponent} from 'app/components/sign-up/sign-up.component';
import {UserVerificationComponent} from './components/user-verification/user-verification.component';
import {BusinessRegistrationModule} from 'app/components/business-registration/business-registration.module';
import {MasterComponent} from 'app/components/master/master.component';
import {SharedModule} from 'app/shared/shared.module';
import {TableModule} from './components/common/table/table.module';
import {UserComponent} from './components/user/user.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserPermissionsComponent} from './components/user/user-permissions/user-permissions.component';
import {AddUserComponent} from 'app/components/user/add-user/add-user.component';
import {ImageCaptureComponent} from './components/image-capture/image-capture.component';
import {AllUsersComponent} from 'app/components/user/all-users/all-users.component';
import {VehicleModule} from 'app/components/vehicle/vehicle.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {TranslateModule} from '@ngx-translate/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FusionChartsModule} from 'angular4-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';
import {DeviceModule} from "./components/device/device.module";
import {ProfileViewModule} from "./components/profile-view/profile-view.module";
import {TreeviewModule} from "ngx-treeview";

FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);

@NgModule({
  declarations: [
    AppComponent,
    ForgotPasswordComponent,
    SignUpComponent,
    UserVerificationComponent,
    MasterComponent,
    UserComponent,
    DashboardComponent,
    UserPermissionsComponent,
    AddUserComponent,
    ImageCaptureComponent,
    AllUsersComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RouterModule.forRoot(routers),
    LayoutsModule,
    BusinessRegistrationModule,
    SharedModule,
    TableModule,
    VehicleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot(),
    BrowserAnimationsModule,
    // https://fusioncharts.github.io/angular4-fusioncharts/
    FusionChartsModule,
    DeviceModule,
    ProfileViewModule,
    TreeviewModule.forRoot()
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
