import { Component } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  template: `
       <div style="padding-bottom:70px;"></div>
       <div class="row" >            
            <img src="../../../assets/images/exercise.png" 
                 class="img-responsive left-block"
                 style="max-height:500px;padding-bottom:20px"/>
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