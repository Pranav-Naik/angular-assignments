import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoveWhitespacePipe } from './remove-whitespace-pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RemoveWhitespacePipe,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'training      hi     there     ';
}
