import { Link } from 'react-router-dom';

export  function ContactPreview({contact,removeContact}) {
    function onRemoveContact(ev) {
        ev.stopPropagation()
        removeContact(contact._id)
    }
    return (
        <article  className="contact-preview">
            <Link to={`/contact/${contact._id}`}>
            <section className="info">
                <img src={`./imgs/user.jpg`}  alt="" />
                <div className='contact-details-preview'>
                <h3>{contact.name}</h3>
                <h5>{contact.phone}</h5>
                </div>
            </section>
            {/* <section  className="actions">
                <button >X</button>
            </section> */}
        </Link>
            <button className='btn-delete' onClick={onRemoveContact}>x</button>
        </article>
    )
}