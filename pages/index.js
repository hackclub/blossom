import HeadObject from '../components/head'
import Nav from '../components/nav';

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-black">
      <HeadObject>
        {/*blossom, hack club blossom, blossom hack club, hack club days of service, hack club days of service blossom, blossom girl scouts, girl scouts coding event, girl scouts hackathon, blossom hackathon, hack club days of service atlanta, days of service atlanta, atlanta georgia girl scouts hackathon, atlanta blossom, georgia days of service*/}
      </HeadObject>
      <Nav />
      <img src="blossomlogo.png" alt="Blossom Logo" />

      <div className="hcdos">a hack club days of service</div>
      <div className="dates">March 16th ~ Atlanta, GA</div>

      
      <div className='containerwutdos'>
        <div className='wutdos'>
          what is a days of service?
          <br></br>
          <br></br>
        blossom is a gender-focused hackathon (social coding event) open to all Girl Scouts! we welcome you come together for a day to discover the joy of code, build awesome projects, and share them with one another.
        </div>
      </div>

      <div className="mysterybox">
        hiii
      </div>
      
    


 
    </div>
  )
}
