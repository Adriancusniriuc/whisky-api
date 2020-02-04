import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'
// import Auth from '../../lib/auth'

//is owener missing +edit delete

class WhiskyShow extends React.Component{
state = { whisky: null }
async componentDidMount() {
  const whiskyId = this.props.match.params.id
  try {
    const res = await axios.get(`/api/whiskies/${whiskyId}`)
    console.log( res.data)
    this.setState({ whisky: res.data })
  } catch (err) {
    console.log(err)
    this.props.history.push('/not found')
  }
}

//handleDelete
render() {
  const { whisky } = this.state
  if (!whisky) return null
  return (
    <section className="section">
      <div className="container">
        <h2 className= "title">{whisky.distilery}</h2>
        <hr />
        <div className="columns">
          <div className="column is-one-quarter">
            <figure className="image">
              <img src={whisky.image} alt={whisky.distilery} />
            </figure>
          </div>
          <div className="column is half">
            <h4 className="title is-4">Age:</h4>
            <p>{whisky.age}</p>
          </div>
          <hr />
          <div className="column is-one-third">
            <h4 className="title is-4">Description</h4>
            <p>{whisky.description}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

}

export default WhiskyShow