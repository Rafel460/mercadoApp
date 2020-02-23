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
    
  
    private String equacao;
    private String membro_a;
    private String membro_b;
    private String membro_c;
    
    public void calculo(double xa,double xb,double ya,double yb){
       double valor_x;
       double valor_y;
       double valor_c;
       //calculo
       valor_x = ya-yb;
       valor_y = xb-xa;
       valor_c = (xa*yb)-(xb*ya);
       //valores dos coeficientes de b e c
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
    //metodos set
      public void setMembro_a(double valor_x){
       this.membro_a = new String(""+valor_x+"x");
      }
      public void setMembro_b(double valor_y){
          this.membro_b = new String(""+valor_y+"y");
      }
      public void setMembro_c(double valor_c){
          this.membro_c = new String(""+valor_c+"");
      }
      public void setEquacao(double valor_x, double valor_y, double valor_c){
          if(valor_y < 0 && valor_c < 0){
          this.equacao = new String(""+valor_x+"x -"+valor_y+"y -"+valor_c+" = 0");
          }else if(valor_y<0 && valor_c>0){
         this.equacao = new String(""+valor_x+"x - "+valor_y+"y + "+valor_c+" = 0");
       }else if(valor_c<0 && valor_y>0){
         this.equacao = new String(""+valor_x+"x + "+valor_y+"y - "+valor_c+" = 0");
       }else{
         this.equacao = new String(""+valor_x+"x + "+valor_y+"y + "+valor_c+" = 0");
       }
      }
      
}
