import { Component } from '@angular/core';
import { SearchBar } from '../../shared/search-bar/search-bar';
import { BuildCard } from '../../shared/build-card/build-card';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SearchBar, BuildCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
