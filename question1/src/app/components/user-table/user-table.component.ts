import { Component, OnInit, signal } from '@angular/core';
import { UserService } from '../../services/user.service';
import { user } from '../../model/user.type';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrl: './user-table.component.css'
})
export class UserTableComponent implements OnInit {
    users : user[] = [];
    totalPages = 0;
    currentPage = 1;
    perPage = 5;
    totalUsers = 0;  
    perPageOptions = [5, 10, 20];
  
    constructor(private userService: UserService) {}
  
    ngOnInit(): void {
      this.fetchUsers();
    }
  
    fetchUsers(): void {
      this.userService.getUsers(this.currentPage, this.perPage).subscribe({
        next: res => {
          this.users = res.data;
          this.totalPages = res.total_pages;
          this.totalUsers = res.total;
        },
        error: (err) => {
          console.error('Error fetching users:', err);
          alert('Failed to load users. Please try again later.');
        }
      });
    }
  
    changePage(page: number): void {
      this.currentPage = page;
      this.fetchUsers();
    }
  
    onPerPageChange(event: Event): void {
      const value = +(event.target as HTMLSelectElement).value;
      this.perPage = value;
      this.currentPage = 1;
      this.fetchUsers();
    }
  
    getPageNumbers(): number[] {
      return Array(this.totalPages).fill(0).map((_, i) => i + 1);
    }
}
