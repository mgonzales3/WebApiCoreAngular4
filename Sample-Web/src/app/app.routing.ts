import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// app components
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent },
    { path: 'Sample', component: SampleComponent, data:{title: 'Samples'}},
]
export const routingProviders: any[] = [];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);