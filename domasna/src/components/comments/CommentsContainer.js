import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {CommentsComponent} from './CommentsComponent';
import {commentsOperations} from './duck';

export default function CommentsContainer(){

    const comments = useSelector(state=> state.commentsReducer.comments);
    const error = useSelector(state=> state.commentsReducer.error);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(commentsOperations.fetchComments());
    },[dispatch])

    return(
        <div id="comments-container">
            <CommentsComponent 
                comments={comments}
                error={error}
            />
        </div>
    )
}