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

    const renderMedia = (post: IPost) => {
    if (post.mediaUrl) {
        // Check if the media is an image based on its file extension
        const isImage = /\.(jpg|jpeg|png|gif)$/i.test(post.mediaUrl);

        if (isImage) {
        return (
            <img src={post.mediaUrl} alt={post.textContent || ''} />
        );
        } else {
        // It's assumed to be a video (adjust this logic if needed)
        return (
            <video controls>
            <source src={post.mediaUrl} type="video/mp4" />
            Your browser does not support the video tag.
            </video>
        );
        }
    }

    return null; // No media to render
    };

    return (
    <div className="Teste">
        <div>
        {posts.map((post) => (
            <div key={post.mediaFileId}>
            {renderMedia(post)}
            {post.textContent && <p>{post.textContent}</p>}
            </div>
        ))}
        </div>
    </div>
    );
}

