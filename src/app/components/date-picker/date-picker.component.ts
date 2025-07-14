import { Component, ChangeDetectionStrategy, Output,EventEmitter  } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-date-picker',
  providers: [DatePipe], 
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
	
    hoveredDate: NgbDate | null = null;
	fromDate!: NgbDate;
	toDate: NgbDate | null = null;
	selectedMonthYear: string = '';
	selectedDate: NgbDate | null = null;


	@Output() numberOfDaysChange = new EventEmitter<number>()

	constructor(private datePipe: DatePipe) {	}


	calculateDaysBetweenDates(fromDate: NgbDate | null, toDate: NgbDate | null): number | null {
		if (fromDate && toDate) {
		  const fromDateJS:any = this.ngbDateToDate(fromDate);
		  const toDateJS:any = this.ngbDateToDate(toDate);
	
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

	
	  updateSelectedMonthYear(date: NgbDate) {
		const selectedDate = new Date(date.year, date.month - 1);
		this.selectedMonthYear = this.datePipe.transform(selectedDate, 'MMMM yyyy') ?? 'N/A';
	  }


	isHovered(date: NgbDate) {
		return (
			this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate)
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
