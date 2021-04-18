import logo from '../images/logo.png';
function Footer() {
  return (
    <div id='footer'>
      <footer class='bg-light text-center text-black'>
        {/* <!-- Grid container --> */}
        <div class='container p-4'>
          <section class='mb-4'>
            <h4>About Us</h4>
            <p>
              ' Paws Adoption ' is a nonprofit animal shelter based out of Delhi
              NCR. ' Paws Adoption ' is funded solely from adoption fees,
              donations from the public, and our own fundraising efforts.
              <br></br>
              <br></br>
              Our mission is to serve the people and animals of Delhi NCR and
              neighbouring cities by providing safe, temporary shelter and care
              for abandoned or otherwise homeless cats and dogs, and to reduce
              pet overpopulation by means of spay and neuter, education, and
              community outreach. We have been fulfilling our mission since
              2021.
            </p>
          </section>
        </div>

        <div className='container-fluid'>
          <h4>Contact Us</h4>
          <div className='row row-12'>
            <div className='col col-md-4 p-3'>
              <div> Hardik Agarwal</div>
              <a href='mailto:hardikag17@gmil.com' className='text-black'>
                hardikag17@gmil.com
              </a>
            </div>
            <div className='col-md-4 p-3'>
              <div> Suryashankar Das</div>
              <a
                href='mailto:suryashankardas.2002@gmil.com'
                className='text-black'>
                suryashankardas.2002@gmil.com
              </a>
            </div>
            <div className='col-md-4 p-3'>
              <div> Aman Nagpal</div>
              <a href='mailto:amannagpal2468@gmail.com' className='text-black'>
                amannagpal2468@gmail.com
              </a>
            </div>
          </div>
        </div>
        <section class='mb-4'>
          <a
            class='btn btn-outline-dark btn-floating m-1'
            href='#!'
            role='button'>
            <i class='fab fa-facebook-f'></i>
          </a>

          <a
            class='btn btn-outline-dark btn-floating m-1'
            href='#!'
            role='button'>
            <i class='fab fa-twitter'></i>
          </a>

          <a
            class='btn btn-outline-dark btn-floating m-1'
            href='#!'
            role='button'>
            <i class='fab fa-instagram'></i>
          </a>
          <a
            class='btn btn-outline-dark btn-floating m-1'
            href='#!'
            role='button'>
            <i class='fab fa-github'></i>
          </a>
        </section>
        <center>
          <img
            className='a'
            src={logo}
            alt='Logo'
            // style={{ maxHeight: '100px', outerWidth: 'auto' }}
          />
        </center>
        <div
          class='text-center p-3'
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          © 2021 Copyright: Team DNA
        </div>
      </footer>
    </div>
  );
}

export default Footer;
