import React from 'react'

// Contact form
export default function ContactForm() {
 return (
  <div className="">
   <form
    name="contact"
    action="/success"
    method="POST"
    data-netlify="true"
    className="flex-col "
   >
    <input type="hidden" name="contact" value="contact" />
    <p>
     <label htmlFor="yourname">Name:</label> <br />
     <input type="text" name="name" id="name" className="w-full" />
    </p>
    <p>
     <label htmlFor="youremail">Email:</label> <br />
     <input type="email" name="email" id="youremail" className="w-full" />
    </p>
    <p>
     <label htmlFor="yourmessage">Message:</label> <br />
     <textarea name="message" id="yourmessage" className="w-full"></textarea>
    </p>
    <p>
     <button type="submit" className="border p-3 mt-3">
      Send Message
     </button>
    </p>
   </form>
  </div>
 )
}
