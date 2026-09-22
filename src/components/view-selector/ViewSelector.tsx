import { viewStore } from '../../stores/viewStore';
import { Cube } from '../cube/Cube';
import style from './viewselector.module.css'

export function ViewSelector(){
    const { view, selectView} = viewStore();
    
    return (
        <>
        <div className={style.viewSelectorContainer}>
            <div className={style.threedViewport} data-isometric={view}>
                <Cube></Cube>
                <div className={`${style.axis} ${style.axisY}`} data-isometric={view} onClick={()=> selectView('zenithal')}>
                    <div className={style.hand} ><span>Y</span></div>
                    <div className={style.arm}></div>
                </div>
                <div className={`${style.axis} ${style.axisX}`} data-isometric={view} onClick={()=> selectView('side')}>
                    <div className={style.hand}><span>X</span></div>
                    <div className={style.arm}></div>
                </div>
                <div className={`${style.axis} ${style.axisZ}`} data-isometric={view} onClick={()=> selectView('front')}>
                    <div className={style.hand}><span>Z</span></div>
                    <div className={style.arm}></div>
                </div>
            </div>
        </div>
        </>
    )
}