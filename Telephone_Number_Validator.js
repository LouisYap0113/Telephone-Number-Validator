function telephoneCheck(str) {
    //split to 11/10 digits, others return false
    if (str.match(/\d/g).length === 10) //10digits
        {}
    else if (str.match(/\d/g).length === 11) //11digits
        {
            if (str.match(/\d/g)[0] === 1) //check whether 1st digit is 1
                {}
            else {return false;} //if not 1, return false
        }
    else {return false;} //others return false
    //
    
    
    
    
    
    
    
    
    
    
  }
  
  telephoneCheck("555-555-5555");
  