import InputField from "./inputField";
import Interface from "./interface";

export default function SaveMenu(props: { setVisible: any, content: any, setContent: any, data: any, width: number, height: number }) {

    const save = (e: any) => {
        e.preventDefault();
        const input = e.target[0] as HTMLInputElement;
        const fileName = input.value;
        props.setContent(fileName);
        if(fileName) {
            let blob = new Blob([JSON.stringify({
                name: fileName,
                size_x: props.width,
                size_y: props.height,
                tile_res: 50
            })])
            
            const element = document.createElement("a")
            element.style.display = 'none';
            element.href = URL.createObjectURL(blob);
            element.download = `${fileName.replaceAll(' ', '_').toLowerCase()}.json`;
            document.body.appendChild(element);
            element.click();
            let datastring = '';
            props.data.forEach((b: any) => {
                if(datastring.split('\n')[datastring.split('\n').length - 1].split(' ').length == props.width + 1) datastring += '\n';
                datastring += b.id;
                datastring += ' ';
            })
            datastring = datastring.trim()
            blob = new Blob([datastring])
            element.href = URL.createObjectURL(blob);
            element.download = `${fileName.replaceAll(' ', '_').toLowerCase()}`;
            element.click();
            document.body.removeChild(element);
        }
    }

    return (
        <Interface label='That time someone downloaded the level files' setVisible={props.setVisible}>
            <InputField label="Dateiname" defaultValue={props.content || "level"} onSubmit={save} submitButtonText="Herunterladen" setContent={props.setContent} />
        </Interface>
    )
}