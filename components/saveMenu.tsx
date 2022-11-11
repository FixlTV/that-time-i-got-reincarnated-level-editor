import InputField from "./inputField";
import Interface from "./interface";
import Button from "./button";

export default function SaveMenu(props: { setVisible: any, content: any, setContent: any, data: any, width: number, height: number }) {

    const loadImage = (path: string) => {
        return new Promise((resolve) => {
            let img = new Image()
            img.onload = () => {
                resolve(img)
            }
            img.src = path
        })
    }

    const downloadLevelFile = (e: any) => {
        e.preventDefault();
        let fileName = props.content
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
        const fileName = props.content;
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

    const downloadImage = async (e: any) => {
        e.preventDefault();
        const fileName = props.content;
        if(fileName) {
            let images: any[] = [];
            props.data.forEach((b: any) => !images.includes(`images/${b.id}.png`) ? images.push(`images/${b.id}.png`) : undefined)
            let imageData: any = {};
            await Promise.all(images.map(async (image) => { !imageData[image.split('/')[1].split('.')[0]] ? imageData[image.split('/')[1].split('.')[0]] = await loadImage(image) : undefined }))
            let canvas = document.createElement('canvas');

            canvas.height = props.height * 50;
            canvas.width = props.width * 50;

            let ctx = canvas.getContext('2d');
            if(ctx == null) return;
            ctx.imageSmoothingEnabled = false;
            props.data.forEach((b: any) => { //@ts-ignore
                ctx.drawImage(imageData[b.id], (b.x) * 50, (b.y) * 50, 50, 50)
            })
            canvas.toBlob((blob) => {
                if(blob == null) return;
                const element = document.createElement("a")
                element.style.display = 'none';
                element.href = URL.createObjectURL(blob);
                element.download = `${fileName.replaceAll(' ', '_').toLowerCase()}.png`;
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
            }, 'image/png')
        }
    }

    return (
        <Interface label='That time someone downloaded the level files' setVisible={props.setVisible}>
            <InputField id="filename" label="Dateiname" defaultValue={props.content || "level"} setContent={props.setContent} forceContent={true} />
            <Button text="Level Datei herunterladen" onClick={downloadLevelFile} fillColumn={true} />
            <Button text="JSON Datei herunterladen" onClick={downloadJSONFile} fillColumn={true} />
            <Button text="Level Bild herunterladen" onClick={downloadImage} fillColumn={true} />
        </Interface>
    )
}