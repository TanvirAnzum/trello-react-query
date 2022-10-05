import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { fetchLists } from '../api/listApi';


const Board = ({ index, board }) => {
    const { data: lists } = useQuery(['lists', board.id], () => fetchLists({ boardId: board.id }));
    console.log(lists);
    return (
        <>
            <p> {index + 1}</p>
            <h1>{board.title}</h1>
            <p>Created At: {board.createdAt}</p>
            <p>Number of Lists: {lists?.length}</p>
        </>
    );
};

export default Board;