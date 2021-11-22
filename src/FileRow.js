import React from "react";
import { ButtonCancel } from "./ButtonCancel";
import { ButtonDelete } from "./ButtonDelete";
import { ButtonUpload } from "./ButtonUpload";
import { CheckMarkIcon } from "./CheckMarkIcon";
import { ErrorIcon } from "./ErrorIcon";
import { FileIcon } from "./FileIcon";
import { UPLOAD_STATUS, FileUploadService } from "./FileUploadService";
import { ProgressBar } from "./ProgressBar";

export class FileRow extends React.Component {

  currentUploadService = null;

  constructor(props) {
    super(props);
    this.state = {
      uploadPercentage: 0,
      uploadStatus: UPLOAD_STATUS.NOT_STARTED
    }
  }

  delete() {
    if (this.props.onDelete && typeof this.props.onDelete === "function") {
      this.props.onDelete();
    }
  }

  cancel() {
    if (this.currentUploadService != null) {
      this.currentUploadService.cancelUpload();
    }
    this.setState({ 
      uploadStatus: UPLOAD_STATUS.NOT_STARTED,
      uploadPercentage: 0
    });
  }
  

  upload() {
    this.setState({ uploadStatus: UPLOAD_STATUS.IN_PROGRESS});
    this.currentUploadService = new FileUploadService(this.props.file, this.props.url);
    this.currentUploadService
      .upload()
      .onProgressChange((progress) => this.setState({ uploadPercentage: progress }))
      .onError(() => this.setState({ uploadStatus: UPLOAD_STATUS.ERROR}))
      .onComplete((data) => {
        this.setState({ uploadStatus: UPLOAD_STATUS.COMPLETE });
        this.currentUploadService = null;
        if (this.props.onComplete && typeof this.props.onComplete === "function") {
          this.props.onComplete(data);
        }
      })
  }

  render() {
    return(
      <div className="flex-grow grid grid-cols-8 py-1">

        <div className="flex justify-end col-span-2">
          {(this.state.uploadStatus===UPLOAD_STATUS.NOT_STARTED) && <ButtonDelete onClick={ () => this.delete() } /> }
          {(this.state.uploadStatus===UPLOAD_STATUS.IN_PROGRESS) && <ButtonCancel onClick={ () => this.cancel() } /> }
          {(this.state.uploadStatus===UPLOAD_STATUS.NOT_STARTED) && <ButtonUpload onClick={ () => this.upload() } /> }
          {(this.state.uploadStatus===UPLOAD_STATUS.COMPLETE)    && <CheckMarkIcon />}
          {(this.state.uploadStatus===UPLOAD_STATUS.ERROR)       && <ErrorIcon /> }
        </div>

        <ProgressBar percentage={this.state.uploadPercentage} hasErrors={this.state.uploadStatus===UPLOAD_STATUS.ERROR} className="col-span-2"/>
        
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