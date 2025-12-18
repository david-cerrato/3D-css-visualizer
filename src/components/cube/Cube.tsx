import { useElement } from "../../stores/elementStore";
import style from './cube.module.css'

export function Cube() {
    const object = useElement((state) => state.object)
    
    return (
        <>
            <div 
                className={style.cube} 
                style={{
                    "--translateX": `${object.translateX}px`,
                    "--translateY": `${object.translateY}px`,
                    "--translateZ": `${object.translateZ}px`,
                    "--rotateX": `${object.rotateX}deg`,
                    "--rotateY": `${object.rotateY}deg`,
                    "--rotateZ": `${object.rotateZ}deg`
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