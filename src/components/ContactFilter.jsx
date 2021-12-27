import { Component } from 'react'


export class ContactFilter extends Component {

    state = {
        name: '',
        phone: '',
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter(this.state)
        })

    }



    render() {
        const { name, phone} = this.state
        return (
            <section className='container-filter'>
            <form >
                <section className='input-container'>
                    <label htmlFor="name"></label>
                    <input onChange={this.handleChange} value={name} type="text" name="name" id="name" placeholder='Search'/>
                </section>   
            </form>
            </section>
        )
    }
}