import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { createBoard } from '../api/boardApi';
import { createList } from '../api/listApi';
import Loading from './ui/Loading';

const Form = ({ details, setIsClicked }) => {
    const queryClient = useQueryClient();
    const [input, setInput] = useState("");

    const {boardId} = useParams();

    /// for creating Board
    const { isError, error, isLoading, mutate } = useMutation(newBoard => createBoard(newBoard), {
        onSuccess: () => {
            queryClient.invalidateQueries(['boards']);
        },
    });

    const createBoardHandler = (e) => {
        e.preventDefault();
        const boardObj = {
            id: Date.now() + '',
            title: input,
            createdAt: new Date().toLocaleString(),
        };
        mutate(boardObj);
        setInput("");
    };

    ///for creating List

    const {mutate:addList} = useMutation(newList => createList(newList), {
        onSuccess: () => {
            queryClient.invalidateQueries(['lists']);
        },
    });

    const createListHandler = (e) => {
        e.preventDefault();
        const listObj = {
            id: Date.now() + '',
            title: input,
            boardId: boardId,
            createdAt: new Date().toLocaleString(),
        };
        addList(listObj);
        setInput("");
    };

    return (
        <>
            {isLoading && <Loading />}
            {isError && alert(error.message)}
            <form className={details ? 'detailsForm' : 'form'} onSubmit={(e) => details?createListHandler(e):createBoardHandler(e)}>
                <input type="text" placeholder={details ? "Create New List" : "Create New Board"} value={input} onChange={(e) => setInput(e.target.value)} />
                <button type='submit'>{details ? "Create List" : "Create Board"}</button>
                {details && <button onClick={() => setIsClicked(false)}>Close</button>}
            </form>
        </>

    );
};

export default Form;