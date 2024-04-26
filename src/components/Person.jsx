export default function Person({ id, name, image, age }) {
  return (
    <div className="grid grid-cols-[75px_1fr] gap-x-3">
      <img
        src={image}
        alt={name}
        className="object-cover w-[75px] h-[75px] rounded-full"
      />
      <div>
        <h2 className="text-2xl">{name}</h2>
        <p className="mt-3 text-dark-gray">{age}</p>
      </div>
    </div>
  );
}
