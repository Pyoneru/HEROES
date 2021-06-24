FROM niemczukpiotr/ubuntu_symfony

COPY . /usr/src/app
WORKDIR /usr/src/app
EXPOSE 8000

RUN apt-get install php-sqlite3 --yes
RUN composer install
RUN php bin/console doctrine:fixtures:load --env=dev

ENTRYPOINT ["symfony", "serve"]
