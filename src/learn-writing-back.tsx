import reveal from './reveal';
import { h, render } from 'preact';

let card: HTMLDivElement = document.getElementsByClassName('card')[0] as HTMLDivElement;

function MyComponent(props: any) {
  return <div>My name is {props.name}.</div>;
}

// Usage
const App = <MyComponent name="John Doe" />;

// Renders: <div>My name is John Doe.</div>
render(App, document.body)