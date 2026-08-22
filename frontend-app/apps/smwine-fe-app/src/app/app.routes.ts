import { Route } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LandingComponent } from './pages/landing/landing.component';
import { adminAuthGuard } from '@smwine-fe-app/security';
import { RegisterComponent } from './pages/register/register/register.component';
import { WineCardDetailComponent } from './components/wine-card-detail/wine-card-detail.component';
import { LoginComponent } from '@smwine-fe-app/shared';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const appRoutes: Route[] = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'beer/:beverageId', component: WineCardDetailComponent },
  { path: 'wine/:beverageId', component: WineCardDetailComponent },
  { path: 'cider/:beverageId', component: WineCardDetailComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin',
    canMatch: [adminAuthGuard],
    loadChildren: () =>
      import('@smwine-fe-app/admin').then((m) => m.adminRoutes),
  },
  {
    path: '',
    redirectTo: '/wine',
    pathMatch: 'full',
  },
  {
    path: ':type',
    component: LandingComponent,
  },
];
