interface ListRowProps {
    label: string;
    value: string | number;
    key?: string | number;
}

export default function ListRow({ label, value, key }: ListRowProps) {
    return (
        <li key={key} className="list-row flex justify-between">
            <span className="font-semibold">{label}</span>
            <span>{value}</span>
        </li>
    );
}
