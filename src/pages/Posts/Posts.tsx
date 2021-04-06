import React from 'react';
import Search from '../../components/Search/Search';
import Categories from '../../components/Categories/Categories';

export default function Posts() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
                    <h1 className="my-4">Posts list</h1>

                    <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                                nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
                                voluptate voluptatibus possimus, veniam magni quis!
                            </p>
                            <a href="#" className="btn btn-primary">
                                Read More &rarr;
                            </a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2020 by
                            <a href="#">Start Bootstrap</a>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                                nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
                                voluptate voluptatibus possimus, veniam magni quis!
                            </p>
                            <a href="#" className="btn btn-primary">
                                Read More &rarr;
                            </a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2020 by
                            <a href="#">Start Bootstrap</a>
                        </div>
                    </div>

                    <div className="card mb-4">
                        <img className="card-img-top" src="http://placehold.it/750x300" alt="Card image cap" />
                        <div className="card-body">
                            <h2 className="card-title">Post Title</h2>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque,
                                nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero
                                voluptate voluptatibus possimus, veniam magni quis!
                            </p>
                            <a href="#" className="btn btn-primary">
                                Read More &rarr;
                            </a>
                        </div>
                        <div className="card-footer text-muted">
                            Posted on January 1, 2020 by
                            <a href="#">Start Bootstrap</a>
                        </div>
                    </div>

                    <ul className="pagination justify-content-center mb-4">
                        <li className="page-item">
                            <a className="page-link" href="#">
                                &larr; Older
                            </a>
                        </li>
                        <li className="page-item disabled">
                            <a className="page-link" href="#">
                                Newer &rarr;
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="col-md-4">
                    <Search />
                    <Categories />
                </div>
            </div>
        </div>
    );
}
