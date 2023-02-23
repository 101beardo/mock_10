| METHOD | ENDPOINT | DESCRIPTION | STATUS CODE |
| --- | --- | --- | --- |


| POST | /api/register | This endpoint should allow users to register. | 201 |
we can use the template similar to register any new user
{
    "name":"user1",
    "email":"abcde@gmail.com",
    "password":"abcdefg"
}
This will return the status code of 201



| POST | /api/login | This endpoint should allow users to login. | 201 |

we can use the template similar to login already existing user
{
    "email":"abcde@gmail.com",
    "password":"abcdefg"
}
This will return the status code of 201

| GET | /api/flights | This endpoint should return a list of all available flights. | 200 |
we can add the endepoint as api/flights and it will fetch us all the flights data from the database with status code 200


| GET | /api/flights/:id | This endpoint should return the details of a specific flight identified by its ID. | 200 |
we can add the endepoint as api/flights/:id and it will fetch us all the details of the flight with id as id data from the database with status code 200

| POST | /api/flights | This endpoint should allow users to add new flights to the system. | 201 |
we can add the endepoint as api/flights with the post method and it will post the details of the flight with status code 201
we can use this template for adding new flight
{
    "airline": "Indigo",
    "flightNo": "129",
    "departure": "Goa",
    "arrival": "Bangalore",
    "departureTime": "0500",
    "arrivalTime": "0800",
    "seats": "24",
    "price": "3999"
}

| PUT / PATCH | /api/flights/:id | This endpoint should allow users to update the details of a specific flight identified by its ID. | 204 |
we can add the endepoint as api/flights/:id with the patch method and it will update the details of the flight with id as id data from the database with status code 201


| DELETE | /api/flights/:id | This endpoint should allow users to delete a specific flight identified by its ID. | 202 |
we can add the endepoint as api/flights/:id with the delete method and it will update the details of the flight with id as id data from the database with status code 202

| POST | /api/booking | This endpoint should allow the user to book flights. | 201 |
| GET | /api/dashboard | This point should list all the bookings so far with the user and flight details. | 200 |