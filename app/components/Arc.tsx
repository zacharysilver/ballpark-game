interface ArcProps {
    start: [number, number];
    end: [number, number];
}

const Arc: React.FC<ArcProps> = ({ start, end }) => {
    const midX = (start[0] + end[0]) / 2;
    const midY = (start[1] + end[1]) / 2;
    const controlX = midX;
    const controlY = midY - Math.abs(start[1] - end[1]) / 4; // Adjust this value to change the arc height

    return (
        <path
            d={`M ${start[0]} ${start[1]} Q ${controlX} ${controlY} ${end[0]} ${end[1]}`}
            fill="none"
            stroke="#808080"
            strokeWidth={1}
            strokeLinecap="round"
            strokeDasharray="5,5"
        />
    );
};

export default Arc;