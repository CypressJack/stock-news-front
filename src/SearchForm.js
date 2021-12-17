import { useState } from "react";
export default function SearchForm(props) {
  const [curTick, setCurTick] = useState();
  return (
    <form>
      <label>
        Stock Ticker
        <input
          type="ticker"
          name="ticker"
          value={curTick}
          onChange={(e) => setCurTick(e.target.value)}
        />
      </label>
      <p onClick={(e) => props.setTicker(curTick)}>Submit</p>
    </form>
  );
}
