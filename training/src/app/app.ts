import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RemoveWhitespacePipe } from './remove-whitespace-pipe';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RemoveWhitespacePipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'training      hi     there     ';
}
