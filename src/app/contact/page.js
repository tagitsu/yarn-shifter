const ContactPage = ({}) => {
  return(
    <div>
      <p>contact page</p>
      <form>
        <label>
          Your e-mail
          <input type='email' />
        </label>
        <label>
          Your message
          <textarea />
        </label>
        <button type='submit'>send message</button>
      </form>
    </div>
  )
};

export default ContactPage;