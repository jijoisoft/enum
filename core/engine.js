module.exports.process = function process(qry, callback){
    
}
module.exports.getPhoneFromQuery = function getPhoneFromQuery(qry) {
    var phoneRev = qry.split("@");
    phoneRev = phoneRev[0].replace(/[^0-9]/g, '');
    var phone = "";
    for (var i = phoneRev.length - 1; i >= 0; i--) {
        phone += phoneRev[i];
    }
    return phone;
}
module.exports.getResponseForPhone = function getResponseForPhone(phone) { // add arg , callback
    var response = 1;
    return response;
}
module.exports.getResponseForPhoneFromDB = function getResponseForPhoneFromDB(){
    ;
}