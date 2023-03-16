import { Table, Tag, Space} from "antd"
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function BangSp() {
  const [state, _setState] = useState([]);
  const [filterInput, setFilterInput] = React.useState("");
  const filterData = () => {
    if (filterInput === "") return state;

    if (isNaN(filterInput)) {
      if(state.filter(({ name }) => name.includes(filterInput)).length != 0) {
        return state.filter(({ name }) => name.includes(filterInput));
      } 
      else if (state.filter(({ address }) => address.includes(filterInput)).length != 0){
        return state.filter(({ address }) => address.includes(filterInput));
      }
      else if (state.filter(({ sex }) => sex.includes(filterInput)).length != 0){
        return state.filter(({ sex }) => sex.includes(filterInput));
      }
    }

    return state.filter(({ age }) => age === +filterInput);
  };
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
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Loại Vacxin",
      dataIndex: "typeVaxcin",
      key: "typeVaxcin",
    },
    {
      title: "Nguồn gốc sản xuất",
      dataIndex: "origin",
      key: "origin",
    },
    {
      title: "Số lượng",
      dataIndex: "number",
      key: "number",
    },
    {
      title: "Chống chỉ định",
      dataIndex: "contraindications",
      key: "contraindications",
    },
    {
      title: "Giá cả",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Tác dụng ",
      dataIndex: "function",
      key: "function",
    },
    {
      title: "Hạn sử dụng",
      dataIndex: "outDate",
      key: "outdate",
    },
    {
      title: "Tác dụng phụ",
      dataIndex: "sideEffects",
      key: "sideEffects",
    },

  ];
  useEffect(() => {
    axios
      .get(`https://60ffade3bca46600171cf447.mockapi.io/api/vacxin`)
      .then((res) => {
        _setState(res.data);
      })
      .catch((error) => console.log(error));
  }, []);


      
      return <>
      <Table columns={columns} dataSource={filterData()} />
      </>;
}











