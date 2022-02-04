# Calculadora
- NUEVO PROYECTO: Crear un nuevo proyecto Angular denominado Ejercicio3.
- CREACIÓN DE COMPONENTE: Crear el componente calculadora que permita realizar las siguientes
operaciones sobre dos números: sumar, restar, multiplicar y dividir. Se añade también la
operación pasar a binario sobre el primer número.
o COMPONENTE:
▪ Tendrá las propiedades siguientes:
nombre tipo valor inicial
titulo cadena Calculadora
num1 numérico null
num2 numérico null
resultado numérico null
historial Array de cadenas vacío
• Tendrá los métodos siguientes:
nombre función
sumar Suma num1 y num2. Añade la operación al historial
restar Resta num2 de num1. Añade la operación al historial
multiplicar Multiplica num1 por num2. Añade la operación al historial
dividir Divide num1 entre num2. Añade la operación al historial
binario Expresa en binario num1. Añade la operación al historial
limpiar Asigna valore nulos a num1, num2 y resultado y vacía el historial
o PLANTILLA: Contendrá:
▪ Un encabezado 3 con el título del componente.
▪ Un elemento input donde el usuario insertará el primer número.
▪ Un elemento input donde el usuario insertará el segundo número sólo si ya tiene
valor el primer número.
▪ 5 botones con las opciones de Sumar, Restar, Multiplicar, Dividir y Pasar a binario.
▪ Una lista con el historial de operaciones.
o CSS. Modificar el archivo CSS asociado al usuario para que presente el componente con
un color de fondo como se ve en el ejemplo y todos los aspectos que el alumno quiera
para mejorar su apariencia.
- DISTRIBUCIÓN. Crear el proyecto para producción.
El alumno entregará solamente las carpetas src y dist.
Se muestra un ejemplo de captura de pantalla:
