"use client";
import React from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  icon: IconType;
  label: string;
  selected?: boolean;
}

//In this way (icon: Icon) we mad alias for icon so that we can use it as a component
const CategoryBox: React.FC<CategoryBoxProps> = ({ icon: Icon, label, selected }) => {
  return (
    <div
    className={`flex flex-col justify-center items-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer ${selected ? 'border-b-neutral-800' : 'border-transparent'} ${selected ? 'text-neutral-800' : 'text-neutral-500'}`}
    >
      <Icon size={26} />
      <div className="font-medium text-sm">
        {label}
      </div>
  </div>
  ) 
};

export default CategoryBox;
