/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
     var cantidad;
     cantidad =document.getElementById ("Cantidad").value;
    cantidad =parseInt (cantidad);  
    var precio;
    precio = 35
    precio = parseInt (precio);
    var resultado;
    resultado = parseInt (resultado);
    var marca;
    marca = document.getElementById ("Marca").value;
    var impuesto;
    impuesto = resultado /10
    impuesto = parseInt (impuesto);
    var total;
    total = parseInt (total);




    if (cantidad >=6)
    {   
        
        resultado =precio * cantidad /2 
        if (resultado <=120)

        document.getElementById("precioDescuento").value=resultado
        else (resultado > 120)
        {   
            resultado =precio * cantidad /2 
            impuesto = resultado /10
            total = resultado + impuesto
            document.getElementById ("precioDescuento").value = total
            alert ("usted pago" + impuesto + "de IIBB");
        }
        

    }
    if (cantidad ==5)
    {
        switch (marca)
        {
            case ("ArgentinaLuz"):
                resultado = precio * cantidad - precio * cantidad * 0.4
                if (resultado <=120)

        document.getElementById("precioDescuento").value=resultado
        else (resultado > 120)
        {   
            resultado =precio * cantidad - precio *cantidad *0.4
            impuesto = resultado /10
            total = resultado + impuesto
            document.getElementById ("precioDescuento").value = total
            alert ("usted pago" + impuesto + "de IIBB");
        }
        break;
        default:
                resultado = precio * cantidad - precio * cantidad * 0.3
                if (resultado <=120)

        document.getElementById("precioDescuento").value=resultado
        else (resultado > 120)
        {   
            resultado =precio * cantidad - precio *cantidad *0.3 
            impuesto = resultado /10
            total = resultado + impuesto
            document.getElementById ("precioDescuento").value = total
            alert ("usted pago" + impuesto + "de IIBB");
        }
            

        }
        if (cantidad ==4)
        {
            switch (marca)
            {
                case ("ArgentinaLuz"):
                        resultado = precio * cantidad - precio * cantidad * 0.25
                        if (resultado <=120)
        
                document.getElementById("precioDescuento").value=resultado
                else (resultado > 120)
                {   
                    resultado =precio * cantidad - precio *cantidad *0.25
                    impuesto = resultado /10
                    total = resultado + impuesto
                    document.getElementById ("precioDescuento").value = total
                    alert ("usted pago" + impuesto + "de IIBB");
                }
                break;
                case ("FelipeLamparas"):
                        resultado = precio * cantidad - precio * cantidad * 0.25
                        if (resultado <=120)
        
                document.getElementById("precioDescuento").value=resultado
                else (resultado > 120)
                {   
                    resultado =precio * cantidad - precio *cantidad *0.25
                    impuesto = resultado /10
                    total = resultado + impuesto
                    document.getElementById ("precioDescuento").value = total
                    alert ("usted pago" + impuesto + "de IIBB");
                }
                break;
                default:
                        resultado = precio * cantidad - precio * cantidad * 0.2
                        if (resultado <=120)
        
                document.getElementById("precioDescuento").value=resultado
                else (resultado > 120)
                {   
                    resultado =precio * cantidad - precio *cantidad *0.2
                    impuesto = resultado /10
                    total = resultado + impuesto
                    document.getElementById ("precioDescuento").value = total
                    alert ("usted pago" + impuesto + "de IIBB");
                }
                break;
                         
            }
        }
        

    }
    if (cantidad ==3)
    {
        switch (marca)
        {
            case ("ArgentinaLuz"):
                    resultado = precio * cantidad - precio * cantidad * 0.15
                    if (resultado <=120)
    
            document.getElementById("precioDescuento").value=resultado
            else (resultado > 120)
            {   
                resultado =precio * cantidad - precio *cantidad *0.15
                impuesto = resultado /10
                total = resultado + impuesto
                document.getElementById ("precioDescuento").value = total
                alert ("usted pago" + impuesto + "de IIBB");
            }
            break;
            case ("FelipeLamparas"):
                    resultado = precio * cantidad - precio * cantidad * 0.1
                    if (resultado <=120)
    
            document.getElementById("precioDescuento").value=resultado
            else (resultado > 120)
            {   
                resultado =precio * cantidad - precio *cantidad *0.1
                impuesto = resultado /10
                total = resultado + impuesto
                document.getElementById ("precioDescuento").value = total
                alert ("usted pago" + impuesto + "de IIBB");
            }
            break;
            default:
                    resultado = precio * cantidad - precio * cantidad * 0.05
                    if (resultado <=120)
    
            document.getElementById("precioDescuento").value=resultado
            else (resultado > 120)
            {   
                resultado =precio * cantidad - precio *cantidad *0.05
                impuesto = resultado /10
                total = resultado + impuesto
                document.getElementById ("precioDescuento").value = total
                alert ("usted pago" + impuesto + "de IIBB");
            }
            break;
        }
    }
    

    
            
            

        
        




    
}
