import React from 'react';
import { getContactByIdServe } from '../Services/ContactService';
import { TransferFund } from '../components/TransferFund';
import { addMoveUser } from '../Services/UserService';
import { Link } from 'react-router-dom';
import { loadUser } from '../Services/UserService';
import { MoveList } from '../components/MoveList';
export class ContactDetailsPage extends React.Component {
    state = {
        contact: null,
        user: loadUser(),
        moves:null
    };

    async componentDidMount() {
        const contact = await getContactByIdServe(this.props.match.params.id);
        this.setState({ contact });
        this.loadMove()
    }
    componentDidUpdate(){
    }
    addAMove = (amount) => {
        console.log(amount);
        addMoveUser(this.state.contact, amount, this.state.user);
        this.props.history.push('/contact');
        // this.loadMove();
    };

    loadMove = () => {
        console.log(this.state.contact);
        var moves = loadUser().moves;
        var move= moves.filter((move) => move.to._id === this.state.contact._id);
        this.setState({ move });
    };
    render() {
        const { contact , move} = this.state;
        return (
            <div className="contact-details">
                <div className="button-icon">
                    <Link to="/contact">
                        <button>Back</button>
                    </Link>
                    <Link to={`/contact/edit/${contact?._id}`}>
                        <button>Edit</button>
                    </Link>
                </div>
                <div className="user-details">
                    <img src={`./imgs/user.jpg`} alt="" />
                    <h1> {contact?.name}</h1>
                    <h3>{contact?.phone}</h3>
                    <h4>{contact?.email}</h4>
                </div>
                <TransferFund addMove={this.addAMove} />
                {move && <MoveList moves={move}/>}
            </div>
        );
    }
}
