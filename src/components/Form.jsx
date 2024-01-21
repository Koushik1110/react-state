const Form = () => {
  return (
    <form className="min-h-screen max-w-xl flex flex-col gap-5 p-20">
      <h2 className="text-3xl font-medium">Enter user Information</h2>
      <div>
        <label
          htmlFor="firstName"
          className="cursor-pointer hover:text-gray-700 transition"
        >
          First name :
        </label>
        <input
          type="text"
          id="firstName"
          placeholder="Moris"
          className="outline-none border p-5 w-full rounded-xl focus:border-black transition"
        />
      </div>
    </form>
  );
};

export default Form;
