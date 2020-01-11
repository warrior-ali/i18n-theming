import { Component, HostBinding } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'i18nLastVersion';
  browserLang: any;
  position = 'start';
  lang = 'en'
  themeClass: string;


  ngOnInit(): void {
    if (this.browserLang === 'fa') {
      this.position = 'end';
    };
  }
  
  constructor( public translate: TranslateService) {
    translate.addLangs(['en', 'fa']);
    translate.setDefaultLang('en');

    this.browserLang = translate.getBrowserLang();
    translate.use(this.browserLang.match(/en|fa/) ? this.browserLang : 'en'); 
  }

  onLangChange(lang: any){
    this.lang = lang;
    if (this.lang === 'fa') {
      this.position = 'end';
    };
    if (this.lang === 'en') {
      this.position = 'start';
    }
  }

  

}
