import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';
import { fetchBoards } from '../api/boardApi';
import Board from '../components/Board';
import Form from '../components/Form';
import Loading from '../components/ui/Loading';

const Home = () => {
    const { data: boards, isError, isLoading, error } = useQuery(['boards'], fetchBoards);

    return (
        <>
            <Form />
            {isLoading && <Loading />}
            {isError && alert(error.message)}
            <h2 className='title'>Existing Boards</h2>
            <div className="container">
                {
                    boards?.map((board, index) => (
                        <Link className="boardCard" to={`/${board.id}`} key={board.id}>
                            <Board index={index} board={board} />
                        </Link>
                    ))
                }
            </div >
        </>

    );
};

export default Home;