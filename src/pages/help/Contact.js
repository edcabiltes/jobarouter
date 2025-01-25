export default function Contact() {
    return (
        <div className="contact">
            <h3>Contact Us</h3>
            <form>
                <label>
                    <span>Email:</span>
                    <input type="email" name="email" required />
                </label>
                <label>
                    <span>Message:</span>
                    <textarea name="message" required></textarea>
                </label>
                <button>Send</button>
            </form>
        </div>
            
    )
}