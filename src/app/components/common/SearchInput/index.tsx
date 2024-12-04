import React from 'react';
import { LuSearch } from 'react-icons/lu';

export const SearchInput = (): React.ReactElement => (
    <div className="relative w-full sm:w-auto">
        <input
            type="text"
            placeholder="Search"
            className={`sm:pl-12 h-11 px-5 placeholder:text-secondary w-full sm:w-[310px] bg-transparent shadow-inner shadow-newLinear/30 border border-secondary rounded-xl outline-none text-secondary text-sm`}
        />
        <div
            className={`hidden sm:block absolute top-1/2 -translate-y-1/2 left-4`}
        >
            <LuSearch className="text-secondary text-2xl" />
        </div>
    </div>
);
