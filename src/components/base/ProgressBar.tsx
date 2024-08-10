import React from 'react'

interface ProgressBarProps {
    isFilled: boolean
    containerStyle?: string
    progressFillStyle?: string
}

const ProgressBar = ({ isFilled, containerStyle, progressFillStyle }: ProgressBarProps) => {

    return (
        <div className={`w-full h-2 rounded-lg bg-gray-400 overflow-hidden ${containerStyle}`}>
            <div className={`h-full bg-blue-500 ${progressFillStyle}`} style={{ width: isFilled ? '100%' : '0%' }} />
        </div>
    )
}


export default ProgressBar