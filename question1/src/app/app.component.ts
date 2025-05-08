import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserTableComponent } from './components/user-table/user-table.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, UserTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
