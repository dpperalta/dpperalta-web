function increase() {
    // Change the variable to modify the speed of the number increasing from 0 to (ms)
    let SPEED = 40;
    // Retrieve the percentage value
    let limit = parseInt(document.getElementById("mobile").innerHTML, 10);

    for (let i = 0; i <= limit; i++) {
        setTimeout(function() {
            document.getElementById("mobile").innerHTML = i + "%";
        }, SPEED * i);
    }
}

increase();