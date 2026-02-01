import { useEffect, useState } from "react";
import type { ObjectProperty } from "../../stores/sceneNode.interface";

export function Property({item, updateValue}: {item: ObjectProperty, updateValue: (id: string, value: number) => void}){
    const [value, setValue] = useState<number>(item.value)

    useEffect(() => {
        setValue(item.value)
    }, [item.value])
    
    // TODO: USAR DEBOUNCE EN LUGAR DE ONBLUR, ASI NO HAY QUE CLICAR FUERA PARA ACTUALIZARLO Y TAMPOCO ACTUALIAMOS MAS DE LO NECESARIO

    if(item.type === 'number')
    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                <input type="number" name="" id={item.id} value={value} onChange={(e: any) => setValue(e.target.value)} onBlur={() => updateValue(item.id, value)}/>
            </div>
    )

    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                <input type="range" name="" id={item.id} value={value} min="0" max="360" onChange={(e: any) => setValue(e.target.value)} onBlur={() => updateValue(item.id, value)}/>
            </div>
    )
}