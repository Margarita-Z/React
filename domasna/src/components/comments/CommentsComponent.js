import React from 'react';
import PropTypes from 'prop-types';

export function CommentsComponent(props) {

    console.log(props)
    return (
        <div id="comments-component">
            <table border="1">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {props.comments.map(comment=>{
                        return(
                            <tr key={comment.id}>
                                <td>
                                    {comment.name}
                                </td>
                                <td>
                                    {comment.id}
                                </td>
                                <td>
                                    {comment.email}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

CommentsComponent.propTypes = {
    comments: PropTypes.array.isRequired,
    error: PropTypes.string
}