import { h, render, Component } from 'preact';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

class JapaneseTranslationFront extends Component {

  constructor() {
    super();
    this.state = { hintVisible: false, dictionary_form_kana: '{{dictionary_form_kana}}' };
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