import React from 'react'

export type LaunchTableRowProps = { title: string; value: string | JSX.Element }

const LaunchTableRow: React.FC<LaunchTableRowProps> = ({ title, value, }) => {
  return (
    <div className="flex justify-between items-center py-3 text-xs font-bold">
      <span>{title.toUpperCase()}</span>
      {typeof value === "string" ? <span>{value}</span> : value}
    </div>
  )
}

export default LaunchTableRow
