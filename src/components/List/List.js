import "./list.css";

export const List = ({ activities }) => {
  return (
    <ul>
      {activities.map((activity, index) => (
        <li key={index}>{activity.name}</li>
      ))}
    </ul>
  );
};
