import { Component, ViewEncapsulation,OnInit  } from '@angular/core';
import {AGE} from './age';

@Component({
 selector : 'home', 
  templateUrl: './home.component.html',

  encapsulation: ViewEncapsulation.None 
})
export class HOME implements OnInit {
private ageStr : string;
   ngOnInit(): void {
     let today:Date = new Date();
    this.ageStr = this.getAge('09/27/2004');
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
