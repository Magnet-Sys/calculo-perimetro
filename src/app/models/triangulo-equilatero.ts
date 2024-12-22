import { FiguraGeometrica } from './figura-geometrica';

export class TrianguloEquilatero extends FiguraGeometrica {
  private ladoA: number;

  constructor(ladoA: number) {
    super('Triángulo Equilátero');
    this.ladoA = ladoA;
  }

  calcularPerimetro(): number {
    return 3 * this.ladoA;
  }
}
