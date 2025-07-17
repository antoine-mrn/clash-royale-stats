interface ListRowProps {
    label: string;
    value: string | number;
    key?: string | number;
}
//idem pour le spread des props
export default function ListRow({ label, value, key }: ListRowProps) {
    return (
        <li key={key} className="list-row flex justify-between">
            <h4 className="font-semibold">{label}</h4>
            <p>{value}</p>
        </li>
    );
}
