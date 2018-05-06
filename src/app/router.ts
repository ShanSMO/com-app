import {Routes} from '@angular/router';
import {MasterComponent} from './components/master/master.component';
import {TableComponent} from './components/common/table/table.component';
import {UserComponent} from './components/user/user.component';
import {CommonLayoutComponent} from './components/layouts/common-layout.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {UserPermissionsComponent} from './components/user/user-permissions/user-permissions.component';
import {AddUserComponent} from './components/user/add-user/add-user.component';
import {ImageCaptureComponent} from './components/image-capture/image-capture.component';
import {LoginComponent} from './components/login/login.component';
import {BlankLayoutComponent} from './components/layouts/blank-layout/blank-layout.component';
import {ForgotPasswordComponent} from './components/forgot-password/forgot-password.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {LocationComponent} from './components/location/location.component';
import {UserVerificationComponent} from './components/user-verification/user-verification.component';
import {AllUsersComponent} from './components/user/all-users/all-users.component';
import {BusinessRegistrationComponent} from './components/business-registration/business-registration.component';
import {PersonalDetailsComponent} from './components/business-registration/personal-details/personal-details.component';
import {OrganizationDetailsComponent} from './components/business-registration/organization-details/organization-details.component';
import {OrganizationPropertyComponent} from './components/business-registration/organization-property/organization-property.component';
import {RegistrationFinalizeComponent} from './components/business-registration/registration-finalize/registration-finalize.component';
import {CreateVehicleComponent} from './components/vehicle/create-vehicle/create-vehicle.component';
import {UpdateVehicleComponent} from './components/vehicle/update-vehicle/update-vehicle.component';
import {VehicleListComponent} from './components/vehicle/vehicle-list/vehicle-list.component';
import {VehicleLayoutComponent} from './components/vehicle/vehicle-layout/vehicle-layout.component';
import {DeviceAddComponent} from './components/device/device-add/device-add.component';
import {AllDevicesComponent} from './components/device/all-devices/all-devices.component';
import {ProfileViewComponent} from './components/profile-view/profile-view/profile-view.component';
import {CollectionSchedulesComponent} from './components/task-management/collection-schedules/collection-schedules.component';
import {CustomerOverviewComponent} from './components/customers/customer-overview/customer-overview.component';
import {CustomerCreateComponent} from './components/customers/customer-create/customer-create.component';
import {CollectionScheduleOverviewComponent} from './components/task-management/collection-schedule-overview/collection-schedule-overview.component';

export const routers: Routes = [

  {path: '', component: BlankLayoutComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'forgot-password', component: ForgotPasswordComponent},
      {path: 'sign-up', component: SignUpComponent},
      {path: 'verify', component: UserVerificationComponent},
      {path: 'br', component: BusinessRegistrationComponent}
    ]
  },
  {path: 'home', component: CommonLayoutComponent,
    children: [
      {path: 'master', component: MasterComponent},
      {path: 'table', component: TableComponent},
      {path: 'user', component: UserComponent},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'permissions', component: UserPermissionsComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'camera', component: ImageCaptureComponent},
      {path: 'location', component: LocationComponent},
      {path: 'all-users', component: AllUsersComponent}
    ]
  },
  {path: 'registration' , component: BusinessRegistrationComponent ,
    children: [
      {path: 'personal-details', component: PersonalDetailsComponent},
      {path: 'organization-details', component: OrganizationDetailsComponent},
      {path: 'organization-properties', component: OrganizationPropertyComponent},
      {path: 'finalize', component: RegistrationFinalizeComponent}
    ]
  },
  {path: '' , component: CommonLayoutComponent ,
    children: [
      {path: 'vehicle', component: VehicleLayoutComponent,
        children: [
        {path: 'vehicle/list-all-vehicles', component: VehicleListComponent},
        {path: 'vehicle/add-new-vehicle', component: CreateVehicleComponent},
        {path: 'vehicle/update-vehicle', component: UpdateVehicleComponent},
        {path: 'vehicle/staff-assign', component: VehicleListComponent}
      ]},

    ]
  },
  {path: '', component: CommonLayoutComponent, children: [
    {path: 'device/add', component: DeviceAddComponent},
    {path: 'device/all', component: AllDevicesComponent}
  ]},
  {path: '', component: CommonLayoutComponent, children: [
    {path: 'oa/devices', component: AllDevicesComponent},
    {path: 'oa/vehicles', component: DeviceAddComponent},
    {path: 'oa/agents', component: DeviceAddComponent},
    {path: 'oa/customers', component: DeviceAddComponent}
  ]},
  { path: '' , component: CommonLayoutComponent, children: [
    {path: 'profile', component: ProfileViewComponent}
  ]},
  { path: '' , component: CommonLayoutComponent, children: [
    {path: 'create-schedule', component: CollectionSchedulesComponent},
    {path: 'schedule-overview', component: CollectionScheduleOverviewComponent}
  ]},
  { path: '' , component: CommonLayoutComponent, children: [
    {path: 'customer-overview', component: CustomerOverviewComponent , data: {title: 'Customer Overview'} },
    {path: 'create-customer', component: CustomerCreateComponent}
  ]},
  { path: '**', component: LoginComponent }

];
