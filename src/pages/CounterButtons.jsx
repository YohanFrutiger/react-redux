import { useDispatch, useSelector  } from "react-redux"
import { increment, decrement, multiply, divide } from "../features/counter"

import {useState} from "react";



export default function CounterButtons() {

  const dispatch = useDispatch();
  const error = useSelector((state) => state.counter.error)
  const [divider, setDivider] = useState(0);

  return (
    <div className="mb-4">
      <p className="text-slate-50 mb-2">Modify the counter value</p>

        <h2 className="text-white">Addition</h2>
      <button
        onClick={() => dispatch(increment(1))}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
      >+1</button>



        <hr />
        <h2 className="text-white">Soustraction</h2>
        <button
        onClick={() => dispatch(decrement(1))}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        >-1</button>

        <hr />
        <h2 className="text-white">Multiplication</h2>
        <button
        onClick={() => dispatch(multiply(10))}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        >x10</button>

        <hr />
        <h2 className="text-white">Division</h2>
        <button
        onClick={() => dispatch(divide(10))}
        className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
        >/10</button>

      <input
          type="number"
          value={divider}
          className="w-10 h-10 text-lg bg-slate-100 rounded text-center text-slate-900 mr-2"
          onChange={(e) => setDivider(Number(e.target.value))}

      />

      <button
          onClick={() => dispatch(divide(divider))}
          className="ml-2 bg-slate-100 text-slate-900 px-3 py-1 rounded">
        Diviser
      </button>

        {error && (
            <p className="text-red-500 mt-2">{error}</p>
        )}

    </div>
  )
}