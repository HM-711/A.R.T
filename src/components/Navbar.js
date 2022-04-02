import React from 'react';

const Navbar = (props) => {
  return (
    <div>
          <nav id='n' className={`navbar navbar-expand-lg navbar-${props.navcolor} bg-${props.navcolor}`}>
              <div className="container-fluid">
                  <a className="navbar-brand" href="/">A.R.T</a>
                  <button className="btn btn-light" data-bs-toggle="modal" data-bs-target="#exampleModal">About</button>
              </div>
          </nav>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog">
                  <div class="modal-content">
                      <div class="modal-header">
                          <h5 class="modal-title" id="exampleModalLabel">About A.R.T</h5>
                          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                          <p>
                              Ambient temperature is the air temperature of any object or environment where equipment is stored. The adjective ambient means "relating to the immediate surroundings." Also sometimes referred to as the ordinary temperature or the baseline temperature, this value is important for system design and thermal analysis.
                          </p>
                          <p>
                              Through this app, we aim to provide users with a way to observe the temperatures at a place they aim to search for and observe the graph displaying ambient temperatures at different points during the day.
                          </p>
                          <h4>Step-1</h4>
                          <p>Enter the name of the city where the temperature is to be checked</p>
                          <h4>Step-2</h4>
                          <p>Select temperatures at different times or for different cities</p>
                          <h4>Step-3</h4>
                          <p>The chart plots the temperatures as per the user input and the ambient room temperature can be viewed on the chart accordingly</p>
                      </div>
                      <div class="modal-footer">
                          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Navbar