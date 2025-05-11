import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>📞 Contact phones: <a href="tel:+38975260480">+389 75 260 480</a> and <a href="tel:+38970233959">+389 70 233 959</a></p>
          <p>📧 email: info@nextgen.com</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
                <a href={socialImg.url} key={socialImg.url} className="icon">
                    <img src={socialImg.imgPath} alt="social icon" />
                </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} NextGen Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;