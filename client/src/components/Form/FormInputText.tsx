const FormInputText = ({ type, inputFor, setInputFor, placeholder }) => {
  return (
    <label htmlFor={type} className="flex flex-col gap-1 relative">
      <span className="text-xs text-slate-600 absolute top-[-10px] left-[10px] px-3 bg-white italic">
        {type}
      </span>
      <input
        className="transition py-1 px-3 outline-none border rounded-lg border-slate-300 placeholder:text-sm h-12 focus:border-appcolor"
        type={type}
        id={type}
        name={type}
        value={inputFor}
        placeholder={placeholder}
        required
        onChange={(e) => {
          setInputFor(e);
        }}
      />
    </label>
  );
};
export default FormInputText;
