import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beverage } from '../../models/beverage.interface';
import { BeverageCategory } from '../../models/beverage-category.interface';

@Injectable({
  providedIn: 'root',
})
export class BeverageService {
  private readonly apiUrl = '/api/v1/beverages';

  constructor(private http: HttpClient) {}

  public getBeverages(category?: BeverageCategory): Observable<Beverage[]> {
    return this.http.get<Beverage[]>(this.apiUrl);
  }

  public getBeverage(id: string): Observable<Beverage> {
    return of({
      id: '123',
      name: 'Trousseau Duty',
      category: 'wine',
      description:
        'A structured, dense, and elegant wine from a magnificent terroir. A wine of great precision and refinement, which will be a pleasure to open to accompany a fine dinner. A sweet moment in perspective!',
      type: 'Red',
      grapeVariety: 'Trousseau',
      country: 'France',
      region: 'Jura',
      vintage: '2022/2023',
      degree: '12%',
      capacity: 75,
      rating: 1,
      year: '2022',
      price: '23.4',
      producer: 'Octavin Estate',
      imgUrl:
        'https://buvance.com/cdn/shop/files/l_octavin-corveesdet_360x.jpg?v=1748264236%20360w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_540x.jpg?v=1748264236%20540w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_720x.jpg?v=1748264236%20720w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_900x.jpg?v=1748264236%20900w,%20//buvance.com/cdn/shop/files/l_octavin-corveesdet_1080x.jpg?v=1748264236%201080w',
    });
  }
}
