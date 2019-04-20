      var a, b, c, d, timer;

      c = new Date("2019/06/20 13:00:00");
      c = c.getTime();

      a = new Date();
      a = a.getTime();

      b = new Date();
      b = b.getTime();

      d = a - b;

      setTimeout("diaplay()", 1000);

      function diaplay() {
        var timer = document.getElementById("timer");
        if (!timer) {
          return;
        }
        timer.innerHTML = d;

        var time_a, time_distance, str_time;
        var int_day, int_hour, int_minute, int_second;
        var time_a = new Date();
        time_a = time_a.getTime() + d;
        time_distance = c - time_a;
        if (time_distance > 0) {
          int_day = Math.floor(time_distance / 86400000)
          time_distance -= int_day * 86400000;
          int_hour = Math.floor(time_distance / 3600000)
          time_distance -= int_hour * 3600000;
          int_minute = Math.floor(time_distance / 60000)
          time_distance -= int_minute * 60000;
          int_second = Math.floor(time_distance / 1000)

          if (int_hour < 10) int_hour = "0" + int_hour;
          if (int_minute < 10) int_minute = "0" + int_minute;
          if (int_second < 10) int_second = "0" +
            int_second;
          str_time = "距离<span style='font-size:35px'>2.0.1</span >正式版发布还有" + "<span style='font-size:35px'>" + int_day + "</span >" + "天" + "<span style='font-size:30px'>" + int_hour + "</span>" + "小时" + "<span style='font-size:25px'>" + int_minute + "</span>" + "分钟" + "<span style='font-size:20px'>" + int_second + "</span>" + "秒.";
          timer.innerHTML = str_time;
          setTimeout("diaplay()", 1000);
        } else {
          timer.innerHTML = "<span style='color:#ff0000'>2.0.1版现已可用!</span>";
          clearTimeout(timer)
        }
      }
	  /*powered by PCC-Studio*/