import './App.css';
import {useEffect, useState} from 'react';

function App() {

  const [articles, setarticles] = useState([])

  useEffect(() => {
    fetch(`/articles`)
      .then(response => response.json())
      .then(result => setarticles(result))
  }, [])

  return (
    <>
      <div class="container py-4">
        <header class="pb-3 mb-4 border-bottom">
          <a href="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">Assignments 4 React</span>
          </a>
        </header>

        <div class="jumbotron jumbotron bg-cover mb-3">
          <div class="overlay"></div>
          <div class="container">
            <h1 class="display-3 mb-1">Flask Reactjs</h1>
            <p class="lead">By <span>030</span></p>
          </div>
        </div>

      <div class="row align-items-md-stretch">
        {
              articles.map(article => (
                <div className="col-md-4">
                  <div className="card"  style={{width: 20 +'rem'}} key={article.id}>
                    <img src={"https://source.unsplash.com/300x300?reactjs"} className="card-img-top" alt="..."/>
                    <div className="card-body">
                      <h5 className="card-title">{article.title}</h5>
                      <p className="card-text el">{article.body}</p>
                      <button type="button" className="btn btn-primary"  data-bs-toggle="modal" data-bs-target="#exampleModal">Read more</button>
                    </div>
                  </div>
                </div>
              ))
            }
        
      </div>

      <footer className="pt-3 mt-4 text-muted border-top text-center">
        Assignments 4 React &copy; 2021
      </footer>

      {/* <!-- Modal --> */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              COMING SOON ^_^
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
  </div>
    </>
  );
}

export default App;
