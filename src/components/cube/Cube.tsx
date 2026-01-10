import { useElement } from "../../stores/elementStore";
import style from './cube.module.css'

export function Cube() {
    const properties = useElement((state) => state.properties)
    
    return (
        <>
            <div 
                className={style.cube} 
                style={{
                    "--transform": properties.map(property => `${property.id}(${property.value}${property.type === 'number' ? 'px' : 'deg'})`).join(' '),
                    } as React.CSSProperties}
                >
                <div className={`${style.side} ${style.sideA}`}></div>
                <div className={`${style.side} ${style.sideB}`}></div>
                <div className={`${style.side} ${style.sideC}`}></div>
                <div className={`${style.side} ${style.sideD}`}></div>
                <div className={`${style.side} ${style.sideE}`}></div>
                <div className={`${style.side} ${style.sideF}`}></div>
            </div>
        </>
    )
}