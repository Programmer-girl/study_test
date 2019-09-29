select pv,
CASE 
WHEN event_os LIKE '%ios%' THEN 'ios'
WHEN event_os LIKE '%and%' THEN 'android'
WHEN event_os LIKE '%And%' THEN 'android'
WHEN event_os LIKE '%iOS%' THEN 'ios'
END AS event_os_type,
SPLIT_str(event_os,' ',1)
'ios 1.1' REGEXP '^ios' as event_os_v
from visit_os_info
where 
{event_day [conditions.event_day(number)]}
and {page = [conditions.page]}
and {product = [conditions.productId]}
