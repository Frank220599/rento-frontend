import React from "react"

const CategoryIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={16} height={10} viewBox="0 0 16 10" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7 1a1 1 0 011-1h7a1 1 0 110 2H8a1 1 0 01-1-1zM3 5a1 1 0 011-1h11a1 1 0 110 2H4a1 1 0 01-1-1zM1 8a1 1 0 100 2h14a1 1 0 100-2H1z"
            fill="#BECBD8"
        />
    </svg>
);

export default CategoryIcon;
