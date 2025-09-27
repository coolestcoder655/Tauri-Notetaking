import { useState } from "react";
import File from "../components/File";

const BrowseFiles: React.FC = () => {
    const [files, setFiles] = useState([
        "File1.txt",
        "File2.txt",
        "Document.pdf",
        "Image.png",
        "Notes.docx",
    ]);

    const handleFileClick = (fileName: string) => {
        console.log(`File clicked: ${fileName}`);
    };

    return (
        <div>
            <div id="header" className="bg-white m-4">
                <h1 className="text-2xl font-semibold">Memo</h1>
                <p className="text-sm text-gray-500">Simple note taking app based on Tauri.</p>
            </div>
            <hr className="my-4 border-gray-300" />
            <div className="grid grid-cols-1 p-2 m-2 gap-4">
                {files.map((file, index) => (
                    <File key={index} fileName={file} onClick={() => handleFileClick(file)} onOptionsClick={() => handleFileClick(file)} />
                ))}
            </div>

            {/* Credits */}
            <div className="text-center text-xs text-gray-400 my-4">
                <p>Made with ❤️ by Maaz</p>
            </div>
        </div>
    );
};

export default BrowseFiles;