import { useState, type ReactNode } from "react"
import type { View } from "../../interfaces/views.type"
import style from './viewport.module.css'

export function Viewport ({children}: {children: ReactNode}){
    const [isIsometric, setIsIsometric] = useState<View>('isometric')
    

    return (
        <>
            <div className={style.overflowHidden}>
            <div className={style.viewport} data-isometric={isIsometric}>
                {children}
                <div className={`${style.axis} ${style.axisY}`} data-isometric={isIsometric}></div>
                <div className={`${style.axis} ${style.axisX}`} data-isometric={isIsometric}></div>
                <div className={`${style.axis} ${style.axisZ}`} data-isometric={isIsometric}></div>
                <div className={style.grid}  data-isometric={isIsometric}></div>
            </div>
            <div className={style.backgroundGrid}  data-isometric={isIsometric}></div>
            </div>
                <div className="views-container">
                <button id="change-view" onClick={() => setIsIsometric('isometric')}>Isometric view</button>
                <button id="change-view" onClick={() => setIsIsometric('front')}>Front View</button>
                <button id="change-view" onClick={() => setIsIsometric('zenithal')}>Zenithal View</button>
                <button id="change-view" onClick={() => setIsIsometric('side')}>Side View</button>
            </div>
        </>
    )
}