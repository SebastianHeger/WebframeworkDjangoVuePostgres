# Start everything
Use the docker commands in the complete section of the makefile

# Database
1. start the docker container via docker-compose scripts in the makefile

# Backend
1. start the docker container via docker-compose scripts in the makefile
2. on first startup or if there are changes in the models:  
2.1. get the container id of the backend:
```
docker ps
```
2.2. log into the backend container:
```
docker exec -t -i backend bash
```
2.3. make and apply migrations:
```
python manage.py makemigrations
```
```
python manage.py migrate
```
2.4. create a superuser:
```
python manage.py createsuperuser
```
2.5. leave the container terminal
```
exit
```

# Frontend
1. start the docker container via docker-compose scripts in the makefile