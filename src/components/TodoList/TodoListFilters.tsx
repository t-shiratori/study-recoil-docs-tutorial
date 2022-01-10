import { useRecoilState } from "recoil";
import { todoListFilterState, TFilterValue } from "../../recoil/todoList";

export function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoListFilterState);

  const updateFilter = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("value:", value);
    setFilter(value as TFilterValue);
  };

  return (
    <>
      Filter:
      <select value={filter} onChange={updateFilter}>
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </>
  );
}
