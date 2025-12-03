
export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null
}) {
    const rowStyle = {
        backgroundColor: isHeader ? 'var(--color-table-header)' : 'var(--color-table-rows)',
        opacity: isHeader ? '0.66' : '0.45',
    };

    const headerCellClasses = 'border border-gray-400 pl-2';
    const dataCellClasses = 'border border-gray-400 pl-2';

    return (
        isHeader ? (
            <tr style={rowStyle}>
                <th colSpan={textSecondCell ? 1 : 2} className={headerCellClasses}>{textFirstCell}</th>
                {textSecondCell ? <th className={headerCellClasses}>{textSecondCell}</th> : null}
            </tr>
        ) : (
            <tr style={rowStyle}>
                <td className={dataCellClasses}>{textFirstCell}</td>
                <td className={dataCellClasses}>{textSecondCell}</td>
            </tr>
        )
    )
}
