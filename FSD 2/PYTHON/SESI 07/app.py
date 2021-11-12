import webbrowser
from flask import Flask, render_template, request
from author_book import author_book
from markupsafe import escape

app = Flask(__name__)


@app.route('/home')
@app.route('/')
def home():
    return render_template('index.html')


@app.route('/author', method=['GET', 'POST'])
def author():
    if 'author_id' in request.form:
        author_book[request.form['author_id']] = []  # empty list

        # return 'Author Bio'
        # return
    return render_template('author_id')


@app.route('/book/<int:author_id>')
def books(author_id):
    # html = f'List of Books authored by {author_id}:'
    # html += '<ul> <li>intro to lyfe</li> <li>intro to lyfe 2</li> <li>intro to lye3</li></ul>'
    # return html
    # return render_template('book.html', template_var_author=author_id)
    # if author_id != 400:
    if len(author_book[author_id]) == 0:
        return render_template('book.html', author_id=author_id)
    else:
        return render_template('book.html', author_id=author_id, book_list=author_book[author_id])

    # return render_template('book.html', author_id=author_id, book_list=author_book[author_id])
    # return render_template('book.html', author_id=author_id)


# def hello_world():
#     sum = a = 1999

#     page_content = "<i>helloooooo</i>"

#     # return '<h1>Hello, Worlddddd!</h1> {}'.format(sum)

#     return page_content

# @app.route('/<name>')
# def hello(name):
#     # return "Hello, {name}"
#     return f"Hello, { escape(name) }"

# apakah dijalankan sebagai standalon script


if __name__ == '__main__':
    webbrowser.open_new('http://127.0.0.1:5000/')
    app.run(debug=True)
