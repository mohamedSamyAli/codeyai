function PotentailBox({ title, desc }) {
  return (
    <div className="flex-col">
      <h4 className="text-lg font-semibold mb-[15px] uppercase">{title}</h4>
      <p className="text-sm font-normal">{desc}</p>
    </div>
  );
}

export default PotentailBox;
