FROM ubuntu_symfony

WORKDIR /home/hero-app

ADD . .

#
RUN apt-get install php-sqlite3 --yes
RUN symfony server:ca:install

CMD symfony serve

EXPOSE 8000
