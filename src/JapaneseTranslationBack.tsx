import { h, render, Component } from 'preact';
import persist from './Persist';
import JapaneseTranslationFront from './JapaneseTranslationFront';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

type State = {
  hintVisible: boolean,
  dictionary_form_kana: string,
  type: string,
  displayFront: boolean
};
class JapaneseTranslationBack extends Component<any, State> {

  constructor() {
    super();
    this.state = { 
      hintVisible: false, 
      dictionary_form_kana: '{{dictionary_form_kana}}',
      type: '{{type}}',
      displayFront: persist.getItem() === 'display front'
    };
    persist.setItem('displayed front')
  }

  render(props: any, state: State) {
    return (
      state.displayFront ?
      <span>
        <JapaneseTranslationFront showBack={ this.showBack }/>
      </span>
      :
      <div>
        <div>{'{{dictionary_form}}'}</div>
        { state.dictionary_form_kana !== '' && <div>{'{{dictionary_form_kana}}'}</div> }
        <div dangerouslySetInnerHTML={ { __html: '{{translation}}' } }></div>
        { state.type === 'ichidan-verb' && <div className="ichidan-verb">Ichidan verb</div> }
        { state.type === 'godan-verb' && <div className="godan-verb">Godan verb</div> }
        { state.type === 'irregular-verb' && <div className="irregular-verb">Irregular verb</div> }
      </div>);
  }

  showHint = () => {
    this.setState({ hintVisible: true });
  }

  showBack = () => {
    this.setState({ displayFront: false });
  }
}

render(<JapaneseTranslationBack />, card);