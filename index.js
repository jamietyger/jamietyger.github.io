
function startTime() {
    var date = new Date();
    offset = '+2'
    var utc = date.getTime() + (date.getTimezoneOffset() * 60000);
    nd = new Date(utc + (3600000*offset));

    var d = nd.toLocaleString("en-GB").split(',')[0];
    var h = nd.getHours();
    var m = nd.getMinutes();
    var s = nd.getSeconds();
    var t = isAm(h);
    m = checkTime(m);
    h = checkTime(h);

    document.getElementById('time').innerHTML = d+" "+ h + ":" + m + ":" + t + " CPT";
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function isAm(i){
    var t = "pm"
    if(i<12){
        t= "am"
    }
    return t
}