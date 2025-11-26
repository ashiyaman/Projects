const tasks = [
  { employee: 'Ritu', hours: 5 },
  { employee: 'Jaya', hours: 3 },
  { employee: 'Ritu', hours: 2 },
  { employee: 'Parul', hours: 8 },
  { employee: 'Jaya', hours: 4 },
  { employee: 'Ritu', hours: 3 }
];

const employeeWithMoreHours = () => {
    const totalHours = tasks.reduce((acc, {employee, hours}) => {
        acc[employee] = (acc[employee] || 0) + hours
        return acc
    }, {})
    console.log(totalHours)

    const filteredEmployees = Object.entries(totalHours).filter([name, hours]))
}

employeeWithMoreHours(tasks)