import React from "react"

const MountainsIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={50} height={42} viewBox="0 0 50 42" fill="none" {...props}>
        <rect width={50} height={42} rx={4} fill="#0F4168"/>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.79 15.327c1.355 0 2.454-1.08 2.454-2.41 0-1.332-1.099-2.412-2.454-2.412-1.355 0-2.454 1.08-2.454 2.411 0 1.332 1.099 2.411 2.454 2.411zm-6.783 14.6h-14.2a1 1 0 01-.843-1.538l9.485-14.836a.998.998 0 011.668-.024 2025.29 2025.29 0 017.143 10.617l2.759-4.34c.382-.601 1.265-.634 1.682-.062L40 28.374c.474.65-.002 1.56-.823 1.568L33.09 30l-7.082-.073z"
            fill="#2196F3"
        />
    </svg>
);

export default MountainsIcon;
