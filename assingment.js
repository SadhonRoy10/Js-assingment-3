// https://github.com/SadhonRoy100/Js-assingment-3


// problemp 1: Convert kilometer to meter....
function kilometerToMeter(kilometer){
    // We know 1kilo=1000meter
    var meterLength=1000;
    var meterfloting=parseFloat(meterLength);
    var convertTometer=kilometer*meterfloting;
    return convertTometer;
  }
  var result= kilometerToMeter(8);
  // output
  console.log(result);
  // This is First problemp solution ending line......
  
  
  
  
  // problemp 2:Create a shoping budget calculator.....
  function budgetCalculator(watch,mobile,laptop){
    /*Given 
    per watch price=50 taka;
    per mobile price=100 taka;
    per laptop price=500 taka;
    */
    var watchPrice=watch*50;
    var mobilePrice=mobile*100;
    var laptopPrice= laptop*500;
    // So toatal price is...?
    var totalPrice= watchPrice+mobilePrice+laptopPrice;
    return totalPrice;
  
  }
  var budgetAmount= budgetCalculator(10,12,14);
  //output
  console.log(budgetAmount);
  // This is First problemp solution ending line......
  
  
  
  // problemp 3: Calculate right Hotel cost ......
  function hotelCost(selectingDay){
    /*Has been said 
    1. First-ten day = 100 taka.
    2. 10 from 20 day = 80 taka.
    3. 20 avobe = 50 taka.
    */
    var totalPrise=0;
    
    if(selectingDay<=10){   
       totalPrise = selectingDay*100;
    }
    else if(selectingDay>10,selectingDay<=20){
      var firstStepPrise=100*10;
      var secondStep=selectingDay-10;
      var secondStepPrise=secondStep*80;
          totalPrise=firstStepPrise+secondStepPrise;
    }
    else{
      var firstStepPrise=100*10;
      var secondStepPrise=10*80;
      var thirdStep= selectingDay-20;
      var thirdStepPrise=thirdStep*50;
          totalPrise=firstStepPrise+secondStepPrise+thirdStepPrise;
    }
    return totalPrise;
  
  }
  
  var mainHotelCost= hotelCost(21);
  //output
  console.log(mainHotelCost);
  // Hotel cost solving ending line .....
  
  //problemp 4: Find The bigest string in an array....
  function megaFriend(friendsName) {
      var bigestName = '';
      for (var i = 0; i < friendsName.length; i++) {
          if (bigestName.length < friendsName[i].length) {
              bigestName = friendsName[i];
          }
      }
      return bigestName;
  }
  
  var findBigestName=megaFriend(["sadhon","sujon"]);
  //Output
  console.log(findBigestName);
  // Find bigest string problemp solving ending line......