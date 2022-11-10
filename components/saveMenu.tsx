import InputField from "./inputField";
import Interface from "./interface";
import Button from "./button";

export default function SaveMenu(props: { setVisible: any, content: any, setContent: any, data: any, width: number, height: number }) {

    const downloadLevelFile = (e: any) => {
        e.preventDefault();
        const input = document.getElementById('filename') as HTMLInputElement;
        const fileName = input.value;
        props.setContent(fileName);
        if(fileName) {
            let datastring = '';
            props.data.forEach((b: any) => {
                datastring += b.id;
                datastring += ',';
                if(datastring.split('\n')[datastring.split('\n').length - 1].split(',').length == props.width + 1) datastring += '\n';
            })
            datastring = datastring.replaceAll(',\n', '\n').trim()
            const blob = new Blob([datastring])
            const element = document.createElement("a")
            element.style.display = 'none';
            element.href = URL.createObjectURL(blob);
            element.download = fileName.replaceAll(' ', '_').toLowerCase();
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }
    }

    const downloadJSONFile = (e: any) => {
        e.preventDefault();
        const input = document.getElementById('filename') as HTMLInputElement;
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
            document.body.removeChild(element);
        }
    }

    return (
        <Interface label='That time someone downloaded the level files' setVisible={props.setVisible}>
            <InputField id="filename" label="Dateiname" defaultValue={props.content || "level"} setContent={props.setContent} forceContent={true} />
            <Button text="Level Datei herunterladen" onClick={downloadLevelFile} fillColumn={true} />
            <Button text="JSON Datei herunterladen" onClick={downloadJSONFile} fillColumn={true} />
        </Interface>
    )
}