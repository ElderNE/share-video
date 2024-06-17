export const isHttps = (text:string) => {
    //Check the link for an HTTPS connection.
    //Return true or false
    let isValid = false;
    if((/(http(s?)):\/\//i).test(text))
      isValid = true
    return isValid
  }