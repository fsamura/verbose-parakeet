import React, { Component } from 'react'

export default class Customers extends Component {
  state = {
    pageTitle: 'Customers',
    customerCount: 5,
    customers: [
      {
        id: 1,
        name: 'Scott',
        phone: '123-456',
        address: { city: 'New Delhi' },
        photo: 'https://picsum.photos/id/1010/130/60',
      },
      {
        id: 2,
        name: 'Jones',
        phone: '982-014',
        address: { city: 'New Jersy' },
        photo: 'https://picsum.photos/id/1011/125/60',
      },
      {
        id: 3,
        name: 'Allen',
        phone: '889-921',
        address: { city: 'London' },
        photo: 'https://picsum.photos/id/1012/130/60',
      },
      {
        id: 4,
        name: 'James',
        phone: null,
        address: { city: 'Berlin' },
        photo: 'https://picsum.photos/id/1013/130/60',
      },
      {
        id: 5,
        name: 'John',
        phone: null,
        address: { city: 'New York' },
        photo: 'https://picsum.photos/id/1014/130/60',
      },
    ],
  }
  render() {
    return (
      <div>
        <h4 className="m-2 border-bottom">
          {this.state.pageTitle}
          <span className="badge bg-info m-2">{this.state.customerCount}</span>
          <button
            className="btn btn-secondary"
            onClick={this.handleRefreshClick}
          >
            Refresh
          </button>
        </h4>

        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>phone</th>
              <th>address</th>
              <th>photo</th>
            </tr>
          </thead>

          <tbody>{this.getTableRow()}</tbody>
        </table>
      </div>
    )
  }

  handleRefreshClick = () => {
    console.log('Refresh')
    this.setState({ customerCount: this.state.customerCount + 1 })
  }

  getTableRow = () => {
    return this.state.customers.map((customer, index) => {
      return (
        <tr key={customer.id}>
          <td>{customer.id}</td>
          <td>{customer.name}</td>
          <td>{customer.phone ? customer.phone : 'No Phone'}</td>
          <td>{customer.address.city}</td>
          <td>
            <img src={customer.photo} alt="customer" />
            <div className="">
              <button
                className="btn btn-secondary"
                onClick={() => {
                  this.handlePictureClick(customer, index)
                }}
              >
                Change Picture
              </button>
            </div>
          </td>
        </tr>
      )
    })
  }

  handlePictureClick = (customer, index) => {
    var customerArray = this.state.customers
    customerArray[index].photo = 'https://picsum.photos/130/60'
    this.setState({ customers: customerArray })
  }
}
