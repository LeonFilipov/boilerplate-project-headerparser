# Request Header Parser Microservice (FreeCodeCamp)

This is a simple API project that parses request headers and provides information about the client making the request.

## Features

- Returns the client's IP address.
- Returns the preferred language of the client.
- Returns the client's software information.

## Endpoints

### `GET /api/whoami`
Returns a JSON object with the following properties:
- **`ipaddress`**: The IP address of the client.
- **`language`**: The client's preferred language (from the `Accept-Language` header).
- **`software`**: The client's software information (from the `User-Agent` header).

#### Example Response
```json
{
  "ipaddress": "192.168.1.1",
  "language": "en-US,en;q=0.9",
  "software": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36"
}
```
