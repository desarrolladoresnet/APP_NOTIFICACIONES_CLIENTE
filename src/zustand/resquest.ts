

export enum Banks {
    bdv = "bdv",
    bancaribe = "bancaribe",
}

export interface RequestParams {
    referencia: string | null,
    fecha: string | null,
    telefono_cliente: string | null,
    id_cliente: string | null,
    pagina: string | null,
}

// Mejoramos la función para construir la URL con parámetros
const setUrlQuerys = (data: RequestParams): string => {
    // Filtramos solo los parámetros que no son nulos
    const validParams = Object.entries(data)
        .filter(([_, value]) => value !== null)
        .map(([key, value]) => `${key}=${encodeURIComponent(String(value))}`)
        .join('&');

    return validParams.length > 0 ? `?${validParams}` : "";
};

// Añadimos tipos de retorno y hacemos la función async
export const ZustandRequest = async (data: RequestParams, bank: Banks): Promise<any> => {
    const url = import.meta.env.VITE_URL || null; // 🔥 usa prefijo VITE_
    const api_key = import.meta.env.VITE_API_KEY || null;

    // console.log(url)
    // console.log(api_key)
    // console.log(bank)

    if (url === null || api_key === null) {
        console.log("Faltan variable de entorno");
        throw Error("Faltan variable de entorno");
    }


    // Incluimos el banco en la URL si es necesario (suponiendo que va como parte de la ruta)
    const bankUrl = `${url}/${bank}`;
    const querys = setUrlQuerys(data);

    const finalUrl = bankUrl + "/notificaciones";

    // console.log("finalUrl",finalUrl)

    let response: Response | null = null;
    // console.log("final url", finalUrl)

    try {
        response = await fetch(finalUrl, {
            method: "GET",
            headers: {
                "X-API-Key": api_key,
                "Content-Type": "application/json"
            },
        });
        // console.log("headers", api_key)
        // console.log("response", response)

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();
        console.log(json)
        return json;
    } catch (error) {
        // Mejoramos el manejo de errores
        console.error("Error en ZustandRequest:", error instanceof Error ? error.message : error);
        throw error; // Re-lanzamos el error para que pueda ser manejado por quien llame a la función
    }
}