import './Contact.css';

function Contact() {
    return (
        <div className="padding-64-16 content-width margin-auto">
            <h2 className="letter-spacing-4">CONTACT</h2>
            <p className="margin-15-0 h-opac"><i>Fan? Drop a note!</i></p>
            <div className="padding-32-0 display-flex text-justify flex-column-small">
                <div className="width-50 font-18 text-contact-width info">
                    Chicago, US
                    <br/>
                    Phone: +00 151515
                    <br/>
                    Email: mail@mail.com
                </div>
                <div className="width-50 text-contact-width">
                    <div className="display-flex flex-between flex-column-small">
                        <input type="text" placeholder="Name" className="b-input info-input"/>
                        <input type="email" placeholder="Email" className="b-input info-input"/>
                    </div>
                    <input type="text" placeholder="Message" className="b-input"/>
                    <div className="display-flex flex-end">
                        <button className="b-button bc-black color-white hover-gray margin-15-0">Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;