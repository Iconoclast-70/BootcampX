
SELECT AVG(total_duration) AS average_total_duration FROM
(SELECT cohorts.name AS cohort,
SUM(assistance_requests.completed_at - assistance_requests.started_at)
AS total_duration
FROM assistance_requests
JOIN students ON assistance_requests.student_id = students.id
JOIN cohorts ON cohorts.id = students.cohort_id
GROUP BY cohort
ORDER BY total_duration ASC) AS total_cohort_assistance_duration
ORDER BY average_total_duration DESC
LIMIT 1;