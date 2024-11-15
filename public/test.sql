SELECT count(aiq_user_id), parameters.amount, date, aiq_user_id from "reporting_v2"."0d487b21e95c13344d9e_events" 
where 
aiq_user_id in (SELECT aiq_user_id from "reporting_v2"."0d487b21e95c13344d9e_events" 
    where 
    aiq_user_id in (SELECT  distinct(aiq_user_id) FROM (
                        SELECT count(eventname) as times_purchase, aiq_user_id FROM "reporting_v2"."0d487b21e95c13344d9e_events"
                            WHERE eventname = 'checkout_completed' 
                            AND CAST(json_extract_scalar(CAST(parameters AS JSON), '$.order_id') AS VARCHAR) LIKE '%00%'
                        group by aiq_user_id) 
                    where times_purchase > 1) 
                    and eventname = 'qg_email_opened'
                    and date >= cast('2024-10-01' as date)  and date <= cast('2024-10-31' as date) )
    AND 
    eventname = 'checkout_completed' and CAST(json_extract_scalar(CAST(parameters AS JSON), '$.order_id') AS VARCHAR) LIKE '%00%'
    and 
    date >= cast('2024-10-01' as date)  
    and date <= cast('2024-10-31' as date)
    GROUP BY 
        aiq_user_id, date, parameters.amount