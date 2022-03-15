class Ninja {
    constructor( nombre, salud=50, velocidad=3, fuerza=3){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;
    }
    sayName(){
        console.log("Nombre del ninja:",this.nombre);
        console.log("-------------------------------------");
    }

    showStats(){
        console.log("El nombre del ninja:",this.nombre);
        console.log("La fuerza del ninja:",this.fuerza);
        console.log("La velocidad del ninja:", this.velocidad);
        console.log("La salud del ninja:",this.salud);
        console.log("-------------------------------------");
    }
    drinkSake(){
        this.salud +=10;
    }
}
class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10){
        super( nombre, salud , velocidad, fuerza );
        this.sabiduria = sabiduria;
    }

    speakWisdom(){
        super.drinkSake()
        console.log("Vive cada dia como si fuera el ultimo.No existe el pasado i el futuro solo esta el presente.")
        console.log("---------------------------------------------");
    }

    showStats(){
        super.showStats();
        console.log("El valor de sabiduria del sensei:",this.sabiduria);
    }

}

let ninja1= new Ninja("Alexander");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
let ninja2=new Ninja("rosa",100,20,80);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

let sensei=new Sensei("Gonzalo");
sensei.showStats();
sensei.speakWisdom();
sensei.showStats();
