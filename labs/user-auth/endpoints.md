# Endpoints på backenden

Jag har fixat en enkel Node-server vi kan använda för att implementera token-baserad inloggning. Den finns på [Github](https://github.com/cme-osuka/labs/user-auth/backend).

Allt ni behöver göra för att komma igång är att köra `npm install` och `npm start` i mappen.


## Endpoints

```js
URL: /auth
Method: POST
Body: { email: string, password: string }
Description: Används för att logga in som en av tre existerande användare. Bob, Alice och Eve. Returnerar en Token du använder för resterande requests.

Example SUCCESS response:
{
	"status": "success",
	"message": "login successful",
	"token": "7131afe5g4t3d6c2bd7e48db3c8adsdb10e7d1dba8045f83"
}

Example ERROR response:
{
	"status": "error",
	"message": "email or password is incorrect"
}

------

URL: /me
Method: GET
Expected headers: 
- Authorization (Bearer Token)
Description: Används för att hämta en användares profil/info.

Example SUCCESS response:
{
	"status": "success",
	"profile": {
		"name": "Bob",
		"email": "bob@example.com",
		"age": 30
	}
}

Example ERROR response:
{
	"status": "error",
	"message": "token expired"
}

------

URL: /me
Method: PUT
Expected headers: 
- Authorization (Bearer Token)
Body: { name: string, age: number, email: string }
Description: Används för att uppdatera en användares namn och ålder. Email går inte att ändra, men behöver ändå inkluderas i objektet.

Example SUCCESS response:
{
	"name": "Bobz",
	"email": "bob@example.com",
	"password": "bob123",
	"age": 12
}

Example ERROR response:
{
	"status": "error",
	"message": "email cannot be changed"
}
```
