import { h, render, Component } from 'preact';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

class JapaneseTranslationBack extends Component {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}',
      type: '{{type}}'
    };
  }

  render(props: any, state: any) {
    return (
      <div>
        <div>{'{{dictionary_form}}'}</div>
        { state.dictionary_form_kana !== '' && <div>{'{{dictionary_form_kana}}'}</div> }
        <div>{'{{translation}}'}</div>
        { state.type === 'ichidan-verb' && <div className="ichidan-verb">Ichidan verb</div> }
        { state.type === 'godan-verb' && <div className="godan-verb">Godan verb</div> }
        { state.type === 'irregular-verb' && <div className="irregular-verb">Irregular verb</div> }
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }
}

render(<JapaneseTranslationBack />, card);