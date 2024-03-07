import '../styles/components/footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import FlexboxLayout from '../layouts/FlexboxLayout';

function Footer() {
  return (
    <footer className='footer'>
      <FlexboxLayout direction='row'>
        <div className='social-links'>
          <a
            href='https://twitter.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-twitter'></i>
          </a>
          <a
            href='https://facebook.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-facebook'></i>
          </a>
          <a
            href='https://instagram.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <i className='fab fa-instagram'></i>
          </a>
        </div>
        <div className='footer-content'>
          <p>&copy; 2024 Hannover. All Rights Reserved.</p>
          <p>
            Contact us: <a href='mailto:info@example.com'>info@example.com</a>
          </p>
        </div>
        <div className='license'>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            esse aperiam at quas vero, molestias nostrum, ipsam est quidem vitae
            quod quam numquam omnis dignissimos dicta sint magni. Id, at!
          </p>
        </div>
      </FlexboxLayout>
    </footer>
  );
}

export default Footer;
