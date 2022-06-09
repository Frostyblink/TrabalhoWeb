var btnStart
var btnPause
var btnReset
var btnClick
var divTempo
var tempo = 5
var timerId
var divClick

init()

function init(){
  btnStart = document.getElementById("start")
  btnStart.onclick = starttempo

  btnClick = document.getElementById("clicar")
  btnClick.onclick = click

  divClick = document.getElementById("cliques")
  
  btnReset = document.getElementById("reset")
  btnReset.onclick = reset
  btnReset.disabled = true

  divTempo = document.getElementById("tempo")
}

function stoptempo(){
}

function updatetempo(){
  tempo = tempo - 0.1
  divTempo.innerHTML = tempo.toFixed(1) + "s"
  console.log(divTempo.innerText.replace("s",""))
  if(divTempo.innerText.replace("s","") === "0.0"){
    clearInterval(timerId)
    tempo = 5
  }
}

function starttempo(){
  timerId = setInterval(updatetempo, 100)
  btnStart.disabled = true
  btnReset.disabled = false
  if(tempo == 0){
    clearInterval(timerId);
  }
}

function reset(){
  clearInterval(timerId)
  btnStart.disabled = false
  btnReset.disabled = true
  tempo = 5
  divTempo.innerHTML = tempo.toFixed(1) + "s"
}

function click(){
  console.log(divTempo.innerText.replace("s",""))
  if(divTempo.innerText.replace("s","")=== "0.0") return
  var clickatual = Number(divClick.innerText)
  var valorincrementado = clickatual + 1
  divClick.innerHTML = valorincrementado
}

