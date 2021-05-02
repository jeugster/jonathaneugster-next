export default function ContactForm() {
	return (
	  <form name="contact" action="/success" method="POST" data-netlify="true" className="form-control ">
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
	  </form>
	)
  }
  