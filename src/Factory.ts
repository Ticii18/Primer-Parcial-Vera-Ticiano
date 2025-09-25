// interface Equipo {
//   tipo: string;
//   nombre: string;
//   RAM: string;
//   procesador: string;
//   detalles(): string;
// }

// class Notebook implements Equipo {
//   tipo = "Notebook";
//   constructor(public nombre: string, public RAM: string, public procesador: string) {}
//   detalles() {
//     return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.RAM}, Procesador: ${this.procesador}`;
//   }
// }

// class Desktop implements Equipo {
//   tipo = "Desktop";
//   constructor(public nombre: string, public RAM: string, public procesador: string) {}
//   detalles() {
//     return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.RAM}, Procesador: ${this.procesador}`;
//   }
// }

// class Servidor implements Equipo {
//   tipo = "Servidor";
//   constructor(public nombre: string, public RAM: string, public procesador: string) {}
//   detalles() {
//     return `Tipo: ${this.tipo}, Nombre: ${this.nombre}, RAM: ${this.RAM}, Procesador: ${this.procesador}`;
//   }
// }

// class EquipoFactory {
//   crearEquipo(tipo: string, nombre:string, ram:string, procesador:string) {
//     switch (tipo) {
//       case "Notebook":
//         return new Notebook(nombre, ram , procesador);
//       case "Desktop":
//         return new Desktop(nombre, ram , procesador);
//       case "Servidor":
//         return new Servidor(nombre, ram , procesador);
//       default:
//         throw new Error("tipo de equipo no reconocido");
//     }
//   }
// }

// const factory = new EquipoFactory()
// const server = factory.crearEquipo("Servidor", "Dell PowerEdge","32GB", "Xeon")
// console.log(server.detalles())