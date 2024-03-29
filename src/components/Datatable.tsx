import React, { useState } from 'react';
import Modal from "./Modal";
import { server_calls } from '../api/server';
import { useGetData } from '../custom-hooks/FetchData';
import { Grid, Paper, Typography, Checkbox, Button } from '@mui/material';
import AuthChecker from '../auth/AuthChecker';

const DataTable = () => {
    const { projectData, getData } = useGetData();
    const [selectionModel, setSelectionModel] = useState<string[]>([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`);
        setTimeout(() => {window.location.reload()}, 500)
    }

    const handleSelectionChange = (id: string) => {
        const selectedIndex = selectionModel.indexOf(id);
        let newSelectionModel: string[] = [];

        if (selectedIndex === -1) {
            newSelectionModel = newSelectionModel.concat(selectionModel, id);
        } else if (selectedIndex === 0) {
            newSelectionModel = newSelectionModel.concat(selectionModel.slice(1));
        } else if (selectedIndex === selectionModel.length - 1) {
            newSelectionModel = newSelectionModel.concat(selectionModel.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelectionModel = newSelectionModel.concat(
                selectionModel.slice(0, selectedIndex),
                selectionModel.slice(selectedIndex + 1)
            );
        }

        setSelectionModel(newSelectionModel);
    }

    return (
        <AuthChecker>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            {!open && (
            <div className="flex flex-row justify-center">
                <div>
                    <button
                        className="p-8 text-3xl bg-green-600 text-white rounded m-5 hover:bg-slate-800 hover:text-white"
                        onClick={handleOpen}
                    >
                        Add new Project
                    </button>
                </div> 
                <button onClick={handleOpen} className="p-8 text-3xl bg-yellow-400 text-white rounded m-5  hover:bg-slate-800 hover:text-white" >Update Project</button>
                <button onClick={deleteData} className="p-8 text-3xl bg-red-600 text-white rounded m-5 hover:bg-slate-800 hover:text-white" >Delete Project</button>
            </div>
            )}
            {!open && (
            <div className="container mx-auto ">
                <h2 className="p-8 bg-black text-white my-2 rounded text-6xl text-center">Current Projects</h2>
                <Grid container spacing={3}>
                    {projectData.map((project) => (
                        <Grid item xs={4} sm={4} md={6} lg={6} key={project.id}>
                            <Paper elevation={3} className="p-6 mt-8 mb-10">
                                <Checkbox 
                                    checked={selectionModel.includes(project.id)}
                                    onChange={() => handleSelectionChange(project.id)}
                                />
                                <ErrorBoundary>
                                    <img
                                        src={`https://raw.githubusercontent.com/ZCosco/Final_Portfolio/main/src/assets/images/${project.programming_languages}.jpg`}
                                        className="mx-auto mb-3"
                                        style={{ maxWidth: '40%', height: 'auto' }}
                                        alt={project.programming_languages} 
                                    />
                                </ErrorBoundary>
                                <Typography variant="h3" gutterBottom align="center">{project.project_name}</Typography>
                                <Typography variant="h5" gutterBottom align="center" className="my-2">{project.programming_languages}</Typography>
                                <Typography variant="h6" gutterBottom align="center" className="my-2">{project.description}</Typography>
                                <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        href={project.github_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Repository
                                    </Button>
                                </div>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </div>
            )}
        </AuthChecker>
    )
}

// ErrorBoundary component to catch and handle image loading errors
const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
    const [hasError, setHasError] = useState(false);

    const handleImageError = () => {
        setHasError(true);
    };

    return (
        <>
            {hasError ? (
                <img
                    src="https://raw.githubusercontent.com/ZCosco/Final_Portfolio/main/src/assets/images/default.jpg"
                    className="mx-auto mb-3"
                    style={{ maxWidth: '40%', height: 'auto' }}
                    alt="Default" 
                />
            ) : (
                <img
                    src={(children as React.ReactElement).props.src}
                    className={(children as React.ReactElement).props.className}
                    style={(children as React.ReactElement).props.style}
                    alt={(children as React.ReactElement).props.alt}
                    onError={handleImageError}
                />
            )}
        </>
    );
};

export default DataTable;
