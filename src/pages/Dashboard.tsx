import DataTable from "../components/Datatable"
import Background from '../assets/images/Mt_Rainier.jpg';

function Dashboard() {
  return (
    <div style={{ backgroundImage: `url(${Background})`}}>
      <DataTable />
    </div>
  )
}

export default Dashboard


