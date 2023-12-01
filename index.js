
//Storing User Details
let userDetailsDatabase = {}

//Getting User Details
function getUserDetails(){

       //username
       let username= prompt('Enter your Username')

       if (username == null){
        return
       }

       function validateUsername(username){
       if(username.length<10 && username.length >0){
        return true
       }else{
        return false
       }
     };
       
     while(validateUsername(username)== false){
        username = prompt('Username must be less than 10 and greater than 0')
     }

     userDetailsDatabase["UserName"] = username

     //phone number
      let phoneNumber= prompt('Enter your Phone Number')

      if ((phoneNumber) == null){
        return
       }

      function validatephoneNumber(phoneNumber){
      if(phoneNumber.length == 11 ){
         return true
        }else{
          return false
       }
     };

     while(validatephoneNumber(phoneNumber)== false){
        phoneNumber = prompt('Your phone number seems to be less than or greater than 11 digits')
     }

     userDetailsDatabase["Phone Number"] = phoneNumber

     //email address
       let email= prompt('Enter your Email Address')

       if (email == null ){
        return
       }

       function validateEmail(email){
       const emailCheck= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/gi
       emailCheckResult = emailCheck.test(email)
       if(emailCheckResult == true){
       return true
        }else{
         return false
        }
        };

        while(validateEmail(email)== false){
            email = prompt('Enter a valid Email Address')
         }

         userDetailsDatabase["Email"] = email

      //password
       let password= prompt('Enter your password')

       if (password == null){
        return
       }

       function validatepassword(password){
       if(password.length < 6 ){
          return false
       }else{
         return true
       }
     };

     while(validatepassword(password)== false){
        password = prompt('Password must be greater than 6 characters')
     }

     userDetailsDatabase["Password"] = password

      //confirm password
      let confirmPassword= prompt('Confirm Password')

      if (confirmPassword == null){
        return
       }

      function validateConfirmPassword(confirmPassword){
      if(confirmPassword != password){
          return false
      }else{
          return true
      }
     };
      
     while(validateConfirmPassword(confirmPassword)== false){
        password = prompt('Password is incorrect')
     }

     userDetailsDatabase["Confirm Password"] = confirmPassword


      
   }
        //  Tried to make the see details button disabled when details has not being inputted.......Didn't work

   // if(userDetailsDatabase == null){
   //    let noDisplay= document.getElementsByClassName(".display")
   //    return
   //    for(i=0; i< noDisplay; 1++){
   //       noDisplay.style.display = none
   //    }
   //   }
   // // }else{


   //     if(
   //       validateUsername(username)== false &&
   //       validatephoneNumber(phoneNumber)== false &&
   //       validateEmail(email)== false &&
   //       userDetailsDatabase == null
   //     ){
   //       let noDisplay= document.getElementsByClassName(".display")
   //       return noDisplay.style.display = none
   //     }



//Displaying User details
function displayUserDetails(){

    document.getElementById('name').textContent = "Username = " + userDetailsDatabase.UserName
    document.getElementById('number').textContent = "Phone Number = " + userDetailsDatabase["Phone Number"]
    document.getElementById('mail').textContent = "Email = " + userDetailsDatabase.Email;

    //using alerts
    alert(`Your Details\n\nUsername: ${userDetailsDatabase.UserName}\n Phone Number: ${userDetailsDatabase["Phone Number"]}\nEmail: ${userDetailsDatabase.Email}`)
   
}
