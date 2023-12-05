export default function SelectInput({ label, name, options }) {
  return (
    <div className={"space-y-2"}>
      <label htmlFor={name} className={"text-xs/none opacity-70"}>
        {label}
      </label>
      <select
        className={
          "border focus:outline-none text-white/70 focus:border-primary text-sm/none py-1"
        }
        name={name}
      >
        <option disabled value={""} className={"bg-red-50"}>
          Select from the list
        </option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
