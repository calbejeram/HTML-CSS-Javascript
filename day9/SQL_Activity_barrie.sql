-- Write the SQL queries of the following using the Sakila DB:

-- 1. List the top 5 highest rental rate in store 1  
    SELECT title, rental_rate
	FROM
	(SELECT title, rental_rate, film_id FROM film WHERE rental_rate > 4 ORDER BY title LIMIT 0,5)fil
	LEFT JOIN
	(SELECT film_id, store_id FROM inventory)inv
	ON fil.film_id = inv.film_id
	LEFT JOIN
	(SELECT store_id FROM store)sto
	ON inv.store_id = sto.store_id
	WHERE sto.store_id = 1;
-- 2. List films with Trailers 
	SELECT * FROM film WHERE special_features IN ('Trailers') ORDER BY title ;
-- 3. List the films with rental duration between 3 to 5
	SELECT * FROM film WHERE rental_duration BETWEEN 3 AND 5 ORDER BY rental_duration;
-- 4. Display the number of film for each category. 
    SELECT number_of_film, categories
    FROM 
    (SELECT COUNT(filcat.film_id) AS number_of_film, categories
    FROM
		(SELECT film_id FROM film)fil
		LEFT JOIN
		(SELECT film_id, category_id FROM film_category)filcat
		ON fil.film_id = filcat.film_id
		LEFT JOIN
		(SELECT category_id, `name` AS categories FROM category)cat
		ON filcat.category_id = cat.category_id
    GROUP BY categories ORDER BY categories)main;
-- 5. Display the most frequently rented movies in descending order. 
    SELECT title, number_of_rent
    FROM
    (SELECT title, film_id FROM film)fil
    LEFT JOIN
    (SELECT COUNT(inventory_id) as number_of_rent, film_id FROM inventory GROUP BY film_id)inv
    ON fil.film_id = inv.film_id ORDER BY number_of_rent DESC;
-- 6. Display all the movies categorized as family films
	SELECT title, categories
	FROM
		(SELECT film_id, title FROM film)fil
		LEFT JOIN
		(SELECT film_id, category_id FROM film_category)filcat
		ON fil.film_id = filcat.film_id
		LEFT JOIN
		(SELECT category_id, `name` AS categories FROM category)cat
		ON filcat.category_id = cat.category_id
	WHERE categories = 'Family' ORDER BY title;
-- 7. List each film and the number of actors who are listed for that film.
	SELECT title, number_of_actors
	FROM
		(SELECT COUNT(filact.actor_id) AS number_of_actors, title
		FROM
		(SELECT title, film_id FROM film)fil
		LEFT JOIN
		(SELECT film_id, actor_id FROM film_actor)filact
		ON fil.film_id = filact.film_id
		LEFT JOIN
		(SELECT actor_id FROM actor)act
		ON filact.actor_id = act.actor_id
	GROUP BY title)main;
-- 8. List the total paid by each customer. Display alphabetically by last name
	SELECT first_name, last_name, total_payment
	FROM
	(SELECT first_name, last_name, customer_id FROM customer)cus
	LEFT JOIN
	(SELECT customer_id, SUM(amount) AS total_payment FROM payment GROUP BY customer_id)pay
	ON cus.customer_id = pay.customer_id
	ORDER BY last_name;
-- 9. What is that average length of all the films in the sakila DB?
	SELECT title, AVG(length) AS average_lenght FROM film GROUP BY title ORDER BY title;
-- 10. The owner wants to run an email marketing campaign in Canada. Display the names and email addresses of all 
-- Canadian customers.
	SELECT full_name, email, country
	FROM
	(SELECT CONCAT(first_name, ' ', last_name) AS full_name, email, address_id FROM customer)cust
	LEFT JOIN
	(SELECT address_id, city_id FROM address)addr
	ON cust.address_id = addr.address_id
	LEFT JOIN
	(SELECT city_id, country_id FROM city)cit
	ON addr.city_id = cit.city_id
	LEFT JOIN
	(SELECT country_id, country FROM country)coun
	ON cit.country_id = coun.country_id
	WHERE country = 'Canada';
