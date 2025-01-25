import React from 'react';

interface GridRowProps {
  colSpan: number;
  colStart: number;
  rowSpan?: number;
  rowStart: number;
  content: React.ReactNode;
}

const GridRow: React.FC<GridRowProps> = ({ colSpan, colStart, rowSpan = 1, rowStart, content }) => {
  return (
    <div
      className={`lg:col-span-${colSpan} lg:col-start-${colStart} lg:row-span-${rowSpan} lg:row-start-${rowStart} lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8 flex justify-start xl:justify-end items-center`}
    >
      {content}
    </div>
  );
};

export default GridRow;
