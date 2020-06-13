function telephoneCheck(str) {
    //split to 11/10 digits, others return false
    if (str.match(/\d/g).length === 10) //10digits
        {   // check whether it is valid phone number for 10digits
            let regex10 = /^(\d{3}(-\d{3}-| \d{3} |\d{3})|\(\d{3}\)( |)\d{3}-)\d{4}$/;
            return regex10.test(str);
        }
    else if (str.match(/\d/g).length === 11) //11digits
        {
            if (str.match(/\d/g)[0] == 1) //check whether 1st digit is 1; debug: since '1' is string, use == instead of ===
                {   // check whether it is valid phone number for 11digits
                    let regex11 = /^1( (\d{3}(-\d{3}-| \d{3} |\d{3})|\(\d{3}\)( |)\d{3}-)|\(\d{3}\)( |)\d{3}-)\d{4}$/;
                    return regex11.test(str);
                }
            else {return false;} //if not 1, return false
        }
    else {return false;} //others return false
    //
  }
  
  telephoneCheck("555-555-5555");