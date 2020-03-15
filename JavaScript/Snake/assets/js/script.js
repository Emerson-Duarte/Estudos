window.onload = function () {
    let stage = document.getElementById('stage');
    let ctx = stage.getContext("2d");
    document.addEventListener("keydown", keyPush);

    setInterval(game, 100);

    const speed = 1;

    let sx = sy = 0;
    let px = py = 10;
    let lp = 20;
    let qp = 20;
    let ax = ay = 15;

    let trail = [];
    tail = 5;

    function game() {
        px += sx;
        py += sy;

        if (px < 0) {
            px = qp - 1;
        }
        if (px > qp-1) {
            px = 0;
        }
        if (py < 0) {
            py = qp - 1;
        }
        if (py > qp-1) {
            py = 0;
        }

        ctx.fillStyle = "darkgreen";
        ctx.fillRect(0, 0, stage.clientWidth, stage.height);

        ctx.fillStyle = "red";
        ctx.fillRect(ax * lp, ay * lp, lp, lp);

        ctx.fillStyle = "darkorange";
        for (let i = 0; i < trail.length; i++){
            ctx.fillRect(trail[i].x*lp, trail[i].y*lp, lp-1, lp-1);
            if (trail[i].x == px && trail[i].y ==py) {
                sx = xy = 0;
                tail = 5;
            }
        }

        trail.push({ x: px, y: py })
        while (trail.length > tail) {
            trail.shift();
        }
        if (ax == px && ay == py) {
            tail++;
            ax = Math.floor(Math.random()*qp);
            ay = Math.floor(Math.random()*qp);
        }
    }

    function keyPush(event) {
        switch (event.keyCode) {
            case 37:
                sx = -speed;
                sy = 0;
                break;
            case 38:
                sx = 0;
                sy = -speed;
                break;
            case 39:
                sx = speed;
                sy = 0;
                break;
            case 40:
                sx = 0;
                sy = speed;
                break;
            default:
                break;
        }
    }
}
