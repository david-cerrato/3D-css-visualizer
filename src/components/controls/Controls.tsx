import { useElement } from "../../stores/elementStore"

export function Controls() {
    const {object, update} = useElement((state) => state)

    return (
        <>
        <div className="controls">
        <div className="range-input">
          <label htmlFor="translateX">Translate X</label>
          <input type="number" name="" id="translateX" value={object.translateX} onChange={(e: any) => update({...object, translateX: e.target.value})}/>
        </div>
        <div className="range-input">
          <label htmlFor="translateY">Translate Y</label>
          <input type="number" name="" id="translateY" value={object.translateY} onChange={(e: any) => update({...object, translateY: e.target.value})}/>
        </div>
        <div className="range-input">
          <label htmlFor="translateZ">Translate Z</label>
          <input type="number" name="" id="translateZ" value={object.translateZ} onChange={(e: any) => update({...object, translateZ: e.target.value})}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateX">Rotate X</label>
          <input type="range" name="" id="rotateX" min="0" max="360" value={object.rotateX} onChange={(e: any) => update({...object, rotateX: e.target.value})}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateY">Rotate Y</label>
          <input type="range" name="" id="rotateY" min="0" max="360" value={object.rotateY} onChange={(e: any) => update({...object, rotateY: e.target.value})}/>
        </div>
        <div className="range-input">
          <label htmlFor="rotateZ">Rotate Z</label>
          <input type="range" name="" id="rotateZ" min="0" max="360" value={object.rotateZ} onChange={(e: any) => update({...object, rotateZ: e.target.value})}/>
        </div>
      </div>
        </>
    )
}