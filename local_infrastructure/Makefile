# Commands to only run the database
start-database:
	docker-compose -f docker-compose-database.yml up -d --force-recreate
stop-database:
	docker-compose -f docker-compose-database.yml down
reset-database:
	docker-compose -f docker-compose-database.yml down -v && docker-compose -f docker-compose-database.yml up -d --build
