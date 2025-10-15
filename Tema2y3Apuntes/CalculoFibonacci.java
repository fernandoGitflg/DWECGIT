
import java.util.Scanner;

public class CalculoFibonacci {
    static Scanner scanner = new Scanner(System.in);
    public static void main(String args[]) {
        
        System.out.println("Forma iterativa:");
        System.out.println("Dime un numero entero ");
        int entrada = scanner.nextInt();
        calculoFibonacciIterativo(entrada);
        System.out.println("Forma recursiva:");
        calculoFibonacciRecursiva(entrada);
    }
    
    public static void calculoFibonacciIterativo(int limite) {
        int n1 = 0;
        int n2 = 1;
        int suma=1;
        for (int i = 0; i < limite; i++) {
            if(i==0){
                System.out.println(", "+n1);
            }else{
                System.out.print(","+n2);
                suma=n1+n2;
                n1 = n2;
                n2 = suma;
            }
        }
    }

    public static void calculoFibonacciRecursiva(int limite) {
        imprimirFibonacci(0, 1, 0, limite);
    }

    private static void imprimirFibonacci(int n1, int n2, int contador, int limite) {
        if (contador >= limite) {
            return;
        }
        System.out.println(", "+n1);
        imprimirFibonacci(n2, n1 + n2, contador + 1, limite);
    }
}
