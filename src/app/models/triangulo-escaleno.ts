import { FiguraGeometrica } from './figura-geometrica';

/**
 * Clase que representa un triángulo escaleno.
 * Hereda de la clase FiguraGeometrica.
 */

export class TrianguloEscaleno extends FiguraGeometrica {
  // Longitud del lado A, B y C del triángulo.
  ladoA: number;
  ladoB: number;
  ladoC: number;

  // Constructor de la clase TrianguloEscaleno.
  constructor(ladoA: number, ladoB: number, ladoC: number) {
    // Llama al constructor de la clase padre (FiguraGeometrica) y le pasa el nombre de la figura.
    super('Triángulo');
    // Inicializa las propiedades de la clase con los valores proporcionados.
    this.ladoA = ladoA;
    this.ladoB = ladoB;
    this.ladoC = ladoC;
  }
  // Calcula el perímetro del triángulo escaleno
  calcularPerimetro(): number {
    return this.ladoA + this.ladoB + this.ladoC;
  }
}
