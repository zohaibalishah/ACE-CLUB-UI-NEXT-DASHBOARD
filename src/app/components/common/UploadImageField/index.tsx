import React from 'react';
import { Typography } from '../Typography';
import { IoCloudUploadOutline } from 'react-icons/io5';

export const UploadImageField = (): React.ReactElement => (
    <label className="w-full h-[112px] bg-gradient-to-t from-newLinear/20 to-newLinear/30 flex flex-col items-center justify-center p-4 border border-dashed border-newLinear shadow-sm shadow-newLinear rounded-lg cursor-pointer hover:border-gray-400">
        <IoCloudUploadOutline className="text-2xl text-secondary" />
        <Typography className="mt-2">Upload branch image</Typography>
        <input type="file" className="hidden" />
    </label>
);
