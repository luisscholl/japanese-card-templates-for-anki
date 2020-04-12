import { h, render, Component } from 'preact';
import persist from './Persist';

type Props = {
  showBack?: () => void
}

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class JapaneseTranslationFront extends Component<Props, any> {

  constructor() {
    super();
    this.state = { hintVisible: false, dictionary_form_kana: '{{dictionary_form_kana}}' };
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: Props, state: any) {
    return (
      <div>
        <div>{'{{dictionary_form}}'}</div>
        <div>
          { !state.hintVisible && state.dictionary_form_kana !== '' && <button onClick = { this.showHint } >Show kana</button> }
          { state.hintVisible && '{{dictionary_form_kana}}' }
        </div>
        { props.showBack && <div><button onClick={ props.showBack }>Show back</button></div> }
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }
}

render(<JapaneseTranslationFront />, card);