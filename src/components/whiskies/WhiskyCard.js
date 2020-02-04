import React from 'react'
import { Link } from 'react-router-dom'




const WhiskyCard = ({ distilery, name, age,image, description, _id }) => (
  <div key={_id} className="column is-one-quarter-desktop is-one-third-tablet is-half-mobile" >
    <Link to={`/whiskies/${_id}`}>
      <div className="card">
        <div className="card-header">
          <h4 className="card-header-title">{distilery}</h4>
        </div>
        <div className="card-image">
          <figure className="image is-48x58">
            <img src={image} alt={name} />
          </figure>
        </div>
        <div className="card-content">
          <h5 className="title is-4">{name}</h5>
        </div>
        <div className="card-content">
          <h5 className="title is-5">Age:{age}</h5>
        </div>
        <div className="card-content">
          <h5 className="title is-5">{description}</h5>
        </div>
      </div>
    </Link>
  </div>

)

export default WhiskyCard