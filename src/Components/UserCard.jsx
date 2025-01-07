import React from "react";
import { Card } from "react-bootstrap";

function UserCard({ users }) {
  return (
    <div className="d-flex justify-content-center gap-1 flex-wrap">
      {users.map((user) => (
        <Card style={{ width: "18rem", padding: "5px" }}>
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <div>
              <p className="fw-semibold text-decoration-underline">
                Company Details:
              </p>
              <p className="fw-bold">{user.company.name}</p>
              <p>{user.company.catchPhrase}</p>
              <p>{user.company.bs}</p>
            </div>

            <p>Email: {user.email}</p>
          </Card.Body>
          <div className="text-center">
            <button className="btn">
              <i class="fa-solid fa-trash text-danger"></i>
            </button>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default UserCard;
