import style from "../styles/button.module.css"

export default function Button(props: { onClick: any, fillColumn?: boolean, text: string }) {


    return (
        <div className={`${style.button} ${props.fillWidth ? style.fullWidth : ''}`} onClick={onClick}>
            {text}
        </div>
    )
}