/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calcularequacaoreta;
import java.util.Scanner;
/**
 *
 * @author rafael
 */
public class CalcularEquacaoReta {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in);
        double xa; double xb; double ya; double yb;
        System.out.println("Por Favor, insira os valores solicitados para calcular a equação");
        System.out.println("x(a): ");
        xa = teclado.nextDouble();
        System.out.println("x(b): ");
        xb = teclado.nextDouble();
        System.out.println("y(a): ");
        ya = teclado.nextDouble();
        System.out.println("y(b): ");
        yb = teclado.nextDouble();
        Equacao equacao = new Equacao();
        equacao.calculo(xa, xb, ya, yb);
        
    }
    
}
