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
        <tr>
          <td>Total fats:</td>
          <td>{data.totalFats}</td>
        </tr>
        <tr>
          <td>Cholesterol:</td>
          <td>{data.cholesterol}</td>
        </tr>
      </tbody>
    </table>
  );
}
