import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchBoards } from '../api/boardApi';
import { fetchLists } from '../api/listApi';
import Form from '../components/Form';
import ListItem from '../components/ListItem';
import Loading from '../components/ui/Loading';

const Details = () => {
    const { boardId } = useParams();
    const { data: lists, isError, isLoading, error } = useQuery(['lists', boardId], () => fetchLists({ boardId: boardId }));

    const { data: board } = useQuery(['board', boardId], () => fetchBoards({ id: boardId }));

    const [isClicked, setIsClicked] = useState(false);

    return (
        <>
            {isLoading && <Loading />}
            {isError && alert(error.message)}
            <div>
                <h1>Available Lists from {board?.title}</h1>
                <div className='listDisplay'>
                    {
                        lists?.map(item => <ListItem list={item} key={item.id} />)
                    }
                    {isClicked && <Form details={true} setIsClicked={setIsClicked} />}
                    {!isClicked && <button onClick={() => setIsClicked(true)}>Add New List</button>}
                </div>
            </div>

        </>
    );
};

export default Details;