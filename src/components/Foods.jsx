const Foods = ({ foodName }) => {
  const isBirayani = foodName === "Biriyani";
  return (
    <div className={`${isBirayani ? "bg-black" : "bg-transparent"}`}>
      <p style={{ color: isBirayani ? "red" : "purple" }}>
        My favorite {isBirayani ? "dish" : "junk food"} is {foodName}
      </p>
    </div>
  );
};

export default Foods;
