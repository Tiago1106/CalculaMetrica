function executar(){
    somaGeral = 0
    vet = []
    
    //Entrada de Dados
    tamVet = Number(prompt('Quantidade de Numeros:'))
    for(i=0; i<tamVet; i++){
        vet[i] = Number(prompt('Numero:'))
        somaGeral = somaGeral + vet[i]
    }
    linguagem = Number(prompt("Linguaguem (Valor):"))
    tipoSistema = prompt("Tipo do Sistema: SC - CE - SW")
    valorHora = parseFloat(prompt("Valor da Hora:"))

    if(tipoSistema == "SC" || tipoSistema == "sc" ){
        tipoSistemaNumber = 2500
    }
    if(tipoSistema == "CE" || tipoSistema == "ce" ){
        tipoSistemaNumber = 3600
    }
    if(tipoSistema == "sw" || tipoSistema == "sw" ){
        tipoSistemaNumber = 3300
    }
    

    //Tab Entrada
        contColEntrada1 = 0
        contColEntrada2 = 0
        contColEntrada3 = 0
    
        for(i=0; i<tamVet; i++){
            if(vet[i] >= 1 && vet[i]<=4){
                contColEntrada1 = contColEntrada1 + 1
                
            }
            if(vet[i] >= 5 && vet[i]<= 15){
                contColEntrada2 = contColEntrada2 + 1
            }
            if(vet[i] >= 16){
                contColEntrada3 = contColEntrada3 + 1
            }
        }
        
        contSimEntrada = 0
        contMedEntrada = 0
        contComEntrada = 0

        //Coluna 1
        if(contColEntrada1 >= 0 && contColEntrada1 <= 1){
            contSimEntrada = contSimEntrada + contColEntrada1
        }
        if(contColEntrada1 == 2){
            contSimEntrada = contSimEntrada + contColEntrada1
        }
        if(contColEntrada1 >= 3){
            contMedEntrada = contMedEntrada + contColEntrada1
        }
        
        // Coluna 2
        if(contColEntrada2 >= 0 && contColEntrada2 <= 1){
            contSimEntrada = contSimEntrada + contColEntrada2
        }
        if(contColEntrada2 == 2){
            contMedEntrada = contMedEntrada + contColEntrada2
        }
        if(contColEntrada2 >= 3){
            contComEntrada = contComEntrada + contColEntrada2
        }

        //Coluna 3
        if(contColEntrada3 >= 0 && contColEntrada3 <= 1){
            contMedEntrada = contMedEntrada + contColEntrada3
        }
        if(contColEntrada3 == 2){
            contComEntrada = contComEntrada + contColEntrada3
        }
        if(contColEntrada3 >= 3){
            contComEntrada = contComEntrada + contColEntrada3
        }

        // Multiplicação e Total
        fimSimEntrada = contSimEntrada * 3
        fimMedEntrada = contMedEntrada * 4
        fimComEntrada = contComEntrada * 6
        somaFimEntrada = fimSimEntrada + fimMedEntrada + fimComEntrada

        console.log("Entrada")
        console.log(contSimEntrada + " | Simples  | " + fimSimEntrada)
        console.log(contMedEntrada + " | Medio    | " + fimMedEntrada)
        console.log(contComEntrada + " | Complexo | " + fimComEntrada)
        console.log("Soma = " + somaFimEntrada)
    



    //Tab Saida
        contColSaida1 = 0
        contColSaida2 = 0
        contColSaida3 = 0
    
        for(i=0; i<tamVet; i++){
            if(vet[i] >= 1 && vet[i]<= 5){
                contColSaida1 = contColSaida1 + 1           
            }
            if(vet[i] >= 6 && vet[i]<= 19){
                contColSaida2 = contColSaida2 + 1
            }
            if(vet[i] >= 20){
                contColSaida3 = contColSaida3 + 1
            }
        }
        //Geral
        if(somaGeral>= 1 && somaGeral <= 5){
            contColSaida1 = contColSaida1 + 1           
        }
        if(somaGeral >= 6 && somaGeral<= 19){
            contColSaida2 = contColSaida2 + 1
        }
        if(somaGeral >= 20){
            contColSaida3 = contColSaida3 + 1
        }
        
        contSimSaida = 0
        contMedSaida = 0
        contComSaida = 0

        //Coluna 1
        if(contColSaida1 >= 0 && contColSaida1 <= 1){
            contSimSaida = contSimSaida + contColSaida1
        }
        if(contColSaida1 >= 2 && contColSaida1 <= 3){
            contSimSaida = contSimSaida + contColSaida1
        }
        if(contColSaida1 >= 4){
            contMedSaida = contMedSaida + contColSaida1
        }
        
        // Coluna 2
        if(contColSaida2 >= 0 && contColSaida2 <= 1){
            contSimSaida = contSimSaida + contColSaida2
        }
        if(contColSaida2 >= 2 && contColSaida2 <= 3){
            contMedSaida = contMedSaida + contColSaida2
        }
        if(contColSaida2 >= 4){
            contComSaida = contComSaida + contColSaida2
        }

        //Coluna 3
        if(contColSaida3 >= 0 && contColSaida3 <= 1){
            contMedSaida = contMedSaida + contColSaida3
        }
        if(contColSaida3 >= 2 && contColSaida3 <= 3){
            contComSaida = contComSaida + contColSaida3
        }
        if(contColSaida3 >= 4){
            contComSaida = contComSaida + contColSaida3
        }

        // Multiplicação e Total
        fimSimSaida = contSimSaida * 4
        fimMedSaida = contMedSaida * 5
        fimComSaida = contComSaida * 7
        somaFimSaida = fimSimSaida + fimMedSaida + fimComSaida

        console.log("Saida")
        console.log(contSimSaida + " | Simples  | " + fimSimSaida)
        console.log(contMedSaida + " | Medio    | " + fimMedSaida)
        console.log(contComSaida + " | Complexo | " + fimComSaida)
        console.log("Soma = " + somaFimSaida)


    //Tab Consulta
        contColConsulta1 = 0
        contColConsulta2 = 0
        contColConsulta3 = 0

        for(i=0; i<tamVet; i++){
            if(vet[i] >= 1 && vet[i]<= 4){
                contColConsulta1 = contColConsulta1 + 1           
            }
            if(vet[i] >= 5 && vet[i]<= 15){
                contColConsulta2 = contColConsulta2 + 1
            }
            if(vet[i] >= 16){
                contColConsulta3 = contColConsulta3 + 1
            }
        }
        //Geral
        if(somaGeral>= 1 && somaGeral <= 6){
            contColConsulta1 = contColConsulta1 + 1           
        }
        if(somaGeral >= 5 && somaGeral<= 15){
            contColConsulta2 = contColConsulta2 + 1
        }
        if(somaGeral >= 16){
            contColConsulta3 = contColConsulta3 + 1
        }
        
        contSimConsulta = 0
        contMedConsulta = 0
        contComConsulta = 0

        //Coluna 1
        if(contColConsulta1 >= 0 && contColConsulta1 <= 1){
            contSimConsulta = contSimConsulta + contColConsulta1
        }
        if(contColConsulta1 == 2){
            contSimConsulta = contSimConsulta + contColConsulta1
        }
        if(contColConsulta1 >= 3){
            contMedConsulta = contMedConsulta + contColConsulta1
        }
        
        // Coluna 2
        if(contColConsulta2 >= 0 && contColConsulta2 <= 1){
            contSimConsulta = contSimConsulta + contColConsulta2
        }
        if(contColConsulta2 == 2){
            contMedConsulta = contMedConsulta + contColConsulta2
        }
        if(contColConsulta2 >= 3){
            contComConsulta = contComConsulta + contColConsulta2
        }

        //Coluna 3
        if(contColConsulta3 >= 0 && contColConsulta3 <= 1){
            contMedConsulta = contMedConsulta + contColConsulta3
        }
        if(contColConsulta3 == 2){
            contComConsulta = contComConsulta + contColConsulta3
        }
        if(contColConsulta3 >= 3){
            contComConsulta = contComConsulta + contColConsulta3
        }

        // Multiplicação e Total
        fimSimConsulta = contSimConsulta * 3
        fimMedConsulta = contMedConsulta * 4
        fimComConsulta = contComConsulta * 6
        somaFimConsulta = fimSimConsulta + fimMedConsulta + fimComConsulta    

        console.log("Consulta")
        console.log(contSimConsulta + " | Simples  | " + fimSimConsulta)
        console.log(contMedConsulta + " | Medio    | " + fimMedConsulta)
        console.log(contComConsulta + " | Complexo | " + fimComConsulta)
        console.log("Soma = " + somaFimConsulta)




    //Tab Arquivo
        contColArquivo1 = 0
        contColArquivo2 = 0
        contColArquivo3 = 0
    
        for(i=0; i<tamVet; i++){
            if(vet[i] >= 1 && vet[i]<= 19){
                contColArquivo1 = contColArquivo1 + 1
                
            }
            if(vet[i] >= 20 && vet[i]<= 50){
                contColArquivo2 = contColArquivo2 + 1
            }
            if(vet[i] >= 51){
                contColArquivo3 = contColArquivo3 + 1
            }
        }
        
        contSimArquivo = 0
        contMedArquivo = 0
        contComArquivo = 0

        //Coluna 1
        if(contColArquivo1 == 1){
            contSimArquivo = contSimArquivo + contColArquivo1
        }
        if(contColArquivo1 >= 2 && contColArquivo1 <= 5){
            contSimArquivo = contSimArquivo + contColArquivo1
        }
        if(contColArquivo1 >= 6){
            contMedArquivo = contMedArquivo + contColArquivo1
        }
        
        // Coluna 2
        if(contColArquivo2 == 1){
            contSimArquivo = contSimArquivo + contColArquivo2
        }
        if(contColArquivo2 >= 2 && contColArquivo2 <= 5){
            contMedArquivo = contMedArquivo + contColArquivo2
        }
        if(contColArquivo2 >= 6){
            contComArquivo = contComArquivo + contColArquivo2
        }

        //Coluna 3
        if(contColArquivo3 == 1){
            contMedArquivo = contMedArquivo + contColArquivo3
        }
        if(contColArquivo3 >= 2 && contColArquivo3 <=5){
            contComArquivo = contComArquivo + contColArquivo3
        }
        if(contColArquivo3 >= 6){
            contComArquivo = contComArquivo + contColArquivo3
        }

        // Multiplicação e Total
        fimSimArquivo = contSimArquivo * 7
        fimMedArquivo = contMedArquivo * 10
        fimComArquivo = contComArquivo * 15
        somaFimArquivo = fimSimArquivo + fimMedArquivo + fimComArquivo

        console.log("Saida")
        console.log(contSimArquivo + " | Simples  | " + fimSimArquivo)
        console.log(contMedArquivo + " | Medio    | " + fimMedArquivo)
        console.log(contComArquivo + " | Complexo | " + fimComArquivo)
        console.log("Soma = " + somaFimArquivo)

    //Tab Interface
        contColInterface1 = 0
        contColInterface2 = 0
        contColInterface3 = 0

        for(i=0; i<tamVet; i++){
            if(vet[i] >= 1 && vet[i]<= 19){
                contColInterface1 = contColInterface1 + 1           
            }
            if(vet[i] >= 20 && vet[i]<= 50){
                contColInterface2 = contColInterface2 + 1
            }
            if(vet[i] >= 51){
                contColInterface3 = contColInterface3 + 1
            }
        }
        //Geral
        if(somaGeral>= 1 && somaGeral <= 19){
            contColInterface1 = contColInterface1 + 1           
        }
        if(somaGeral >= 20 && somaGeral<= 50){
            contColInterface2 = contColInterface2 + 1
        }
        if(somaGeral >= 51){
            contColInterface3 = contColInterface3 + 1
        }
        
        contSimInterface = 0
        contMedInterface = 0
        contComInterface = 0

        //Coluna 1
        if(contColInterface1 == 1){
            contSimInterface = contSimInterface + contColInterface1
        }
        if(contColInterface1 >= 2 && contColInterface1 <=5){
            contSimInterface = contSimInterface + contColInterface1
        }
        if(contColInterface1 >= 6){
            contMedInterface = contMedInterface + contColInterface1
        }
        
        // Coluna 2
        if(contColInterface2 == 1){
            contSimInterface = contSimInterface + contColInterface2
        }
        if(contColInterface2 >= 2 && contColInterface2 <=5){
            contMedInterface = contMedInterface + contColInterface2
        }
        if(contColInterface2 >= 6){
            contComInterface = contComInterface + contColInterface2
        }

        //Coluna 3
        if(contColInterface3 == 1){
            contMedInterface = contMedInterface + contColInterface3
        }
        if(contColInterface3 >= 2 && contColInterface3 <=5){
            contComInterface = contComInterface + contColInterface3
        }
        if(contColInterface3 >= 6){
            contComInterface = contComInterface + contColInterface3
        }

        // Multiplicação e Total
        fimSimInterface = contSimInterface * 5
        fimMedInterface = contMedInterface * 7
        fimComInterface = contComInterface * 10
        somaFimInterface = fimSimInterface + fimMedInterface + fimComInterface    

        console.log("Interface")
        console.log(contSimInterface + " | Simples  | " + fimSimInterface)
        console.log(contMedInterface + " | Medio    | " + fimMedInterface)
        console.log(contComInterface + " | Complexo | " + fimComInterface)
        console.log("Soma = " + somaFimInterface)

        /*--------------------------------------------------------------------------------------------------*/
        totalFPb = somaFimEntrada + somaFimSaida + somaFimConsulta + somaFimArquivo + somaFimInterface
        console.log("\nTotal de FP'b = " + totalFPb)

        totalFPr = totalFPb * 1.35
        totalFPr = Math.round(totalFPr) 
        console.log(totalFPb + " * 1.35 = " + totalFPr)

        mes = (totalFPr * linguagem) / tipoSistemaNumber 
        var mesInt = Math.trunc(mes).toString()
        mes = mes.toString()
        var mesArred = mes.substring(mes.indexOf('.'), mes.indexOf('.')+3)
        var mesFinal = mesInt + mesArred
        Number(mesFinal)

        custo = mesFinal * 132 * valorHora 
        console.log("\n Custo = " + custo.toFixed(2))

        aux = Math.trunc(mesFinal)
        dias = (mesFinal - aux) * 22
        aux = Math.trunc(dias)
        horas = (dias - aux) * 6
        aux = Math.trunc(horas)
        min = (horas - aux) * 60
        
        console.log("\n Mes = " + mesFinal + "\n Dias = " + dias.toFixed(3) + "\n Horas = " + horas.toFixed(3) + "\n Min = " + min.toFixed(3) )

        // Math.trunc      usar pra pegar os meses 

}