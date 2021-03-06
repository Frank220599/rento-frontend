import React from "react"

const BackArrowIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={25} height={22} viewBox="0 0 25 22" fill="none" {...props}>
        <path
            d="M23.438 9.43H4.905l5.672-6.851a1.58 1.58 0 00-.203-2.216 1.559 1.559 0 00-2.203.205L.359 9.995c-.052.075-.1.154-.14.236 0 .079 0 .126-.11.204a1.58 1.58 0 00-.109.566c.001.194.039.386.11.566 0 .078 0 .125.109.204.04.082.088.16.14.236l7.813 9.427a1.564 1.564 0 002.762-.86 1.581 1.581 0 00-.356-1.15l-5.672-6.852h18.532c.414 0 .811-.165 1.104-.46a1.576 1.576 0 000-2.222 1.558 1.558 0 00-1.105-.46z"
            fill="#91A4B4"
        />
    </svg>
);

export default BackArrowIcon;
