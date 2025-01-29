install:
	bin/composer install

start:
	php -S localhost:8088

test:
	# cd tst && ../vendor/bin/phpunit
	./vendor/bin/phpunit tst

lint :
	find . -type f -name '*.php' -exec php -l {} \n; ./vendor/bin/phpmd ./lib ansi codesize,unusedcode,naming,cleancode,controversial; ./vendor/bin/phpcs --extensions=php ./lib/;


