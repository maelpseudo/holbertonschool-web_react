
export default function CourseListRow({
    isHeader = false,
    textFirstCell = '',
    textSecondCell = null
}) {
    return (
        isHeader ? (
            <tr className="bg-[var(--color-table-header)] opacity-66">
                <th colSpan={textSecondCell ? 1 : 2} className="border border-gray-400 pl-2">{textFirstCell}</th>
                {textSecondCell ? <th className="border border-gray-400 pl-2">{textSecondCell}</th> : null}
            </tr>
        ) : (
            <tr className="bg-[var(--color-table-rows)] opacity-45">
                <td className="border border-gray-400 pl-2">{textFirstCell}</td>
                <td className="border border-gray-400 pl-2">{textSecondCell}</td>
            </tr>
        )
    )
}
