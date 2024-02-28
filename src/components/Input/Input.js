function Input({ title, ...data }) {
  return (
    <div>
      <input
        type="text"
        className="bg-transparent border-b-2 border-primaryLight p-1 w-full mb-4 placeholder-primaryDark"
        placeholder={title}
        {...data}
      />
    </div>
  );
}

export default Input;
