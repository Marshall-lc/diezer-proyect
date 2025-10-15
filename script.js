const productData = {
  "productos": [
    {
      "id": "CBL001",
      "nombre": "Cable Unipolar 2.5mm",
      "descripcion": "Conductor flexible con aislamiento. Cable 100% cobre, antillama y resistente a golpes. Apto para instalaciones fijas interiores. Tensión nominal 450/750 Volt.",
      "marca": "CEA CONDUCTORES",
      "categorias": ["Electricidad", "Cables"],
      "unidadMedida": "mts",
      "presentacion": "Rollo por 100 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio de Lista (Unidad/Rollo)",
          "monto": 31900.00,
          "notaOferta": "Oferta válida solo por pago contado y cuenta al día.",
          "descuento": "N/A"
        },
        {
          "tipo": "Oferta por Volumen",
          "monto": null,
          "notaOferta": "10% OFF a partir de 5 rollos o más.",
          "descuento": "10%"
        }
      ],
      "imagen": "WhatsApp Image 2025-10-14 at 4.38.21 M.jpg"
    },
    {
      "id": "HER001",
      "nombre": "Mezclador Reforzado para Pintura/Polvo",
      "descripcion": "Perfecto para agitar y mezclar productos líquidos y en polvo, como pintura, cemento o yesos, ya que es modelo reforzado.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Mezcladores"],
      "unidadMedida": "unidad",
      "presentacion": "60cm de largo, 9cm de pala",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 4990.00,
          "notaOferta": "Precio por unidad (c/u).",
          "descuento": "N/A"
        }
      ],
      "imagen": "WhatsApp Image 2025-10-14 at 4.38.21 PM.jpg"
    },
    {
      "id": "PIN001",
      "nombre": "Enduido Plástico Interior Exterior Lecotex",
      "descripcion": "Enduido plástico para interiores y exteriores.",
      "marca": "Lecotex",
      "categorias": ["Pinturería", "Enduido"],
      "unidadMedida": "litro",
      "presentacion": "Varias",
      "ofertas": true,
      "precios": [
        {
          "tipo": "PROMO 1 (1LT)",
          "monto": 2490.00,
          "notaOferta": "Precio por unidad comprando bulto de 60 unidades.",
          "descuento": "Promo Flash"
        },
        {
          "tipo": "PROMO 2 (4LTS)",
          "monto": 6499.00,
          "notaOferta": "Precio por unidad comprando bulto de 10 unidades.",
          "descuento": "Promo Flash"
        }
      ],
      "imagen": "WhatsApp Image 2025-10-14 at 4.38. PM.jpg"
    },
    {
      "id": "SEG001",
      "nombre": "Guantes Moteados de Algodón",
      "descripcion": "Par de guantes moteados, 100% algodón, excelente calidad. Línea Protección.",
      "marca": "GAMISOL - AZUL LINEA PREM",
      "categorias": ["Seguridad", "Indumentaria"],
      "unidadMedida": "par",
      "presentacion": "Por par",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Par",
          "monto": 739.99,
          "notaOferta": "Precio 'OFF' por par.",
          "descuento": "OFF"
        }
      ],
      "imagen": "WhatsApp Image 2025-10-14 at 4.38.21 P.jpg"
    },
    {
      "id": "FER001",
      "nombre": "Caño de Hierro para Cortina 1/2 x 4 mts",
      "descripcion": "Tira de hierro para cortina, medida 1/2 x 4mts.",
      "marca": "N/A",
      "categorias": ["Ferretería", "Metalurgia"],
      "unidadMedida": "unidad",
      "presentacion": "Tira 1/2 x 4mts",
      "ofertas": true,
      "contenidoBulto": 30,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 3999.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Paquete (Mayorista)",
          "monto": 3550.00,
          "notaOferta": "Precio por unidad comprando paquete de 30 unidades. Descuento extra aplicable solo en pronto pago y cuenta al día.",
          "descuento": "Descuento Extra"
        }
      ],
      "imagen": "WhatsApp Image 2025-10-14 at 4.38.20 PM.jpg"
    },
    {
      "id": "QUI001",
      "nombre": "Aguarrás 1 LT.",
      "descripcion": "Aguarrás en presentación de 1 litro. Sello de descuento aplicable solo para cuentas al día.",
      "marca": "Kerr",
      "categorias": ["Químicos", "Diluyentes"],
      "unidadMedida": "litro",
      "presentacion": "1 LT",
      "ofertas": true,
      "contenidoBulto": 12,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 2324.76,
          "notaOferta": "Con 15% de descuento aplicable.",
          "descuento": "15%"
        },
        {
          "tipo": "Precio por Bulto (x12)",
          "monto": 2235.35,
          "notaOferta": "Precio por unidad comprando por bulto de 12. Con 15% de descuento aplicable.",
          "descuento": "15%"
        }
      ],
      "imagen": "QUIMICOS 30-9.pdf"
    },
    {
      "id": "QUI002",
      "nombre": "Kerosene 4 LT.",
      "descripcion": "Kerosene en presentación de 4 litros. Sello de descuento aplicable solo para cuentas al día.",
      "marca": "Kerr",
      "categorias": ["Químicos", "Combustibles"],
      "unidadMedida": "litro",
      "presentacion": "4 LT",
      "ofertas": true,
      "contenidoBulto": 12,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 52947.13,
          "notaOferta": "Con 15% de descuento aplicable.",
          "descuento": "15%"
        }
      ],
      "imagen": "QUIMICOS 30-9.pdf"
    },
    {
      "id": "POLI001",
      "nombre": "Espiga rosca hembra",
      "descripcion": "Pieza de polietileno para tuberías.",
      "marca": "N/A",
      "categorias": ["Fusión y Polietileno", "Conexiones"],
      "unidadMedida": "unidad",
      "presentacion": "1/2 rosca hembra",
      "ofertas": false,
      "precios": [
        {
          "tipo": "Precio de Lista",
          "monto": 199.11,
          "notaOferta": "N/A",
          "descuento": "N/A"
        }
      ],
      "imagen": "FUSION Y POLIETILENO 30-9.pdf"
    },
    {
      "id": "POLI002",
      "nombre": "Codo fusión",
      "descripcion": "Codo de fusión Saniplast.",
      "marca": "SANIPLAST",
      "categorias": ["Fusión y Polietileno", "Conexiones"],
      "unidadMedida": "unidad",
      "presentacion": "20mm",
      "ofertas": false,
      "precios": [
        {
          "tipo": "Precio de Lista",
          "monto": 160.40,
          "notaOferta": "N/A",
          "descuento": "N/A"
        }
      ],
      "imagen": "FUSION Y POLIETILENO 30-9.pdf"
    },
    {
      "id": "REV001",
      "nombre": "Yeso Tipo Paris",
      "descripcion": "Yeso en diferentes presentaciones de Revokito.",
      "marca": "REVOKITO",
      "categorias": ["Construcción", "Polvos y Pastinas"],
      "unidadMedida": "kg",
      "presentacion": "Varias",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Unidad (1K)",
          "monto": 928.88,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Bulto (1K)",
          "monto": 893.15,
          "notaOferta": "Precio por unidad comprando bulto de 6 unidades, ya con el 15% de descuento aplicado.",
          "descuento": "15%"
        }
      ],
      "imagen": "LISTA POLVOS REVOQITO 30-9.pdf"
    },
    {
      "id": "MAS001",
      "nombre": "Cinta Aisladora Tacsa",
      "descripcion": "Cinta aisladora.",
      "marca": "TACSA PLUS",
      "categorias": ["Electricidad", "Cintas"],
      "unidadMedida": "unidad",
      "presentacion": "10 y 20 metros",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (10 mts)",
          "monto": 599.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (20 mts)",
          "monto": 1099.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "1.jpg"
    },
    {
      "id": "MAS002",
      "nombre": "Cinta de Embalar Sigma",
      "descripcion": "Cinta de embalar transparente.",
      "marca": "SIGMA",
      "categorias": ["Ferretería", "Cintas"],
      "unidadMedida": "unidad",
      "presentacion": "48mm x 40mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 792.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "1.jpg"
    },
    {
      "id": "MAS003",
      "nombre": "Cinta de Teflón Luxom",
      "descripcion": "Cinta de teflón.",
      "marca": "LUXOM",
      "categorias": ["Sanitario", "Cintas"],
      "unidadMedida": "unidad",
      "presentacion": "Varias",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1/2 x 10mts)",
          "monto": 276.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (3/4 x 10mts)",
          "monto": 398.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "1.jpg"
    },
    {
      "id": "SAN001",
      "nombre": "Manguera para Lavarropas Carga",
      "descripcion": "Manguera de carga para lavarropas.",
      "marca": "N/A",
      "categorias": ["Sanitario", "Mangueras"],
      "unidadMedida": "mts",
      "presentacion": "1.50, 2.00 y 3.00 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1.50 mts)",
          "monto": 2199.00,
          "notaOferta": "Precio de unidad. Descuento extra aplicable solo en pronto pago y cuenta al día.",
          "descuento": "Extra: 2099.00"
        },
        {
          "tipo": "Precio por Unidad (2.00 mts)",
          "monto": 2740.00,
          "notaOferta": "Precio de unidad. Descuento extra aplicable solo en pronto pago y cuenta al día.",
          "descuento": "Extra: 2603.00"
        },
        {
          "tipo": "Precio por Unidad (3.00 mts)",
          "monto": 3094.00,
          "notaOferta": "Precio de unidad. Descuento extra aplicable solo en pronto pago y cuenta al día.",
          "descuento": "Extra: 2849.00"
        }
      ],
      "imagen": "2.jpg"
    },
    {
      "id": "SAN002",
      "nombre": "Manguera para Lavarropas Descarga",
      "descripcion": "Manguera de descarga para lavarropas.",
      "marca": "N/A",
      "categorias": ["Sanitario", "Mangueras"],
      "unidadMedida": "mts",
      "presentacion": "1.80 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1.80 mts)",
          "monto": 3094.00,
          "notaOferta": "Precio de unidad. Descuento extra aplicable solo en pronto pago y cuenta al día.",
          "descuento": "Extra: 2849.00"
        }
      ],
      "imagen": "2.jpg"
    },
    {
      "id": "GAS001",
      "nombre": "Manguera Aprobada para Gas",
      "descripcion": "Manguera reforzada para gas. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Gas", "Mangueras"],
      "unidadMedida": "mts",
      "presentacion": "Rollo por 25 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Rollo",
          "monto": 17771.00,
          "notaOferta": "5% de descuento por pago contado.",
          "descuento": "5% desc."
        }
      ],
      "imagen": "2.jpg"
    },
    {
      "id": "MAS004",
      "nombre": "Cinta Doble Faz",
      "descripcion": "Cinta doble faz.",
      "marca": "N/A",
      "categorias": ["Ferretería", "Cintas"],
      "unidadMedida": "unidad",
      "presentacion": "5 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 1100.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "2.jpg"
    },
    {
      "id": "QUI003",
      "nombre": "Sella Rosca Agua",
      "descripcion": "Sella rosca para agua.",
      "marca": "HYDRO-FLEX",
      "categorias": ["Químicos", "Selladores"],
      "unidadMedida": "unidad",
      "presentacion": "25cc",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 1062.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "3.jpg"
    },
    {
      "id": "QUI004",
      "nombre": "Hidrófugo",
      "descripcion": "Hidrófugo.",
      "marca": "SECO PLUS",
      "categorias": ["Químicos", "Construcción"],
      "unidadMedida": "litro",
      "presentacion": "1 lts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 1471.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "3.jpg"
    },
    {
      "id": "SAN003",
      "nombre": "Sopapa Deizer",
      "descripcion": "Sopapa con rejilla de PVC extra flexible y tapón de goma. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "DEIZER",
      "categorias": ["Sanitario", "Accesorios"],
      "unidadMedida": "unidad",
      "presentacion": "40mm y 50mm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (40mm)",
          "monto": 1349.00,
          "notaOferta": "Precio por unidad. Descuento extra aplicable.",
          "descuento": "Extra"
        },
        {
          "tipo": "Precio por Unidad (50mm)",
          "monto": 1540.00,
          "notaOferta": "Precio por unidad. Descuento extra aplicable.",
          "descuento": "Extra"
        }
      ],
      "imagen": "3.jpg"
    },
    {
      "id": "SAN004",
      "nombre": "Filtro para Bacha",
      "descripcion": "Filtro para bacha de acero inoxidable de 65mm.",
      "marca": "N/A",
      "categorias": ["Sanitario", "Accesorios"],
      "unidadMedida": "unidad",
      "presentacion": "65mm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 693.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "4.jpg"
    },
    {
      "id": "SAN005",
      "nombre": "Canilla Esférica de 1/2",
      "descripcion": "Canilla esférica Medio Giro.",
      "marca": "MEDIO GIRO",
      "categorias": ["Sanitario", "Grifería"],
      "unidadMedida": "unidad",
      "presentacion": "1/2",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 886.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "4.jpg"
    },
    {
      "id": "HER002",
      "nombre": "Juego Llaves Allen Mediano",
      "descripcion": "Juego de 9 piezas milimétricas.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Llaves"],
      "unidadMedida": "juego",
      "presentacion": "9 piezas",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Juego",
          "monto": 2446.00,
          "notaOferta": "Precio por juego.",
          "descuento": "OFF"
        }
      ],
      "imagen": "4.jpg"
    },
    {
      "id": "HER003",
      "nombre": "Juego Llaves Torx Mediano",
      "descripcion": "Juego de 9 piezas milimétricas.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Llaves"],
      "unidadMedida": "juego",
      "presentacion": "9 piezas",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Juego",
          "monto": 2620.00,
          "notaOferta": "Precio por juego.",
          "descuento": "OFF"
        }
      ],
      "imagen": "4.jpg"
    },
    {
      "id": "HER004",
      "nombre": "Fieltro para Fratasar",
      "descripcion": "Fieltro para fratasar. Descuento extra aplicable en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "20cm y 25cm",
      "ofertas": true,
      "contenidoBulto": 20,
      "precios": [
        {
          "tipo": "Precio por Unidad (20cm)",
          "monto": 576.00,
          "notaOferta": "Precio por unidad. Precio por bulto de 20: $600.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (25cm)",
          "monto": 655.00,
          "notaOferta": "Precio por unidad. Precio por bulto de 20: $682.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "5.jpg"
    },
    {
      "id": "PIN002",
      "nombre": "Espátula PVC",
      "descripcion": "Espátula de PVC para pintura.",
      "marca": "N/A",
      "categorias": ["Pinturería", "Herramientas"],
      "unidadMedida": "unidad",
      "presentacion": "9cm, 12cm y 15cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (9cm)",
          "monto": 117.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (12cm)",
          "monto": 137.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (15cm)",
          "monto": 175.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        }
      ],
      "imagen": "5.jpg"
    },
    {
      "id": "SEG002",
      "nombre": "Guantes Moteados Livianos GRIS",
      "descripcion": "Par de guantes moteados livianos. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Seguridad", "Indumentaria"],
      "unidadMedida": "par",
      "presentacion": "Por par",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Par",
          "monto": 573.00,
          "notaOferta": "Descuento del 5% a partir de 100 unidades.",
          "descuento": "Dsto Extra / 5% desc."
        }
      ],
      "imagen": "5.jpg"
    },
    {
      "id": "SEG003",
      "nombre": "Guantes Moteados AZUL (PREM)",
      "descripcion": "Par de guantes moteados, 100% algodón, excelente calidad. Línea Protección.",
      "marca": "GAMISOL - AZUL LINEA PREM",
      "categorias": ["Seguridad", "Indumentaria"],
      "unidadMedida": "par",
      "presentacion": "Por par",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Par",
          "monto": 739.99,
          "notaOferta": "Precio 'OFF' por par.",
          "descuento": "OFF"
        }
      ],
      "imagen": "6.jpg"
    },
    {
      "id": "SAN006",
      "nombre": "Sifón Cafla",
      "descripcion": "Sifón 100% original.",
      "marca": "CAFLA",
      "categorias": ["Sanitario", "Desagües"],
      "unidadMedida": "unidad",
      "presentacion": "Simple y Doble",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Simple)",
          "monto": 2748.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Doble)",
          "monto": 6037.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "6.jpg"
    },
    {
      "id": "ELE001",
      "nombre": "Corrugado Eléctrico",
      "descripcion": "Caño corrugado para instalaciones eléctricas, rollo por 25mts.",
      "marca": "N/A",
      "categorias": ["Electricidad", "Caños"],
      "unidadMedida": "mts",
      "presentacion": "Rollo por 25 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Rollo (3/4 Naranja)",
          "monto": 3035.00,
          "notaOferta": "Precio por rollo de 25 mts.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Rollo (7/8 Naranja)",
          "monto": 4442.00,
          "notaOferta": "Precio por rollo de 25 mts.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Rollo (3/4 Blanco)",
          "monto": 3705.00,
          "notaOferta": "Precio por rollo de 25 mts.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Rollo (7/8 Blanco)",
          "monto": 5391.00,
          "notaOferta": "Precio por rollo de 25 mts.",
          "descuento": "OFF"
        }
      ],
      "imagen": "6.jpg"
    },
    {
      "id": "ELE002",
      "nombre": "Portalámpara con Chicote",
      "descripcion": "Conector antillama y protector plástico.",
      "marca": "N/A",
      "categorias": ["Electricidad", "Accesorios"],
      "unidadMedida": "unidad",
      "presentacion": "3 piezas",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (3 piezas)",
          "monto": 499.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (sólo portalámpara)",
          "monto": 288.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "7.jpg"
    },
    {
      "id": "ELE003",
      "nombre": "Porta Bastidor Exterior",
      "descripcion": "Porta bastidor para uso exterior.",
      "marca": "N/A",
      "categorias": ["Electricidad", "Cajas y Bastidores"],
      "unidadMedida": "unidad",
      "presentacion": "Exterior",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 499.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "7.jpg"
    },
    {
      "id": "SAN007",
      "nombre": "Acople Rápido Sanitario",
      "descripcion": "Acople rápido para línea sanitaria, marca Medio Giro.",
      "marca": "MEDIO GIRO",
      "categorias": ["Sanitario", "Conexiones"],
      "unidadMedida": "unidad",
      "presentacion": "1/2 y 3/4",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1/2)",
          "monto": 999.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (3/4)",
          "monto": 1217.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "7.jpg"
    },
    {
      "id": "JAR001",
      "nombre": "Manguera de Riego Reforzada",
      "descripcion": "Manguera reforzada para riego.",
      "marca": "N/A",
      "categorias": ["Jardín", "Mangueras"],
      "unidadMedida": "mts",
      "presentacion": "Rollo por 15 mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Rollo (1/2)",
          "monto": 0, // Placeholder for price
          "notaOferta": "Consultar precio. 5% de descuento a partir de 6 rollos.",
          "descuento": "5% desc."
        },
        {
          "tipo": "Precio por Rollo (3/4)",
          "monto": 0, // Placeholder for price
          "notaOferta": "Consultar precio. 5% de descuento a partir de 6 rollos.",
          "descuento": "5% desc."
        }
      ],
      "imagen": "8.jpg"
    },
    {
      "id": "JAR002",
      "nombre": "Acople Rápido Jardín",
      "descripcion": "Acople rápido para manguera.",
      "marca": "N/A",
      "categorias": ["Jardín", "Riego"],
      "unidadMedida": "unidad",
      "presentacion": "1/2 y Pico encastre",
      "ofertas": true,
      "contenidoBulto": 50,
      "precios": [
        {
          "tipo": "Precio por Unidad (Acople 1/2)",
          "monto": 830.00,
          "notaOferta": "Consultar precio por bulto de 50 unidades.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (Pico encastre)",
          "monto": 445.00,
          "notaOferta": "Consultar precio por bulto de 50 unidades.",
          "descuento": "N/A"
        }
      ],
      "imagen": "8.jpg"
    },
    {
      "id": "JAR003",
      "nombre": "Carretel para Bordeador + Tanza",
      "descripcion": "Carretel universal para bordeadoras, incluye tanza.",
      "marca": "N/A",
      "categorias": ["Jardín", "Herramientas"],
      "unidadMedida": "unidad",
      "presentacion": "Universal",
      "ofertas": true,
      "contenidoBulto": 150,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 629.00,
          "notaOferta": "Consultar precio por bulto de 150 unidades.",
          "descuento": "N/A"
        }
      ],
      "imagen": "8.jpg"
    },
    {
      "id": "PIN003",
      "nombre": "Enduido Plástico TAIS Interior/Exterior",
      "descripcion": "Enduido plástico para interiores y exteriores. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "TAIS",
      "categorias": ["Pinturería", "Enduido"],
      "unidadMedida": "litro",
      "presentacion": "1lt y 4lt",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1lt x 6 unid)",
          "monto": 3004.00,
          "notaOferta": "Precio por unidad comprando 6 unidades.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (1lt x 24 unid)",
          "monto": 2693.00,
          "notaOferta": "Precio por unidad comprando 24 unidades.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (4lt)",
          "monto": 7567.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        }
      ],
      "imagen": "9.jpg"
    },
    {
      "id": "PIN004",
      "nombre": "Látex Interior TAIS",
      "descripcion": "Pintura de látex interior.",
      "marca": "TAIS",
      "categorias": ["Pinturería", "Pinturas"],
      "unidadMedida": "litro",
      "presentacion": "1lt, 4lts, 10lts, 20lts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1lts)",
          "monto": 2825.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (4lts)",
          "monto": 8982.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (10lts)",
          "monto": 19961.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (20lts)",
          "monto": 30503.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        }
      ],
      "imagen": "9.jpg"
    },
    {
      "id": "PIN005",
      "nombre": "Fijador TAIS",
      "descripcion": "Fijador de 1 litro.",
      "marca": "TAIS",
      "categorias": ["Pinturería", "Accesorios"],
      "unidadMedida": "litro",
      "presentacion": "1 lts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 2952.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        }
      ],
      "imagen": "9.jpg"
    },
    {
      "id": "PIN006",
      "nombre": "Pincel Blanco Serie 150",
      "descripcion": "Pincel de pintura blanco El Tucán, Serie 150. Descuento extra aplicable en pronto pago y cuenta al día.",
      "marca": "EL TUCÁN",
      "categorias": ["Pinturería", "Herramientas"],
      "unidadMedida": "unidad",
      "presentacion": "Medidas 7 a 30",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Pincel de 7)",
          "monto": 583.42,
          "notaOferta": "5% de descuento comprando docenas surtidas.",
          "descuento": "5% desc."
        }
      ],
      "imagen": "9.jpg"
    },
    {
      "id": "PIN007",
      "nombre": "Mini Funda para Rodillo",
      "descripcion": "Mini funda para rodillo. Descuento extra aplicable en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Pinturería", "Rodillos"],
      "unidadMedida": "unidad",
      "presentacion": "Medidas 5, 8 y 11",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Mini Funda 5)",
          "monto": 455.00,
          "notaOferta": "5% de descuento comprando docenas surtidas.",
          "descuento": "5% desc."
        }
      ],
      "imagen": "10.jpg"
    },
    {
      "id": "PIN008",
      "nombre": "Rodillo Simil Lana",
      "descripcion": "Rodillo de simil lana.",
      "marca": "N/A",
      "categorias": ["Pinturería", "Rodillos"],
      "unidadMedida": "unidad",
      "presentacion": "Lana de 22",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Lana de 22)",
          "monto": 2250.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "10.jpg"
    },
    {
      "id": "PIN009",
      "nombre": "Bandeja Plana para Pintura",
      "descripcion": "Bandeja plana para pintura.",
      "marca": "N/A",
      "categorias": ["Pinturería", "Accesorios"],
      "unidadMedida": "unidad",
      "presentacion": "Plana",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Plana)",
          "monto": 931.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "10.jpg"
    },
    {
      "id": "PIN010",
      "nombre": "Cartón Protector",
      "descripcion": "Cartón protector. Descuento extra aplicable en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Pinturería", "Accesorios"],
      "unidadMedida": "mts",
      "presentacion": "90cm x 20mts",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (4 unidades)",
          "monto": 4575.00,
          "notaOferta": "Precio por unidad comprando 4 unidades.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (6 unidades)",
          "monto": 4428.00,
          "notaOferta": "Precio por unidad comprando 6 unidades.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "11.jpg"
    },
    {
      "id": "BUL001",
      "nombre": "Tornillo Punta Mecha",
      "descripcion": "Tornillo punta mecha para fijación.",
      "marca": "N/A",
      "categorias": ["Bulonería", "Tornillos"],
      "unidadMedida": "unidad",
      "presentacion": "Varias, en caja de 200 unidades",
      "ofertas": true,
      "contenidoBulto": 200,
      "precios": [
        {
          "tipo": "Precio por 200 unid (3/4 x 1/2)",
          "monto": 1244.00,
          "notaOferta": "Precio c/u por caja de 200 unidades.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por 200 unid (3/4 x 3/4)",
          "monto": 1515.00,
          "notaOferta": "Precio c/u por caja de 200 unidades.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por 200 unid (1\" x 1\")",
          "monto": 1972.00,
          "notaOferta": "Precio c/u por caja de 200 unidades.",
          "descuento": "OFF"
        }
      ],
      "imagen": "11.jpg"
    },
    {
      "id": "BUL002",
      "nombre": "Tornillo Drywall",
      "descripcion": "Tornillo Drywall de rosca gruesa.",
      "marca": "N/A",
      "categorias": ["Bulonería", "Tornillos"],
      "unidadMedida": "unidad",
      "presentacion": "Varias, en caja de 300 unidades",
      "ofertas": true,
      "contenidoBulto": 300,
      "precios": [
        {
          "tipo": "Precio por 300 unid (5/8)",
          "monto": 703.00,
          "notaOferta": "Precio c/u por caja de 300 unidades.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por 300 unid (3/4)",
          "monto": 773.00,
          "notaOferta": "Precio c/u por caja de 300 unidades.",
          "descuento": "OFF"
        }
      ],
      "imagen": "11.jpg"
    },
    {
      "id": "BUL003",
      "nombre": "Tornillo Fix Rosca Gruesa",
      "descripcion": "Tornillo Fix de rosca gruesa.",
      "marca": "N/A",
      "categorias": ["Bulonería", "Tornillos"],
      "unidadMedida": "unidad",
      "presentacion": "Varias, en caja de 200 unidades",
      "ofertas": true,
      "contenidoBulto": 200,
      "precios": [
        {
          "tipo": "Precio por 200 unid (4x35)",
          "monto": 1424.00,
          "notaOferta": "Precio c/u por caja de 200 unidades.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por 200 unid (5x50)",
          "monto": 3010.00,
          "notaOferta": "Precio c/u por caja de 200 unidades.",
          "descuento": "OFF"
        }
      ],
      "imagen": "12.jpg"
    },
    {
      "id": "BUL004",
      "nombre": "Tarugo Estándar",
      "descripcion": "Tarugo estándar de 8mm y 10mm. Paquetes por 300 unidades.",
      "marca": "N/A",
      "categorias": ["Bulonería", "Tarugos"],
      "unidadMedida": "unidad",
      "presentacion": "8mm, 10mm",
      "ofertas": true,
      "contenidoBulto": 300,
      "precios": [
        {
          "tipo": "Precio por 300 unid (8mm)",
          "monto": 1073.00,
          "notaOferta": "Precio c/u por paquete de 300 unidades. 10mm y tope tope por 250 unid.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por 300 unid (10mm)",
          "monto": 2045.00,
          "notaOferta": "Precio c/u por paquete de 300 unidades. 10mm y tope tope por 250 unid.",
          "descuento": "OFF"
        }
      ],
      "imagen": "12.jpg"
    },
    {
      "id": "HER005",
      "nombre": "Disco de Corte",
      "descripcion": "Disco de corte para acero inoxidable.",
      "marca": "DOGO",
      "categorias": ["Herramientas", "Discos"],
      "unidadMedida": "unidad",
      "presentacion": "115 x 1mm, caja de 50 unidades",
      "ofertas": true,
      "contenidoBulto": 50,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 431.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "12.jpg"
    },
    {
      "id": "HER006",
      "nombre": "Caja de Herramientas Plástica",
      "descripcion": "Caja plástica de herramientas con bandeja.",
      "marca": "TOOL-PACK",
      "categorias": ["Herramientas", "Cajas"],
      "unidadMedida": "unidad",
      "presentacion": "13\", 16\" y 19\"",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (13\")",
          "monto": 6246.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (16\")",
          "monto": 7731.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (19\")",
          "monto": 9128.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "13.jpg"
    },
    {
      "id": "HER007",
      "nombre": "Rueda para Carretilla/Hormigonera",
      "descripcion": "Rueda plástica, soporta 150kg.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Ruedas"],
      "unidadMedida": "unidad",
      "presentacion": "Carretilla y Hormigonera",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Carretilla)",
          "monto": 5625.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Hormigonera)",
          "monto": 4160.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "13.jpg"
    },
    {
      "id": "HER008",
      "nombre": "Zaranda",
      "descripcion": "Zaranda con marco de madera.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "50 x 35cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 4250.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "13.jpg"
    },
    {
      "id": "HER009",
      "nombre": "Fratacho",
      "descripcion": "Fratacho de madera.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "Pino 30cm y Algarrobo 30cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Pino 30cm)",
          "monto": 965.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Algarrobo 30cm)",
          "monto": 2729.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "13.jpg"
    },
    {
      "id": "HER010",
      "nombre": "Fratacho Plástico",
      "descripcion": "Fratacho plástico.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "Fino, Mediano y Grueso",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 1625.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "14.jpg"
    },
    {
      "id": "HER011",
      "nombre": "Balde Albañil",
      "descripcion": "Balde albañil con manija inyectada ultra resistente. Solo por docena. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "12 y 36 unidades",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (12 unid)",
          "monto": 1340.00,
          "notaOferta": "Precio por unidad comprando 12 unidades. Consultar precio a partir de 60 docenas.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (36 unid)",
          "monto": 1299.00,
          "notaOferta": "Precio por unidad comprando 36 unidades. Consultar precio a partir de 60 docenas.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "14.jpg"
    },
    {
      "id": "HER012",
      "nombre": "Llana Dentada",
      "descripcion": "Llana dentada con manija plástica. 10% de descuento por caja cerrada de 6 unidades. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Herramientas", "Albañilería"],
      "unidadMedida": "unidad",
      "presentacion": "6mm, 8mm y 10mm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 3107.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "10% / Dsto Extra"
        }
      ],
      "imagen": "14.jpg"
    },
    {
      "id": "PEG001",
      "nombre": "Cola Vinílica Congo",
      "descripcion": "Cola vinílica. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "CONGO",
      "categorias": ["Pegamentos", "Cola Vinílica"],
      "unidadMedida": "gramos",
      "presentacion": "40g, 110g, 225g y 500g",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (40g)",
          "monto": 717.19,
          "notaOferta": "Precio por unidad.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (500g)",
          "monto": 2317.09,
          "notaOferta": "Precio por unidad.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "15.jpg"
    },
    {
      "id": "PEG002",
      "nombre": "Cemento de Contacto Congo",
      "descripcion": "Cemento de contacto. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "CONGO",
      "categorias": ["Pegamentos", "Adhesivos"],
      "unidadMedida": "gramos/ml",
      "presentacion": "250g, 450g, 750g y 40ML",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (250g)",
          "monto": 2758.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (40ML)",
          "monto": 1765.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "15.jpg"
    },
    {
      "id": "FER002",
      "nombre": "Grasa Litio",
      "descripcion": "Grasa de Litio.",
      "marca": "PNT",
      "categorias": ["Ferretería", "Lubricantes"],
      "unidadMedida": "gramos/kg",
      "presentacion": "100g, 250g, 500g y 1KG",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (100g)",
          "monto": 1310.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (1KG)",
          "monto": 10422.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "15.jpg"
    },
    {
      "id": "SAN008",
      "nombre": "Conexión Flexible Sanitaria",
      "descripcion": "Conexión sanitaria flexible Bonomini.",
      "marca": "bonomini",
      "categorias": ["Sanitario", "Conexiones"],
      "unidadMedida": "unidad",
      "presentacion": "50-40 Blanco y Plata",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Blanco)",
          "monto": 812.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Plata)",
          "monto": 1043.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "16.jpg"
    },
    {
      "id": "SAN009",
      "nombre": "Depósito de Inodoro Colgar",
      "descripcion": "Depósito de 12 litros para inodoro de colgar, marca Bahco.",
      "marca": "BAHCO",
      "categorias": ["Sanitario", "Inodoros"],
      "unidadMedida": "unidad",
      "presentacion": "12 LTS",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 21875.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "16.jpg"
    },
    {
      "id": "SAN010",
      "nombre": "Bacha Lavatorio",
      "descripcion": "Bacha para lavatorio.",
      "marca": "N/A",
      "categorias": ["Sanitario", "Bachas"],
      "unidadMedida": "unidad",
      "presentacion": "43.5 x 37.5 x 14cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 6875.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "16.jpg"
    },
    {
      "id": "SAN011",
      "nombre": "Bacha Lavadero",
      "descripcion": "Bacha para lavadero.",
      "marca": "N/A",
      "categorias": ["Sanitario", "Bachas"],
      "unidadMedida": "unidad",
      "presentacion": "46 x 42.5 x 21cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 11999.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "16.jpg"
    },
    {
      "id": "SAN012",
      "nombre": "Calefón Termoeléctrico Vintal",
      "descripcion": "Calefón termoeléctrico.",
      "marca": "VINTAL",
      "categorias": ["Sanitario", "Calefones"],
      "unidadMedida": "litros",
      "presentacion": "Plástico 20LTS, Loza 20LTS, Acero 20LTS",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (Plástico 20LTS)",
          "monto": 6854.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Loza 20LTS)",
          "monto": 19057.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (Acero 20LTS)",
          "monto": 24615.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "17.jpg"
    },
    {
      "id": "ELE004",
      "nombre": "Caja de Hierro",
      "descripcion": "Caja de hierro de 10x5.",
      "marca": "N/A",
      "categorias": ["Electricidad", "Cajas y Bastidores"],
      "unidadMedida": "unidad",
      "presentacion": "10x5 (Rectangular y Octogonal)",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 258.59,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "17.jpg"
    },
    {
      "id": "GAS002",
      "nombre": "Regulador de Gas",
      "descripcion": "Regulador de gas con conexión macho rosca de 1/2 pulgada. Conexiones de bronce.",
      "marca": "N/A",
      "categorias": ["Gas", "Reguladores"],
      "unidadMedida": "unidad",
      "presentacion": "1MTS y 2MTS",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1MTS)",
          "monto": 6160.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (2MTS)",
          "monto": 6847.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "OFF"
        }
      ],
      "imagen": "17.jpg"
    },
    {
      "id": "GAS003",
      "nombre": "Cartucho Butano Kovea",
      "descripcion": "Cartucho de gas butano. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "KOVEA",
      "categorias": ["Gas", "Combustible"],
      "unidadMedida": "unidad",
      "presentacion": "12 y 28 unidades",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (12 unid)",
          "monto": 2490.00,
          "notaOferta": "Precio por unidad comprando 12 unidades.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (28 unid)",
          "monto": 2430.00,
          "notaOferta": "Precio por unidad comprando 28 unidades.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "18.jpg"
    },
    {
      "id": "HERR001",
      "nombre": "Manija Ministerio Cepillado",
      "descripcion": "Manija (picaporte) Ministerio Cepillado. Descuento extra aplicable solo en pronto pago y cuenta al día.",
      "marca": "N/A",
      "categorias": ["Herrajes", "Manijas"],
      "unidadMedida": "unidad",
      "presentacion": "12 y 24 unidades",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (24 unid)",
          "monto": 2778.00,
          "notaOferta": "Precio c/u comprando 24 unidades.",
          "descuento": "Dsto Extra"
        },
        {
          "tipo": "Precio por Unidad (12 unid)",
          "monto": 2891.00,
          "notaOferta": "Precio c/u comprando 12 unidades.",
          "descuento": "Dsto Extra"
        }
      ],
      "imagen": "18.jpg"
    },
    {
      "id": "HERR002",
      "nombre": "Percha Gancho",
      "descripcion": "Percha gancho para colgar.",
      "marca": "N/A",
      "categorias": ["Herrajes", "Accesorios"],
      "unidadMedida": "unidad",
      "presentacion": "1 y 2 ganchos",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1 Gancho)",
          "monto": 1291.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        },
        {
          "tipo": "Precio por Unidad (2 Ganchos)",
          "monto": 1907.00,
          "notaOferta": "Precio por unidad.",
          "descuento": "N/A"
        }
      ],
      "imagen": "18.jpg"
    },
    {
      "id": "ELE005",
      "nombre": "Caja para Térmica",
      "descripcion": "Caja para térmica.",
      "marca": "N/A",
      "categorias": ["Electricidad", "Cajas y Bastidores"],
      "unidadMedida": "unidad",
      "presentacion": "1-2, 2-4 y 4-8",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad (1-2)",
          "monto": 707.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        },
        {
          "tipo": "Precio por Unidad (4-8)",
          "monto": 2129.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "18.jpg"
    },
    {
      "id": "GAS004",
      "nombre": "Filtro Purificador de Cocina",
      "descripcion": "Filtro purificador de cocina universal F2.",
      "marca": "N/A",
      "categorias": ["Gas", "Filtros"],
      "unidadMedida": "unidad",
      "presentacion": "57x38cm",
      "ofertas": true,
      "precios": [
        {
          "tipo": "Precio por Unidad",
          "monto": 990.00,
          "notaOferta": "Precio c/u.",
          "descuento": "OFF"
        }
      ],
      "imagen": "19.jpg"
    }
  ]
};

