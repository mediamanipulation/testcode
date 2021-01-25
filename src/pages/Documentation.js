import React from "react";
import "./Pages.css";
export default function Documentation() {
  return (
    <div>
      <>
        <h2>Documentation</h2>
      </>
      <div className="container">
        <div className="div1"><h3>Rental</h3></div>
        <div className="div2">
        <div className="boxSize">
          <h2>Payments</h2> The Payments API lets developers take and manage payments
          Applications need the following input to take a payment: Amount to
          charge. Payment recipient. The payment goes to the account identified
          by the Authorization header in the API request. Payment source. It can
          be a secure token (nonce) or a card on file. You can generate a nonce
          using the Square Payment Form and the In-App Payments SDK. For working
          code examples, see Connect API examples. A card on file refers to a
          credit/debit or a gift card associated with a customer. You can create
          a customer and add a card to them using either the Customers API, the
          dashboard, or the Square mobile app. Guides: Payments Webhooks
          </div>
        </div>
        <div className="div3">
            <div className="endpointsBox">
          <div className="endpoints">
            <h3>Post</h3>
            <p>
              {" "}
              a customer and add a card to them using either the Customers API,
              the dashboard, or the Square mobile app. Guides: Payments Webhooks
            </p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
