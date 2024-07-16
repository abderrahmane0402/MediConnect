"use client"
import { FC } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";

import { FormControl, FormField, FormItem } from "../ui/form";
import { FaTrash } from 'react-icons/fa';
import Dropzone from "../Drag&Drop";

interface FormProps {
  name: string;
  placeholder: string;
  handleFilesChange: (files: string[]) => void;
  selectedFiles: string[];
  onDeleteFile: (index: number) => void;
}

const DrawerScan: FC<FormProps> = ({ name, placeholder, handleFilesChange, selectedFiles, onDeleteFile }) => {

  return (
    <div className="flex p1-2">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" className="bg-[#A9DAED] w-full">
            Ajouter Scan
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="w-full">
            <DrawerHeader>
              <DrawerTitle className="text-center">Enter les scan</DrawerTitle>
              <DrawerClose />
            </DrawerHeader>
            <h1 className="title text-xl font-bold text-center">Upload File</h1>
            <FormField
              name={name}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Dropzone
                      className="p-16 mt-10 border border-neutral-200 w-full"
                      onFilesChange={handleFilesChange}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="mt-4">
              {selectedFiles.length > 0 && (
                <ul className="flex flex-wrap">
                  {selectedFiles.map((file, index) => (
                    <li key={index} className="relative m-2">
                      <img src={file} alt={`Scan ${index}`} className="w-20 h-20 object-cover" />
                      <button
                        className="absolute top-0 right-0 bg-red-600 text-white p-1 rounded-full"
                        onClick={() => onDeleteFile(index)}
                      >
                        <FaTrash />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
          <DrawerFooter>
            <div className="flex flex-col justify-center items-center w-full">
              <DrawerClose asChild>
                <Button variant="outline" className="w-[50%]">
                  Cancel
                </Button>
              </DrawerClose>
              <DrawerClose asChild>
                <Button variant="default" className="bg-green-400 w-[50%] mt-2">
                  Submit
                </Button>
              </DrawerClose>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerScan;
//////////////////////////////
// "use client"
// import { FC, useState } from "react";
// import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
// import { Button } from "../ui/button";
// import Dropzone from "../Drag&Drop";
// import { FormControl, FormField, FormItem } from "../ui/form";

// // import { FC } from "react";
// // import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerTitle, DrawerFooter, DrawerClose } from "./ui/drawer";
// // import { Button } from "./ui/button";
// // import Dropzone from "./Dropzone";
// // import { FormField, FormItem, FormControl } from "./ui/form";

// interface FormProps {
//   name: string;
//   placeholder: string;
// }

// const handleSubmit = (file: string) => {
//   // Handle the file data here, for example, you can upload it to a server.
//   console.log('File uploaded:', file);
// };

// const DrawerScan: FC<FormProps> = ({ name, placeholder }) => {
//   return (
//     <div className="flex p1-2">
//       <Drawer>
//         <DrawerTrigger asChild>
//           <Button variant="outline" className="bg-[#A9DAED] w-full">
//             Ajouter Scan
//           </Button>
//         </DrawerTrigger>
//         <DrawerContent>
//           <div className="w-full">
//             <DrawerHeader>
//               <DrawerTitle className="text-center">Enter les scan</DrawerTitle>
//               <DrawerClose />
//             </DrawerHeader>
//             <h1 className="title text-xl font-bold text-center">Upload File</h1>
//             <FormField
//               name={name}
//               render={({ field }) => (
//                 <FormItem>
//                   <FormControl>
//                     <Dropzone
//                       className="p-16 mt-10 border border-neutral-200 w-full"
//                       onFileUpload={handleSubmit}
//                       {...field}
//                     />
//                   </FormControl>
//                 </FormItem>
//               )}
//             />
//           </div>
//           <DrawerFooter>
//             <div className="flex flex-col justify-center items-center">
//               <Button className="w-[50%]">Submit</Button>
//               <DrawerClose asChild>
//                 <Button variant="outline" className="w-[50%]">
//                   Cancel
//                 </Button>
//               </DrawerClose>
//             </div>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default DrawerScan;


///////////////
// import { FC, useState } from "react";
// import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
// import { Button } from "../ui/button";
// import Dropzone from "../Dr/ag&Drop";
// import { FormControl, FormField, FormItem } from "../ui/form";
// import { Input } from "../ui/input";
// import { XMarkIcon } from "@heroicons/react/24/solid";

// interface FormProps {
//   name: string;
//   placeholder: string;
// }

// interface Scan {
//   name: string;
//   observation: string;
//   data: string; // base64 string
// }

// const DrawerScan: FC<FormProps> = ({ name, placeholder }) => {
//   const [scans, setScans] = useState<Scan[]>([]);
//   const [currentScan, setCurrentScan] = useState<Scan>({
//     name: "",
//     observation: "",
//     data: "",
//   });

//   const handleFileUpload = (file: File) => {
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setCurrentScan((prevScan) => ({
//         ...prevScan,
//         data: reader.result as string,
//       }));
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleAddScan = () => {
//     if (currentScan.name && currentScan.observation && currentScan.data) {
//       setScans((prevScans) => [...prevScans, currentScan]);
//       setCurrentScan({ name: "", observation: "", data: "" });
//     } else {
//       alert("Please fill in all fields and upload a file before adding.");
//     }
//   };

//   const handleSubmit = () => {
//     // Handle the form submission here, e.g., send data to the server
//     console.log("Scans data:", scans);
//   };

//   return (
//     <div className="flex p1-2">
//       <Drawer>
//         <DrawerTrigger asChild>
//           <Button variant="outline" className="bg-[#A9DAED] w-full">
//             Ajouter Scan
//           </Button>
//         </DrawerTrigger>
//         <DrawerContent>
//           <div className="w-full">
//             <DrawerHeader>
//               <DrawerTitle className="text-center">
//                 Enter le scan de {placeholder}
//               </DrawerTitle>
//               <DrawerClose asChild>
//                 <button className="absolute right-4 top-4">
//                   <XMarkIcon className="h-5 w-5 text-gray-500" />
//                 </button>
//               </DrawerClose>
//             </DrawerHeader>
//             <h1 className="title text-xl font-bold text-center">
//               Upload File
//             </h1>
//             <FormField name={name} render={({ field }) => (
//               <FormItem>
//                 <FormControl>
//                   <Input
//                     placeholder="Name"
//                     value={currentScan.name}
//                     onChange={(e) => setCurrentScan({ ...currentScan, name: e.target.value })}
//                   />
//                   <Input
//                     placeholder="Observation"
//                     value={currentScan.observation}
//                     onChange={(e) => setCurrentScan({ ...currentScan, observation: e.target.value })}
//                   />
//                   <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={handleFileUpload} {...field} />
//                 </FormControl>
//               </FormItem>
//             )} />
//             <div className="flex justify-center mt-4">
//               <Button onClick={handleAddScan}>Ajouter</Button>
//             </div>
//             <ul className="mt-4">
//               {scans.map((scan, index) => (
//                 <li key={index} className="mb-2">
//                   <strong>Name:</strong> {scan.name}, <strong>Observation:</strong> {scan.observation}
//                 </li>
//               ))}
//             </ul>
//           </div>
//           <DrawerFooter>
//             <div className="flex flex-col justify-center items-center">
//               <Button className="w-[50%]" onClick={handleSubmit}>Submit</Button>
//               <DrawerClose asChild>
//                 <Button variant="outline" className="w-[50%]">
//                   Cancel
//                 </Button>
//               </DrawerClose>
//             </div>
//           </DrawerFooter>
//         </DrawerContent>
//       </Drawer>
//     </div>
//   );
// };

// export default DrawerScan;