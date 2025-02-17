FROM mysql

ENV MYSQL_DATABASE=book_database
ENV MYSQL_ROOT_PASSWORD=1234

EXPOSE 3306:3306

COPY ./init.sql /docker-entrypoint-initdb.d/