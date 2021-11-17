from flask import make_response, abort
from config import db
from models import Director, Movie, DirectorSchema


def read_all():
    """
        This function responds to a request for /api/directors
        with the complete list of directors, sorted descending by movie id
        :return:                json list of all directors
    """
    directors = Director.query.order_by(Director.id.desc()).limit(10)

    director_schema = DirectorSchema(many=True)
    data = director_schema.dump(directors)
    return data


def read_one(director_id):
    """
        This function responds to a request for
        /api/director/{director_id}
        with a return movie by id
        :param movie_id:         Id of the movie
        :return:                 json string of director contents
    """
    director = (
        Director.query.filter(Director.id == director_id)
        .outerjoin(Movie)
        .one_or_none()
    )

    if director is not None:

        director_schema = DirectorSchema()
        data = director_schema.dump(director)
        return data

    else:
        abort(404, f"Director not found for id: {director_id}")


def get_by_department(department):
    """
        This function responds to a request for
        /api/director/department/{department}
        with a return director by department
        :param department:       department of the director
        :return:                 json string of director contents
    """
    directors = (Director.query.filter(
        Director.department.like(department)).limit(10))

    if directors is not None:
        director_schema = DirectorSchema(many=True)
        data = director_schema.dump(directors)
        return data

    else:
        abort(404, f"Director not found for department: {department}")


def get_by_name(name):
    """
        This function responds to a request for
        /api/director/{name}
        with a return director by name
        :param name:        name of the director
        :return:            json string of director contents
    """
    search = "%{}%".format(name)

    directors = (Director.query.filter(
        Director.name.like(search)).limit(100))

    if directors is not None:
        director_schema = DirectorSchema(many=True)
        data = director_schema.dump(directors)
        return data

    else:
        abort(404, f"Director not found for name: {name}")


def create(directors):
    """
        This function creates a new director related to the passed in director id.
        responds to a request for
        POST api/directors
        :param directors:         The JSON containing the movie data
        :return:                  201 on success
    """
    schema = DirectorSchema()
    new_director = schema.load(directors, session=db.session)

    db.session.add(new_director)
    db.session.commit()

    data = schema.dump(new_director)

    return data, 201


def update(director_id, directors):
    """
        This function updates an existing director related to the passed in
        director id.
        responds to a request for
        PUT api/director/{director_id}
        :param director_id:       Id of the director
        :param directors:         The JSON containing the director data
        :return:                  201 on success
    """
    update_director = Director.query.filter(
        Director.id == director_id
    ).one_or_none()

    if update_director is not None:

        schema = DirectorSchema()
        update = schema.load(directors, session=db.session)

        update.id = update_director.id
        db.session.merge(update)
        db.session.commit()
        data = schema.dump(update_director)

        return data, 200

    else:
        abort(404, f"Director not found for id: {director_id}")


def delete(director_id):
    """
        This function deletes an existing director related to the passed in
        director id.
        responds to a request for
        DELETE api/director/{director_id}
        :param director_id:       id of the director
        :return:                  200 on success
    """
    director = Director.query.filter(
        Director.id == director_id).one_or_none() 

    if director is not None:
        db.session.delete(director)
        db.session.commit()
        return make_response(f"director {director_id} deleted", 200)

    else:
        abort(404, f"Direcor not found for id: {director_id}")