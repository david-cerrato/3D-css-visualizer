interface CubeProps {
    translateX: number
    translateY: number
    translateZ: number
    rotateX: number
    rotateY: number
    rotateZ: number
}

export function Cube({translateX, translateY, translateZ, rotateX, rotateY, rotateZ}: CubeProps) {
    return (
        <>
            <div 
                className="cube" 
                style={{
                    "--translateX": `${translateX}px`,
                    "--translateY": `${translateY}px`,
                    "--translateZ": `${translateZ}px`,
                    "--rotateX": `${rotateX}deg`,
                    "--rotateY": `${rotateY}deg`,
                    "--rotateZ": `${rotateZ}deg`
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