// STYLE
import * as C from './style';

// STYLE
import { PropsContact } from '../../types/contact';

function ContactItem({ data }: PropsContact) {

  return (
    <C.Container>
      <div className="icon-area">
        <div className="icon">
          <data.Icon />
        </div>
      </div>
      <div className="content-contact">
        <p className="title">{data.title}</p>
        { data.link === false ?
          <span className="body">{data.body}</span>
          :
          <a href="https://web.whatsapp.com/send?phone=5573999412514" className="link" target="_blank" rel="noreferrer">{data.body}</a>
        }
      </div>
    </C.Container>
  )
}

export default ContactItem;