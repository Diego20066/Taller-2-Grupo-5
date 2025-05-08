// implementar una funcion que simule un sistema de seleccion de plan de gimnasio. El usuario  debe eligir un plan y especificar cuantos dias por semana planea asistir
function planGimmasio(){
    let dias = parseInt(prompt("Ingrese los dias que planea asistir"))
    let basico = 10; 
    let  estandar = 15;
    let premium = 20;
    if(dias>7){
        alert ("Ingrese un valor valido del 1-7")
    } else{ 
    let plan = prompt("Ingrese el plan de Gimnasio: basico, estandar, premium");

    switch  (plan) {
        case "basico" :
            planBasico = basico * 4
            alert("El plan elegido es basico: $" + basico)
            alert("Usted asistira: " + dias + " dias")
            alert("EL costo mensual estimado es de: " + planBasico)
            break;
        case "estandar":
            planEstandar = estandar * 4
            alert("El plan elegido es estandar: $" + estandar)
            alert("Usted asistira: " + dias + " dias")
            alert("EL costo mensual estimado es de: " + planEstandar)
            break;
        case "premium" :
            planPreimun = premium * 4
            alert("El plan elegido es premium: $" + premium)
            alert("Usted asistira: " + dias + " dias")
            alert("EL costo mensual estimado es de: " + planPreimun)
            break;
        default:
        alert ("Opcion no valida")
    }
}
}
planGimmasio()