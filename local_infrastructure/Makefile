# Commands to only run the database
start-database:
	docker-compose -f docker-compose-database.yml up -d --force-recreate
stop-database:
	docker-compose -f docker-compose-database.yml down
reset-database:
	docker-compose -f docker-compose-database.yml down -v && docker-compose -f docker-compose-database.yml up -d --build

# Commands to only run the backend
start-backend:
	docker-compose -f docker-compose-backend.yml up -d --force-recreate
stop-backend:
	docker-compose -f docker-compose-backend.yml down
reset-backend:
	docker-compose -f docker-compose-backend.yml down -v && docker-compose -f docker-compose-backend.yml up -d --build

# Commands to only run the frontend
start-frontend:
	docker-compose -f docker-compose-frontend.yml up -d --force-recreate
stop-frontend:
	docker-compose -f docker-compose-frontend.yml down
reset-frontend:
	docker-compose -f docker-compose-frontend.yml down -v && docker-compose -f docker-compose-frontend.yml up -d --build

# Commands to start database, backend and frontend together
start-complete:
	docker-compose -f docker-compose-complete.yml up -d --force-recreate
stop-complete:
	docker-compose -f docker-compose-complete.yml down
reset-complete:
	docker-compose -f docker-compose-complete.yml down -v && docker-compose -f docker-compose-complete.yml up -d --build
