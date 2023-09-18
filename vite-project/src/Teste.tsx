import React, {useEffect, useState} from 'react';
import { IPost } from './api/post/getAllPosts';
import { apiRoutes } from './api';

export default function Teste(){
    const [posts, setPosts] = useState([] as IPost[]);

    const getPostsFromApi = async () => {
        const response = await apiRoutes.getAllPosts();
        setPosts(response.data.posts); 
    }

    useEffect(() => {
        getPostsFromApi();
    }, [])

    return (
        <div className="Teste">
            <div>{JSON.stringify(posts)}</div>
        </div>
    );
}

