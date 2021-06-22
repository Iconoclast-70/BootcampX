SELECT assignments.day as day,
COUNT(assignment_submissions) as number_of_assignments,
assignment_submissions.duration as duration
FROM assignments
JOIN assignment_submissions ON assignments.id = assignment_submissions.assignment_id
GROUP BY assignments.day
ORDER BY duration DESC;
