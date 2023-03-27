// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {first: false, last: false}

  clickedbuttonfirst = () => {
    // const {current} = this.state
    this.setState(prevState => ({first: !prevState.first}))
  }

  clickedbuttonlast = () => {
    // const {current} = this.state
    this.setState(prevState => ({last: !prevState.last}))
  }

  render() {
    const {first, last} = this.state
    // console.log(first)
    // console.log(last)
    return (
      <div className="bg_container">
        <div className="card_container">
          <h1 className="main_heading">Show/Hide</h1>
          <div className="side_by_side">
            <div className="card_container">
              <button
                onClick={this.clickedbuttonfirst}
                className="button"
                type="button"
              >
                Show/Hide Firstname
              </button>
              {first && <p className="names names_container">Joe</p>}
            </div>
            <div className="card_container">
              <button
                onClick={this.clickedbuttonlast}
                className="button"
                type="button"
              >
                Show/Hide Lastname
              </button>
              {last && <p className="names names_container">Jonas</p>}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
