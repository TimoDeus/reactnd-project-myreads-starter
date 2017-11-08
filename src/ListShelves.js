import React from 'react';
import {Link} from 'react-router-dom';
import ListBooks from './ListBooks';
import PropTypes from 'prop-types';

const ListShelves = props => {
	const {shelves, addBookToShelf} = props;
	const shelvesWithBooks = shelves.filter(shelf => shelf.books.length);
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<div>
					{shelvesWithBooks.map(({id, name, books}) =>
						<div className="bookshelf" key={id}>
							<h2 className="bookshelf-title">{name}</h2>
							<div className="bookshelf-books">
								<ListBooks books={books} addBookToShelf={addBookToShelf} />
							</div>
						</div>
					)}
				</div>
			</div>
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		</div>);
};

ListShelves.propTypes = {
	addBookToShelf: PropTypes.func.isRequired,
	shelves: PropTypes.array.isRequired
};

export default ListShelves;
