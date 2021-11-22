import React from "react";
import Dropzone from "react-dropzone";
import { DropzoneIcon } from "./DropzoneIcon";
import { FileRow } from "./FileRow";

export class MyDropzone extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
    this.dropzoneRef = React.createRef();
  }

  openDialog() {
    if (this.dropzoneRef && this.dropzoneRef.current) {
      this.dropzoneRef.current.open();
    }
  }

  onDrop(files) {
    this.setState((state) => {
      let filenames = state.files.map(file => file.path);
      let newFiles = files.filter(file => !filenames.includes(file.path));
      return { files: state.files.concat(newFiles) };
    });
  }

  onDelete(index) {
    this.setState(
      (state) => ({ 
        files: state.files.filter((_, i) => i !== index) 
      })
    );
  }

  classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  render() {
    return (
      <>
        <Dropzone onDrop={ (acceptedFiles) => this.onDrop(acceptedFiles) } accept={this.props.accept} noClick={true} maxFiles={this.props.maxFiles} ref={this.dropzoneRef}>
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
                    <DropzoneIcon onClick={() => this.openDialog()} />
                    <div className="flex text-sm text-gray-600">
                      <input {...getInputProps()} />
                    </div>
                    <p className="pl-1">Clique ou Arraste seu(s) arquivo(s)</p>
                    <p className="text-xs text-gray-500">Apenas Imagens e PDF (PNG, JPG, GIF, BMP ou PDF) </p>
                  </div>

                </div>

                {(this.state.files.length > 0) && (
                  <div className="w-full col-span-3">
                    {
                      this.state.files.map((file, index) => (
                        <FileRow 
                          file={file} 
                          key={file.path} 
                          onSave={() => {}} onDelete={() => this.onDelete(index)} 
                          url={this.props.url} 
                        />
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
