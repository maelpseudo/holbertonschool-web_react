import PropTypes from 'prop-types';

CourseListRow.propTypes = {
    isHeader: PropTypes.bool.isRequired,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string.isRequired,
};

export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null
}) {
    const rowStyles = {
        backgroundColor: isHeader ? 'var(--color-table-header)' : 'var(--color-table-rows)',
        opacity: isHeader ? 0.66 : 0.45,
    };

    const cellBaseClasses = 'border border-gray-400 text-left';
    const headerCellClasses = cellBaseClasses;
    const dataCellClasses = `${cellBaseClasses} pl-2`;

    return (
        <tr style={rowStyles}>
            {isHeader ? (
                textSecondCell ? (
                    <>
                        <th className={headerCellClasses}>{textFirstCell}</th>
                        <th className={headerCellClasses}>{textSecondCell}</th>
                    </>
                ) : (
                    <th className={headerCellClasses} colSpan={2}>{textFirstCell}</th>
                )
            ) : (
                <>
                    <td className={dataCellClasses}>{textFirstCell}</td>
                    <td className={dataCellClasses}>{textSecondCell}</td>
                </>
            )}
        </tr>
    )
}
