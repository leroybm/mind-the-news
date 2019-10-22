import React, { Component } from 'react'

// TODO: PropTypes
class EditSource extends Component {
  state = {}

  handleChange = event => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.setSource(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="siteUrl">
            Site Url
            <input
              type="text"
              name="siteUrl"
              id="siteUrl"
              placeholder="siteUrl"
              required
              defaultValue={this.props.source.siteUrl}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="parentSelector">
            Parent Selector
            <input
              type="text"
              name="parentSelector"
              id="parentSelector"
              placeholder="parentSelector"
              required
              defaultValue={this.props.source.parentSelector}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="url">
            Url Selector
            <input
              type="text"
              name="url"
              id="url"
              placeholder="url"
              required
              defaultValue={this.props.source.url}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="title">
            Title Selector
            <input
              type="text"
              name="title"
              id="title"
              placeholder="title"
              required
              defaultValue={this.props.source.title}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="body">
            Body Selector
            <input
              type="text"
              name="body"
              id="body"
              placeholder="body"
              required
              defaultValue={this.props.source.body}
              onChange={this.handleChange}
            />
          </label>

          <label htmlFor="image">
            Image Selector
            <input
              type="text"
              name="image"
              id="image"
              placeholder="image"
              required
              defaultValue={this.props.source.image}
              onChange={this.handleChange}
            />
          </label>

          <button>Edit Source</button>
        </fieldset>
      </form>
    )
  }
}

export default EditSource
