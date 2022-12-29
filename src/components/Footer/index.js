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
        color: "#195c83",
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




export default Footer;