// EL JSON DE PRODUCTOS SE MANTIENE AQUÍ, NO LO VOY A REPETIR EN EL EJEMPLO.

document.addEventListener('DOMContentLoaded', () => {
    
    // --- NUEVOS ELEMENTOS DE CONTROL ---
    const searchToggleBtn = document.getElementById('search-toggle');
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    const body = document.body;

    // Función para abrir/cerrar el menú lateral
    const toggleSidebar = () => {
        body.classList.toggle('sidebar-open');
    };

    // Eventos para abrir y cerrar el menú
    if (searchToggleBtn) {
        searchToggleBtn.addEventListener('click', toggleSidebar);
    }
    if (sidebarOverlay) {
        // Cierra el menú al hacer clic en el overlay (la sombra)
        sidebarOverlay.addEventListener('click', toggleSidebar); 
    }
    
    // --- LÓGICA EXISTENTE DE FILTROS Y RENDERIZADO (SE MANTIENE ABAJO) ---
    const productList = document.getElementById('product-list');
    const categoryFiltersContainer = document.getElementById('category-filters');
    const searchInput = document.getElementById('search-input');
    const allProducts = productData.productos;
    let activeCategory = 'Todas';

    // 1. Obtener todas las categorías únicas
    const allCategories = allProducts.flatMap(p => p.categorias);
    const uniqueCategories = ['Todas', ...new Set(allCategories)];

    // 2. Formatear precio para la vista
    const formatPrice = (price) => {
        if (price === 0) return 'Consultar';
        if (price === null || price === undefined) return 'Consultar';
        return `$${price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
    };

    // 3. Función para renderizar una tarjeta de producto
    const createProductCard = (product) => {
        const mainPriceInfo = product.precios[0];
        const mainPrice = mainPriceInfo ? formatPrice(mainPriceInfo.monto) : 'Consultar';
        const priceNote = mainPriceInfo ? mainPriceInfo.notaOferta : '';
        
        const card = document.createElement('div');
        card.classList.add('product-card');
        
        const isOffer = product.ofertas || product.precios.some(p => p.descuento && p.descuento !== 'N/A');

        card.innerHTML = `
            ${isOffer ? '<div class="product-offer">🔥 OFERTA</div>' : ''}
            <div class="product-image-placeholder">
                IMAGEN NO DISPONIBLE <br/> (${product.imagen.replace(/\..*$/, '')})
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.nombre}</h3>
                <p class="product-brand">Marca: ${product.marca && product.marca !== 'N/A' ? product.marca : 'Genérica'}</p>
                <p class="product-description">${product.descripcion.substring(0, 100)}...</p>
                <div class="price-container">
                    <p class="product-price">${mainPrice}</p>
                    <span class="price-detail">${priceNote}</span>
                    <span class="price-detail">Presentación: ${product.presentacion}</span>
                </div>
            </div>
            <button class="add-to-cart-btn">AGREGAR AL CARRITO</button>
        `;
        productList.appendChild(card);
    };

    // 4. Función principal para dibujar los productos filtrados
    const renderProducts = (productsToRender) => {
        productList.innerHTML = ''; 
        if (productsToRender.length === 0) {
            productList.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 20px;">No se encontraron productos con estos criterios.</p>';
            return;
        }
        productsToRender.forEach(createProductCard);
    };

    // 5. Lógica de Filtrado
    const filterProducts = () => {
        const searchTerm = searchInput.value.toLowerCase();
        
        const categoryFiltered = allProducts.filter(product => {
            if (activeCategory === 'Todas') return true;
            return product.categorias.map(c => c.toLowerCase()).includes(activeCategory.toLowerCase());
        });

        const finalFiltered = categoryFiltered.filter(product => {
            const name = product.nombre.toLowerCase();
            const brand = product.marca ? product.marca.toLowerCase() : '';
            const description = product.descripcion.toLowerCase();

            return name.includes(searchTerm) || 
                   brand.includes(searchTerm) || 
                   description.includes(searchTerm);
        });

        renderProducts(finalFiltered);
        
        // Cierra el sidebar después de aplicar el filtro en móvil
        if (body.classList.contains('sidebar-open')) {
             toggleSidebar();
        }
    };

    // 6. Generar Filtros de Categoría en el Sidebar
    const createCategoryFilters = () => {
        uniqueCategories.forEach(category => {
            const isChecked = category === 'Todas';
            const label = document.createElement('label');
            label.innerHTML = `
                <input type="radio" name="category" value="${category}" ${isChecked ? 'checked' : ''}>
                ${category}
            `;
            categoryFiltersContainer.appendChild(label);
        });

        // Manejar el cambio de categoría
        categoryFiltersContainer.addEventListener('change', (e) => {
            if (e.target.name === 'category') {
                activeCategory = e.target.value;
                filterProducts();
            }
        });
    };

    // 7. Event Listener para el buscador
    searchInput.addEventListener('input', filterProducts);

    // Inicializar la página
    createCategoryFilters();
    renderProducts(allProducts);
});