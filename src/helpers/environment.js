let APIURL = "";

switch (window.location.hostname) {
  case "localhost":
  case "127.0.0.1":
    APIURL = "http://localhost:3000";
    break;
  case "lr-makernote-react.herokuapp.com":
    APIURL = "https://lr-makernote-server.herokuapp.com";
}

export default APIURL;
