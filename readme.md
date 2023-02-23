| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |
| POST | /api/register | This endpoint should allow users to register. | 201 |
| POST | /api/login | This endpoint should allow users to login. | 201 |
| GET | /api/flights | This endpoint should return a list of all available flights. | 200 |
| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 |
| POST | /api/flights | This endpoint should allow users to add new flights to the system. | 201 |
| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. | 204 |
| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. | 202 |
| POST | /api/booking | This endpoint should allow the user to book flights. | 201 |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. | 200 |