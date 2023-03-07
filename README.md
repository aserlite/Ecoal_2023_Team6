
# E-coal project 2023 

This project is a website displaying articles for a music magazine.  
The two directories are differents application : 
- /server : an API sending the informations from the database, not displaying anithing (no HTML) using Laravel
- /client : the usable website in React, it uses the Laravel API to access the database 
## Group 6 

- Angus SIMMONDS
- Gabriel COSTA
- Fayaz KHALID
- Honorine RUCELLE
- Arthur CUVILLON

## Setup the app
```
cd server
php composer.phar install
php artisan migrate --seed
cd .. ; cd client
npm install
```

## Start the app
Clone the repository on your computer and follow those commands : 
```g
  cd server ; php artisan serve 
```
On another teminal : 
```
  cd ../client ; npm start
```


## Pages : 

- Home : with the title of your app and the lead story articles
- Article : to display a given article. If the user is connected to the application the whole content of the news is displayed. If not, only an abstract is available.
- Register and login
- Admin : to add or delete articles, manage tags. This page is restricted to users with an admin account.
