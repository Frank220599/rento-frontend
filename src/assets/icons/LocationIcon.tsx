import React from 'react';

const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg width={18} height={16} viewBox="0 0 18 16" fill="none" {...props}>
            <path
                d="M2.027 5.954h0-.001a.7.7 0 00-.43.636c0 .282.193.52.465.604l5.15 1.668 2.026 4.74h0l.002.004c.116.25.36.408.66.398h.01l.011-.002h.006V14h.006V14h.005v-.001h.006v-.001h.006v-.001h.005v-.001h.006v-.001h.006v-.001h.005v-.001h.006v-.001h.006v-.001h.005l.001-.001h.005v-.001H10v-.001h.005v-.001h.005a.726.726 0 00.533-.422h0l.004-.008L15.32 1.58h0l.004-.01a.686.686 0 00-.175-.708.687.687 0 00-.752-.118h-.001L2.027 5.954zm8.054.99h0l.001-.003a.652.652 0 00-.027-.95.725.725 0 00-.98.04L7.55 7.56 4.235 6.472l9.183-3.865-3.555 8.916L8.56 8.465l1.522-1.522z"
                fill={props.fill ? props.fill : "#2196F3"}
                stroke={props.fill ? props.fill : "#2196F3"}
                strokeWidth={0.3}
            />
        </svg>
    );
};

export default LocationIcon;
