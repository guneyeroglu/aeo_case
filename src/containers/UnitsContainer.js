import "antd/dist/antd.css";
import { Slider } from "antd";
import { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import DataContext from "../context/DataContext";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import { useNavigate } from "react-router-dom";

function UnitsContainer() {
  const navigate = useNavigate();

  const { myData, setMyData } = useContext(DataContext);

  const [woodValue, setWoodValue] = useState(0);
  const [foodValue, setFoodValue] = useState(0);
  const [goldValue, setGoldValue] = useState(0);

  const [woodStatus, setWoodStatus] = useState(true);
  const [foodStatus, setFoodStatus] = useState(true);
  const [goldStatus, setGoldStatus] = useState(true);

  const [myAge, setMyAge] = useState("");

  const clickNavigate = (id) => {
    navigate(`/unit_detail?id=${id}`);
  };

  const chkWood = () => {
    setWoodStatus(!woodStatus);
  };

  const chkFood = () => {
    setFoodStatus(!foodStatus);
  };

  const chkGold = () => {
    setGoldStatus(!goldStatus);
  };

  const btnAgeChange = (age) => {
    setMyAge(age);
  };

  return (
    <>
      <div className="container">
        <div className="age-div">
          <span className="age-style">AGES</span>
        </div>
        <div className="btn-group-style">
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => btnAgeChange("")}>
              All
            </Button>
            <Button variant="secondary" onClick={() => btnAgeChange("Dark")}>
              Dark
            </Button>
            <Button variant="secondary" onClick={() => btnAgeChange("Feudal")}>
              Feudal
            </Button>
            <Button variant="secondary" onClick={() => btnAgeChange("Castle")}>
              Castle
            </Button>
            <Button
              variant="secondary"
              onClick={() => btnAgeChange("Imperial")}
            >
              Imperial
            </Button>
          </ButtonGroup>
        </div>
        <div className="box-1">
          <div className="box-2">
            <span className="span-1">
              <Form>
                <Form.Check
                  type="switch"
                  id="chkWood"
                  label="Wood"
                  onClick={chkWood}
                />
              </Form>
            </span>
            <Slider
              disabled={woodStatus}
              min={0}
              max={200}
              value={typeof woodValue === "number" ? woodValue : 0}
              onChange={(e) => setWoodValue(e)}
              className="slider-1"
            />
            {!woodStatus ? (
              <span className="span-2">{woodValue}</span>
            ) : (
              <span className="span-2">-</span>
            )}
          </div>
          <div className="box-2">
            <span className="span-1">
              <Form>
                <Form.Check
                  type="switch"
                  id="chkFood"
                  label="Food"
                  onClick={chkFood}
                />
              </Form>
            </span>
            <Slider
              disabled={foodStatus}
              min={0}
              max={200}
              value={typeof foodValue === "number" ? foodValue : 0}
              onChange={(e) => setFoodValue(e)}
              className="slider-1"
            />
            {!foodStatus ? (
              <span className="span-2">{foodValue}</span>
            ) : (
              <span className="span-2">-</span>
            )}
          </div>
          <div className="box-2">
            <span className="span-1">
              <Form>
                <Form.Check
                  type="switch"
                  id="chkGold"
                  label="Gold"
                  onClick={chkGold}
                  className="gold-margin"
                />
              </Form>
            </span>
            <Slider
              disabled={goldStatus}
              min={0}
              max={200}
              value={typeof goldValue === "number" ? goldValue : 0}
              onChange={(e) => setGoldValue(e)}
              className="slider-1"
            />
            {!goldStatus ? (
              <span className="span-2">{goldValue}</span>
            ) : (
              <span className="span-2">-</span>
            )}
          </div>
        </div>

        <div>
          {myData.length ? (
            <>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                  </tr>
                </thead>
                <tbody>
                  <>
                    {myData
                      .filter((ages) => ages.age.includes(myAge))
                      .filter((wood) =>
                        !woodStatus
                          ? wood.cost
                            ? wood.cost["Wood"] >= woodValue
                            : ""
                          : wood
                      )
                      .filter((food) =>
                        !foodStatus
                          ? food.cost
                            ? food.cost["Food"] >= foodValue
                            : ""
                          : food
                      )
                      .filter((gold) =>
                        !goldStatus
                          ? gold.cost
                            ? gold.cost["Gold"] >= goldValue
                            : ""
                          : gold
                      )
                      .map((item) => (
                        <tr
                          key={item.id}
                          onClick={() => clickNavigate(item.id)}
                        >
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>
                            {item.cost
                              ? (item.cost["Wood"]
                                  ? `Wood: ${item.cost["Wood"]} `
                                  : "") +
                                (item.cost["Food"]
                                  ? `Food: ${item.cost["Food"]} `
                                  : "") +
                                (item.cost["Gold"]
                                  ? `Gold: ${item.cost["Gold"]} `
                                  : "")
                              : "-"}
                          </td>
                        </tr>
                      ))}
                  </>
                </tbody>
              </Table>
            </>
          ) : (
            <>
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th>#ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Costs</th>
                  </tr>
                </thead>
              </Table>

              <Spinner
                as="div"
                animation="border"
                role="status"
                variant="dark"
                className="spinner-style"
              ></Spinner>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default UnitsContainer;
