import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        project_name: "Project Name",
        description: "Description",
        github_link: "Github Link",
        programming_languages: "Programming Languages",
    },
    reducers: {
        chooseProjectName: (state, action) => {
            state.project_name = action.payload;
        },
        chooseDescription: (state, action) => {
            state.description = action.payload;
        },
        chooseGithubLink: (state, action) => {
            state.github_link = action.payload;
        },
        chooseProgrammingLanguages: (state, action) => {
            state.programming_languages = action.payload;
        }
    }
});

export const reducer = rootSlice.reducer;
export const { chooseProjectName, chooseDescription, chooseGithubLink, chooseProgrammingLanguages,} = rootSlice.actions;
