import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LeaveAllocationComponent } from './components/leave-allocation/leave-allocation.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LeaverequestComponent } from './components/leaverequest/leaverequest.component';
import { FormsModule } from '@angular/forms';
import { LeaveModelComponent } from './components/leave-model/leave-model.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { CalendarModule,DateAdapter } from 'angular-calendar'; 
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { LeaveRequestConfirmModalComponent } from './components/leave-request-confirm-modal/leave-request-confirm-modal.component';
import { NavsideComponent } from './admin/navside/navside.component';
import { GraphComponent } from './admin/graph/graph.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddSubadminComponent } from './admin/add-subadmin/add-subadmin.component';
import { LeavesComponent } from './components/leaves/leaves.component';
import { EditPermissionComponent } from './admin/edit-permission/edit-permission.component';
import { ChangedPermissionComponent } from './admin/changed-permission/changed-permission.component';
import { ManageTableComponent } from './manager/manage-table/manage-table.component';
import { MangerViewComponent } from './manager/manager-view/manager-view.component';
import { TableViewComponent } from './manager/table-view/table-view.component';
import { LineChartComponent } from './admin/line-chart/line-chart.component';
import { ApprovedViewComponent } from './manager/approved-view/approved-view.component';
import { TeamAvailableComponent } from './manager/team-available/team-available.component';
import { HttpClientModule } from '@angular/common/http';
import { DateMonthPipe } from './date-month.pipe'; // Import HttpClientModule




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    LeaveAllocationComponent,
    NavbarComponent,
    LeaverequestComponent,
    LeaveModelComponent,
    DatePickerComponent,
    LeaveRequestConfirmModalComponent,
    NavsideComponent,
    GraphComponent,
    AdminSidebarComponent,
    AddSubadminComponent,
    LeavesComponent,
    EditPermissionComponent,
    ChangedPermissionComponent,
    ManageTableComponent,
    MangerViewComponent,
    TableViewComponent,
    LineChartComponent,
    ApprovedViewComponent,
    TeamAvailableComponent,
    DateMonthPipe
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgbModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
