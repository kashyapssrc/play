
var doGet = function (url) {
    var response;
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            response = this.responseText;
        }
    };
    request.open('GET', url, true);
    request.send();
    return response;
}

// previous approach
// var getPersonData = function (url) {
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = function () {
        // if (this.readyState == 4 && this.status == 200) {
            // document.getElementById('rspView').innerHTML += this.responseText;
        // }
    // };
    // request.open('GET', url, true);
    // request.send();
// }
