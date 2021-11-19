import React from "react";
import { ButtonCancel } from "./ButtonCancel";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonUpload } from "./ButtonUpload";
import { FileIcon } from "./FileIcon";
import { ProgressBar } from "./ProgressBar";

export class FileRow extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      files: []
    }
  }

  render() {
    return(
      <div className="flex flex-grow grid grid-cols-8 py-1">
        <div className="flex justify-end col-span-2">
          <ButtonDelete />
          <ButtonCancel />
          <ButtonUpload />
        </div>

        <ProgressBar percentage={50} className="col-span-2"/>
        
        <div className="flex justify-start col-span-4 items-center">
          <FileIcon className="h-4 w-4 flex-shrink-0" />
          <span className="text-xs truncate text-gray-700">
            {this.props.file.name}
          </span>
        </div>
      </div>
    )
  }

}