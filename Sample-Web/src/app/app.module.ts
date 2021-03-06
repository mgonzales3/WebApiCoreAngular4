// angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// app framework
import { routes, routingProviders } from './app.routing';
import { AppComponent } from './components/application/app.component';

// app components
import { Sample_Services } from './services/services';
import { HomeComponent } from './components/home/home.component';
import { SampleComponent } from './components/sample/sample.component';
import { FilterPipe } from './components/sample/sample-filter-pipe.pipe';
import { SamplelistComponent } from './components/samplelist/samplelist.component';
import { SampleinsertComponent } from './components/sampleinsert/sampleinsert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SampleComponent,
    FilterPipe,
    SamplelistComponent,
    SampleinsertComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    routes    
  ],
  providers: [ Sample_Services,
    {
      provide: LocationStrategy, useClass: HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
