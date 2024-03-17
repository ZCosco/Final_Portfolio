import { useState, useEffect } from 'react'
import { server_calls } from '../api/server'
import { ProjectType } from './ProjectType'; // Import the ProjectType interface

export const useGetData = () => {
    const [ projectData, setData ] = useState<ProjectType[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { projectData, getData:handleDataFetch}
}


export const useGetCTData = () => {
    const [ ctprojectData, setData ] = useState<ProjectType[]>([])

    async function handleDataFetch(){
        const result = await server_calls.get_coding_temple_projects();
        setData(result)
    }

    useEffect( () => {
        handleDataFetch();
    }, [])

    return { ctprojectData, getData:handleDataFetch}
}