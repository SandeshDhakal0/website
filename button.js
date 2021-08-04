

function validateForm() {
  var i;

  //Block scope 
  //It denoted those variables exist only within the corresponding block
  let nameVal = document.forms['myForm']['name'].value;
  let messageVal = document.forms['myForm']['message'].value;

  //Split was used to convert string into array. Since I removed the whole code to not take numbers in the string. This method is no use.
  //let arrayNameVal = nameVal.split('');
  //let arrayMesssageVal = messageVal.split('');
  
  if (nameVal == '' && messageVal == '') {
    window.alert('Both name and message cannot be empty!');
    return false;
  }
  if (nameVal != '' && messageVal != '') {
    window.alert(nameVal + " said " + messageVal);
  }
  if (nameVal != '') {
    
      window.alert('Thank you ' + nameVal + '!');
  }
  else if (nameVal == '' && messageVal != '') {
    window.alert('You said ' + messageVal + '!');
  }
}
