import { Card } from "./Card"


export const SlipePelis = ({datas}) => {
  return (<div className="slipe">
    {datas.map((pelis, i) => (
          <Card
            key={pelis.id}
            
            pelis={{ pelis, i }}
           
          />
        ))
        .reverse()
        }
        </div>
  )
}
