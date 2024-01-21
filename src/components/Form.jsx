import { useState } from "react";

const Form = () => {
  const [users, setUsers] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      address,
      dateOfBirth,
      emailAddress,
      language,
    };
    setUsers([...users, newUser]);
  };

  return (
    <div className="min-h-screen w-full grid grid-cols-2 gap-20">
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 p-20">
        <h2 className="text-3xl font-medium">Enter user Information</h2>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="firstName"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            First name :
          </label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            type="text"
            id="firstName"
            placeholder="Moris"
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="lastName"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            Last name :
          </label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            id="lastName"
            placeholder="Raner"
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="address"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            Address :
          </label>
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            id="address"
            placeholder="123 Baker Street, London"
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="dateOfBirth"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            Date of Birth :
          </label>
          <input
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            type="date"
            id="dateOfBirth"
            placeholder=""
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="emailAddress"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            Email Address :
          </label>
          <input
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            type="email"
            id="emailAddress"
            placeholder="example@gmail.com"
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <div className="form__control flex flex-col gap-2.5 items-start">
          <label
            htmlFor="language"
            className="cursor-pointer hover:text-gray-700 transition"
          >
            Programming language :
          </label>
          <input
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            type="text"
            id="language"
            placeholder="Python"
            className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white p-5 rounded-xl hover:bg-black/80 transition"
        >
          Submit
        </button>
      </form>
      <div className="user__list p-20 flex flex-col gap-5">
        <h2 className="text-3xl font-medium">User List</h2>
        <div className="flex flex-col gap-2.5">
          {/* Multiple users */}
          {users.length > 0 &&
            users.map((user, index) => (
              <div key={index + firstName}>
                <h3 className="text-2xl font-medium">{user.firstName}</h3>
                <h3 className="text-2xl font-medium">{user.lastName}</h3>
                <p className="text-gray-500 italic">{user.address}</p>
                <p className="text-gray-500 italic">{user.dateOfBirth}</p>
                <p className="text-gray-500 italic">{user.emailAddress}</p>
                <p className="text-gray-500 italic">{user.language}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
