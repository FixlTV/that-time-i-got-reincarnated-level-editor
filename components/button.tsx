import style from "../styles/button.module.css"

export default function Button(props: { onClick: any, fillColumn?: boolean, text: string }) {


    return (
        <div className={`${style.button} ${props.fillColumn ? style.fullWidth : ''}`} onClick={props.onClick}>
            {props.text}
        </div>
    )
}