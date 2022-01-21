jQuery(document).ready(function () {

    // 判別裝置
    var isMobile = false;
    if(navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Linux') > -1 ||/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) isMobile = true;
    if (isMobile === false) {
        console.log("是否為移動裝置:" + isMobile);
    }else{
        $('body').addClass("isMob");
    }

    // 回首頁
    $("header .logo , .game03_btn06").click(function() {
        $("body").removeClass("open_sec_popup01 , open_sec_popup02 , open_game01 , open_game02 , open_game03");
    });

    // 桌機提示視窗
    $(".sec5_btn.c_web , .header_btn.c_web").click(function() {
        $("body").addClass("open_sec_popup01");
    });
    $(".sec_popup01 .popup01_btn03").click(function() {
        $("body").removeClass("open_sec_popup01");
    });
    $(".popup01_btn02").click(function() {
        $("body").removeClass("open_sec_popup01");
        $("body").addClass("open_sec_popup02");
    });
    $(".sec_popup02 .popup02_btn03").click(function() {
        $("body").removeClass("open_sec_popup02");
    });

    // 手機視窗切換
    $(".header_btn.c_mob , .sec5_btn.c_mob , .game03_btn04").click(function() {
        $("body").removeClass("open_sec_popup01 , open_sec_popup02 , open_game02 , open_game03");
        $("body").addClass("open_game01");
    });
    $(".game01_btn05").click(function() {
        $("body").removeClass("open_game01");
        $("body").addClass("open_game02");
    });
    $(".game01_btn06").click(function() {
        $("body").removeClass("open_sec_popup01 , open_sec_popup02 , open_game02");
        $("body").addClass("open_game01");
    });

    // game03 開啟...
    // $("body").addClass("open_game03");




    //運動事件監聽
    if (window.DeviceMotionEvent) {
        alert('DeviceMotionEvent');
        window.addEventListener('devicemotion',deviceMotionHandler,false);
    }

    //獲取加速度資訊
    //通過監聽上一步獲取到的x, y, z 值在一定時間範圍內的變化率，進行裝置是否有進行晃動的判斷。
    //而為了防止正常移動的誤判，需要給該變化率設定一個合適的臨界值。
    var SHAKE_THRESHOLD = 4000;
    var last_update = 0;
    var x, y, z, last_x = 0, last_y = 0, last_z = 0;
    function deviceMotionHandler(eventData) {
        alert('deviceMotionHandler');
            var acceleration =eventData.accelerationIncludingGravity;
            var curTime = new Date().getTime();
            if ((curTime-last_update)> 10) {
                var diffTime = curTime -last_update;
                last_update = curTime;
                x = acceleration.x;
                y = acceleration.y;
                z = acceleration.z;
                var speed = Math.abs(x +y + z - last_x - last_y - last_z) / diffTime * 10000;
                if (speed > SHAKE_THRESHOLD) {
                    vibration();  // Do something
                }
                last_x = x;
                last_y = y;
                last_z = z;
            }
    }
    function vibration(){
        navigator.vibrate = navigator.vibrate
                || navigator.webkitVibrate
                || navigator.mozVibrate
                || navigator.msVibrate;

        if (navigator.vibrate) {
            // 支援
            // console.log("支援裝置震動！");
            alert("支援裝置震動！");
        }
        //中括號裡面的值標示[震動時間，停止時間，震動時間，停止時間………..]。沒有錯就是這種規律，簡單明瞭
        navigator.vibrate([500, 300, 400,300]);
    }
});