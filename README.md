# Notes App
A simple Notes App made using React JS, Redux and Django Rest Framework. I was trying to connect my Django, React JS and Redux skills together, so I built this.

<br/>

![HomePage](https://i.ibb.co/JzgS4VP/base.png)

<a href="https://ibb.co/64Lqxz5"><img src="https://i.ibb.co/JzgS4VP/base.png" alt="base" border="0"></a>

<a href="https://ibb.co/HD36R8p"><img src="https://i.ibb.co/qMVKhQF/alert.png" alt="alert" border="0"></a>

<a href="https://ibb.co/CPR6BNj"><img src="https://i.ibb.co/y4Hp0Gz/login.png" alt="login" border="0"></a>

<a href="https://ibb.co/vs1Cd0H"><img src="https://i.ibb.co/cbJK841/register.png" alt="register" border="0"></a>

## Technologies used:

- Backend - `Django` + `Django Rest Framework`
- Frontend - `ReactJS`
- Styling - `vanilla CSS`
- `React Alert` package for showing Toast messages (frontend)
- `Redux` for managing state (frontend)
- Database - `SQLite3` but you can easily plug and use the DB of your choice.

## Description

This is a simple note taking app with Token Based Authentication. Any user can easily login/register using their `email` and `password`. After that they will be able to use this Notes App. The authenticated users will be able to do the following:

- Create a note
- Read all (and only) their notes
- Delete their own note
- Logout from their current account

A single `note` consists of the following data:

- `title` - the title of the note
- `body` - the content of the note
- `created_at` - when it was created
- `author` - who created it

## How to use it?

I developed both the Django backend and the ReactJS frontend separately. 
One of the many ways to run this project is to **run the Django backend API alone** and then **use the React frontend to consume the API**.

So to do that, first:

- `git clone` or `Download ZIP` this repo `https://github.com/the-coding-pie/notes_app.git`

Then setup the Backend...

# Backend Setup

To start/activate the Backend API server:

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


Now your backend server will be ready to accept the API requests! So let's setup the frontend...


# Frontend Setup

Now let's run our frontend so that we can visually interact with our backend API.

- Open up another terminal and `cd notes_app/frontend/`
- `npm install` will install all the needed modules for the frontend to work
- `npm run start` to start the frontend development server
- Visit `http://localhost:3000` in your browser (normally ReactJS would do this for you)
- Login/Register and enjoy the application!

## Thanks for having a look at my project. Dont forget to check out my blog - <a href="https://thecodingpie.com">https://thecodingpie.com</a>
