import { Component } from '@angular/core';

@Component({
  selector: 'app-manager-view',
  templateUrl: './manager-view.component.html',
  styleUrls: ['./manager-view.component.scss']
})
export class MangerViewComponent {
 
  selectedNavItemText: string = 'Manager View';

  activeLink: string = '/';

  activeButton: number | null = 1;

  isSidebarOpen = true;
  shouldDisplayContent = false; 
  marginRightValue = '250px'; 
  translateXValue = '0'; 
 

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
    this.shouldDisplayContent = !this.isSidebarOpen; 
  
    
    this.translateXValue = this.isSidebarOpen ? '0' : '-100px';
  }

  showContentt(buttonNumber: number) {
    this.activeButton = buttonNumber;

  }

  openModal(){
    const modelDiv =   document.getElementById('myModel');
  if(modelDiv != null){
    modelDiv.style.display = 'block';
  }
  }
  
  closeModel(){
    const modelDiv =   document.getElementById('myModel');
  if(modelDiv != null){
    modelDiv.style.display = 'none';
  }
  }


  updateSelectedNavItemText(text: string) {
    this.selectedNavItemText = text;
  }

}
