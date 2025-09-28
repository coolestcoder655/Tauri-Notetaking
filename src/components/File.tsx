import { File as FileIcon, MoreVertical } from 'lucide-react';

interface Props {
    fileName: string;
    onClick: () => void;
    onOptionsClick: () => void;
}

const File: React.FC<Props> = ({ fileName, onClick, onOptionsClick }) => {
    return (
        <div
            className="relative p-4 bg-white border border-gray-200 rounded-lg shadow-sm cursor-pointer transition-all duration-200 hover:shadow-md hover:border-gray-300 group focus:ring-2 focus:ring-blue-500"
            onClick={onClick}
        >
            {/* Header */}
            <div className="flex items-start justify-between">
                <div className="flex items-center gap-2 flex-1 min-w-0">
                    <div className="text-gray-600 flex-shrink-0">
                        <FileIcon className="w-5 h-5" />
                    </div>
                    <h3 className="font-medium text-gray-900 truncate text-sm">
                        {fileName}
                    </h3>
                </div>

                {/* Options button */}
                <button
                    className="p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-100 flex-shrink-0"
                    onClick={(e) => {
                        e.stopPropagation();
                        onOptionsClick();
                    }}
                >
                    <MoreVertical className="w-4 h-4 text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default File;