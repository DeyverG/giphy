import { MutableRefObject, useEffect, useState } from "react";


export default function useNearScreen(elementRef: MutableRefObject<HTMLDivElement>, margin = 80) {
    //Bandera para mostrar el componente o etiqueta cuando el Observer sea intersectado
    const [show, setShow] = useState(false);

    // Funcion que espera mientras se hace scroll hasta tener una diferencia de
    // 20px es cuando observa y coloca el show en true y realiza la peticion
    useEffect(() => {
        const onChange = (entries: IntersectionObserverEntry[]) => {
            const el: IntersectionObserverEntry = entries[0];
            if (el.isIntersecting) {
                setShow(true)
                //Luego de que la seccion se visualice cerramos el Observer para que no se ejecute mas
                observer.disconnect();
            }

        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: `${margin}px`
        })

        observer.observe(elementRef.current as Element);

        // Se hace para limpiar el evento.
        return () => observer.disconnect();
    })
    return show;
}