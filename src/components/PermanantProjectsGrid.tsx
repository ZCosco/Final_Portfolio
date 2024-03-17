import { Grid, Paper, Typography, Button } from '@mui/material';
import { useGetCTData } from '../custom-hooks/FetchData';

const PermanentProjectsGrid = () => {
    const { ctprojectData } = useGetCTData();

    return (
        <div className="container mx-auto mb-10">
            <h2 className="p-8 bg-black text-white my-2 rounded text-6xl text-center">Permanent Projects</h2>
            <Grid container spacing={3}>
                {ctprojectData.map((project) => (
                    <Grid item xs={4} sm={4} md={6} lg={6} key={project.id}>
                        <Paper elevation={3} className="p-6 mt-8">
                            {/* Use url() function for image source */}
                            <img src={`url('../src/assets/images/CT.jpg')`} className="mx-auto mb-3" style={{ maxWidth: '100%', height: 'auto' }} />
                            <Typography variant="h3" gutterBottom align="center">{project.project_name}</Typography>
                            <Typography variant="h5" gutterBottom align="center" className="my-2">Coding Languages: {project.programming_languages}<br></br><br></br></Typography>
                            <Typography variant="h6" gutterBottom align="center" className="my-2">Project Description: <br></br>{project.description}</Typography>
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
    );
}

export default PermanentProjectsGrid;
