/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package calcularequacaoreta;

/**
 *
 * @author rafael
 */
public class Equacao {
    
  
    public String equacao;
    public double membro_a;
    public double membro_b;
    public double membro_c;
    
    public void calculo(double xa,double xb,double ya,double yb){
       double valor_x;
       double valor_y;
       double valor_c;
       
       valor_x = ya-yb;
       valor_y = xb-xa;
       valor_c = (xa*yb)-(xb*ya);
       
       if(valor_y < 0 && valor_c<0){
         System.out.println("Os valores da equação da reta são: "+valor_x+"x - "+valor_y+"y - "+valor_c+" = 0");
       }else if(valor_y<0 && valor_c>0){
         System.out.println("Os valores da equação da reta são: "+valor_x+"x - "+valor_y+"y + "+valor_c+" = 0");
       }else if(valor_c<0 && valor_y>0){
         System.out.println("Os valores da equação da reta são: "+valor_x+"x + "+valor_y+"y - "+valor_c+" = 0");
       }else{
         System.out.println("Os valores da equação da reta são: "+valor_x+"x + "+valor_y+"y + "+valor_c+" = 0");
       }
        
        
}
}
