let numero1 = 22;
let numero2 = 1;
let numero3 = -10;
let numero4 = 4;
let numero5 = 10;
let numero6 = 5.67;
let numero7 = 5.3;
let numeros=[1,-6,-77,88];
let anguloGrados = 30;
let anguloRadianes = anguloGrados * (Math.PI / 180);

//Propiedad del numero Pi:
console.log("Prueba PI:")
console.log(Math.PI);//3.141592653589793
console.log(Math.PI + numero2);//4.141592653589793

//Propiedad con el numero E:
console.log("Prueba E:")
console.log(Math.E);//2.718281828459045
console.log(Math.E + numero2);//3.718281828459045
//
//Valor absoluto de un numero:
console.log("Prueba valor absoluto:")
console.log(numero3);//10
console.log(Math.abs(numero3));//-10

//Seno de un angulo (hay que pasarlo en radianes)
console.log("Prueba seno:")
console.log(anguloGrados);//30
console.log(Math.sin(anguloRadianes));//0.49999999999999994

//Coseno de un angulo (hay que pasarlo en radianes)
console.log("Prueba coseno:")
console.log(anguloGrados);//30
console.log(Math.cos(anguloRadianes));//0.8660254037844387

//Tangente de un angulo (hay que pasarlo en radianes)
console.log("Prueba tangente:")
console.log(anguloGrados);//30
console.log(Math.tan(anguloRadianes)); 0.5773502691896257

//Exponencia e al numero indicado en el parametro
console.log("Prueba exponente:")
console.log(numero4);//4
console.log(Math.E);//2.718281828459045
console.log(Math.exp(numero4));//54.598150033144236

//Exponencia e al numero indicado en el parametro
console.log("Prueba logaritmo neperiano:")
console.log(numero4);//4
console.log(numero5);//10
console.log(Math.log(numero4));//1.3862943611198906
console.log("Prueba logaritmo en base 10:")//Cambiar el dividendo a la base del logaritmo deseado
console.log(Math.log(numero4)/Math.log(numero5));//0.6020599913279623

//Redondea hacia arriba
console.log("Prueba ceil:")
console.log(numero6);//5.67
console.log(Math.ceil(numero6));//6

//Redondea hacia arriba
console.log("Prueba floor:")
console.log(numero6);//5.67
console.log(Math.floor(numero6));//5

//Redondea hacia la parte entera mas proxima
console.log("Prueba round:")
console.log(numero6);//5.67
console.log(numero7);//5.3
console.log(Math.round(numero6));//6
console.log(Math.round(numero7));//5

//Eleva el primer argumento al segundo
console.log("Prueba pow:")
console.log(numero4);//4
console.log(Math.pow(numero4,numero4));//256

//Devuelve el menor de sus argumentos
console.log("Prueba min:")
console.log(numero1);//22
console.log(numero2);//1
console.log(numero3);//-10
console.log(numero4);//4
console.log(numero5);//5.67
console.log(Math.min(numero1,numero2,numero3,numero4,numero5,numero6));//-10

//Devuelve el mayor de sus argumentos
console.log("Prueba max:")
console.log(numero1);//22
console.log(numero2);//1
console.log(numero3);//-10
console.log(numero4);//4
console.log(numero5);//5.67
console.log(Math.max(numero1,numero2,numero3,numero4,numero5,numero6));//22

//Hace la raiz 
console.log("Prueba raiz:")
console.log(numero4);//4
console.log(Math.sqrt(numero4));//2

//Devuelve numero aleatorio entre los parametros
console.log("Prueba random:")
console.log(numero2);//1
console.log(numero4);//4
console.log(Math.round(Math.random(numero1,numero4)));//aleatorio redondeado al entero mas cercano
