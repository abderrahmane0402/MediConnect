import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { DropzoneProps, useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Input } from "./ui/input";

interface FileWithPreview extends File {
    preview: string;
  }
  interface DropzonePropss {
    className: string;
  }
  const Dropzone: React.FC<DropzonePropss & { onFileUpload: (file: File) => void }> = ({ className, onFileUpload }: DropzonePropss & { onFileUpload: (file: File) => void }) => {

    const [files, setFiles] = useState<FileWithPreview[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
      if (acceptedFiles?.length) {
        setFiles((previousFiles: FileWithPreview[]) => [
          ...previousFiles,
          ...acceptedFiles.map((file) =>
            Object.assign(file, { preview: URL.createObjectURL(file) })
          ),
          
        ]);
        onFileUpload(acceptedFiles[0]);
      }
    }, [onFileUpload]);
   
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxFiles:1,
    maxSize: 1024 * 1000,
    onDrop,
  });


  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };
  return (
    //@ts-ignore
      <div className="flex flex-row items-center justify-center gap-10 ">
        <div className=" w-full ">
          <div
            {...getRootProps({
              className: className,
            })}
          >
            <Input {...getInputProps()} />
            <div className="flex flex-col items-center justify-center gap-4">
              <ArrowUpTrayIcon className="w-full h-5 fill-current" />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <p>Drag & drop files here, or click to select files</p>
              )}
            </div>
          </div>
        </div>
      {/* Preview */}
      <div className="flex flex-row items-center justify-center w-full md:w-1/3"></div>
        <div className="flex mt-6 w-[50%] gap-10 items-start">
          {files.map((file) => (
            <div key={file.name} className="relative h-32 rounded-md shadow-lg">
              <Image
                src={file.preview}
                alt={file.name}
                width={100}
                height={100}
                onLoad={() => {
                  URL.revokeObjectURL(file.preview);
                }}
                className="h-full w-full object-contain rounded-md"
              />
              <button
                type="button"
                className="w-7 h-7 border border-secondary-400 bg-secondary-400 bg-red-600 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
                onClick={() => removeFile(file.name)}
              >
                <XMarkIcon className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
              </button>
              <div className="flex w-full">
              <p className="mt-2 text-neutral-500 text-[12px] font-medium">
                {file.name}
              </p>
              </div>
            </div>
          ))}
        </div>
      
      </div>
  );
};

export default Dropzone;
