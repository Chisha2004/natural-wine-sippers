import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BeverageStore } from './services/beverage/beverage.store';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  private readonly beverageStore = inject(BeverageStore);

  ngOnInit(): void {
    this.beverageStore.loadCatalog();
  }
}
