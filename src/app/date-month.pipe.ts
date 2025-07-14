import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'dateMonth'
})
export class DateMonthPipe extends DatePipe implements PipeTransform {
  override transform(value: any, format: string = 'dd MMM'): any {
    const formattedDate = super.transform(value, format);

    if (formattedDate) {
      const parts = formattedDate.split(' ');
      const month = this.convertToTextMonth(parts[0]);
      const day = parts[1];
      return `${month} ${day}`;
    }
    return '';
  }

  private convertToTextMonth(shortMonth: string): string {
    const monthMapping: { [key: string]: string } = {
      Jan: 'January',
      Feb: 'February',
      Mar: 'March',
      Apr: 'April',
      May: 'May',
      Jun: 'June',
      Jul: 'July',
      Aug: 'August',
      Sep: 'September',
      Oct: 'October',
      Nov: 'November',
      Dec: 'December'
    };

    return monthMapping[shortMonth] || shortMonth;
  }
}
