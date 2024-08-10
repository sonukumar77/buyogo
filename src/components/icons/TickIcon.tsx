import React, { forwardRef, Ref, SVGAttributes } from 'react'

type Props = SVGAttributes<SVGSVGElement>

const TickIcon = forwardRef((props: Props, ref: Ref<SVGSVGElement>) => (
    <svg
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        ref={ref}
    >
        <path d="M10 1.87a8.12 8.12 0 1 0 0 16.25 8.12 8.12 0 0 0 0-16.25Zm3.87 6.7-4.58 4.38a.63.63 0 0 1-.87 0l-2.29-2.19a.62.62 0 1 1 .86-.9l1.86 1.77 4.16-3.96a.62.62 0 0 1 .86.9Z" />
    </svg>
))

export default TickIcon