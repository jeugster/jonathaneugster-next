import styled from 'styled-components'
export default function ContactForm() {

	const ContactForm = styled.form`
		margin: 5rem auto;
		max-width: 500px;
  		align-items: center;
		height: auto;
  		margin-bottom: 5rem;
	`

	return (
	  <ContactForm name="contact" action="/success" method="POST" data-netlify="true" className="form-control ">
		<p>
		  <label htmlFor="yourname">
			Name:
		  </label> <br />
		  <input type="text" name="name" id="name" className="form-control" />
		</p>
		<p>
		  <label htmlFor="youremail">
			Email:
		  </label> <br />
		  <input type="email" name="email" id="youremail" className="form-control" />
		</p>
		<p>
		  <label htmlFor="yourmessage">
			Message:
		  </label> <br />
		  <textarea name="message" id="yourmessage" className="form-control"></textarea>
		</p>
		<p>
		  <button type="submit" className="btn btn-primary">Send</button>
		</p>
	  </ContactForm>
	)
  }
  