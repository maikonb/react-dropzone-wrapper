import React from "react";
import Dropzone from "react-dropzone";
import { FileRow } from "./FileRow";

export class MyDropzone extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  onDrop(files) {
    this.setState((state) => ({ files: state.files.concat(files) }));
    console.log(this.state.files);
  }

  classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  render() {
    return (
      <>
        <Dropzone onDrop={ (acceptedFiles) => this.onDrop(acceptedFiles) } accept="image/*" noClick={true}>
          {({
            getRootProps,
            getInputProps,
            isDragActive,
            isDragAccept,
            isDragReject
          }) => {
            return (
              <div  {...getRootProps()}
                    className={ 
                      this.classNames(
                        "mt-1 border-2 border-dashed rounded-md px-6 pt-5 pb-6  border-gray-300", 
                        (isDragAccept && isDragActive) && "border-green-600 bg-green-100",
                        (isDragActive && isDragReject) && "border-red-400 bg-red-100",
                        (this.state.files.length > 0) ? "grid grid-cols-5" : "flex justify-center"
                      )}
              >
                <div  className={
                        this.classNames(
                          "space-y-1 text-center flex  flex-wrap content-center justify-center",
                          (this.state.files.length > 0) && "col-span-2" 
                        )
                      }
                >
                  <div className="flex flex-col">
                    <svg
                      className="mx-auto h-12 w-12 text-gray-400 hover:text-indigo-700 cursor-pointer"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <input {...getInputProps()}   />

                    </div>
                    <p className="pl-1">Clique ou Arraste seu(s) arquivo(s)</p>
                    <p className="text-xs text-gray-500">Apenas Imagens e PDF (PNG, JPG, GIF, BMP ou PDF) </p>
                  </div>

                </div>

                {(this.state.files.length > 0) && (
                  <div className="w-full col-span-3">
                    {
                      this.state.files.map((file, index) => (
                          
                            <FileRow file={file} key={index} />
                      ))
                    }
                  </div>
                )}

              </div>
            );
          }}

        </Dropzone>  
      </>
    );
  }
}
