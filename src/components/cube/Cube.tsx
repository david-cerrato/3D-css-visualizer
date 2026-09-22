import { viewStore } from '../../stores/viewStore'
import style from './cube.module.css'

export function Cube() {
    const {selectView} = viewStore()
    
    return (
        <>
            <div 
                className={style.cube} 
                style={{
                    "--radius": "15px"
                    } as React.CSSProperties}
                    onClick={()=> selectView('isometric')}
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