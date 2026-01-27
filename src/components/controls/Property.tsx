import type { ObjectProperty } from "../../stores/sceneNode.interface";
import { useScene } from "../../stores/sceneStore";

export function Property({item, updateValue}: {item: ObjectProperty, updateValue: (id: string, value: number) => void}){
    // const {updateSingleProperty} = useScene((state) => state)
    
    if(item.type === 'number')
    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                <input type="number" name="" id={item.id} value={item.value} onChange={(e: any) => updateValue(item.id, e.target.value)}/>
                {/* <input type="number" name="" id={item.id} value={item.value}/> */}
            </div>
    )

    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                {/* <input type="range" name="" id={item.id} value={item.value} min="0" max="360"/> */}
                <input type="range" name="" id={item.id} value={item.value} min="0" max="360" onChange={(e: any) => updateValue(item.id, e.target.value)}/>
            </div>
    )
}