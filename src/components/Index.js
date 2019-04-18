import React from 'react'
import { Consumer } from '../context'
import Skycons from 'react-skycons'
import Spinner from './Spinner'

const Index = () => {
  return(
    <Consumer>
      {value => {
        const { location, temperature, metric, description, icon } = value

        const iconStyle = {
          width: "200px",
          heigth: "100%",
          marginRight: "-50px"
        }
        if(location === "" || temperature === "" || metric === "" || description === "" || icon === "") {
          return(
            <Spinner />
          )
        } else {
            return(
              <React.Fragment>
                <div className="location">
                  <h1 className="location-timezone">{location}</h1>
                  
                  <Skycons 
                    color = "white"
                    icon = {icon}
                    autoplay = {true}
                    style = {iconStyle}
                  />
                  
                </div>
                <div className="temperature">
                  <div className="degree-section">
                    <h2 className="temperature-degree">{temperature}</h2>
                    <span>{metric}</span>
                  </div>
                  <div className="description">{description}</div>      
                </div>
              </React.Fragment>
            )
          }
        }
      }
    </Consumer>
  )
}

export default Index