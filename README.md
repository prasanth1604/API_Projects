# INSTRUCTIONS TO RUN THIS APPLICATION

## Backend( Django )

#### Installing

open terminal and type

```
git clone https://github.com/prasanth1604/API_Projects.git
```


#### Requirements

```
cd core
```

To install requirements type

```
pip install -r requirements.txt
```

To migrate the database open terminal in project directory and type

```
python manage.py makemigrations
python manage.py migrate
```

To run the program in local server use the following command

```
python manage.py runserver
```

Server will be available at `http://127.0.0.1:8000` in your browser

'/flashcard' to add new flashcard
'/get-subject' to view flashcards saved

## Frontend( React )

#### To install dependency

```
npm install
```

#### To start the server

```
npm start
```

#### For Production Build

```
npm run build
```

- I have used proxy `http://127.0.0.1` for axios in package.json
- You can set axios.defaults.baseURL = `https://api.example.com` Globally



Don't Forget to whitelist your host origin using `django-cors-header` when using in production<br>
[See Documentation](https://pypi.org/project/django-cors-headers/)
