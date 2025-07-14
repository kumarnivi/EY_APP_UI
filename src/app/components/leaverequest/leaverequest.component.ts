import { Component , OnInit } from '@angular/core';
import { LeaveService } from 'src/app/leave.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-leaverequest',
  templateUrl: './leaverequest.component.html',
  styleUrls: ['./leaverequest.component.scss']
})
export class LeaverequestComponent implements OnInit{
  selectedType: string | null = 'Sort by';
  originalData: any[] = [];

  itemsPerPage = 3; 
  currentPage = 1; 
  totalPages!: number;
  pages: number[] = [];
  visiblePages: number[] = [];
  leaveRequests:any[]= []
  item:any[] = []; 

  data: any[] = [];

  constructor(private leaveService: LeaveService,private http: HttpClient) {}

  ngOnInit(): void {

    // this.leaveService.getAllRecords().subscribe(
    //   (data: any) => {
    //     this.leaveRequests = data.data;
    //     console.log(data)
    //   },
    //   (error) => {
    //     console.error('Error fetching leave requests:', error);
    //   }
    // );

    
    this.leaveService.getAllRecords().subscribe(
      (data: any) => {
        this.leaveRequests = data.data;
        this.originalData = [...this.leaveRequests];
        this.totalPages = Math.ceil(this.leaveRequests.length / this.itemsPerPage);
        this.updatePages();
      },
      (error: any) => {
        console.error('Error fetching leave records:', error);
      }
    );


   
 
  }
 
 







  filterDataByType(): void {
    if (this.selectedType === 'All') {    
      this.leaveRequests = [...this.originalData];
    }
    else if (this.selectedType ) {
      this.leaveRequests = this.originalData.filter((item) => item.category === this.selectedType);
    }
     else {
      this.leaveRequests = [...this.originalData];
    }

    this.totalPages = Math.ceil(this.leaveRequests.length / this.itemsPerPage);
    this.updatePages();
    this.currentPage = 1;
  }



  

  // Helper function to update the pages array
  updatePages(): void {
    this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
    this.updateVisiblePages();
  }

  updateVisiblePages(): void {
    const maxVisiblePages = 5;
    const middlePage = Math.floor(maxVisiblePages / 2);

    if (this.totalPages <= maxVisiblePages) {
      this.visiblePages = this.pages;
    } else if (this.currentPage <= middlePage) {
      this.visiblePages = this.pages.slice(0, maxVisiblePages);
    } else if (this.currentPage >= this.totalPages - middlePage) {
      this.visiblePages = this.pages.slice(this.totalPages - maxVisiblePages);
    } else {
      this.visiblePages = this.pages.slice(
        this.currentPage - middlePage - 1,
        this.currentPage + middlePage
      );
    }
  }

  setPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updateVisiblePages();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateVisiblePages();
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateVisiblePages();
    }

}

}
