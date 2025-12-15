import { useElement } from "../../stores/elementStore";

export function Cube() {
    const object = useElement((state) => state.object)
    
    return (
        <>
            <div 
                className="cube" 
                style={{
                    "--translateX": `${object.translateX}px`,
                    "--translateY": `${object.translateY}px`,
                    "--translateZ": `${object.translateZ}px`,
                    "--rotateX": `${object.rotateX}deg`,
                    "--rotateY": `${object.rotateY}deg`,
                    "--rotateZ": `${object.rotateZ}deg`
                    } as React.CSSProperties}
                >
                <div className="side side-A"></div>
                <div className="side side-B"></div>
                <div className="side side-C"></div>
                <div className="side side-D"></div>
                <div className="side side-E"></div>
                <div className="side side-F"></div>
            </div>
        </>
    )
}