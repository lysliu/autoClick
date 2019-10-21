var timecount=0;
var nums=[
"18XXXXXXXXX",
"18XXXXXXXXX"
]
function autoClick(){
        var obj = new Date()
        var curHour =  obj.getHours()
        var curMinute = obj.getMinutes()
        var curSecond = obj.getSeconds()
        if( curHour == 9 || curHour ==14 && curMinute==53 && curSecond==59){
                // if( curHour == 9 || curHour ==21 && curMinute==59 && curSecond==59){
        
        // $(".zhc-btn__content").click(); 
        document.getElementById("lys").click()
       } 
}

var interval=setInterval(autoClick,1000);
