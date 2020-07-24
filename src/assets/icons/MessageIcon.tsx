import React from "react"

const MessageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg width={20} height={16} viewBox="0 0 20 16" fill="none" {...props}>
        <path
            d="M.95 13.44a1.524 1.524 0 00.482 1.127h0c.293.272.678.424 1.078.426h0a1.53 1.53 0 001.087-.458s0 0 0 0l1.485-1.485H16.75a2.303 2.303 0 002.3-2.3v0-7.5 0a2.303 2.303 0 00-2.3-2.3h0-13.5 0a2.303 2.303 0 00-2.3 2.3v10.19zm0 0s0 0 0 0H1 .95v0zm3.234-1.755h0L2.55 13.319V3.25a.701.701 0 01.7-.7h13.5a.701.701 0 01.7.7v7.499a.701.701 0 01-.7.701h-12 0a.803.803 0 00-.566.235zM7 9.3h6a.8.8 0 000-1.6H7a.8.8 0 000 1.6zm0-3h2.251a.8.8 0 000-1.6H7a.8.8 0 000 1.6z"
            fill="#0F4168"
            stroke="#0F4168"
            strokeWidth={0.1}
        />
    </svg>
);

export default MessageIcon;
