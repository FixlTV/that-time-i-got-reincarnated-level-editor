import style from "../styles/blockPicker.module.css";

export default function BlockPicker(props: any) {
    return (
        <div className={style.container}>
            <div className={style['block-picker']}>
                {props.children} 
            </div>
        </div>
    )
}