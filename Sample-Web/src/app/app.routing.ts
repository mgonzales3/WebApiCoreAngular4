import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// app components
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent }
]
export const routingProviders: any[] = [];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);