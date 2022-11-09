import style from "../styles/inputField.module.css"

export default function InputField(props: { label: string, placeholder?: string, defaultValue?: string, onSubmit: any, submitButtonText?: string, setContent?: any }) {

    return (
        <>
            <div className={style.container}>
                <label className={style.label} htmlFor={props.label}>{props.label}</label>
                <form onSubmit={props.onSubmit} className={style.form}>
                    <input 
                        className={style.input} 
                        type="text" 
                        placeholder={props.placeholder} 
                        defaultValue={props.defaultValue} 
                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" 
                        onChange={props.setContent ? (e) => props.setContent(e.target.value) : undefined} 
                    />
                    <button className={style.submitButton} type="submit">{props.submitButtonText || 'Speichern'}</button>
                </form>
            </div>
        </>
    )
}