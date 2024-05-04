import React, { useState } from "react";

function Forms() {
    const [formData, setFormData] = useState({
        email: "",
        phone: "",
        ssn: "",
        creditCard: "",
        bankAccount: "",
        password: "",
        pin: "",
        homeAddress: "",
        medicalInfo: "",
        socialMedia: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
  
     
      if (!formData.email || !formData.phone) {
          alert("Please fill in required fields (Email and Phone Number)");
          return;
      }
  
      // Alerting users about data collection
      alert("Your data is being collected. Please review our Privacy Policy.");
  
      // Example: Managing consent
      const consentGiven = confirm("Do you consent to the collection of your data?");
      if (!consentGiven) {
          alert("You must consent to data collection to proceed.");
          return;
      }

       

        fetch("http://localhost:3000/submitData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to submit data");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Data submitted successfully:", data);
                alert("Data submitted successfully!");
            })
            .catch((error) => {
                console.error("Error submitting data:", error);
                alert("Failed to submit data. Please try again later.");
            });
    
  };
  

    return (
        <>
            <section>
                <div className="App">
                    <header className="App-header">
                        <h1>Data Collection Form</h1>
                    </header>
                    <main>
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="tel"
                                    name="phone"
                                    pattern="07xxxxxxxx"
                                    maxLength={10}
                                    placeholder="Phone Number"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="ssn"
                                    placeholder="Social Security Number"
                                    value={formData.ssn}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="creditCard"
                                    placeholder="Credit Card Number"
                                    value={formData.creditCard}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="bankAccount"
                                    placeholder="Bank Account Number"
                                    value={formData.bankAccount}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="pin"
                                    placeholder="Personal Identification Number (PIN)"
                                    maxLength={4}
                                    value={formData.pin}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="homeAddress"
                                    placeholder="Home Address"
                                    value={formData.homeAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="medicalInfo"
                                    placeholder="Medical Information"
                                    value={formData.medicalInfo}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    type="text"
                                    name="socialMedia"
                                    placeholder="Social Media Account"
                                    value={formData.socialMedia}
                                    onChange={handleChange}
                                />
                            </div>
                            <button type="submit" onClick={handleSubmit}>Next &#8594;</button>
                        </form>
                    </main>
                </div>
            </section>
        </>
    );
}

export default Forms;
