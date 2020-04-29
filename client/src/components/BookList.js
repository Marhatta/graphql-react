import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const GET_BOOKS = gql`
    {
        books{
            name
            id
        }
    }
`;


function BookList() {
    const { loading, error, data } = useQuery(GET_BOOKS);
    console.log(loading,error,data);
  return (
    <div>
        <ul id='book-list'>
            <li>Book name</li>
        </ul>
    </div>
  );
}

export default BookList;
