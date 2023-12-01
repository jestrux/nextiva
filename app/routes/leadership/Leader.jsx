const Leader = ({ name, position, avatar }) => {
  return (
    <div className={"space-y-2.5"}>
      <div className={"h-72 bg-gray-100 rounded-xl overflow-hidden"}>
        <img
          src={`img/leadership/${avatar}`}
          alt={`nextiva leader: ${name}, ${position}`}
        />
      </div>

      <div className={"space-y-1 tracking-wide"}>
        <h3 className={"font-medium "}>{name}</h3>
        <p className={"text-xs text-white/70 font-light"}>{position}</p>
      </div>
    </div>
  );
};
export default Leader;
