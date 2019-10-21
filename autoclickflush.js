var timecount=0;
var nums=[
"18XXXXXXXXX",
"18XXXXXXXXX"
]
function autoClick(){
        var client_time = new Date()
        var server_time = $.ajax({type:'HEAD', async:'false'}).getResponseHeader('date');
        // TODO compare client_time, server_time, click on the button
        setInterval(function(){

        }, 1000)
        document.getElementById("lys").click()
       } 
}

var interval=setInterval(autoClick,1000);
