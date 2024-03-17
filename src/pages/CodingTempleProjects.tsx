import PermanantProjects from "../components/PermanantProjectsGrid"
import Background from '../assets/images/Mt_Rainier.jpg';

function CodingTempleProjects() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}} >
      <PermanantProjects />
    </div>
  )
}

export default CodingTempleProjects


