


import { Component } from 'react';
import List from "./List";


class AddForm extends Component {
          constructor(props) {
                    super(props);

                    this.state = {
                              dir: [],
                              item: {
                                        name: "",
                                        email: "",
                                        age: "",
                                        tel: ""
                              },
                              isEditing: false,
                              temp_index: null
                    }

                    this.handleChange = this.handleChange.bind(this)
                    this.add = this.add.bind(this)
                    this.delete = this.delete.bind(this)
                    this.edit = this.edit.bind(this)
                    this.update = this.update.bind(this)
                    this.view = this.view.bind(this)
          }

          view(item) {
                    alert(
                              `
            Name = ${item.name}
            Email = ${item.email}

            Age = ${item.age}

            Tel = ${item.tel}
            `
                    )
          }


          handleChange(event) {
                    const name = event.target.name;
                    const value = event.target.value;
                    let item = this.state.item;

                    item[name] = value;

                    this.setState({ item: item })
          }


          add(e) {
                    e.preventDefault()
                    let dir = this.state.dir;
                    dir.push(this.state.item)
                    this.setState({ dir: dir, item: { name: "", email: "", age: "", tel: "" } })
                    console.log(this.state.dir)
          }

          edit(index) {
                    let item = this.state.dir[index]
                    this.setState({ item: item, isEditing: true, temp_index: index })
          }

          update(e) {
                    e.preventDefault()
                    let dir = this.state.dir;
                    dir[this.state.temp_index] = this.state.item

                    this.setState({
                              dir: dir,
                              item: {
                                        name: "",
                                        email: "",
                                        age: "",
                                        tel: ""
                              },
                              isEditing: false,
                              temp_index: null
                    })
          }


          delete(index) {
                    let dir = this.state.dir;
                    dir.splice(index, 1)
                    this.setState({ dir: dir })
          }

          render() {
                    return (
                              <div className="col-md-6">
                                        <form method="POST" onSubmit={this.state.isEditing ? this.update : this.add}>
                                                  <div className="mb-2">
                                                            <input
                                                                      type="text"
                                                                      name="name"
                                                                      placeholder="Enter Name"
                                                                      className="form-control"
                                                                      value={this.state.item.name}
                                                                      onChange={this.handleChange}
                                                            />
                                                  </div>
                                                  <div className="mb-2">
                                                            <input
                                                                      type="email"
                                                                      name="email"
                                                                      placeholder="Enter Email"
                                                                      className="form-control"
                                                                      value={this.state.item.email}
                                                                      onChange={this.handleChange}
                                                            />
                                                  </div>
                                                  <div className="mb-2">
                                                            <br />
                                                            <select
                                                                      id="age"
                                                                      value={this.state.item.age}
                                                                      className="form-control"
                                                                      onChange={this.handleChange}
                                                                      name="age"
                                                            >
                                                                      <option value="" disabled selected hidden>Age</option>
                                                                      <option value="1-10">1-10</option>
                                                                      <option value="11-20">11-20</option>
                                                                      <option value="21-30">21-30</option>
                                                                      <option value="31-40">31-40</option>
                                                                      <option value="41-50">41-50</option>
                                                                      <option value="51-60">51-60</option>
                                                                      <option value="61-70">61-70</option>
                                                                      <option value="71-80">71-80</option>

                                                                      <option value="81-90">81-90</option>

                                                                      <option value="91-100">91-100</option>
                                                            </select>
                                                            <br /></div>

                                                  <div className="mb-2">
                                                            <input
                                                                      type="number"
                                                                      name="tel"
                                                                      placeholder="Enter Phone"
                                                                      className="form-control"
                                                                      value={this.state.item.tel}
                                                                      onChange={this.handleChange}
                                                            />
                                                  </div>
                                                  <div className="mb-2">
                                                            <button className="btn btn-success" type="submit">
                                                                      {this.state.isEditing ? "Update" : "Save"}
                                                            </button>
                                                  </div>
                                        </form>
                                        <List
                                                  dir={this.state.dir}
                                                  delete={this.delete}
                                                  edit={this.edit}
                                                  view={this.view}
                                        />
                              </div>
                    )
          }
}

export default AddForm;