import { type ReactNode } from "react"
import style from './viewport.module.css'
import { viewStore } from "../../stores/viewStore"

export function Viewport ({children}: {children: ReactNode}){  
    const { view} = viewStore();

    return (
        <>
            <div className={style.overflowHidden}>
                <div className={style.viewport} data-isometric={view}>
                    {children}
                    <div className={`${style.axis} ${style.axisY}`} data-isometric={view}></div>
                    <div className={`${style.axis} ${style.axisX}`} data-isometric={view}></div>
                    <div className={`${style.axis} ${style.axisZ}`} data-isometric={view}></div>
                    <div className={style.grid}  data-isometric={view}></div>
                </div>
                <div className={style.backgroundGrid}  data-isometric={view}></div>
            </div>
        </>
    )
}