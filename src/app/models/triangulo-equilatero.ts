import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {
  // Propiedad privada para almacenar la longitud del lado del triángulo
  private ladoA: number;

  // Constructor de la clase Triangulo
  constructor(ladoA: number) {
    // Llama al constructor de la clase padre (FiguraGeometrica) con el nombre de la figura
    super('Triángulo Equilátero');
    // Inicializa la propiedad ladoA con el valor proporcionado.
    this.ladoA = ladoA;
  }

  calcularPerimetro(): number {
    // Calcula el perímetro multiplicando la longitud del lado por 3.
    return 3 * this.ladoA;
  }
}
