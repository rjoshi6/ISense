
function longRunningOperation(callback) { 
    // simulate a 3 second operation 
    console.log("Wait for 3 seconds....")
    setTimeout(callback, 3000); /*from www  .j a  va2s .  c  o m*/
} 

function userClicked() { 
    console.log('starting a long operation'); 
    longRunningOperation(function () {
         console.log('ending a long operation');
    }); 
} 
// simulate a user action 
userClicked();