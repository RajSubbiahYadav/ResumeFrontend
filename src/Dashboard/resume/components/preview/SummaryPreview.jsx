import React from 'react'

function SummaryPreview({resumeInfo}) {
  return (
    <p className='text-xs text-justify'>
        {resumeInfo?.summery}
    </p>
  )
}

export default SummaryPreview
