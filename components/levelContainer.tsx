import { useEffect, useState } from "react";
import Block from "./block";
import style from "../styles/levelContainer.module.css";
import { useMeasure } from "react-use";

export default function LevelContainer({ height, width, data, setData, y, selectedId, setSelectedId }: { height: number, width: number, data: { id: string, x: number, y: number }[], setData: (data: { id: string, x: number, y: number }[]) => void, y: number, selectedId: string, setSelectedId: (id: string) => string }) { //@ts-ignore
    const [centered, setCentered] = useState(true);
    const [ ref, { width: clientWidth } ] = useMeasure();

    useEffect(() => {
        if(clientWidth > window.innerWidth) {
            setCentered(false);
        } else {
            setCentered(true);
        }
    })

    return (
        <div className={style.container + ` ${centered ? style.centered : ''}`} style={{paddingTop: `${y}px`}}> {/*@ts-ignore*/}
            <div className={style['level-container']} style={{minHeight: `${height * 50}px`, minWidth: `${width * 50}px`}} ref={ref}>
                {
                    data.map((block) => {
                        return <Block id={block.id} x={block.x} y={block.y} selectedId={selectedId} setSelectedId={setSelectedId} data={data} setData={setData} />
                    })
                }
            </div>
        </div>
    )
}