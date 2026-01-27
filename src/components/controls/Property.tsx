import { useElement, type ObjectProperty } from "../../stores/elementStore";

export function Property({item}: {item: ObjectProperty}){
    const {updateSingleProperty} = useElement((state) => state)
    
    if(item.type === 'number')
    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                <input type="number" name="" id={item.id} value={item.value} onChange={(e: any) => updateSingleProperty(e.target.value, item.id)}/>
            </div>
    )

    return (
            <div className="range-input">
                <label htmlFor={item.id}>{item.id}</label>
                <input type="range" name="" id={item.id} value={item.value} min="0" max="360" onChange={(e: any) => updateSingleProperty(e.target.value, item.id)}/>
            </div>
    )
}