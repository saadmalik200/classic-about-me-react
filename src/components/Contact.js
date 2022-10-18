function Contact() {
  return (
    <div className="contact-container">
      <div className="contactDiv">
        <div>
          <h2>Contact Me</h2>
        </div>
        <form action="" className="formContact">
          <input type="text" placeholder="Your name" name="" id="" />
          <input type="email" placeholder="Your email" name="" id="" />
          <textarea
            name=""
            placeholder="Your message"
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <button>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
