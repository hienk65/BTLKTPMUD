import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Input } from "antd";
import "antd/dist/antd.css";
const { Search } = Input;

export default function PeopleData() {
  const [state, _setState] = useState([]);
  // const [filter, setFilter] = useState({});
  //   const setState = (data = {}) => {
  //     _setState((prevState) => {
  //       return { ...prevState, ...data };
  //     });
  //   };

  // const handleFilter = (key) => (e) => {
  //   const value = e?.target?.value || '';
  //   if (!value) {
  //     _setState({
  //       ...state,
  //       name: '',
  //     });
  //   } else {
  //     _setState({
  //       ...state,
  //       name: state?.name?.filter(
  //         (item) => item[key].toLowerCase()?.search(value.toLowerCase()) > 0,
  //       ),
  //     });
  //   }
  //   setFilter({ ...filter, [key]: value });
  // };
  const [filterInput, setFilterInput] = React.useState("");
  const filterData = () => {
    if (filterInput === "") return state;

    if (isNaN(filterInput)) {
      if (state.filter(({ name }) => name.includes(filterInput)).length != 0) {
        return state.filter(({ name }) => name.includes(filterInput));
      } else if (
        state.filter(({ address }) => address.includes(filterInput)).length != 0
      ) {
        return state.filter(({ address }) => address.includes(filterInput));
      } else if (
        state.filter(({ sex }) => sex.includes(filterInput)).length != 0
      ) {
        return state.filter(({ sex }) => sex.includes(filterInput));
      }
    }

    return state.filter(({ age }) => age === +filterInput);
  };

  useEffect(() => {
    axios
      .get(`https://60ffade3bca46600171cf447.mockapi.io/api/products`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const columns = [
    {
      title: (
        <div className="header-box">
          Tên
          {/* <div className="addtion-box">
            <div className="search-box">
            <input
                  value={filter.state.name || ''}
                  onChange={handleFilter('name')}
                  placeholder="Tìm kiếm"
            />
            </div>
          </div> */}
        </div>
      ),
      dataIndex: "name",
      key: "name",
      width: 200,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Giới tính",
      dataIndex: "sex",
      key: "sex",
    },
    {
      title: "Thành phố",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Ngày tiêm mũi 1",
      dataIndex: "firstVaxDate",
      key: "firstVaxDate",
    },
    {
      title: "Ngày tiêm mũi 2",
      dataIndex: "secondVaxDate",
      key: "secondVaxDate",
    },
  ];

  return (
    <>
      <div className="search-box">
        <Search
          placeholder="Tìm kiếm"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={setFilterInput}
        />
      </div>

      <Table columns={columns} dataSource={filterData()} />
    </>
  );
}
