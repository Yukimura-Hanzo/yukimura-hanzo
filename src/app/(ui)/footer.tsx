"use client";

const Footer = () => {
  //? Variable to store values for todays date
  // const currentDate = new Date();
  const currentYear = new Date().toLocaleDateString('en-US', { year: 'numeric' });

  return (
    <footer className="footer mt-4">
      <small>
        Copyright &copy; {currentYear} YUKIMURA HANZO
      </small>
    </footer>
  );
}

export default Footer;