console.log('%c- https://phungphihung.ddns.net', 'color: #444; font-size: 25px; font-family: sans-serif;');
console.log('%c- https://kichhoat.ddns.net', 'color: #444; font-size: 25px; font-family: sans-serif;');
console.log('%c- https://archive.phungphihung.repl.co', 'color: #444; font-size: 25px; font-family: sans-serif;');
function star() {
    setTimeout(function () {
    }, 3000);
}
function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("2023/04/04");
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (daysold - e_daysold) * -24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (hrsold - e_hrsold) * -60;
    minsold = Math.floor((hrsold - e_hrsold) * -60);
    seconds = Math.floor((minsold - e_minsold) * -60);
    momk.innerHTML = daysold + " ngày " + hrsold + " giờ " + minsold + " phút " + seconds + " giây";
}
show_date_time();