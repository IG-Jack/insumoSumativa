import { Component, OnInit } from '@angular/core';
import { Database, object, ref } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  estadoBano: boolean | undefined;
  estadoCochera: boolean | undefined;
  estadoCocina: boolean | undefined;
  estadoDormitorio: boolean | undefined;
  estadoGimnasio: boolean | undefined;
  estadoSalaJuegos: boolean | undefined;

  constructor(private database: Database) {
  }

  ngOnInit() {
    const routeBaño = ref(this.database, "casa/BaÃ±o");
    object(routeBaño).subscribe(attributes => {
      this.estadoBano = attributes.snapshot.val();
    });

    const routeCochera = ref(this.database, "casa/Cochera");
    object(routeCochera).subscribe(attributes => {
      this.estadoCochera = attributes.snapshot.val();
    });

    const routeCocina = ref(this.database, "casa/Cocina");
    object(routeCocina).subscribe(attributes => {
      this.estadoCocina = attributes.snapshot.val();
    });

    const routeDormitorio = ref(this.database, "casa/Dormitorio");
    object(routeDormitorio).subscribe(attributes => {
      this.estadoDormitorio = attributes.snapshot.val();
    });

    const routeGimnasio = ref(this.database, "casa/Gimnasio");
    object(routeGimnasio).subscribe(attributes => {
      this.estadoGimnasio = attributes.snapshot.val();
    });

    const routeSalaJuegos = ref(this.database, "casa/SalaJuegos");
    object(routeSalaJuegos).subscribe(attributes => {
      this.estadoSalaJuegos = attributes.snapshot.val();
    });
  }
}
