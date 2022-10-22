# `AirBnBeezy`

## Table of Contents

- [`AirBnBeezy`](#airbnbeezy)
  - [Table of Contents](#table-of-contents)
- [Database Schema Design](#database-schema-design)
- [API Documentation](#api-documentation)
  - [currentUser](#currentuser)
  - [Spots](#spots)
  - [Reviews](#reviews)
  - [Bookings](#bookings)
  - [Images](#images)

# Database Schema Design

![database.png](https://raw.githubusercontent.com/Risclover/API-project/main/backend/database.png)

# API Documentation

## currentUser

([Back to Top ^](#airbnbeezy))

<details>
<summary style="font-size: 18px; font-weight: 500">Get the current user: <code>GET /api/currentUser</code></summary><br>

Response:

```javascript
Status: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "username": "JohnSmith"
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Log in a user: <code>GET /api/login</code></summary><br>

Request:

```javascript
Content-Type: "application/json",
Body:
{
    "credential": "john.smith@gmail.com"
    "password": "secret password"
}
```

Response:

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "username": "JohnSmith",
  "token": ""
}
```

Error: Invalid Credentials

```javascript
Status Code: 401,
Content-Type: "application/json",
Body:
{
  "message": "Invalid credentials",
  "statusCode": 401
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "credential": "Email or username is required",
    "password": "Password is required"
  }
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Sign up a user: <code>GET /api/signup</code></summary><br>

Request:

```javascript
Content-Type: "application/json",
Body:
{
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "username": "JohnSmith",
  "password": "secret password"
}
```

Response:

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "firstName": "John",
  "lastName": "Smith",
  "email": "john.smith@gmail.com",
  "username": "JohnSmith",
  "token": ""
}
```

Error: User already exists with the specified email

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "User already exists",
  "statusCode": 403,
  "errors": {
    "email": "User with that email already exists"
  }
}
```

Error: User already exists with the specified username

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "User already exists",
  "statusCode": 403,
  "errors": {
    "username": "User with that username already exists"
  }
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "email": "Invalid email",
    "username": "Username is required",
    "firstName": "First Name is required",
    "lastName": "Last Name is required"
  }
}
```

</details>

## Spots

([Back to Top ^](#airbnbeezy))

<details>
<summary style="font-size: 18px; font-weight: 500">Get all spots: <code>GET /api/spots</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Spots": [
    {
      "id": 1,
      "ownerId": 1,
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "avgRating": 4.5,
      "previewImage": "image url"
    }
  ]
}
```

</details>

<details>
<summary style="font-size: 18px; font-weight: 500">Get all spots owned by the current user: <code>GET /api/currentUser/spots</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Spots": [
    {
      "id": 1,
      "ownerId": 1,
      "address": "123 Disney Lane",
      "city": "San Francisco",
      "state": "California",
      "country": "United States of America",
      "lat": 37.7645358,
      "lng": -122.4730327,
      "name": "App Academy",
      "description": "Place where web developers are created",
      "price": 123,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36",
      "avgRating": 4.5,
      "previewImage": "image url"
    }
  ]
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Get details of a spot from an id: <code>GET /api/spots/:spotId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36" ,
  "numReviews": 5,
  "avgStarRating": 4.5,
  "SpotImages": [
    {
      "id": 1,
      "url": "image url",
      "preview": true
    },
    {
      "id": 2,
      "url": "image url",
      "preview": false
    }
  ],
  "Owner": {
    "id": 1,
    "firstName": "John",
    "lastName": "Smith"
  }
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Create a spot: <code>POST /api/spots</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123
}
```

Response

```javascript
Status Code: 201,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```

Error: Body validation error

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation Error",
  "statusCode": 400,
  "errors": {
    "address": "Street address is required",
    "city": "City is required",
    "state": "State is required",
    "country": "Country is required",
    "lat": "Latitude is not valid",
    "lng": "Longitude is not valid",
    "name": "Name must be less than 50 characters",
    "description": "Description is required",
    "price": "Price per day is required"
  }
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Add an Image to a Spot based on the Spot's id: <code>POST /api/spots/:spotId/images</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "url": "image url",
  "preview": true
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "url": "image url",
  "preview": true
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Edit a Spot: <code>PUT /api/spots/:spotId
</code></summary><br>

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Add an Image to a Spot based on the Spot's id: <code>POST /api/spots/:spotId/images</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "ownerId": 1,
  "address": "123 Disney Lane",
  "city": "San Francisco",
  "state": "California",
  "country": "United States of America",
  "lat": 37.7645358,
  "lng": -122.4730327,
  "name": "App Academy",
  "description": "Place where web developers are created",
  "price": 123,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```

Error: Body validation error

```javascript
Status Code: 400,
Content-TYpe: "application/json",
Body:
{
  "message": "Validation Error",
  "statusCode": 400,
  "errors": {
    "address": "Street address is required",
    "city": "City is required",
    "state": "State is required",
    "country": "Country is required",
    "lat": "Latitude is not valid",
    "lng": "Longitude is not valid",
    "name": "Name must be less than 50 characters",
    "description": "Description is required",
    "price": "Price per day is required"
  }
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Delete a Spot: <code>DELETE /api/spots/:spotId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "message": "Successfully deleted",
  "statusCode": 200
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>

## Reviews

([Back to Top ^](#airbnbeezy))

<details>
<summary style="font-size: 18px; font-weight: 500">Get all Reviews of the Current User: <code>GET /api/currentUser/reviews</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Reviews": [
    {
      "id": 1,
      "userId": 1,
      "spotId": 1,
      "review": "This was an awesome spot!",
      "stars": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "User": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith"
      },
      "Spot": {
        "id": 1,
        "ownerId": 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "price": 123,
        "previewImage": "image url"
      },
      "ReviewImages": [
        {
          "id": 1,
          "url": "image url"
        }
      ]
    }
  ]
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Get all Reviews by a Spot's id: <code>GET /api/spots/:spotId/reviews</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Reviews": [
    {
      "id": 1,
      "userId": 1,
      "spotId": 1,
      "review": "This was an awesome spot!",
      "stars": 5,
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36" ,
      "User": {
        "id": 1,
        "firstName": "John",
        "lastName": "Smith"
      },
      "ReviewImages": [
        {
          "id": 1,
          "url": "image url"
        }
      ],
    }
  ]
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Create a Review for a Spot based on the Spot's id: <code>POST /api/spots/:spotId/reviews</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "review": "This was an awesome spot!",
  "stars": 5,
}
```

Response

```javascript
Status Code: 201,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "userId": 1,
  "spotId": 1,
  "review": "This was an awesome spot!",
  "stars": 5,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "review": "Review text is required",
    "stars": "Stars must be an integer from 1 to 5",
  }
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

Error: Review from the current user already exists for the Spot

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "User already has a review for this spot",
  "statusCode": 403
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Add an Image to a Review based on the Review's id: <code>POST /api/reviews/:reviewId/images</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
    "url": "image url"
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "url": "image url"
}
```

Error: Couldn't find a Review with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Review couldn't be found",
  "statusCode": 404
}
```

Error: Cannot add any more images because there is a maximum of 10 images per resource

```javascript
Status Code: 403
Content-Type: "application/json",
Body:
{
  "message": "Maximum number of images for this resource was reached",
  "statusCode": 403
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Edit a Review: <code>PUT /api/reviews/:reviewId</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "review": "This was an awesome spot!",
  "stars": 5,
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body: {
  "id": 1,
  "userId": 1,
  "spotId": 1,
  "review": "This was an awesome spot!",
  "stars": 5,
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "review": "Review text is required",
    "stars": "Stars must be an integer from 1 to 5",
  }
}
```

Error: Couldn't find a Review with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Review couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Delete a Review: <code>DELETE /api/reviews/:reviewId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "message": "Successfully deleted",
  "statusCode": 200
}
```

Error: Couldn't find a Review with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Review couldn't be found",
  "statusCode": 404
}
```

</details>

## Bookings

([Back to Top ^](#airbnbeezy))

<details>
<summary style="font-size: 18px; font-weight: 500">Get all of the Current User's Bookings: <code>GET /api/currentUser/bookings</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Bookings": [
    {
      "id": 1,
      "spotId": 1,
      "Spot": {
        "id": 1,
        "ownerId": 1,
        "address": "123 Disney Lane",
        "city": "San Francisco",
        "state": "California",
        "country": "United States of America",
        "lat": 37.7645358,
        "lng": -122.4730327,
        "name": "App Academy",
        "price": 123,
        "previewImage": "image url"
      },
      "userId": 2,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
  ]
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Get all Bookings for a Spot based on the Spot's id: <code>GET /api/spots/:spotId/bookings</code></summary><br>

Response - If you ARE NOT the owner of the spot

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Bookings": [
    {
      "spotId": 1,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20"
    }
  ]
}
```

Response - If you ARE the owner of the spot

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "Bookings": [
    {
      "User": {
        "id": 2,
        "firstName": "John",
        "lastName": "Smith"
      },
      "id": 1,
      "spotId": 1,
      "userId": 2,
      "startDate": "2021-11-19",
      "endDate": "2021-11-20",
      "createdAt": "2021-11-19 20:39:36",
      "updatedAt": "2021-11-19 20:39:36"
    }
  ]
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Create a Booking from a Spot based on the Spot's id: <code>POST /api/spots/:spotId/bookings</code></summary><br>

Request

```javascript
Body:
{
  "startDate": "2021-11-19",
  "endDate": "2021-11-20"
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "spotId": 1,
  "userId": 2,
  "startDate": "2021-11-19",
  "endDate": "2021-11-20",
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-19 20:39:36"
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "endDate": "endDate cannot be on or before startDate"
  }
}
```

Error: Couldn't find a Spot with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot couldn't be found",
  "statusCode": 404
}
```

Error: Booking conflict

```javascript
Status Code: 403
Content-Type: "application/json
Body:
{
  "message": "Sorry, this spot is already booked for the specified dates",
  "statusCode": 403,
  "errors": {
    "startDate": "Start date conflicts with an existing booking",
    "endDate": "End date conflicts with an existing booking"
  }
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Edit a Booking: <code>PUT /api/bookings/:bookingId</code></summary><br>

Request

```javascript
Content-Type: "application/json",
Body:
{
  "startDate": "2021-11-19",
  "endDate": "2021-11-20"
}
```

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "id": 1,
  "spotId": 1,
  "userId": 2,
  "startDate": "2021-11-19",
  "endDate": "2021-11-20",
  "createdAt": "2021-11-19 20:39:36",
  "updatedAt": "2021-11-20 10:06:40"
}
```

Error: Body validation errors

```javascript
Status Code: 400,
Content-Type: "application/json",
Body:
{
  "message": "Validation error",
  "statusCode": 400,
  "errors": {
    "endDate": "endDate cannot come before startDate"
  }
}
```

Error: Couldn't find a Booking with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Booking couldn't be found",
  "statusCode": 404
}
```

Error: Can't edit a booking that's past the due date

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "Past bookings can't be modified",
  "statusCode": 403
}
```

Error: Booking conflict

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "Sorry, this spot is already booked for the specified dates",
  "statusCode": 403,
  "errors": {
    "startDate": "Start date conflicts with an existing booking",
    "endDate": "End date conflicts with an existing booking"
  }
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Delete a Booking: <code>DELETE /api/bookings/:bookingId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "message": "Successfully deleted",
  "statusCode": 200
}
```

Error: Couldn't find a Booking with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Booking couldn't be found",
  "statusCode": 404
}
```

Error: Bookings that have been started can't be deleted

```javascript
Status Code: 403,
Content-Type: "application/json",
Body:
{
  "message": "Bookings that have been started can't be deleted",
  "statusCode": 403
}
```

</details>

## Images

([Back to Top ^](#airbnbeezy))

<details>
<summary style="font-size: 18px; font-weight: 500">Delete a Spot Image: <code>DELETE /api/spots/:spotId/images/:imageId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "message": "Successfully deleted",
  "statusCode": 200
}
```

Error: Couldn't find a Spot Image with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Spot Image couldn't be found",
  "statusCode": 404
}
```

</details>
<details>
<summary style="font-size: 18px; font-weight: 500">Delete a Review Image: <code>DELETE /api/reviews/:reviewId/images/:imageId</code></summary><br>

Response

```javascript
Status Code: 200,
Content-Type: "application/json",
Body:
{
  "message": "Successfully deleted",
  "statusCode": 200
}
```

Error: Couldn't find a Review Image with the specified id

```javascript
Status Code: 404,
Content-Type: "application/json",
Body:
{
  "message": "Review Image couldn't be found",
  "statusCode": 404
}
```

</details>
