import { Component } from 'react'

export class ContactFilter extends Component {
    state = {
        term: '',
    }


    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? (+target.value || '') : target.value
        this.setState({ [field]: value }, () => {
            this.props.onChangeFilter({ ...this.state })
        })
    }

    render() {
        const { term } = this.state
        return (
            <form className='flex justify-center'>
                <input className="filter-input" type="text" value={term} onChange={this.handleChange} id="term" name="term" />
            </form>
        )
    }
}
