import React, { useState } from 'react';
import { router } from '@inertiajs/react'

export default function Show({ post }) {
    return (
        <>
            <h1>{post.title}</h1>
            <hr/>
            <p>{post.description}</p>
          
           
          
                    

        </>
    )
}