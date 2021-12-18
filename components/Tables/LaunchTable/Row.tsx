import moment from 'moment'
import React from 'react'

export type LaunchTableRowProps = {
  title: string
  isDate?: boolean
  value: string | JSX.Element
}

const LaunchTableRow: React.FC<LaunchTableRowProps> = ({
  title,
  value,
  isDate
}) => {
  function getDate(original: string) {
    // validate date and convert it in a local format
    const date = new Date(original)
    if (isNaN(date.getTime())) return null

    return date
      .toLocaleDateString('en-UK', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
      })
      .toString()
  }

  const date = typeof value === 'string' && isDate ? getDate(value) : null

  return (
    <div className="flex justify-between items-center py-3 text-xs font-bold">
      <span>{title.toUpperCase()}</span>

      {typeof value === 'string' ? (
        isDate && date ? ( // if value is date, create abbr with timeago on hover
          <abbr
            title={
              new Date(value) < new Date() ? moment(value).fromNow() : undefined
            }
          >
            {date}
          </abbr>
        ) : (
          // if value is text
          <span>{value}</span>
        )
      ) : (
        value // if value is jsx
      )}
    </div>
  )
}

export default LaunchTableRow
