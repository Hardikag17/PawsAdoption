import '../styles/Footer.css';
import logo from '../images/logo.png';
import facebook from '../images/facebook .png';
import twitter from '../images/twitter.png';
import instagram from '../images/instagram .png';
function Footer() {
  return (
    <div id='footer'>
      <footer class='footer1'>
        <div>
          <span>© 2021 Copyright</span>
        </div>

        <div class='d-flex justify-content-center line2'>
          <div>
            <img class='a' src={logo} alt='Logo' />
          </div>

          <div>
            <center>
              <table>
                <tr>
                  <td colSpan='3'> Join Us On</td>
                </tr>
                <tr>
                  <td>
                    <img src={facebook} alt='Facebook' />
                  </td>
                  <td>
                    <img src={instagram} alt='Instagram' />
                  </td>
                  <td>
                    <img src={twitter} alt='Twitter' />
                  </td>
                </tr>
              </table>
            </center>
          </div>
        </div>

        <br></br>
        <p class='line2'>
          ' Paws Adoption ' is a nonprofit animal shelter based out of Delhi
          NCR. ' Paws Adoption ' is funded solely from adoption fees, donations
          from the public, and our own fundraising efforts.
          <br></br>
          <br></br>
          Our mission is to serve the people and animals of Delhi NCR and
          neighbouring cities by providing safe, temporary shelter and care for
          abandoned or otherwise homeless cats and dogs, and to reduce pet
          overpopulation by means of spay and neuter, education, and community
          outreach. We have been fulfilling our mission since 2021.
        </p>
        <div class=' line2'>
          <br></br>
          <br></br>
          <h5>Contact Us</h5>
          <br></br>
          <div class='d-flex justify-content-evenly'>
            <span>
              <p> Hardik Agarwal</p>
              <p>
                <a href='mailto:hardikag17@gmil.com'>hardikag17@gmil.com</a>
              </p>
            </span>
            <span>
              <p> Suryashankar Das</p>
              <p>
                <a href='mailto:hardikag17@gmil.com'>
                  suryashankardas.2002@gmil.com
                </a>
              </p>
            </span>
            <span>
              <p> Aman Nagpal</p>
              <p>
                <a href='mailto:amannagpal2468@gmail.com'>
                  amannagpal2468@gmail.com
                </a>
              </p>
            </span>
          </div>
        </div>

        <br></br>
      </footer>
    </div>
  );
}

export default Footer;
