import React, { Component } from 'react'
import PropTypes from 'prop-types'
import EditSource from './EditSource'

class Sources extends Component {
  static propTypes = {
    setSource: PropTypes.func.isRequired,
    updateNews: PropTypes.func.isRequired,
    source: PropTypes.object.isRequired,
  }

  state = {
    showEdit: false,
  }

  setSource = newSource => {
    this.setState({
      showEdit: false,
    })

    this.props.setSource(newSource)
  }

  render() {
    return (
      <>
        <div className="card sources-card">
          <p>
            Current source url
            <br />
            <strong>{this.props.source.siteUrl}</strong>
          </p>
          <div className="buttons">
            <button
              onClick={() => this.setState({ showEdit: !this.state.showEdit })}
            >
              Edit News Source
            </button>
            <button className="primary" onClick={this.props.updateNews}>
              Load News
            </button>
          </div>
        </div>
        {this.state.showEdit && (
          <EditSource setSource={this.setSource} source={this.props.source} />
        )}
      </>
    )
  }
}

export default Sources
