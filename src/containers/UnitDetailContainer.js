import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../context/DataContext";
import { Table } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";
import CloseButton from "react-bootstrap/CloseButton";

function UnitDetailContainer() {
  const { myData, setMyData } = useContext(DataContext);
  const [id, setId] = useSearchParams();
  const navigate = useNavigate();

  const btnGoBack = () => {
    navigate("/unit");
  };
  return (
    <>
      <div className="container">
        <div className="close-btn-style">
          <div className="bg-dark p-3">
            <CloseButton variant="white" onClick={btnGoBack} />
          </div>
        </div>

        {myData.length ? (
          myData.find((item) => item.id == id.get("id")) ? (
            <div className="unit-detail">
              <div className="unit-detail-table">
                {myData
                  .filter((item) => item.id == id.get("id"))
                  .map((newItem) => (
                    <Table
                      striped
                      bordered
                      hover
                      variant="dark"
                      responsive
                      key={newItem.id}
                    >
                      <thead>
                        <tr>
                          <th colSpan={2} style={{ textAlign: "center" }}>
                            Unit Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td style={{ width: "40%" }}>ID</td>
                          <td style={{ width: "60%" }}>
                            {newItem.id ? newItem.id : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>{newItem.name ? newItem.name : "-"}</td>
                        </tr>
                        <tr>
                          <td style={{ alignContent: "center" }}>
                            Description
                          </td>
                          <td>
                            {newItem.description ? newItem.description : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Min. Required Age</td>
                          <td>{newItem.age ? newItem.age : "-"}</td>
                        </tr>
                        <tr>
                          <td>Wood Cost</td>
                          <td>
                            {newItem.cost
                              ? newItem.cost["Wood"]
                                ? newItem.cost["Wood"]
                                : "-"
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Food Cost</td>
                          <td>
                            {newItem.cost
                              ? newItem.cost["Food"]
                                ? newItem.cost["Food"]
                                : "-"
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Gold Cost</td>
                          <td>
                            {newItem.cost
                              ? newItem.cost["Gold"]
                                ? newItem.cost["Gold"]
                                : "-"
                              : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Build Time</td>
                          <td>
                            {newItem.build_time ? newItem.build_time : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Reload Time</td>
                          <td>
                            {newItem.reload_time ? newItem.reload_time : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Hit Points</td>
                          <td>
                            {newItem.hit_points ? newItem.hit_points : "-"}
                          </td>
                        </tr>
                        <tr>
                          <td>Attack</td>
                          <td>{newItem.attack ? newItem.attack : "-"}</td>
                        </tr>
                        <tr>
                          <td>Accuracy</td>
                          <td>{newItem.accuracy ? newItem.accuracy : "-"}</td>
                        </tr>
                      </tbody>
                    </Table>
                  ))}
              </div>
            </div>
          ) : (
            <div className="unit-detail-table">
              <Table striped bordered hover variant="dark" responsive>
                <thead>
                  <tr>
                    <th colSpan={2} style={{ textAlign: "center" }}>
                      Unit Detail
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ width: "40%" }}>ID</td>
                    <td style={{ width: "60%" }}>-</td>
                  </tr>
                  <tr>
                    <td>Name</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Min. Required Age</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Wood Cost</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Food Cost</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Gold Cost</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Build Time</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Reload Time</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Hit Points</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Attack</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td>Accuracy</td>
                    <td>-</td>
                  </tr>
                  <tr>
                    <td colSpan={2} style={{ textAlign: "center" }}>
                      NO MATCH!
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          )
        ) : (
          <Spinner
            as="div"
            animation="border"
            role="status"
            variant="dark"
            className="spinner-style"
          ></Spinner>
        )}
      </div>
    </>
  );
}

export default UnitDetailContainer;
