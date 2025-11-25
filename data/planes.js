export const planes = [
    {
        id: 1,
        nombre: "Microempresa",
        precio: 384.00,
        descuento: null,
        precioRegular: 480.00,
        ahorro: 96.00,
        caracteristicas: [
            {
                // Tipo para una característica que tiene un valor original tachado y un valor actual.
                type: "bonus_range",
                // Este es el valor que debes tachar (el '100')
                original_value: "100", 
                // Este es el valor que se muestra como el actual (el '200')
                current_value: "200",
                text: "Comprobantes/Mes",
                note: "(BONO DUPLICADO)"
            },
            {
                // Tipo para una característica estándar y simple
                type: "standard",
                text: "1 Establecimiento"
            },
            {
                type: "standard",
                text: "5 Usuarios"
            },
            {
                type: "standard",
                text: "1 000 Productos"
            }
        ]
    },
    {
        id: 2,
        nombre: "Emprendedor",
        precio: 565.30,
        descuento: null,
        precioRegular: 706.80,
        ahorro: 141.50,
        caracteristicas: [
            {
                type: "bonus_range",
                original_value: "300",
                current_value: "600",
                text: "Comprobantes/Mes",
                note: "(BONO DUPLICADO)"
            },
            {
                type: "standard",
                text: "2 Establecimientos"
            },
            {
                type: "standard",
                text: "10 Usuarios"
            },
            {
                type: "standard",
                text: "5 000 Productos"
            }
        ]
    },
    {
        id: 3,
        nombre: "Corporativo",
        precio: 1131.70,
        descuento: null,
        precioRegular: 1414.80,
        ahorro: 283.10,
        caracteristicas: [
            {
                type: "standard",
                text: "Documentos ilimitados"
            },
            {
                type: "standard",
                text: "2 Establecimientos"
            },
            {
                type: "standard",
                text: "10 Usuarios"
            },
            {
                type: "standard",
                text: "5 000 Productos"
            }
        ]
    }
];