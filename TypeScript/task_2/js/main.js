var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.workFromHome = function () {
        return "Cannot work from home";
    };
    Teacher.prototype.getCoffeeBreak = function () {
        return "Cannot have a break";
    };
    Teacher.prototype.workTeacherTasks = function () {
        return "Getting to work";
    };
    return Teacher;
}());
function createEmployee(salary) {
    var numericSalary = typeof salary === 'number' ? salary : parseInt(salary.toString().replace(/[^0-9.-]+/g, ''));
    if (typeof numericSalary === 'number' && numericSalary < 500) {
        return "Teacher";
    }
    else {
        return "Director";
    }
}
console.log(createEmployee('$500'));
