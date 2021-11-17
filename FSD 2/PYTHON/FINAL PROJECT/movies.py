from flask import make_response, abort
from config import db
from models import Director, Movie, MovieSchema


def read_all():
    """
        This function responds to a request for /api/movies
        with the complete list of movies, sorted descending by movie id
        :return:                json list of all movies
    """
    movies = Movie.query.order_by(Movie.id.desc()).limit(10)

    movie_schema = MovieSchema(many=True)
    data = movie_schema.dump(movies)
    return data


def read_one(director_id, movie_id):
    """
        This function responds to a request for
        /api/directors/{director_id}/movies/{movie_id}
        with one matching movie for the associated director
        :param director_id:      Id of director the movie is related to
        :param movie_id:         Id of the movie
        :return:                 json string of movie contents
    """
    movie = (
        Movie.query.join(Director, Director.id == Movie.director_id)
        .filter(Director.id == director_id)
        .filter(Movie.id == movie_id)
        .one_or_none()
    )

    if movie is not None:
        movie_schema = MovieSchema()
        data = movie_schema.dump(movie)
        return data

    else:
        abort(404, f"Movie not found for id: {movie_id}")


def get_by_id(movie_id):
    """
        This function responds to a request for
        /api/movies/{movie_id}
        with a return movie by id
        :param movie_id:         Id of the movie
        :return:                 json string of movie contents
    """
    movies = (Movie.query.filter(Movie.id == movie_id)).one_or_none()

    
    # if movie_id.isnumeric():
    if movies is not None:
        movie_schema = MovieSchema()
        data = movie_schema.dump(movies)
        return data

    else:
        abort(404, f"Movie not found for id : {movie_id}")
    # else:
    #     return "salah ya"


def get_by_popularity(popularity):
    """
        This function responds to a request for
        /api/movies/popularity/{popularity}
        with a return movie by popularity, sorted ascending by popularity 
        :param popularity:       popularity of the movie
        :return:                 json string of movie contents
    """
    movies = (Movie.query.filter(
        Movie.popularity >= popularity).order_by(Movie.popularity.asc()).limit(10))

    if movies is not None:
        director_schema = MovieSchema(many=True)
        data = director_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for popularity: {popularity}")


def get_by_rating(rating):
    """
        This function responds to a request for
        /api/movies/rate/{rating}
        with a return movie by vote_average, sorted ascending by vote_average 
        :param rating:       vote_average of the movie
        :return:             json string of movie contents
    """
    movies = (Movie.query.filter(
        Movie.vote_average >= rating).order_by(Movie.vote_average.asc()))

    if movies is not None:
        director_schema = MovieSchema(many=True)
        data = director_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for: {rating}")


def get_by_top_rating(range):
    """
        This function responds to a request for
        /api/movies/top/{range}
        with a return movie by vote_average, sorted descending by vote_average 
        :param range:       limit order of the movie
        :return:            json string of movie contents
    """
    movies = (Movie.query.order_by(Movie.vote_average.desc()).limit(range))

    if movies is not None:
        director_schema = MovieSchema(many=True)
        data = director_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for rate : {range}")


def get_by_title(title):
    """
        This function responds to a request for
        /api/movies/title/{title}
        with a return movie by title
        :param title:       title of the movie
        :return:            json string of movie contents
    """
    search = "%{}%".format(title)
# 
    movies = (Movie.query.filter(
        Movie.title.like(search)).limit(10))

    if movies is not None:
        movie_schema = MovieSchema(many=True)
        data = movie_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for title: {title}")


def get_by_after_date(date):
    """
        This function responds to a request for
        /api/movies/release/after/{date}
        with a return movie by release_date after selected date, sorted ascending by release_date
        :param date:        release_date of the movie
        :return:            json string of movie contents
    """
    movies = (Movie.query.filter(
        Movie.release_date >= date).order_by(Movie.release_date.asc()).limit(10))

    if movies is not None:
        director_schema = MovieSchema(many=True)
        data = director_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for date : {date}")


