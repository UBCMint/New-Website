import Header from '../Assets/Header'
import Footer from '../Assets/Footer'

function Homepage () {
    return(
      <div className='Homepage'>
        <Header />
        
        <h1>Homepage Components</h1>
        <h2>Header 2</h2>
        <h3>Header 3</h3>
        <p>Paragraph</p>

        <div className="Intro"></div>

        <div className="AboutOverview"></div>
        <Footer />
      </div>
    )
  }

export default Homepage;