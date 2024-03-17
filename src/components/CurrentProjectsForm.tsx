import Button from "./Button";
import Input from "./Input";

import { useForm } from 'react-hook-form';
import { server_calls } from "../api/server";
import { useDispatch, useStore } from "react-redux";
import { chooseProjectName, chooseDescription, chooseGithubLink, chooseProgrammingLanguages } from "../redux/slices/RootSlice";

interface CurrentProjectsFormProps {
  id?: string[]
}

const CurrentProjectsForm = (props: CurrentProjectsFormProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = async (data: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id);
    console.log(data);
    if (props.id && props.id.length > 0) {
      await server_calls.update(props.id[0], data);
      console.log(`Updated: ${data.project_name} ${data.description} ${props.id}`);
      setTimeout(() => { window.location.reload() }, 500);
    } else {
      dispatch(chooseProjectName(data.project_name));
      dispatch(chooseDescription(data.description));
      dispatch(chooseGithubLink(data.github_link));
      dispatch(chooseProgrammingLanguages(data.programming_languages));

      server_calls.create(store.getState())
      setTimeout(() => {window.location.reload()}, 500)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="project_name">Project Name</label>
          <Input {...register('project_name')} name='project_name' placeholder="Project Name" />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <Input {...register('description')} name='description' placeholder="Description" />
        </div>
        <div>
          <label htmlFor="github_link">Github Link</label>
          <Input {...register('github_link')} name='github_link' placeholder="Github Link" />
        </div>
        <div>
          <label htmlFor="programming_languages">Primary Programming Language</label>
          <Input {...register('programming_languages')} name='programming_languages' placeholder=" Primary Programming Language" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white">
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default CurrentProjectsForm;
