import {useEffect} from "react";
import Title from "../components/Global/Title";
import Layout from "../layout/Layout";
import Table from "../components/Global/Table";
import TableContent from "../components/Quotes/TableContent";
import {useDispatch,useSelector} from "react-redux"
import { readQuotes } from "../redux/actions/quote";

export default function Quotes() {
  const quotes = useSelector((state)=>state.quote.data)
  const dispatch = useDispatch()
  console.log(quotes)
  useEffect(() => {
    return dispatch(readQuotes(1))
  }, [dispatch])
  return (
    <Layout>
      <div className="p-8">
        <Title name="Listado de consultas" />
        <button className="bg-blue-600 text-white px-8 ml-4 float-right text-xs py-1 rounded">
          Agregar
        </button>
        <Table>
          <TableContent quotes={quotes.quotes}/>
        </Table>
      </div>
    </Layout>
  );
}
