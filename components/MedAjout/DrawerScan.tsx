import { FC, useState } from "react";
import { Drawer, DrawerClose, DrawerContent, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "../ui/drawer";
import { Button } from "../ui/button";
import Dropzone from "../Drag&Drop";
import { FormControl, FormField, FormItem } from "../ui/form";

interface FormProps {
    name : string ;
    placeholder : string;
  }
  const handleSubmit = (file: File) => {
    // Handle the file data here, for example, you can upload it to a server.
    console.log('File uploaded:', file);
  };
  
  const DrawerScan: FC<FormProps> = ({ name,placeholder, ...props }) => {
   
    return (
        <div className=" flex p1-2 ">
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              className="bg-[#A9DAED] w-full"
            >
              Ajouter Scan
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className=" w-full   ">
              <DrawerHeader>
                <DrawerTitle className="text-center">
                  Enter le scan de {placeholder}
                </DrawerTitle>
                <DrawerClose />
              </DrawerHeader>
              <h1 className="title text-xl font-bold text-center">
                Upload File
              </h1>
              <FormField
               name={name}
              render={({ field }) => (
                <FormItem>
              
              <FormControl>
                <Dropzone className="p-16 mt-10 border border-neutral-200 w-full" onFileUpload={handleSubmit} {...field}/>
              </FormControl>
            </FormItem>
          )}
        />
              
            </div>
            <DrawerFooter>
              <div className="flex flex-col justify-center items-center">
                <Button className="w-[50%]">Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="w-[50%]">
                    Cancel
                  </Button>
                </DrawerClose>
              </div>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
      )
    
    
    }
    export default DrawerScan ;