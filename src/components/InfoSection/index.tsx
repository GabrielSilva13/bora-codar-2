import React from "react"

export const InfoSection = () => {
  return (
    <div className="flex flex-col items-start gap-4">
      <span className="text-default-color text-xs uppercase opacity-[0.67]">
        código: 42404
      </span>
      <h1 className="text-default-color text-3xl font-bold">
        Sofá Margot II - Rosé
      </h1>
      <span className="text-default-color text-base opacity-[0.67]">
        R$ 4.000
      </span>

      <button
        className="max-w-[172px] 
  w-full 
  h-10
  uppercase 
  border-default-color 
  text-default-color 
  text-sm 
  border-[0.5px] 
  rounded-full
  hover:text-white
  hover:bg-default-color
  transition-colors
  duration-300
  "
      >
        adicionar à cesta
      </button>
    </div>
  )
}
