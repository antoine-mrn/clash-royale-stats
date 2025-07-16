interface ListRowProps {
    label: string;
    value: string | number;
    key?: string | number;
}

export default function ListRow({ label, value, key }: ListRowProps) {
    return (
        <li key={key} className="list-row flex justify-between">
            <h3>{label}</h3>
            <p>{value}</p>
        </li>
    );
}
