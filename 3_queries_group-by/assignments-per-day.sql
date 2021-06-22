SELECT day, COUNT (assignments.*) as total_assignments
FROM assignments
GROUP BY day
HAVING COUNT (*) >= 10
ORDER BY day;
