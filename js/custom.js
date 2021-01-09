(function () {
    const second = 1000,
        minute = second * 60,
        hour = minute * 60,
        day = hour * 24;

    let birthday = "Jan 12, 2021 00:00:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function () {

            let now = new Date().getTime(),
                distance = countDown - now;

            document.getElementById("count-days").innerText = Math.floor(distance / (day)),
                document.getElementById("count-hours").innerText = Math.floor((distance % (day)) / (hour)),
                document.getElementById("count-minutes").innerText = Math.floor((distance % (hour)) / (minute)),
                document.getElementById("count-seconds").innerText = Math.floor((distance % (minute)) / second);

            //do something later when date is reached
            if (distance < 0) {
                let countdown = document.getElementById("count-countdown");

                countdown.style.display = "none";

                clearInterval(x);
            }
            //seconds
        }, 0)
}());