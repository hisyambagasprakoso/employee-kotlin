import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [name, setName] = useState("");
  const [nik, setNik] = useState("");
  const [address, setAddress] = useState("");
  const [telp, setTelp] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const saveEmployee = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/employee", {
        name,
        nik,
        address,
        telp,
        email,
        password
      });
      navigate("/employee");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveEmployee}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Contoh: John Doe" 
                minlength="4" 
                maxlength="50" 
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">NIK</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                placeholder="Contoh: 3314XXXXXXXXXXXX"
                minlength="5" 
                maxlength="16" 
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Address</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Contoh: Jl. Perintis Kemerdekaan, No.1, RT.21, RW.21, Kemanggisan, Jakarta Barat"
                minlength="10" 
                maxlength="255"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Telp</label>
            <div className="control">
              <input
                type="number"
                className="input"
                value={telp}
                onChange={(e) => setTelp(e.target.value)}
                placeholder="Contoh: 085642XXXXXX" 
                minlength="12" 
                maxlength="13" 
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Email</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: john.doe@gmail.com"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
					      title="Harus mengandung satu simbol @ dan simbol (.) titik minimal satu atau lebih" 
                minlength="15" 
                maxlength="50" 
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Password</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contoh: Abcde12345"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                title="Harus mengandung paling tidak satu angka, satu huruf besar, satu huruf kecil, dan minimal berisi 8 karakter atau lebih" 
                required
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
