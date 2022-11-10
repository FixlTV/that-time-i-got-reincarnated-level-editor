import style from "../styles/inputField.module.css"

export default function InputField(props: { label: string, placeholder?: string, defaultValue?: string, onSubmit?: any, submitButtonText?: string, setContent?: any, id: string, forceContent?: boolean }) {

    const onChange = (e: any) => {
        if(props.setContent && !props.forceContent) props.setContent(e.target.value);
        else if(props.setContent && props.forceContent) {
            if(!e.target.value) e.target.parentElement.classList.add(style.error)
            else {
                e.target.parentElement.classList.remove(style.error)
                props.setContent(e.target.value);
            }
        } else if(!props.setContent && props.forceContent) {
            if(!e.target.value) e.target.parentElement.classList.add(style.error)
            else e.target.parentElement.classList.remove(style.error)
        }
    }

    return (
        <>
            <div className={style.container}>
                <label className={style.label} htmlFor={props.label}>{props.label}</label>
                <form onSubmit={props.onSubmit} className={style.form}>
                    <input 
                        id={props.id}
                        className={style.input} 
                        type="text" 
                        placeholder={props.placeholder} 
                        defaultValue={props.defaultValue} 
                        autoComplete="off" autoCorrect="off" autoCapitalize="off" spellCheck="false" 
                        onChange={onChange} 
                    />
                    {props.onSubmit ? <button className={style.submitButton} type="submit">{props.submitButtonText || 'Speichern'}</button> : '' }
                </form>
            </div>
        </>
    )
}