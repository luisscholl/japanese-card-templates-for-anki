import { h, render, Component } from 'preact';
import persist from './Persist';
import Canvas from './Canvas';

type Props = {
  showBack?: () => void
}

type State = {
  hintVisible: boolean,
  dictionary_form_kana: string
}

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class TranslationJapaneseWritingFront extends Component<Props, State> {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}'
    };
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: Props, state: State) {
    return (
      <div>
        <div>{'{{translation}}'}</div>
        <Canvas word="{{dictionary_form}}" guides={false} />
        { props.showBack && <div><button onClick={ props.showBack }>Show back</button></div> }
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }
}

render(<TranslationJapaneseWritingFront />, card);