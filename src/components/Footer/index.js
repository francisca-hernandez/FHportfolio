import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-100 bg-secondary p-4 fixed-bottom"
      style={{
        marginTop: '100px', 
        fixed: true,
        bottom: '0',
      textAlign: 'center',
        color: "##195c83",
          fontWeight: "bold",

      }}
    >
      <div className="container">
        &copy;{new Date().getFullYear()} 

        <a
          href="https://github.com/francisca-hernandez"
          rel="noreferrer"
          target="_blank"
        >
          View on Github
        </a>{' '}
     
       <h4 class="contact">www.linkedin.com/in/francisca-hernandez-421b3545</h4>
      <h4 class="contact">francisca.hernandez17@gmail.com</h4>
            
      </div>
    </footer>
  )
};


// const styles = {
//     footerNav: {
//         borderTop: "4px solid #2893B0",
//         borderBottom: "none"
    
//     },
//     footer: {
//         fontSize: ".75rem",
//         color: "#2893B0"
//     }
// }

// function Footer() {
//     return (
//         <footer className="footer">
//             <nav className="navbar fixed-bottom sticky-bottom navbar-dark bg-dark" id="nav-bottom" style={styles.footerNav}>
//                 <a id="footer" className="navbar-brand mx-auto" style={styles.footer}>Francisca Hernandez-Savas &#169; 2022</a>
//             </nav>
//         </footer>
//     );
// };

export default Footer;