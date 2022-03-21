export default function ItemIngredient({ item }) {
  const { icon, name } = item;

  return (
    <li className="ingredient">
      <span>{icon}</span>
      {name}
    </li>
  );
}
