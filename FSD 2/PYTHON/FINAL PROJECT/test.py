import unittest
import movies
import directors
from app import connex_app


class TestReturnList(unittest.TestCase):
    '''
        Test read_all method in directors return list type
    '''
    def test_get_directors(self):
        self.assertIs(type(directors.read_all()),list)

    '''
        Test read_all method in movies return list type
    '''
    def test_get_movies(self):
        self.assertIs(type(movies.read_all()),list)


class TestResponse(unittest.TestCase):
    """
    Test for response /api/directors/
    """
    def test_get_all_directors(self):
        connex_app.app.testing = True
        con = connex_app.app.test_client(self)
        response = con.get('/api/directors')
        self.assertEqual(response.status_code, 200)

    """
    Test for response /api/movies/
    """
    def test_get_all_movies(self):
        connex_app.app.testing = True
        con = connex_app.app.test_client(self)
        response = con.get('/api/movies')
        self.assertEqual(response.status_code, 200)


if __name__ == '__main__':
    unittest.main()