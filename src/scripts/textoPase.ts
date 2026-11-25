// src/scripts/textoPase.ts
// La frase que va debajo del número en la tarjeta del pase.
// Un solo lugar para el singular y el plural: 1 → "pase", 2 o más → "pases".
export function textoPases(pases: number): string {
    return pases === 1 ? "pase en su honor" : "pases en su honor";
}
