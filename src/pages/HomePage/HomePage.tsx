import { Calculator } from "../../components/Calculator/Calculator"
import { ErrorBtn } from "../../components/ErrorBoundary/ErrorBtn"

function HomePage() {
    return (
      <div className='app'>
        {/* <ErrorBtn/> */}
        <Calculator />
      </div>
    )
  }
  
  export default HomePage