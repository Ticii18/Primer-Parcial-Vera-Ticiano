class Soporte {
  notificar(nombre: string, estado: string) {
    console.log(
      `Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`
    );
  }
}

class Equipo {
  private observadores: Soporte[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    private estado: string
  ) {}

  agregarObservador(observador: Soporte) {
    this.observadores.push(observador);
  }

  cambiarEstado(nuevoEstado: string) {
    this.estado = nuevoEstado;
    this.notificarObservadores();
  }

  private notificarObservadores() {
    for (const obs of this.observadores) {
      obs.notificar(this.nombre, this.estado);
    }
  }
}

const soporte = new Soporte();
const equipo = new Equipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
