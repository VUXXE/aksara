"use client";

import React from "react";
import Image from "next/image";
import { File, X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface FileUploadProps {
    endpoint: "agencyLogo" | "avatar" | "subaccountLogo" | "media";
    onChange: (url?: string) => void;
    value: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
    endpoint,
    onChange,
    value,
}) => {
    const fileFormat = value?.split(".").pop();
    const [inputValue, setInputValue] = React.useState(value || "");

    const handleManualSubmit = () => {
        if (inputValue) {
            onChange(inputValue);
        }
    };

    if (value) {
        return (
            <div className="flex flex-col justify-center items-center gap-2">
                {fileFormat !== "pdf" ? (
                    <div className="relative w-40 h-40">
                        <Image
                            src={value}
                            className="object-contain"
                            fill
                            alt="Uploaded image"
                        />
                    </div>
                ) : (
                    <div className="relative flex items-center p-2 mt-2 rounded-md bg-background/10">
                        <File aria-hidden />
                        <a
                            href={value}
                            target="_blank"
                            rel="noopener_noreffer"
                            className="ml-2 text-sm text-indigo-500 dark:text-indigo-400 hover:underline"
                        >
                            View PDF
                        </a>
                    </div>
                )}
                <Button onClick={() => onChange("")} variant="ghost" type="button" className="flex items-center gap-2">
                    <X aria-hidden className="h-4 w-4" />
                    Remove Image
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full bg-muted/30 rounded-md border border-dashed p-4 flex flex-col items-center gap-4">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
                <Upload className="w-8 h-8" />
                <span className="text-sm">Upload functionality coming soon</span>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input
                    type="text"
                    placeholder="Or enter image URL"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <Button type="button" onClick={handleManualSubmit}>Set</Button>
            </div>
        </div>
    );
};

export default FileUpload;
