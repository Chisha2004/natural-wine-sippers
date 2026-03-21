import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WineCardDetailComponent } from './wine-card-detail.component';

describe('WineCardDetailComponent', () => {
  let component: WineCardDetailComponent;
  let fixture: ComponentFixture<WineCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WineCardDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(WineCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
