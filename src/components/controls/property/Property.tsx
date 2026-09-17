import { useEffect, useState } from "react";
import type { ObjectProperty } from "../../../stores/sceneNode.interface";
import { Slider } from "../slider/Slider";
import styles from './property.module.css'

export function Property({item, updateValue}: {item: ObjectProperty, updateValue: (id: string, value: number) => void}){
    const [value, setValue] = useState<number>(item.value)
    let timer: number | undefined = undefined;

    useEffect(() => {
        setValue(item.value)
    }, [item.value])
    
    // TODO: USAR DEBOUNCE EN LUGAR DE ONBLUR, ASI NO HAY QUE CLICAR FUERA PARA ACTUALIZARLO Y TAMPOCO ACTUALIAMOS MAS DE LO NECESARIO

    if(item.type === 'number')
    return (
            <div className={styles.input_container}>
                <label htmlFor={item.id}>{item.id}</label>
                <input type="number" name="" id={item.id} value={value} onChange={(e: any) => debounceUpdate(e.target.value)}/>
            </div>
    )

    return (
            <div className={styles.input_container}>
                <label htmlFor={item.id}>{item.id}</label>
                <Slider onChange={debounceUpdate} min={0} max={360}/>
            </div>
    )

    function debounceUpdate(value: number) {
        setValue(value)
        updateValue(item.id, value)

        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
        }, 250)
    }
}