# Commands to only run the database
start-database:
	docker-compose -f docker-compose-database.yml up -d --force-recreate
stop-database:
	docker-compose -f docker-compose-database.yml down
reset-database:
	docker-compose -f docker-compose-database.yml down -v && docker-compose -f docker-compose-database.yml up -d --build

# Commands to only run the backend
start-backend:
	docker-compose -f docker-compose-backend.yml up --force-recreate

stop-backend:
	docker-compose -f docker-compose-backend.yml down

reset-backend:
	docker-compose -f docker-compose-backend.yml down -v && docker-compose -f docker-compose-backend.yml up -d --build