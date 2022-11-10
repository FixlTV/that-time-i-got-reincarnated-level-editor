import style from "../styles/button.css"

export default function Button(props: { onClick: any, fillColumn?: boolean, text: string }) {


    return (
        <div className={`${style.button} ${fillWidth ? style.fullWidth : ''}`} onClick={onClick}>
            {text}
        </div>
    )
}