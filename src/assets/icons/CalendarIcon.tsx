import React from "react"

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
        <path
            d="M3.2 15.15h9.6a2.353 2.353 0 002.35-2.35v0-8h0a2.353 2.353 0 00-1.999-2.322V1.6a.75.75 0 10-1.5 0v.85h-2.9V1.6a.75.75 0 10-1.5 0v.85H4.35V1.6a.75.75 0 00-1.5 0v.877a2.353 2.353 0 00-2 2.323v8h0a2.352 2.352 0 002.35 2.35zm-.6-1.75a.852.852 0 01-.25-.6s0 0 0 0V7.55h11.3v5.25a.852.852 0 01-.85.85H3.2a.852.852 0 01-.6-.25zm10.8-9.2c.16.16.25.375.25.6v1.25H2.35V4.8s0 0 0 0a.852.852 0 01.85-.85s0 0 0 0h9.6s0 0 0 0c.225 0 .441.09.6.25z"
            fill="#BECBD8"
            stroke="#BECBD8"
            strokeWidth={0.3}
        />
    </svg>
);

export default CalendarIcon;
