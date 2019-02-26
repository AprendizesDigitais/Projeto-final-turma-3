window.onload = function iniciar() {

    // difinir qual elemento html contem a tela
    var tela = document.getElementById('tela')
    // ctx = contexto
    var ctx = tela.getContext("2d")
    //buscar pelo presionar da tecla
    document.addEventListener("keydown", keyPush)

    setInterval(jogo, 80)

    //velocidade do jogo
    const vel = 1

    //vx = velocidade horizontal , vy = velocidade vertical
    var vx = vy = 0

    //px e py = ponto de inico do jogo
    var px = 10
    var py = 15

    // tamanho do pixel
    var tp = 30

    // quantidade de pessas
    var qp = 20

    // possição da maça
    var ax = ay = Math.floor(Math.random() * qp)

    //tamanho da cobra
    var trilha = [];
    corpo = 5

    function jogo() {
        px += vx
        py += vy

        //mostrar a cobra do lado oposto
        if (px < 0) {
            px = qp - 1
        } if (px > qp - 1) {
            px = 0
        } if (py < 0) {
            py = qp - 1
        } if (py > qp - 1) {
            py = 0
        }

        //pintar o plano de fundo
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, tela.width, tela.height)

        //pintar a maça
        ctx.fillStyle = "red"
        ctx.fillRect(ax * tp, ay * tp, tp - 0.5, tp - 0.5)

        //pintar a cobra
        ctx.fillStyle = "green"
        for (var i = 0; i < trilha.length; i++) {
            ctx.fillRect(trilha[i].x * tp, trilha[i].y * tp, tp - 0.5, tp - 0.5)
            if (trilha[i].x == px && trilha[i].y == py) {
                tail = 5
                vx = vy = 0

            }
        }

        trilha.push({ x: px, y: py })
        while (trilha.length > corpo) {
            trilha.shift();
        }

        if (ax == px && ay == py) {
            corpo++
            ax = Math.floor(Math.random() * qp)
            ay = Math.floor(Math.random() * qp)
        }

    }

    function keyPush(event) {

        switch (event.keyCode) {
            case 37: // esquerda
                if (vx == vel) {
                    break
                }else{
                    vx = -vel;
                    vy = 0;
                    break;
                }
            case 38: // cima
                if (vy == vel) {
                    break;
                } else {
                    vx = 0;
                    vy = -vel;
                    break;
                }
            case 39: // direita
                if (vx == -vel) {
                    break;
                } else {
                    vx = vel;
                    vy = 0;
                    break;
                }
            case 40: // baixo
                if (vy == -vel) {
                    break;
                } else {
                    vx = 0;
                    vy = vel;
                    break;
                }
            default:

                break;
        }
    }
}