import { h, render, Component } from 'preact';
import persist from './Persist';

type PersistenceType = {
  setItem: (_: string) => void,
  getItem: () => string
};

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

export default class JapaneseTranslationFront extends Component {

  constructor() {
    super();
    this.state = { hintVisible: false, dictionary_form_kana: '{{dictionary_form_kana}}' };
    if (persist.getItem() !== 'displayed front') {
      persist.setItem('display front');
    }
  }

  render(props: any, state: any) {
    return (
      <div>
        <div>{'{{dictionary_form}}'}</div>
        <div>
          { !state.hintVisible && state.dictionary_form_kana !== '' && <button onClick = { this.showHint } >Show kana</button> }
          { state.hintVisible && '{{dictionary_form_kana}}' }
        </div>
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }
}

render(<JapaneseTranslationFront />, card);