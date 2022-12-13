function scuberGreetingForFeet(distance){
  if (distance <= 400 ) {
    return'This one is on me!';
  } else if (distance >= 2000 && distance <2500) {
    return'I will gladly take your thirty bucks.';
  } else (distance > 2500); {
    return'No can do.';
  }
}
console.log(scuberGreetingForFeet(199));
console.log(scuberGreetingForFeet(2001));
console.log(scuberGreetingForFeet(2501));

function ternaryCheckCity(city) {
 const cityReply= city==='NYC'? "Ok, sounds good." : "No go.";
 return cityReply;
}
console.log(ternaryCheckCity('NYC'));
console.log(ternaryCheckCity('Pittsburgh'));

function switchOnCharmFromTip(tip){
  let tipReply;
  switch(tip) {
    case 'generous':
      return (tipReply=('Thank you so much.'));
    case 'not as generous':
      return(tipReply=('Thank you.'));
    default:
      return(tipReply=('Bye.'));
  }
}
console.log(switchOnCharmFromTip('generous'));
console.log(switchOnCharmFromTip('not as generous'));
console.log(switchOnCharmFromTip('Thank you for everything'));
