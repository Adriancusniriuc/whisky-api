// import React from 'react'
// import axios from 'axios'

// class Age extends React.Component {
//   state = {
//     data: {
//       age: ''
//     },
//     errors: { }
//   }
//   handleChange = e => {
//     const data = { ...this.state.data, [e.target.age]: e.target.value } 
//     const errors = { ...this.state.errors, [e.target.age]: '' }
//     this.setState({ data, errors }) 
//   }
//   handleSubmit = async e => {
//     e.preventDefault()
//     try {
//       await axios.post('/api/whiskies', this.state.data)
//       this.props.history.push('/home')
//     } catch (err) {
//       this.setState({ errors: err.response.data.errors })
//     }
//   }
//   render() {
//     return (
//       <section className="section">
//         <div className="container">
//           <div className="columns">
//             <form onSubmit={this.handleSubmit} className="column is-half is-offset-one-quarter">
//               <h2 className="title">ADRIAN NEEDS TO MAKE SURE YOU ARE OLD ENOUGH</h2>
//               <h3 classNam="field">Adrian is committed to responsible drinking so he needs to check that you can legally enjoy his products</h3>
//               <div className="field">
//                 <label className="label">Your age</label>
//                 <div className="control">
//                   <input 
//                     className={`input ${this.state.errors.age ? 'is-danger' : ''}`}
//                     placeholder="Your Age"
//                     name="Your Age"
//                     onChange={this.handleChange}
//                   />
//                 </div>
//                 {this.state.errors.age && <small className="help is-danger">{this.state.errors.age}</small>}
//               </div>
//               <div className="field">
//                 <button type="submit" className="button is-fullwidth is-warning">Check my age</button>
//               </div>
//             </form>
        
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// export default Age