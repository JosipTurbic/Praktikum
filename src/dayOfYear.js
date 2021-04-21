
function dayOfYear(year,month,day){
    if(!arguments.length) throw Error();
   let  months = [31,28,31,30,31,30,31,31,30,31,30];
   let days=0
   
   for( let i=0; i < month-1; i++){
       days += months[i];
   }
   if(month > 2 && isLeapYear(year)) days +=1;
   return days + day;
   }
   
   function isLeapYear(year){
       
       if(year % 400 ===0) return true;
       return false;
   }
   
   module.exports = dayOfYear;