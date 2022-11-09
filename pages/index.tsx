import LevelContainer from '../components/levelContainer'
import Title from '../components/title'
import { useEffect, useState } from 'react'
import { useMeasure } from 'react-use'
import BlockPicker from '../components/blockPicker'
import Block from '../components/block'
import SaveMenu from '../components/saveMenu'
import style from '../styles/Home.module.css'

export default function Home() {
    const [height, setHeight] = useState(15);
    const [width, setWidth] = useState(25);
    const [selectedId, setSelectedId]: any[] = useState('1');
    const [data, setData]: [{ id: string, x: number, y: number }[], (data: { id: string, x: number, y: number }[]) => void] = useState(
        (() => {
            const arr = [];
            for (let y = 0; y < height; y++) {
                for (let x = 0; x < width; x++) {
                    arr.push({ id: '0', x, y });
                }
            }
            return arr;
        })()
    );
    const [titleRef, { height: titleHeight }] = useMeasure();
    const [saveInterfaceVisible, setSaveInterfaceVisibility] = useState(true);
    const [fileName, setFileName] = useState('level');

    useEffect(() => {}, [height, width, saveInterfaceVisible]);

    return (
        <>
            <Title _ref={titleRef} />
            <LevelContainer height={height} width={width} data={data} setData={setData} y={titleHeight} selectedId={selectedId} setSelectedId={setSelectedId}/>
            {saveInterfaceVisible ? <SaveMenu setVisible={setSaveInterfaceVisibility} content={fileName} setContent={setFileName} width={width} height={height} data={data} /> : ''}
            <BlockPicker>
                <Block id={'1'} inSelectionBar={true} selectedId={selectedId} setSelectedId={setSelectedId} />
                <Block id={'2'} inSelectionBar={true} selectedId={selectedId} setSelectedId={setSelectedId} />
                <Block id={'3'} inSelectionBar={true} selectedId={selectedId} setSelectedId={setSelectedId} />
                <Block id={'j'} inSelectionBar={true} selectedId={selectedId} setSelectedId={setSelectedId} />
                <Block id={'f'} inSelectionBar={true} selectedId={selectedId} setSelectedId={setSelectedId} />
                <div onClick={(e: any) => {
                    e.preventDefault();
                    setSaveInterfaceVisibility(true);
                }} className={style.downloadButton}>
                    <img src={'/images/download.png'} height="50" draggable="false" alt="download" />
                </div>
            </BlockPicker>
        </>
    )
}
