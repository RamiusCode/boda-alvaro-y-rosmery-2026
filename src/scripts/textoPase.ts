// src/scripts/textoPase.ts
// Todas las frases que cambian con el número de pases, en un solo lugar.
// Las usan tanto el render del servidor como los scripts que las
// actualizan con los datos del sistema de invitados: si se arman en dos
// lados, terminan diciendo cosas distintas.

// La frase que va debajo del número en la tarjeta del pase.
// 1 → "pase", 2 o más → "pases".
export function textoPases(pases: number): string {
    return pases === 1 ? "pase en su honor" : "pases en su honor";
}

// "Tienes 4 pases reservados" / "Tienes 1 pase reservado" (modal de
// confirmación). Solo la parte que cambia con el número.
export function palabraPases(pases: number): string {
    return pases === 1 ? "pase reservado" : "pases reservados";
}

/*
   El renglón de la tarjeta bordó de la despedida: 1 da "Pase para una
   persona" y 2 "Pase para dos personas". Si el número pasa la lista, cae
   al dígito ("Pase para 12 personas"). Sin pases devuelve null.
*/
const enLetras = [
    "", // el 0 no se usa: está para que el 1 caiga en "una"
    "una",
    "dos",
    "tres",
    "cuatro",
    "cinco",
    "seis",
    "siete",
    "ocho",
    "nueve",
    "diez",
];

export function textoPaseParaPersonas(pases: number): string | null {
    if (!Number.isInteger(pases) || pases <= 0) return null;
    const cantidad = enLetras[pases] ?? String(pases);
    return `Pase para ${cantidad} ${pases === 1 ? "persona" : "personas"}`;
}

// Lo que ve en el modal quien ya había confirmado antes.
export function textoYaConfirmado(asisten: number): string {
    return asisten === 1
        ? "Ya confirmaste la asistencia de 1 persona. ¡Te esperamos!"
        : `Ya confirmaste la asistencia de ${asisten} personas. ¡Te esperamos!`;
}
