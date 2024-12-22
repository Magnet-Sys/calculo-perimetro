/**
 * Clase abstracta que representa una figura geométrica.
 * Proporciona una base para definir diferentes tipos de figuras geométricas.
 */
export abstract class FiguraGeometrica {
  nombre: string;

  // Constructor de la clase FiguraGeometrica.
  constructor(nombre: string) {
    // Nombre de la figura geométrica
    this.nombre = nombre;
  }
  // Método abstracto para calcular el perímetro de la figura.
  abstract calcularPerimetro(): number;
}
