# Notes App
A simple Notes App made using React JS, Redux and Django Rest Framework.

I was trying to connect my Django, React JS and Redux skills together, so I built this.

This is a simple note taking app with Token Based Authentication.

## How to use it?

I separated the Django backend from the ReactJS frontend. One of the many ways to run this project is to run the Django backend API alone and then use the ReactJS frontend to consume the API.

First:

- `git clone` or `Download ZIP` this repo `https://github.com/the-coding-pie/notes_app.git`

## Backend Setup

Now let's activate the backend API server:

- `cd notes_app/backend/backend/`

## Setting up a virtual environment using venv
- `python3 -m venv venv` will make a virtual environment
- `source venv/bin/activate` to activate the venv. (If you are on windows, then run this instead `venv\Scripts\activate.bat`)

## Installing the requirements
- `pip install -r requirements.txt` will install the needed backend project requirements

## Making migrations
- `python manage.py makemigrations`
- `python manage.py makemigrations notes users`
- `python manage.py migrate`

## Creating the super user
- `python manage.py createsuperuser` and provide the needed infos

## Starting the backend API server
- `python manage.py runserver` will start the Django API server
- If you want, you can **Login** to the pre-built admin panel by visiting- `http://localhost:8000/admin/` in your browser as the superuser account you just created. From this panel, you will be able to do almost anything to the applicaiton!

## Frontend Setup

Now let's run our frontend so that we can visually interact with our backend API.

- Open up another terminal and `cd notes_app/frontend/`
- `npm install` will install all the needed modules for the frontend to work
- `npm run start` to start the frontend development server
- Visit `http://localhost:3000` in your browser (normally ReactJS would do this for you)
- Login/Register and enjoy the application!
