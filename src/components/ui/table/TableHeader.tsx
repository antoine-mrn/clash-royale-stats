export default function TableHeader({
    tableColumns,
}: {
    tableColumns: string[];
}) {
    return (
        <tr>
            {tableColumns.map((column) => (
                <th>{column}</th>
            ))}
        </tr>
    );
}
