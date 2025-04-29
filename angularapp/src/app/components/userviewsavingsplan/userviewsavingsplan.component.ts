import { Component, OnInit } from '@angular/core';
import { SavingsPlan } from '../../models/savingsplan.model';
import { SavingsplanService } from '../../services/savingsplan.service';
import { PlanapplicationformService } from 'src/app/services/planapplicationform.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-userviewsavingsplan',
  templateUrl: './userviewsavingsplan.component.html',
  styleUrls: ['./userviewsavingsplan.component.css']
})
export class UserviewsavingsplanComponent implements OnInit {
  name: string = '';
  savingsPlans: SavingsPlan[] = [];
  isApplied: boolean[] = []; 
  sortColumn: string = '';
  sortDirection: string = 'asc'; // 'asc' for ascending, 'desc' for descending
  riskLevel: string = 'All'; // Default value for dropdown

  constructor(
    private service: SavingsplanService,
    private planappservice: PlanapplicationformService,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.getAllSavingsPlans();
    this.checkApplications();
  }

  public getAllSavingsPlans() {
    this.service.getAllSavingsPlans().subscribe((data) => {
      console.log("Savings Plans:", data); // Debugging line
      this.savingsPlans = data;
      this.checkApplications();
    });
  }

  public filterByName(name: string) {
    if (name === "") {
      this.getAllSavingsPlans();
    } else {
      this.service.getAllSavingsPlans().subscribe((data) => {
        console.log("Filtered Plans by Name:", data); // Debugging line
        const searchTerm = name.toLowerCase();
        this.savingsPlans = data.filter(p =>
          p.Name.toLowerCase().includes(searchTerm) ||
          p.GoalAmount.toString().toLowerCase().includes(searchTerm) ||
          p.TimeFrame.toString().toLowerCase().includes(searchTerm) ||
          p.RiskLevel.toLowerCase().includes(searchTerm) ||
          p.Description.toLowerCase().includes(searchTerm) ||
          p.Status.toLowerCase().includes(searchTerm)
        );
        console.log("Filtered Results:", this.savingsPlans); // Debugging line
        this.checkApplications();
      });
    }
  }
  

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  public checkApplications() {
    const userId = localStorage.getItem('userId');
    if (userId) {
      this.savingsPlans.forEach((plan, index) => {
        this.planappservice.getPlanApplicationsBySavingsPlanIdAndUserId(plan.SavingsPlanId, +userId).subscribe((applications) => {
          this.isApplied[index] = applications.length > 0;
        });
      });
    } else {
      console.error('User ID not found in local storage');
    }
  }

  sortTable(column: string) {
    if (this.sortColumn === column) {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortColumn = column;
      this.sortDirection = 'asc';
    }

    this.savingsPlans.sort((a, b) => {
      if (a[column] < b[column]) {
        return this.sortDirection === 'asc' ? -1 : 1;
      } else if (a[column] > b[column]) {
        return this.sortDirection === 'asc' ? 1 : -1;
      } else {
        return 0;
      }
    });
  }

  getSortIcon(column: string): string {
    if (this.sortColumn === column) {
      return this.sortDirection === 'asc' ? 'ascending' : 'descending';
    }
    return '';
  }

  public filterByRiskLevel() {
    this.service.getAllSavingsPlans().subscribe((data) => {
      if (this.riskLevel === 'All') {
        this.savingsPlans = data;
      } else {
        this.savingsPlans = data.filter(p => p.RiskLevel === this.riskLevel);
      }
      console.log("Filtered Plans by Risk Level:", this.savingsPlans); // Debugging line
      this.checkApplications();
    });
  }
}
