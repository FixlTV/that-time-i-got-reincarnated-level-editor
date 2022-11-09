import style from "../styles/title.module.css";

export default function Title({ _ref }: { _ref: any }) {
    return (
        <div className={style.container} ref={_ref}>
            <h2 className={style.text}>That time I got reincarnated as Jürgen and nearly found the pizza, so someone created another level</h2>
        </div>
    )
}