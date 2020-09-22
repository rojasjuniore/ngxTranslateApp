import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand">
      {{'Sitetitle' | translate }}
    </a>
    <span class="form-inline">
      <select class="form-control" #selectedLang (change)="switchLang(selectedLang.value)">
        <option *ngFor="let language of translate.getLangs()" [value]="language"
          [selected]="language === translate.currentLang">
          {{ language }}
        </option>
      </select>
    </span>
  </div>
</nav>

<div class="container">
  <form>
    <div class="form-group">
      <label>{{'Name' | translate}}</label>
      <input type="text" class="form-control">
      <small class="text-danger">{{'NameError' | translate}}</small>
    </div>

    <div class="form-group">
      <label>{{'Email' | translate}}</label>
      <input type="email" class="form-control">
    </div>

    <div class="form-group">
      <label>{{'PhoneNo' | translate}}</label>
      <input type="tel" class="form-control">
    </div>

    <div class="form-group">
      <label>{{'Password' | translate}}</label>
      <input type="password" class="form-control">
    </div>

    <div class="form-group">
      <label>{{'Bio' | translate}}</label>
      <textarea rows="3" class="form-control"></textarea>
    </div>

    <div class="form-group form-check">
      <input type="checkbox" class="form-check-input">
      <label class="form-check-label">{{'TermsConditions' | translate}}</label>
    </div>
    <button type="submit" class="btn btn-block btn-danger">{{'Submit' | translate}}</button>
  </form>
</div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'angular-translate-app';

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
  }


  switchLang(lang: string) {
    console.log('lang', lang)
    this.translate.use(lang);
  }
}
