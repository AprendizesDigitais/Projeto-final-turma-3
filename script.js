window.onload = function iniciar() {

    // difinir qual elemento html contem a tela
    var tela = document.getElementById('tela')
    // ctx = contexto
    var ctx = tela.getContext("2d")

    //click do botão para mobile
    document.getElementById('e').addEventListener('click', e)
    document.getElementById('c').addEventListener('click', c)
    document.getElementById('d').addEventListener('click', d)
    document.getElementById('b').addEventListener('click', b)

    //buscar pelo presionar da tecla
    document.addEventListener("keydown", keyPush)

    // executa a função a cada 80 mms
    setInterval(jogo, 80)

    //velocidade do jogo
    const vel = 1

    //vx = velocidade horizontal , vy = velocidade vertical
    var vx = vy = 0

    // tamanho do pixel
    var tp = 30

    // quantidade de pessas
    var qp = 20

    //px e py = ponto de inico do jogo
    var px = py = Math.floor(Math.random() * qp)

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
        ctx.fillRect(ax * tp, ay * tp, tp, tp)

        //pintar a cobra
        ctx.fillStyle = "green"
        for (var i = 0; i < trilha.length; i++) {
            ctx.fillRect(trilha[i].x * tp, trilha[i].y * tp, tp , tp)
            //se o corpo se toca reinicia o jogo
            if (trilha[i].x == px && trilha[i].y == py) {
                corpo = 5
                trilha = []
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
                if (vx != vel) {
                    vx = -vel;
                    vy = 0;
                    break;
                }
            case 38: // cima
                if (vy != vel) {
                    vx = 0;
                    vy = -vel;
                    break;
                }
            case 39: // direita
                if (vx != -vel) {
                    vx = vel;
                    vy = 0;
                    break;
                }
            case 40: // baixo
                if (vy != -vel) {
                    vx = 0;
                    vy = vel;
                    break;
                }
            default:
                break;
        }
    }

    function e() {
        if (vx != vel) {
            vx = -vel;
            vy = 0;
        }
    }
    function c() {
        if (vy != vel) {
            vx = 0;
            vy = -vel;
        }
    }
    function d() {
        if (vx != -vel) {
            vx = vel;
            vy = 0;
        }
    }
    function b() {
        if (vy != -vel) {
            vx = 0;
            vy = vel;
        }
    }
}