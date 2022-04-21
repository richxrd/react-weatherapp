function getCelcius(temperature) {
    return Math.round((parseInt(temperature) - 32) * (5 / 9));
}

function getTime(time) {
    var newDate = new Date(time * 1000);
    var hour = newDate.getHours();
    var minutes = newDate.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return hour + ":" + minutes;
}

function getDate(time) {
    var newDate = new Date(time * 1000);
    var month = newDate.getMonth() + 1;
    var day = newDate.getDate();
    if (day < 10) {
        day = "0" + day;
    }
    return month + "/" + day;
}

export { getCelcius, getTime, getDate };
