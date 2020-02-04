import React from 'react'
import axios from 'axios'
import WhiskyCard from './WhiskyCard'


export default class WhiskyIndex extends React.Component {
  state = { whiskies: [] }

  async componentDidMount(){
    try {
      const res = await axios.get('/api/whiskies')
      this.setState({ whiskies: res.data })

    } catch (err) {
      console.log(err)
    }
  }
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns is-mobile is-multiline"> 
            {this.state.whiskies.map(whisky => (
              <WhiskyCard key={whisky._id} {...whisky} />
            ))}

          </div>
        </div>
      </section>
    )
  }
}

// export default WhiskyIndex