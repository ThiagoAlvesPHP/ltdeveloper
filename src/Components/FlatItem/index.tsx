// LIB
import * as Ic from 'react-icons/fa';

// STYLE
import * as C from './style';

// TYPE
import { PropsFlat } from '../../types/flat';

function FlatItem({ data }: PropsFlat) {
  return (
    <C.Container>
      <div className="content-flat">
        <h2 className="price">R$ {data.price.toFixed(2).toString().replace(".", ",")}</h2>
        <p className="title">{data.title}</p>
        <p className="type-flat"><span>Tipo de plano: </span> {data.type}</p>
        <div className="list-benefits">
          {
            data.benefits.map((item, index) => (
              <span className="item-benefit" key={index.toString()}><Ic.FaCheck /> {item}</span>
            ))
          }
        </div>
      </div>
      <div className="button-contract">
        Começar Contrato!
      </div>
    </C.Container>
  )
}

export default FlatItem;