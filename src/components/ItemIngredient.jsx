export default function ItemIngredient({ item }) {
  const { icon, name } = item;

  return (
    <li className="item-ingredient">
      <span>{icon}</span>
      {name}
    </li>
  );
}
