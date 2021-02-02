import React from "react";
import { Link } from "gatsby";
import './postList.sass'
import PostTags from '../PostTags/PostTags'

function PostListing({ postEdges }) {
    const postList = [];
    postEdges.forEach((postEdge) => {
        postList.push({
            path: postEdge.node.fields.slug,
            tags: postEdge.node.frontmatter.tags,
            cover: postEdge.node.frontmatter.cover,
            title: postEdge.node.frontmatter.title,
            date: postEdge.node.fields.date,
            excerpt: postEdge.node.excerpt,
            timeToRead: postEdge.node.timeToRead,
        });
    });

    return (
        <div>
            {
                /* Your post list here. */
                postList.map((post) => (
                    <div className='post' key={post.path}>
                        <span>{post.date}</span> <span> - Thời gian đọc {post.timeToRead} phút.</span>
                        <br/>
                        <Link className="list-post" to={post.path} >
                        {post.title}
                        </Link>
                        
                        <p>{post.excerpt}</p>
                        <div>img</div>
                        <PostTags tags={post.tags} />
                    </div>

                ))
            }
        </div>
    );
}

export default PostListing;
