import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

// app components
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
import { SamplelistComponent } from './components/samplelist/samplelist.component';
import { SampleinsertComponent } from './components/sampleinsert/sampleinsert.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'Home', pathMatch: 'full'},
    { path: 'Home', component: HomeComponent },
    { path: 'Sample', component: SampleComponent, data:{title: 'Samples'}},
    { path: 'SampleList', component: SamplelistComponent, data:{title: "Sample List"}},
    { path: 'SampleInsert', component: SampleinsertComponent, data:{title: "Sample Insert"}}
    
]
export const routingProviders: any[] = [];
export const routes: ModuleWithProviders = RouterModule.forRoot(appRoutes);