class InventarioViejo {
  private items: { nombre: string }[] = [];
  addItem(nombre: string) {
    this.items.push({ nombre });
  }
  getItems() {
    return this.items;
  }
}

class AdaptadorInventario {
  constructor(private inventarioViejo: InventarioViejo) {}

  addItem(item: { nombre: string; tipo: string; estado: string }) {
    this.inventarioViejo.addItem(item.nombre);
  }

  getItems() {
    return this.inventarioViejo.getItems();
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.addItem({
  nombre: "Router Cisco",
  tipo: "Red",
  estado: "disponible",
});
console.log(adaptador.getItems());
