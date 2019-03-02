import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import  'rxjs/add/operator/map';
import { Headers, RequestOptions } from '@angular/http';
import { Component, ViewEncapsulation,OnInit  } from '@angular/core';
import {AGE} from './age';

@Component({
 selector : 'home', 
  templateUrl: './home.component.html',

  encapsulation: ViewEncapsulation.None 
})
export class HOME implements OnInit {
private ageStr : string;
private stepIndicator : number =0;
private toEmail : string;
constructor (private http: Http) {
}
   ngOnInit(): void {
     let today:Date = new Date();
    this.ageStr = this.getAge('09/27/2004');
  }
  private enableSendEmail(){
    this.stepIndicator = 1;
  }
  private sendEmail (){
    this.sendEmailSrv().subscribe( 
      corpAnalysis => this.response(corpAnalysis),
          error => this.showError(error)
        );
  }
  private response(error:any) {
   
    this.stepIndicator = 0;
  }
  private showError(error:any) {
   
    this.stepIndicator = 0;
  }
  private sendEmailSrv() :Observable<string>{
    this.stepIndicator = 0;
    let url:string = 'https://sandeephoodaresume.appspot.com/sandeephoodaresume?to='+this.toEmail;
   return this.http.get(url).map(this.extractResult).catch(this.handleError);
  }
  private extractResult(res: Response) {
    let body = "SUCCESS"; // res.json();
    return body;
  }
 
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private getAge(dateString: string) : string{
  let now : Date= new Date();
  let today : Date = new Date(now.getFullYear(),now.getMonth(),now.getDate());

  let yearNow = now.getFullYear();
  let monthNow = now.getMonth();
  let dateNow = now.getDate();

  let dob : Date= new Date(parseInt(dateString.substring(6,10)),
                     parseInt(dateString.substring(0,2))-1,                   
                     parseInt(dateString.substring(3,5))                  
                     );

  let yearDob = dob.getFullYear();
  let monthDob = dob.getMonth();
  let dateDob = dob.getDate();

  let ageString = "";
  let yearString = "";
  let monthString = "";
  let dayString = "";


 let yearAge = yearNow - yearDob;
let monthAge : number;
let dateAge : number;
  if (monthNow >= monthDob){
     monthAge = monthNow - monthDob;
  }
  else {
    yearAge--;
     monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob){
     dateAge = dateNow - dateDob;
  }
  else {
    monthAge--;
     dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  let age:AGE = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.years + yearString + ", " + age.months + monthString ;
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = "Only " + age.days + dayString + " ";
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString + "";
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString + " and " + age.months + monthString + "";
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString ;
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString ;
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString + " ";
  else ageString = "";

  return ageString;
}

   
}
