export default function TableHeader({
    tableColumns,
}: {
    tableColumns: string[];
}) {
    return (
        <tr>
            {tableColumns.map((column, index) => (
                <th key={index}>{column}</th>
            ))}
        </tr>
    );
}
