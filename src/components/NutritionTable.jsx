export default function NutritionTable({ data }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Element</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Calories:</td>
          <td>{data.calories}</td>
        </tr>
      </tbody>
    </table>
  );
}
