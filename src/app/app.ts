import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html', // Fixed: removed '.component'
  styleUrl: './app.css'      // Fixed: removed '.component'
})
export class AppComponent {
  onLogin(event: Event) {
    event.preventDefault();
    alert('Login successful! Check the console for details.');
    console.log('Login attempt detected');
  }
}