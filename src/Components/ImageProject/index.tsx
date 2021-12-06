// STYLE
import * as C from './style';

// TYPE
import { PropsImageProject } from '../../types/carousel';

function ImageProject({ data, className, current, index }: PropsImageProject) {
  return (
    <C.Container className={className} background={data.background}>
      { index === current &&
        <div className="image">
          <div className="bottom">
            <h2 className="title-project">{data.title}</h2>
          </div>
        </div>
      }
    </C.Container>
  )
}

export default ImageProject;