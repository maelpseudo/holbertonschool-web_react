import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';

CourseList.propTypes = {
    courses: PropTypes.array.isRequired,
};

export default function CourseList({ courses = [] }) {
    return (
        <div className='courses w-4/5 mx-auto my-24'>
            {
                courses.length > 0 ?
                    (
                        <table id='CourseList' className='w-full border-collapse'>
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
                        <table id='CourseList' className='w-full border-collapse'>
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
