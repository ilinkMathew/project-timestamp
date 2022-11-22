function timeParser(dateString){
 if(dateString === undefined || dateString === ''){
    const now = new Date();
    return getUnixAndUTCTime(now.valueOf(),now.toUTCString());
 }

 if(Date.parse(dateString)){
    return getUnixAndUTCTime(Date.parse(dateString),new Date(dateString).toUTCString())
 }
 const parsedDateString = parseInt(dateString);
 if(!isNaN(new Date(parsedDateString).valueOf())){
   return getUnixAndUTCTime(new Date(parsedDateString).valueOf(),new Date(parsedDateString).toUTCString())
 }
return {'error':"Invalid Date"};
}


function getUnixAndUTCTime(unix,utc){
    return {
        'unix':unix,
        'utc':utc
    }
}

module.exports = timeParser;