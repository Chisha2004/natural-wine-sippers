import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { adminAuthGuard } from '@smwine-fe-app/security';
import { RegisterComponent } from './pages/register/register/register.component';
import { WineCardDetailComponent } from './components/wine-card-detail/wine-card-detail.component';

export const appRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'beverages/:id', component: WineCardDetailComponent },
  {
    path: 'admin',
    canMatch: [adminAuthGuard],
    loadChildren: () =>
      import('@smwine-fe-app/admin').then((m) => m.adminRoutes),
  },
];