def get_by_before_date(date):
    """
        This function responds to a request for
        /api/movies/release/before/{date}
        with a return movie by release_date before selected date, sorted descending by release_date
        :param date:        release_date of the movie
        :return:            json string of movie contents
    """
    movies = (Movie.query.filter(
        Movie.release_date <= date).order_by(Movie.release_date.desc()).limit(10))

    if movies is not None:
        director_schema = MovieSchema(many=True)
        data = director_schema.dump(movies)
        return data

    else:
        abort(404, f"movie not found for date : {date}")


def get_by_between_date(date1, date2):
    """
        This function responds to a request for
        /api/movies/release/{date1}/{date2}
        with a return movie by release_date between selected date, sorted ascending by release_date
        :param date1:        release_date of the movie
        :param date2:        release_date of the movie
        :return:             json string of movie contents
    """
    movies = (Movie.query.filter(
        Movie.release_date >= date1).filter(Movie.release_date <= date2).order_by(Movie.release_date.asc()).limit(10))

    if(date1 < date2):

        if movies is not None:
            director_schema = MovieSchema(many=True)
            data = director_schema.dump(movies)
            return data

        else:
            abort(
                404, f"movie not found for date : {date1} - {date2}")
    else:
        return "date1 cannot exceed date2"


def create(director_id, movie):
    """
        This function creates a new movie related to the passed in movie id.
        responds to a request for
        POST api/director/{director_id}/movies
        :param director_id:       Id of the director the movie is related to
        :param movie:             The JSON containing the movie data
        :return:                  201 on success
    """
    director = Director.query.filter(
        Director.id == director_id).one_or_none()

    if director is None:
        abort(404, f"director not found for id: {director_id}")

    schema = MovieSchema()
    new_movie = schema.load(movie, session=db.session)

    director.movies.append(new_movie)
    db.session.commit()

    data = schema.dump(new_movie)

    return data, 201


# def create2(movie):

#     schema = MovieSchema()
#     new_movie = schema.load(movie, session=db.session)

#     db.session.add(new_movie)
#     db.session.commit()

#     data = schema.dump(new_movie)

#     return data, 201


def update(director_id, movie_id, movie):
    """
        This function updates an existing movie related to the passed in
        movie id.
        responds to a request for
        PUT api/director/{director_id}/movies/{movie_id}
        :param director_id:       Id of the director the movie is related to
        :param movie_id:          Id of the movie
        :param movie:             The JSON containing the movie data
        :return:                  201 on success
    """
    update_movie = (
        Movie.query.filter(Director.id == director_id)
        .filter(Movie.id == movie_id)
        .one_or_none()
    )

    if update_movie is not None:

        schema = MovieSchema()
        update = schema.load(movie, session=db.session)

        update.director_id = update_movie.director_id
        update.id = update_movie.id

        db.session.merge(update)
        db.session.commit()

        data = schema.dump(update_movie)

        return data, 200

    else:
        abort(404, f"Movie not found for id: {movie_id}")


def delete(director_id, movie_id):
    """
        This function deletes an existing movie related to the passed in
        movie id.
        responds to a request for
        DELETE api/director/{director_id}/movies/{movie_id}
        :param director_id:       id of the director the movie is related to
        :param movie_id:          id of the movie
        :return:                  200 on success
    """
    movie = (
        Movie.query.filter(Director.id == director_id)
        .filter(Movie.id == movie_id)
        .one_or_none()
    )
    if movie is not None:
        db.session.delete(movie)
        db.session.commit()
        return make_response(
            "movies {movie_id} deleted".format(movie_id=movie_id), 200
        )

    else:
        abort(404, f"Movie not found for id: {movie_id}")


def delete2(movie_id):
    """
        This function deletes an existing movie related to the passed in
        movie id.
        responds to a request for
        DELETE api/movies/{movie_id}
        :param movie_id:          id of the movie
        :return:                  200 on success
    """
    movie = Movie.query.filter(Movie.id == movie_id).one_or_none() 

    if movie is not None:
        db.session.delete(movie)
        db.session.commit()
        return make_response(f"movie {movie_id} deleted", 200)

    else:
        abort(404, f"movie not found for id: {movie_id}")