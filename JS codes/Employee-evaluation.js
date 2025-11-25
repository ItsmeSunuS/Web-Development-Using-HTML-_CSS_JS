function evaluateEmployees(employees) {
  // 1. Filter employees with more than 5 tasks completed
  const filtered = employees.filter(emp => emp.tasksCompleted > 5);

  // 2. Map to name + performance level
  const mapped = filtered.map(emp => {
    let performance = "";

    if (emp.rating > 4.5) {
      performance = "Excellent";
    } else if (emp.rating >= 3 && emp.rating <= 4.5) {
      performance = "Good";
    } else {
      performance = "Needs Improvement";
    }

    return { name: emp.name, performance };
  });

  // 3. Sort by performance priority: Excellent → Good → Needs Improvement
  const priority = {
    "Excellent": 3,
    "Good": 2,
    "Needs Improvement": 1
  };

  return mapped.sort((a, b) => priority[b.performance] - priority[a.performance]);
}
