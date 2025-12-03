import CourseListRow from './CourseListRow';
import WithLogging from '../HOC/WithLogging';

function CourseList({ courses = [] }) {
    return (
        <div className='courses mx-auto my-8' style={{ width: '80%' }}>
            {
                courses.length > 0 ?
                    (
                        <table id='CourseList' className="w-full" style={{ width: '100%' }}>
                            <thead>
                                <CourseListRow
                                    textFirstCell="Available courses"
                                    isHeader={true}
                                />
                                <CourseListRow
                                    textFirstCell="Course name"
                                    textSecondCell="Credit"
                                    isHeader={true}
                                />
                            </thead>
                            <tbody>
                                {
                                    courses.map(course => (
                                        <CourseListRow
                                            key={course.id}
                                            textFirstCell={course.name}
                                            textSecondCell={course.credit}
                                        />
                                    ))
                                }
                            </tbody>
                        </table>
                    ) : (
                        <table id='CourseList' className="w-full" style={{ width: '100%' }}>
                            <thead>
                                <CourseListRow
                                    isHeader={true}
                                    textFirstCell="No course available yet"
                                />
                            </thead>
                        </table>
                    )
            }
        </div>
    );
}

export default WithLogging(CourseList);
