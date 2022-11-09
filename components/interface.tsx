import style from "../styles/interface.module.css";

export default function Interface(props: { label: string, [key: string]: any, setVisible: any, submitButtonText?: string }) {

    const close = (e: any) => {
        document.getElementById(`interface-${props.label.replaceAll(' ', '-')}`)?.classList.add(style.interfaceHidden)
        setTimeout(() => {
            props.setVisible(false);
        }, 100)
    }

    return (
        <div className={style.container}>
            <div className={style.interfaceContainer} id={`interface-${props.label.replaceAll(' ', '-')}`}>
                <div className={style.interface}>
                    <h2 className={style.label}>{props.label}</h2>
                    <div className={style.close} onClick={close}>
                        <img draggable="false" src="/images/close.png" alt="close" width={20} height={20} />
                    </div>
                    {props.children}
                </div>
                <div className={style.bottomBar}>
                    <div className={style.submitButton} onClick={close}>{props.submitButtonText || 'Schließen'}</div>
                </div>
            </div>
        </div>
    )
}