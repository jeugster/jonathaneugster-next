// Contact form
export default function ContactForm() {
    return (
        <div className="">
            <form
                name="contact"
                action="/success"
                method="POST"
                data-netlify="true"
                className="flex-col"
            >
                <input type="hidden" name="contact" value="contact" />
                <p className="py-2">
                    <label className="" htmlFor="yourname">
                        Name:
     </label>{' '}
                    <br />
                    <input type="text" name="name" id="name" className="w-full form-input text-black" />
                </p>
                <p className="py-2">
                    <label htmlFor="youremail">Email:</label> <br />
                    <input
                        type="email"
                        name="email"
                        id="youremail"
                        className="w-full form-input text-black"
                    />
                </p>
                <p className="py-2">
                    <label htmlFor="yourmessage">Message:</label> <br />
                    <textarea
                        name="message"
                        id="yourmessage"
                        className="w-full form-input text-black"
                    ></textarea>
                </p>
                <p className="mr-auto">
                    <button type="submit" className="border p-3 mt-3">
                        Send Message
     </button>
                </p>
            </form>
        </div>
    )
}
