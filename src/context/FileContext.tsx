import { createContext } from 'react';
import { useState, ReactNode } from 'react';

export interface FileContextProps {
    filePath: string;
    setFilePath: (path: string) => void;
}

export const FileContext = createContext<FileContextProps>({
    filePath: '',
    setFilePath: () => { /* default no-op function */ },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [fileName, setFileName] = useState('');

    const setFilePath = (path: string) => {
        setFileName(path);
    }

    // The value object contains the current state and the function to update it
    const value = {
        filePath: fileName,
        setFilePath,
    };

    return (
        <FileContext.Provider value={value}>
            {children}
        </FileContext.Provider>
    );
};