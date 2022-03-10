import { Card } from 'Component/Card';
import {data} from 'dataBd/data';
import { useEffect, useState } from 'react';

export const AllPelis = ({seachBoxAll}) => {
    const [seachBox, setSeachBox] = useState("");

    useEffect(() => {
      setSeachBox(seachBoxAll)
    }, [seachBoxAll])
    

    const datas = data?.filter(
        (pelis) =>
          pelis.title.toUpperCase().includes(seachBox.toUpperCase()) ||
          pelis.description.toUpperCase().includes(seachBox.toUpperCase()) ||
          pelis.info.origialTitle.toUpperCase().includes(seachBox.toUpperCase())
      );

  return (
    datas.map((pelis, i) => (
      <Card
        key={pelis.id}
        pelis={{ pelis, i }}
        
      />
    ))
    .reverse()
  )
}
