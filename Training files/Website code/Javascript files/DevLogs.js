//logs text
let augustBody=`Long time no see.
I managed to learn alot about portraits and character design, currently working ona portrait for an importnat character.
I settled on a black and white hatching style for the game, kind of like those old seinen manga... i should have a playable event soon`;

let julyBody=`Hello again
I got my hands on a graphics tablet finally, no more mouse drawing for this guy.`;

let juneBody =`Helooooo
I decided to ditch pixel art, and tried exploring a more paintrly art style, the fear and hunger backgrounds seem like a cool starting point`;
//logs constructor
function devLogsEntry(month,topic,dateText,dateTime,body){
    this.month=month;
    this.topic= topic;
    this.dateText= dateText;
    this.dateTime= dateTime;
    this.body= body;
}
//created logs
const augustlog = new devLogsEntry("August log",
    "Art learning update",
    "22nd of august, 2026",
    "2026-08-22",augustBody);

const julylog = new devLogsEntry("July Log",
    "Art progress",
    "22nd of july, 2026",
    "2026-07-22",julyBody);

const junelog = new devLogsEntry("June Log",
    "Game design update",
    "22nd of june, 2026",
     "2026-06-22",juneBody);

let logs ={
    august:augustlog,
    july:julylog,
    june:junelog,
}
function loadLogPage(){
document.querySelector(".past-logs-entries").addEventListener("click",
     function(event){
        const logName = event.target.dataset.log;
        const selectedTime= document.querySelector(".main-page-date");
        const selectedLog = logs[logName];
        document.querySelector(".latest-post-header").textContent= selectedLog.month;
        document.querySelector(".latest-post-topic").textContent= selectedLog.topic;
        document.querySelector(".latest-post-body").textContent= selectedLog.body;
        selectedTime.textContent= selectedLog.dateText;
        selectedTime.setAttribute("datetime",selectedLog.dateTime);

});
}
loadLogPage();
