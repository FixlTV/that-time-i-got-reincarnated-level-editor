import { useEffect } from "react";
import style from "../styles/block.module.css";

export default function Block({ id, x, y, inSelectionBar, selectedId, setSelectedId, data, setData }: { id: string, x?: number, y?: number, inSelectionBar?: boolean, selectedId: string, setSelectedId: (id: string) => string, data?: any, setData?: any }) {
    function onClick(e: React.MouseEvent) {
        if(!inSelectionBar) {
            id == selectedId ? id = '0' : id = selectedId || id;
            if(id == 'f' || id == 'j') {
                setData(data.map((block: any) => {
                    if(block.id == id && (block.x != x || block.y != y)) {
                        block.id = 0;
                    }
                }));
            }
            let thisData = data.find((b: any) => b.x == x && b.y == y);
            thisData.id = id;
            setData([...data]);
            e
        } else {
            setSelectedId(id);
        }
    }

    useEffect(() => {}, [data])

    return (
        <div className={style.block} style={!inSelectionBar ? {position: 'absolute', left: `${(x ||  0) * 50}px`, top: `${(y || 0) * 50}px`} : {}} onClick={onClick}>
            <img src={`/images/${id}.png`} alt="block" draggable="false" className="block" style={{ left: `${(x || 0) * 50}px`, top: `${(y || 0) * 50}px` }} width={50} height={50} />
        </div>
    )
}