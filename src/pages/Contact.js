import './Contact.scss';

const Contact = () => {
    return (
        <div className="contact_container">
            <h2>Contact</h2>
            <p>Do you have questions or comments about products, recipes or the site? Our mix specialists will be happy to help you - the easiest way to reach them is via the contact form.</p>
            <form >
                <label>Your Name</label>
                <div>
                    <input type="text" />
                </div>
                <label>Email Address</label>
                <div>
                    <input type="text" required />
                </div>
                <label>Your Message</label>
                <div>
                    <textarea name="" cols="30" rows="10"></textarea>
                </div>
                <input type="submit" value="send" className='submit_hover'/>
            </form>
        </div>
    )
}

export default Contact