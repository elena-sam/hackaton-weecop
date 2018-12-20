import { FormRendezVousComponent } from './common/form-rendez-vous/form-rendez-vous.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';

import { CalendarComponent } from 'ng-fullcalendar';
import { Options } from 'fullcalendar';
import { CalendarService } from './common/calendar.service';

import { weekdays } from 'moment';
import { WeekDay } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: any;
constructor( private dialog: MatDialog, private service: CalendarService) {}
  title = 'my-angular-app';
  calendarOptions: Options;
  @ViewChild(CalendarComponent) ucCalendar: CalendarComponent;

  ngOnInit() {
    this.service.getEvents().subscribe(res => {
      this.events = res;
    });
  this.calendarOptions = {
        defaultView: 'agendaWeek' ,
        editable: true,
        eventLimit: false,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        }

      };
  }

  addEvent() {
    const dialogRef = this.dialog.open(FormRendezVousComponent, {
      height: '400px',
      width: '600px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log(result);
      }
    });
  }

}
