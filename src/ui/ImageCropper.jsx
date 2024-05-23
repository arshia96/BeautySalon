import React, { useState } from 'react'
import Modal from './Modal';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export default function ImageCropper({ open, onClose, image:cropImage, setImage }) {
    // const tempImage = cropImage;
    const [ cropper, setCropper ] = useState(null);
    const [ cropdata, setCropData ] = useState(null);
    const handler = () => {
        if (typeof cropper !== "undefined") {
            setImage(cropper.getCroppedCanvas().toDataURL());
            onClose();
        }
    }

    return (
    <Modal
        open={open}
        onClose={onClose}
        title={`ویرایش تصویر برای آپلود`}
        outsideClickOption={false}
    >
        <div className='flex flex-col gap-y-5 h-4/6'>
            <h1>راهنما: ترجیحا تصویر را مربعی برش بزنید</h1>
            <Cropper
                className="cropper"
                zoomTo={0.5}
                initialAspectRatio={1}
                src={cropdata ? cropdata : cropImage}
                viewMode={1}
                minCropBoxHeight={100}
                minCropBoxWidth={100}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false}
                onInitialized={(instance) => {
                    setCropper(instance);
                }}
                guides={true}
            />
            <div className='flex flex-row gap-x-2'>
                <button type='button' className="btn btn--primary w-4/5" onClick={() => handler()}>تایید</button>
                <button type='button' className="btn btn--danger w-1/5" onClick={onClose}>لغو</button>
            </div>
            {/* <button type='button' className="btn btn--primary w-1/2" onClick={() => getCropData()}>نمایش نتیجه</button> */}
            {/* <button type='button' className="btn btn--primary w-1/2" onClick={() => useDefaultImage()}>بازگشت به حالت اول</button> */}
        </div>
    </Modal>
    )
}
