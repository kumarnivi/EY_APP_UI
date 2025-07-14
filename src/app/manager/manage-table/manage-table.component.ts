import { Component, OnInit } from '@angular/core';
import { LeaveService } from 'src/app/leave.service';
@Component({
  selector: 'app-manage-table',
  templateUrl: './manage-table.component.html',
  styleUrls: ['./manage-table.component.scss']
})
export class ManageTableComponent implements OnInit {

  selectedType: string | null = 'Sort by';
  originalData: any[] = [];
  data: any[] = []; 
  itemsPerPage = 5; 
  currentPage = 1; 
  totalPages!: number;
  pages: number[] = [];
  visiblePages: number[] = [];

  leaveRequests:any[] = [];

  constructor(private leaveService :LeaveService) {}

  ngOnInit(): void {
   


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




  //   this.originalData = [...this.data];

  //   // Calculate the total number of pages
  //   this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);

  //   // Initialize the pages array
  //   this.updatePages();
  // }

 
  // filterDataByType(): void {
  //   if (this.selectedType === 'All') {    
  //     this.data = [...this.originalData];
  //   } else if (this.selectedType) {    
  //     this.data = this.originalData.filter(item => item.type === this.selectedType);
  //   } else { 
  //     this.data = [...this.originalData];
  //   }
  

  //   // Recalculate the total number of pages and update the pages array
  //   this.totalPages = Math.ceil(this.data.length / this.itemsPerPage);
  //   this.updatePages();
  
  //   // Reset the current page to 1
  //   this.currentPage = 1;
  // }

  // // Helper function to update the pages array
  // updatePages(): void {
  //   this.pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  //   this.updateVisiblePages();
  // }

  // updateVisiblePages(): void {
  //   const maxVisiblePages = 5; // Adjust the number of visible pages as needed
  //   const middlePage = Math.floor(maxVisiblePages / 2);

  //   if (this.totalPages <= maxVisiblePages) {
  //     this.visiblePages = this.pages;
  //   } else if (this.currentPage <= middlePage) {
  //     this.visiblePages = this.pages.slice(0, maxVisiblePages);
  //   } else if (this.currentPage >= this.totalPages - middlePage) {
  //     this.visiblePages = this.pages.slice(this.totalPages - maxVisiblePages);
  //   } else {
  //     this.visiblePages = this.pages.slice(
  //       this.currentPage - middlePage - 1,
  //       this.currentPage + middlePage
  //     );
  //   }
  // }


  // setPage(page: number): void {
  //   if (page >= 1 && page <= this.totalPages) {
  //     this.currentPage = page;
  //     this.updateVisiblePages();
  //   }
  // }

 
  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //     this.updateVisiblePages();
  //   }
  // }

 
  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //     this.updateVisiblePages();
  //   }
  // }


