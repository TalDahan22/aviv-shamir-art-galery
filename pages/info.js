function Info() {
    return (
<div>
      <h3>client info</h3>

      <form action="/action_page.php">
  <label htmlFor="fname">First name:</label>
  <br/>
  <input type="text" id="fname" />
    <br/>
  <label htmlFor="lname">Last name:</label>
  <br/>
  <input type="text" id="lname" />
    <br/>
    <label htmlFor="adress">adress:</label>
  <br/>
  <input type="text" id="adress" />
    <br/>
    <label htmlFor="phonenum">phone number:</label>
  <br/>
  <input type="tel" id="Pnumber" />
  <br/>
  <label htmlFor="zipcode">zip code:</label>
  <br/>
  <input type="tel" id="zipcode" />
  <br/>
  <h6>payment method:</h6>
  <button>paypal</button>
  <button>credit-card</button>
  <button>bit</button>
 <div>
  <input type="submit" value="Submit"/>
  </div>
</form> 
</div>
    );
  }
  
  export default Info;