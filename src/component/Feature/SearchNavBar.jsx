import { ReadOutlined } from "@ant-design/icons";
import {
    AutoComplete, Input, Typography
} from "antd";
import React , {useState} from "react";
import { NavLink } from "react-router-dom";
const { Search } = Input;
export default function SearchNavBar({manga}) {
   
    const [inputVal, setInputVal] = useState("");

    const [mangas, setMangas] = useState([]);
  //   const debouceToSearch = useRef(debounce(async (val) => {

  //     if (!val) {
  //         setInputVal("");
  //         setMangas([]);

  //         return;
  //     };

  //     try {
  //         await searchManga(val);
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }, 200))
  const onSearch = (value) => {
    // setSearch(value);
  };
  const renderManga = (item, i) => ({
    label: (
      <div key={i}>
        <NavLink to={`/manga/${item._id}`} className="search-menu-item">
          <img className="img" src={item.image} alt="" />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              marginLeft: "15px"
            }}
          >
            <Typography.Text
              style={{
                whiteSpace: "pre-wrap",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              {item.name_comic}
            </Typography.Text>
            <Typography.Text style={{ color: "#7e7e7e", fontStyle: "italic" }}>
              {item.views} views
            </Typography.Text>
          </div>
        </NavLink>
      </div>
    ),
  });
  const options = [
    {
      label: (
        <div>
          <ReadOutlined style={{ fontSize: "20px", marginTop: "-2px" }} /> Manga
        </div>
      ),
      options: manga.map((item, i) => {
        return renderManga(item, i);
      }),
    },
  ];
  return (
    <AutoComplete
      style={{ width: 300 }}
      options={options}
      filterOption={(inputValue, option) =>
        {
            // option.name_comic.indexOf(inputValue) !== -1;
            console.log(option.options)
        }
      }
    >
      <Search
        className="search"
        placeholder="Search..."
        onSearch={onSearch}
        enterButton
      />
    </AutoComplete>
  );
}
