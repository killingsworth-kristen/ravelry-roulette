// import RAV_USER  from "./js/apiKey.js";
// import RAV_PASSWORD  from "./js/apiKey.js";
// console.log(RAV_USER);
// const authUsername =  RAV_USER;
// const authPassword = RAV_PASSWORD;
const authUsername = 'read-0f1f9acf0c7e3de01a35755efed20609';
const authPassword = 'seWPT2fY9KTt+4MnBhxfWQLftB0zcjHEL2nrdfFh';


/* globals RavelryApi */
RavelryApi = function(base, authUsername, authPassword) {
    this.base = base;
    this.authUsername = authUsername;
    this.authPassword = authPassword;
    this.debugFunction = null;
  };
  
  
  RavelryApi.prototype.get = function(url) {
    const headers = new Headers();
    const debugFunction = this.debugFunction;
    // This is the HTTP header that you need add in order to access api.ravelry.com with a read only API key
    // `btoa` will base 64 encode a string: https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
    
    headers.append('Authorization', 'Basic ' + btoa(this.authUsername + ":" + this.authPassword));
  }

  fetch("https://www.ravelry.com/patterns/search.json?query=cowl", { method: 'GET', headers: ['Authorization', 'Basic ' + btoa(authUsername + ":" + authPassword)]}).then(function(response) {
    console.log(headers);
    console.log(response);
    return response.json();
    }).then(function(json) { 
        if (debugFunction) debugFunction(json);
        console.log(json);
        return json; 
    });
