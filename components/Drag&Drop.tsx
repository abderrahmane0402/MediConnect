import Image from "next/image";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Input } from "./ui/input";

// import Image from "next/image";
// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { Input } from "./ui/input";

interface FileWithPreview extends File {
  preview: string;
  base64: string;
}

interface DropzonePropss {
  className: string;
  onFilesChange: (files: string[]) => void;
}

const Dropzone: React.FC<DropzonePropss> = ({ className, onFilesChange }) => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const toBase64 = (file: File) => 
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = error => reject(error);
    });

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length) {
      const base64Files = await Promise.all(acceptedFiles.map(toBase64));
      setFiles((previousFiles) => [
        ...previousFiles,
        ...acceptedFiles.map((file, index) =>
          Object.assign(file, { preview: URL.createObjectURL(file), base64: base64Files[index] })
        ),
      ]);
      onFilesChange(base64Files);
    }
  }, [onFilesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [],
    },
    maxSize: 1024 * 1000,
    onDrop,
  });

  const removeFile = (name: string) => {
    setFiles((files) => files.filter((file) => file.name !== name));
  };

  return (
    <div className="flex flex-row items-center justify-center gap-5">
      <div className="w-full">
        <div {...getRootProps({ className })}>
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
      <div className="grid grid-flow-row w-full md:w-1/3"></div>
      <div className="flex w-full gap-4 items-start p-4">
        {files.map((file) => (
          <div key={file.name} className="relative h-32 rounded-md shadow-lg">
            <Image
              src={file.preview}
              alt={file.name}
              width={120}
              height={120}
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

// import Image from "next/image";
// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { ArrowUpTrayIcon, XMarkIcon } from "@heroicons/react/24/solid";
// import { Input } from "./ui/input";

// interface FileWithPreview extends File {
//   preview: string;
// }

// interface DropzoneProps {
//   className: string;
//   onFileUpload: (file: string) => void;
// }

// const Dropzone: React.FC<DropzoneProps> = ({ className, onFileUpload }) => {
//   const [files, setFiles] = useState<FileWithPreview[]>([]);

//   const onDrop = useCallback(
//     (acceptedFiles: File[]) => {
//       if (acceptedFiles?.length) {
//         const file = acceptedFiles[0];
//         const reader = new FileReader();
        
//         reader.onloadend = () => {
//           const base64String = reader.result as string;
//           onFileUpload(base64String);
//         };

//         reader.readAsDataURL(file);

//         setFiles((previousFiles) => [
//           ...previousFiles,
//           ...acceptedFiles.map((file) =>
//             Object.assign(file, { preview: URL.createObjectURL(file) })
//           ),
//         ]);
//       }
//     },
//     [onFileUpload]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: {
//       "image/*": [],
//     },
//     maxSize: 1024 * 1000,
//     onDrop,
//   });

//   const removeFile = (name: string) => {
//     setFiles((files) => files.filter((file) => file.name !== name));
//   };

//   return (
//     <div className="flex flex-row items-center justify-center gap-5">
//       <div className="w-full">
//         <div
//           {...getRootProps({
//             className: className,
//           })}
//         >
//           <Input {...getInputProps()} />
//           <div className="flex flex-col items-center justify-center gap-4">
//             <ArrowUpTrayIcon className="w-full h-5 fill-current" />
//             {isDragActive ? (
//               <p>Drop the files here ...</p>
//             ) : (
//               <p>Drag & drop files here, or click to select files</p>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="grid grid-flow-row w-full md:w-1/3"></div>
//       <div className="flex w-full gap-4 items-start p-4">
//         {files.map((file) => (
//           <div key={file.name} className="relative h-32 rounded-md shadow-lg">
//             <Image
//               src={file.preview}
//               alt={file.name}
//               width={120}
//               height={120}
//               onLoad={() => {
//                 URL.revokeObjectURL(file.preview);
//               }}
//               className="h-full w-full object-contain rounded-md"
//             />
//             <button
//               type="button"
//               className="w-7 h-7 border border-secondary-400 bg-secondary-400 bg-red-600 rounded-full flex justify-center items-center absolute -top-3 -right-3 hover:bg-white transition-colors"
//               onClick={() => removeFile(file.name)}
//             >
//               <XMarkIcon className="w-5 h-5 fill-white hover:fill-secondary-400 transition-colors" />
//             </button>
//             <div className="flex w-full">
//               <p className="mt-2 text-neutral-500 text-[12px] font-medium">
//                 {file.name}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Dropzone;
