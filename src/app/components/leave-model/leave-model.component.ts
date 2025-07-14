import {
  Component,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
} from '@angular/core';
import {
  NgbDate,
  NgbCalendar,
  NgbDatepickerModule,
  NgbDateStruct,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
// import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { LeaveService } from 'src/app/leave.service';

@Component({
  selector: 'app-leave-model',
  providers: [DatePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './leave-model.component.html',
  styleUrls: ['./leave-model.component.scss'],
})
export class LeaveModelComponent {
  hoveredDate: NgbDate | null = null;
  fromDate!: NgbDate;
  toDate: NgbDate | null = null;
  selectedMonthYear: string = '';
  selectedDate: NgbDate | null = null;

  category: string = '';
  // fromDate: string = '';
  // toDate: string = '';
  duration: any;
  reason: string = '';
  user: string = 'Thivan';

  constructor(
    private datePipe: DatePipe,
    private http: HttpClient,
    private leaveService: LeaveService
  ) {}

  getSelectedType(): string {
    return this.leaveService.selectedType;
  }

  submitLeave() {
    const formData = {
      category: this.getSelectedType(),
      fromDate: this.ngbDateToISOString(this.fromDate),
      toDate: this.toDate ? this.ngbDateToISOString(this.toDate) : null,
      duration: this.calculateDaysBetweenDates(this.fromDate, this.toDate),
      reason: this.reason,
      user: this.user,
    };

    this.leaveService.submitLeave(formData).subscribe(
      (response: any) => {
        console.log('Leave request submitted successfully');
      },
      (error) => {
        console.error('Error submitting leave request:', error);
      }
    );
  }



  //  Date Changed calculation

  ngbDateToISOString(date: NgbDateStruct | null): string {
    if (date) {
      const jsDate = new Date(date.year, date.month - 1, date.day);
      return jsDate.toISOString();
    }
    return '';
  }

  calculateDaysBetweenDates(
    fromDate: NgbDate | null,
    toDate: NgbDate | null
  ): number | null {
    if (fromDate && toDate) {
      const fromDateJS: any = this.ngbDateToDate(fromDate);
      const toDateJS: any = this.ngbDateToDate(toDate);

      const timeDifference = toDateJS.getTime() - fromDateJS.getTime();
      const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));
      return daysDifference + 1;
    }

    return 1;
  }

  ngbDateToDate(ngbDate: NgbDate | null): Date | null {
    if (ngbDate) {
      return new Date(ngbDate.year, ngbDate.month - 1, ngbDate.day);
    }
    return null;
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    this.selectedDate = date;
    this.updateSelectedMonthYear(date);
  }


  
  // for Date Picker
  updateSelectedMonthYear(date: NgbDate) {
    const selectedDate = new Date(date.year, date.month - 1);
    this.selectedMonthYear =
      this.datePipe.transform(selectedDate, 'MMMM yyyy') ?? 'N/A';
  }

  isHovered(date: NgbDate) {
    return (
      this.fromDate &&
      !this.toDate &&
      this.hoveredDate &&
      date.after(this.fromDate) &&
      date.before(this.hoveredDate)
    );
  }

  isInside(date: NgbDate) {
    return this.toDate && date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return (
      date.equals(this.fromDate) ||
      (this.toDate && date.equals(this.toDate)) ||
      this.isInside(date) ||
      this.isHovered(date)
    );
  }
}
