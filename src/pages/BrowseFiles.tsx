import { useState } from "react";
import { File as FileIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { invoke } from '@tauri-apps/api/core';
import File from "../components/File";

const BrowseFiles: React.FC = () => {
    const [files] = useState([
        "File1.txt",
        "File2.txt",
        "Document.pdf",
        "Image.png",
        "Notes.docx",
    ]);

    const navigate = useNavigate();

    const selectFile = () => {

    };

    const handleFileClick = (fileName: string) => {
        console.log(`File clicked: ${fileName}`);
    };

    return (
        <div>
            <div id="header" className="bg-white m-4 flex items-center justify-between p-4 rounded-lg border border-gray-200 shadow-sm">
                <div>
                    <h1 className="text-2xl font-semibold">Memo</h1>
                    <p className="text-sm text-gray-500">Simple note taking app based on Tauri.</p>
                </div>
                <button className="text-sm bg-blue-500 p-2 rounded-xl font-medium flex flex-row text-white mb-2 justify-self-end">
                    <FileIcon />
                    <span className="ml-2">Browse Files</span>
                </button>
            </div>

            <div className="grid grid-cols-1 p-2 m-2 gap-4">
                {files.map((file, index) => (
                    <File key={index} fileName={file} onClick={() => handleFileClick(file)} onOptionsClick={() => handleFileClick(file)} />
                ))}
            </div>

            {/* Credits */}
            <div className="text-center text-xs text-gray-400 my-4">
                <p>Made with ❤️ by Maaz</p>
            </div>
        </div >
    );
};

export default BrowseFiles;