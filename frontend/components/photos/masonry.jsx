import React from 'react'
import MasonryLayout from 'react-masonry-layout'

class Masonry extends React.Component {

  static defaultProps = {
    maxCount: 5,
    perPage: 20
  }

  state = {
    count: 0,
    isLoading: false,
    items: Array(20).fill()
  }


  getItems() {
    if (this.state.count >= this.props.maxCount) return
    this.setState(Object.assign(
      {},
      this.state,
      { isLoading: true }
    ), () => {
      setTimeout(() => {
        this.setState(Object.assign(
          {},
          this.state,
          {
            isLoading: false,
            items: this.state.items.concat(
              Array(perPage).fill()
            )
          }
        ))
      })
    })
  }

  render() {
    <MasonryLayout
      id="items"
      infiniteScroll={::this.getItems}
      infiniteScrollLoading={this.state.isLoading} >

      {this.state.items.map((v, i) => <div
        key={i}
        style={{
          width: '236px',
          height: `${i % 2 === 0 ? 4 * 50 : 50 }px`,
          display: 'block',
          background: 'rgba(0,0,0,0.7)'
        }}
        />)}

    </MasonryLayout>
  }
}

export default MasonryLayout;
