import { h, render, Component } from 'preact';
import CanvasFrame from './CanvasFrame';

type Props = {
  word: string,
  guides: boolean
}

export default class Canvas extends Component<Props> {

  render(props: Props, state: any) {
    let frames: preact.JSX.Element[] = [];
    for(let e of props.word.split('')) {
      frames.push(<CanvasFrame character = { e } guides = { props.guides } />);
    }
    return <div className="canvas">{ frames }</div>;
  }
}