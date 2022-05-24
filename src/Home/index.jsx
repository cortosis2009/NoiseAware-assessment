import '../UI/Theme/main.css'
import Header from '../Header/Header'
import PageTitle from '../Header/PageTitle'
import DevicesParent from '../DeviceCard/DevicesParent'

function Home() {
  return (
    <div className="app-body">
      <Header/>
      <PageTitle/>
      <DevicesParent/>
    </div>
  )
}

export default Home
