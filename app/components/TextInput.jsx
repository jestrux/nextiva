export default function TextInput({ label, name, placeholder }) {
  return (
    <div className={"space-y-2"}>
      <label htmlFor={name} className={"text-xs/none opacity-70"}>
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className={
          "border focus:outline-none placeholder:font-light focus:border-primary text-sm/none py-1"
        }
        name={name}
      />
    </div>
  );
}
