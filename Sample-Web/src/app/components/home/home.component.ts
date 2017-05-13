import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
       <h2>Home</h2>
       <div class="row" >
            <img src="../../../assets/exercise.png" 
                 class="img-responsive left-block"
                 style="max-height:500px;padding-bottom:50px"/>
        </div>
       `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  public bStandings:boolean = false;

  constructor(public domSanitizer: DomSanitizer)
  {  }

  sanitize(url:string){
        return this.sanitizeUrl(url);
    }

    private sanitizeUrl(url:string):SafeUrl {
        this.bStandings = true;
        return this.domSanitizer.bypassSecurityTrustUrl(url);
    }  
}